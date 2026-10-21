import { useEffect } from 'react';

import aboutStyles from '../components/Home/AboutApp/AboutApp.module.css';

/**
 * Live Framer scroll model, which the baked WAAPI timelines do not reproduce:
 * - Nav compacts with a spring once the page has scrolled 160px, then holds.
 * - Hero, device mockups, and illustrations interpolate while the element
 *   travels from "start at viewport end" to "end at viewport end".
 */

const NAV_SCROLL = 160;
const RISE_IDS = ['r5u', 'r8j', 'r90', 'r21h', 'r23v', 'rew'];

type Spring = { value: number; velocity: number; ready: boolean };

function spring(): Spring {
  return { value: 0, velocity: 0, ready: false };
}

function stepSpring(
  state: Spring,
  target: number,
  dt: number,
  stiffness: number,
  damping: number,
  reduced: boolean
) {
  if (!state.ready || reduced) {
    state.value = target;
    state.velocity = 0;
    state.ready = true;
    return;
  }
  const acceleration =
    -stiffness * (state.value - target) - damping * state.velocity;
  state.velocity += acceleration * dt;
  state.value += state.velocity * dt;
}

function documentTop(element: HTMLElement) {
  let top = 0;
  let node: HTMLElement | null = element;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

/** Framer onInView offset: ["start end", "end end"]. */
function viewProgress(element: HTMLElement) {
  const height = element.offsetHeight;
  if (height <= 0) return null;
  const progress =
    (window.scrollY + window.innerHeight - documentTop(element)) / height;
  return Math.min(1, Math.max(0, progress));
}

function mix(from: number, to: number, progress: number) {
  return from + (to - from) * progress;
}

function dropAnimations(element: HTMLElement) {
  // Baked WAAPI timelines (including the pre-hydration bootstrap) use fill:both
  // and override inline scroll poses. These elements have no other animations.
  for (const animation of element.getAnimations()) animation.cancel();
}

function writeTransform(
  element: HTMLElement,
  pose: { y: number; scale: number; rotateX: number; perspective: boolean }
) {
  const settled =
    Math.abs(pose.y) < 0.05 &&
    Math.abs(pose.scale - 1) < 0.0008 &&
    Math.abs(pose.rotateX) < 0.05;
  // Inline none must win over baked CSS transforms such as scale(1.29064).
  if (settled) {
    element.style.transform = 'none';
    return;
  }
  const parts: string[] = [];
  if (pose.perspective) parts.push('perspective(1000px)');
  if (Math.abs(pose.y) >= 0.05)
    parts.push(`translateY(${pose.y.toFixed(3)}px)`);
  if (Math.abs(pose.scale - 1) >= 0.0008)
    parts.push(`scale(${pose.scale.toFixed(5)})`);
  if (Math.abs(pose.rotateX) >= 0.05)
    parts.push(`rotateX(${pose.rotateX.toFixed(4)}deg)`);
  element.style.transformOrigin = '50% 50% 0px';
  element.style.transform = parts.join(' ');
}

function clearNav(nav: HTMLElement, inner: HTMLElement) {
  nav.style.width = '';
  nav.style.paddingLeft = '';
  nav.style.paddingRight = '';
  nav.style.transform = '';
  nav.style.transformOrigin = '';
  inner.style.paddingLeft = '';
  inner.style.backgroundColor = '';
  inner.style.backdropFilter = '';
  inner.style.removeProperty('--nav-border-alpha');
}

export function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const desktopQuery = window.matchMedia('(min-width: 1200px)');
    const narrowQuery = window.matchMedia('(max-width: 809px)');
    const poses = new WeakMap<HTMLElement, Spring>();
    let navCompact = desktopQuery.matches && window.scrollY >= NAV_SCROLL;
    let navScale = 1;
    let navScaleVelocity = 0;
    let navScaleOrigin = 1;
    let frame = 0;
    let last = 0;

    const poseSpring = (element: HTMLElement) => {
      let state = poses.get(element);
      if (!state) {
        state = spring();
        poses.set(element, state);
      }
      return state;
    };

    let follow = false;
    const watch = (state: Spring, target: number) => {
      if (
        Math.abs(state.value - target) > 0.001 ||
        Math.abs(state.velocity) > 0.02
      )
        follow = true;
    };

    const render = (now: number) => {
      frame = 0;
      follow = false;
      const dt = Math.min(0.032, last ? (now - last) / 1000 : 0.016);
      last = now;

      const nav = document.querySelector<HTMLElement>(
        "nav[data-framecoded-motion='r11']"
      );
      const inner = document.querySelector<HTMLElement>(
        "[data-framecoded-motion='r10']"
      );
      if (nav && inner) {
        dropAnimations(nav);
        dropAnimations(inner);
        const compact = desktopQuery.matches && window.scrollY >= NAV_SCROLL;
        const modeChanged = compact !== navCompact;
        if (modeChanged) {
          navScaleOrigin = compact ? 1072 / 834 : 834 / 1072;
          navScale = reduced ? 1 : navScaleOrigin;
          navScaleVelocity = 0;
          navCompact = compact;
        }
        if (!modeChanged && !reduced && Math.abs(navScale - 1) > 0.0008) {
          const acceleration = -180 * (navScale - 1) - 18 * navScaleVelocity;
          navScaleVelocity += acceleration * dt;
          navScale += navScaleVelocity * dt;
        } else if (!modeChanged) {
          navScale = 1;
          navScaleVelocity = 0;
        }
        if (Math.abs(navScale - 1) > 0.001 || Math.abs(navScaleVelocity) > 0.02)
          follow = true;
        const settledOpen = !compact && Math.abs(navScale - 1) < 0.002;
        if (!desktopQuery.matches || settledOpen) {
          clearNav(nav, inner);
        } else {
          const fade = Math.min(
            1,
            Math.max(0, (navScale - navScaleOrigin) / (1 - navScaleOrigin))
          );
          nav.style.width = compact ? '834px' : '1072px';
          nav.style.paddingLeft = compact ? '0px' : '16px';
          nav.style.paddingRight = compact ? '0px' : '16px';
          inner.style.paddingLeft = compact ? '24px' : '8px';
          nav.style.transformOrigin = '50% 50% 0px';
          nav.style.transform =
            Math.abs(navScale - 1) < 0.002 ? 'none' : `scale(${navScale}, 1)`;
          inner.style.backgroundColor = `rgba(255, 255, 255, ${mix(compact ? 0 : 0.25, compact ? 0.25 : 0, fade)})`;
          inner.style.backdropFilter = `blur(${mix(compact ? 0 : 10, compact ? 10 : 0, fade)}px)`;
          inner.style.setProperty(
            '--nav-border-alpha',
            String(mix(compact ? 0 : 0.15, compact ? 0.15 : 0, fade))
          );
        }
      }

      const hero = document.querySelector<HTMLElement>(
        "[data-framecoded-motion='r3b']"
      );
      if (hero) {
        dropAnimations(hero);
        const progress = viewProgress(hero);
        if (progress != null) {
          const state = poseSpring(hero);
          stepSpring(state, progress, dt, 400, 100, reduced);
          watch(state, progress);
          const narrow = narrowQuery.matches;
          const fromY = narrow ? -32 : -80;
          const fromScale = narrow ? 1 : 0.8;
          const fromRotate = 20;
          writeTransform(hero, {
            perspective: true,
            y: mix(fromY, 0, state.value),
            scale: mix(fromScale, 1, state.value),
            rotateX: mix(fromRotate, 0, state.value),
          });
        }
      }

      const mockups = document.querySelectorAll<HTMLElement>(
        `.${aboutStyles.mobileImg}, .${aboutStyles.webAppImg}, .${aboutStyles.mobileImg2}, .${aboutStyles.webAppImg2}`
      );
      mockups.forEach((element) => {
        dropAnimations(element);
        const progress = viewProgress(element);
        if (progress == null) return;
        const state = poseSpring(element);
        stepSpring(state, progress, dt, 150, 37, reduced);
        watch(state, progress);
        writeTransform(element, {
          perspective: false,
          y: 0,
          scale: mix(1.3, 1, state.value),
          rotateX: 0,
        });
      });

      for (const id of RISE_IDS) {
        document
          .querySelectorAll<HTMLElement>(`[data-framecoded-motion='${id}']`)
          .forEach((element) => {
            dropAnimations(element);
            const progress = viewProgress(element);
            if (progress == null) return;
            const state = poseSpring(element);
            stepSpring(state, progress, dt, 150, 37, reduced);
            watch(state, progress);
            writeTransform(element, {
              perspective: false,
              y: mix(60, 0, state.value),
              scale: 1,
              rotateX: 0,
            });
          });
      }
      if (!follow) last = 0;
    };

    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame((now) => {
          render(now);
          if (follow) schedule();
        });
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
      const nav = document.querySelector<HTMLElement>(
        "nav[data-framecoded-motion='r11']"
      );
      const inner = document.querySelector<HTMLElement>(
        "[data-framecoded-motion='r10']"
      );
      if (nav && inner) clearNav(nav, inner);
    };
  }, []);

  return null;
}
