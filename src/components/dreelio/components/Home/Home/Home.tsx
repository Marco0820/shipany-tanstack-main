import { useLayoutEffect } from 'react';

import styles from './Home.module.css';

import '../../../dreelio-base.css';

import { HomeCopy } from '../../../ui/HomeCopy';
import { Image } from '../../../ui/Image';
import { ScrollEffects } from '../../../ui/ScrollEffects';
import { Sprite } from '../../../ui/Sprite';
import { AboutApp } from '../AboutApp';
import { Benefits } from '../Benefits';
import { Blog } from '../Blog';
import { Community2 } from '../Community2';
import { DesktopPrimary } from '../DesktopPrimary';
import { Features } from '../Features';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { LogosTicker } from '../LogosTicker';
import { Pricing22 } from '../Pricing22';
import { Reviews } from '../Reviews';

export function Home() {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    // MotionRuntime treats this as the signal to run the page's inertial scroll.
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = previous;
    };
  }, []);

  return (
    <div className={`${styles.div230} dreelio-root`} id={'main'}>
      <Sprite />
      <HomeCopy />
      <ScrollEffects />
      <section className={styles.section} data-layout-template={'true'}>
        <div className={styles.div10}>
          <div className={styles.div9}>
            <DesktopPrimary />
          </div>
        </div>
        <div className={styles.div204}>
          <main className={styles.trustedBy7}>
            <Hero />
            <div className={styles.workFromAnywhere}>
              <LogosTicker />
              <div className={styles.workFromAnywhere2}>
                <AboutApp />
              </div>
              <Features />
              <div className={styles.builtForFreelancers}>
                <Benefits />
              </div>
              <div className={styles.div144}>
                <Reviews />
              </div>
              <div className={styles.simplePlans}>
                <Pricing22 />
              </div>
              <div className={styles.ideasToLevel}>
                <Blog />
              </div>
              <div className={styles.stayInThe}>
                <Community2 />
              </div>
            </div>
          </main>
          <div className={styles.div203}></div>
        </div>
        <div className={styles.div205} id={'overlay'}></div>
        <div className={styles.div206}></div>
        <Footer />
        <div className={styles.div219}>
          <div className={styles.cloudImageLeft} data-framecoded-motion={'rxa'}>
            <div className={styles.div218}>
              <Image
                className={styles.image94}
                src={'/assets/iR8Ma0AjH7EaIAPThF3xcp9l3bM-e5c5263dbe.png'}
                alt={'Image94'}
                width={2048}
                height={1117}
                srcSet={
                  '/assets/iR8Ma0AjH7EaIAPThF3xcp9l3bM-e453688339.png 512w,/assets/iR8Ma0AjH7EaIAPThF3xcp9l3bM-e56b34230b.png 1024w,/assets/iR8Ma0AjH7EaIAPThF3xcp9l3bM-e5c5263dbe.png 2048w'
                }
                sizes={
                  '(min-width: 1200px) max(calc(260 * 1.8335), 480px), (min-width: 810px) and (max-width: 1199.98px) max(calc(260 * 1.8335), 372px), (max-width: 809.98px) 280px'
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.div221}>
          <div
            className={styles.cloudImageRight}
            data-framecoded-motion={'rxe'}
          >
            <div className={styles.div220}>
              <Image
                className={styles.image95}
                src={'/assets/qazH0744I2w9AnpfmUJIze7g-e0edfe9dad.png'}
                alt={'Image95'}
                width={2531}
                height={1380}
                srcSet={
                  '/assets/qazH0744I2w9AnpfmUJIze7g-4ed978f764.png 512w,/assets/qazH0744I2w9AnpfmUJIze7g-990f4b692a.png 1024w,/assets/qazH0744I2w9AnpfmUJIze7g-57d42cd608.png 2048w,/assets/qazH0744I2w9AnpfmUJIze7g-e0edfe9dad.png 2531w'
                }
                sizes={
                  '(min-width: 1200px) max(calc(260 * 1.8339), 480px), (min-width: 810px) and (max-width: 1199.98px) max(calc(260 * 1.8339), 372px), (max-width: 809.98px) 280px'
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.gradientBg}></div>
      </section>
    </div>
  );
}
