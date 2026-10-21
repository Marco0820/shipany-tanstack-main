import { useState } from 'react';

import { LocaleSelector } from '@/components/locale-selector';

import Link from '../../../ui/Link';
import styles from './DesktopPrimary.module.css';

export function DesktopPrimary() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={
        menuOpen
          ? `${styles.desktopPrimary} ${styles.menuOpen}`
          : styles.desktopPrimary
      }
      data-framecoded-motion={'r11'}
    >
      <div
        className={styles.dreelio}
        data-border={'true'}
        data-framecoded-motion={'r10'}
      >
        <div className={styles.logoWrap} data-framecoded-motion={'r7'}>
          <div className={styles.dreelio2}>
            <Link
              href={'/'}
              className={styles.default_}
              data-framer-page-link-current={'true'}
            >
              <div className={styles.logoContainer} aria-hidden={'true'}>
                <div className={styles.div}>
                  <span
                    className={styles.icon}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg viewBox="0 0 24 24" preserveAspectRatio="none" width="100%" height="100%" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg-123642520_1246" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                </div>
              </div>
              <div className={styles.freelio}>
                <p className={styles.dreelio3}>Dreelio</p>
              </div>
            </Link>
          </div>
          <div className={styles.localeBesideLogo}>
            <LocaleSelector className="size-9 text-[#1a1615] hover:bg-white/50" />
          </div>
          <div className={styles.div3}>
            <div
              className={styles.close}
              data-highlight={'true'}
              tabIndex={0}
              role="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setMenuOpen((open) => !open);
                }
              }}
            >
              <div className={styles.icon2}>
                <div className={styles.bottom}></div>
                <div className={styles.top}></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.links}
          data-framecoded-motion={'rs'}
          onClick={() => setMenuOpen(false)}
        >
          <div className={styles.localeBesideMenu}>
            <LocaleSelector className="size-9 text-[#1a1615] hover:bg-white/50" />
          </div>
          <div className={styles.features2}>
            <Link
              href={'/#features'}
              className={styles.default_2}
              data-border={'true'}
              data-highlight={'true'}
              tabIndex={0}
              data-framecoded-trigger={'h16cr0p3'}
              data-framecoded-state={'h16cr0p3sroot'}
            >
              <div className={styles.products}>
                <p className={styles.features3}>Features</p>
              </div>
            </Link>
          </div>
          <div className={styles.benefits2}>
            <Link
              href={'/#benefits'}
              className={styles.default_3}
              data-border={'true'}
              data-highlight={'true'}
              tabIndex={0}
              data-framecoded-trigger={'h1gcmedo'}
              data-framecoded-state={'h1gcmedosroot'}
            >
              <div className={styles.products2}>
                <p className={styles.benefits3}>Benefits</p>
              </div>
            </Link>
          </div>
          <div className={styles.pricing2}>
            <Link
              href={'/#pricing'}
              className={styles.default_4}
              data-border={'true'}
              data-highlight={'true'}
              tabIndex={0}
              data-framecoded-trigger={'h1cpb1tq'}
              data-framecoded-state={'h1cpb1tqsroot'}
            >
              <div className={styles.products3}>
                <p className={styles.pricing3}>Pricing</p>
              </div>
            </Link>
          </div>
          <div className={styles.blog2}>
            <Link
              href={'/blog'}
              className={styles.default_5}
              data-border={'true'}
              data-highlight={'true'}
              tabIndex={0}
              data-framecoded-trigger={'h1ibx2z7'}
              data-framecoded-state={'h1ibx2z7sroot'}
            >
              <div className={styles.products4}>
                <p className={styles.blog3}>Blog</p>
              </div>
            </Link>
          </div>
          <div className={styles.contactUs}>
            <Link
              href={'/contact-us'}
              className={styles.default_6}
              data-border={'true'}
              data-highlight={'true'}
              tabIndex={0}
              data-framecoded-trigger={'h12679ac'}
              data-framecoded-state={'h12679acsroot'}
            >
              <div className={styles.products5}>
                <p className={styles.contactUs2}>Contact Us</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.tryDreelioFree} data-framecoded-motion={'rz'}>
          <Link
            href={'/contact-us'}
            className={styles.primary}
            data-border={'true'}
            data-highlight={'true'}
            tabIndex={0}
            data-framecoded-trigger={'h12g6uzb'}
            data-framecoded-state={'h12g6uzbsroot'}
          >
            <div
              className={styles.textContainer}
              data-framecoded-state={'h12g6uzbs0'}
            >
              <div
                className={styles.getTemplate}
                data-framecoded-state={'h12g6uzbs0_0'}
              >
                <p className={styles.tryDreelioFree2}>Try Dreelio free</p>
              </div>
              <div
                className={styles.getTemplate2}
                data-framecoded-state={'h12g6uzbs0_1'}
              >
                <p className={styles.tryDreelioFree3}>Try Dreelio free</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
