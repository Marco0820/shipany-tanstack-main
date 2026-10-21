import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { Home } from '@/components/dreelio/components/Home';
import {
  interactionDefinitions,
  motionDefinitions,
} from '@/components/dreelio/components/Home/Home/Home.motion';
import { MotionRuntime } from '@/components/dreelio/ui/MotionRuntime';

const TITLE = 'Dreelio - Framer Website Template for Founders';
const DESCRIPTION =
  'Simple, modern, and sleek. The Dreelio template is perfect for app creators, founders, and SaaS businesses who want a clean, eye-catching website that will convert visitors into customers.';

function HomePage() {
  return (
    <>
      <Home />
      <MotionRuntime
        definitions={motionDefinitions}
        interactions={interactionDefinitions}
      />
    </>
  );
}

export const Route = createFileRoute('/')({
  loader: () => ({ locale: getLocale() }),
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    const urlFor = (loc: string) =>
      localizeUrl(`${envConfigs.app_url}/`, { locale: loc as any }).href;
    const image = `${envConfigs.app_url}/dreelio/og.png`;
    return {
      meta: [
        { title: TITLE },
        { name: 'description', content: DESCRIPTION },
        { property: 'og:title', content: TITLE },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: urlFor(locale) },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: TITLE },
        { name: 'twitter:description', content: DESCRIPTION },
        { name: 'twitter:image', content: image },
      ],
      links: [
        { rel: 'canonical', href: urlFor(locale) },
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: urlFor(loc),
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: urlFor('en') },
      ],
    };
  },
  component: HomePage,
});
