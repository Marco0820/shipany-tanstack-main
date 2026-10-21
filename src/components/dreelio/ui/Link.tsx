import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { localizeHref } from '@/paraglide/runtime.js';

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children?: ReactNode;
};

/** Locale-free internal paths stay compatible with the app's /zh prefix. */
function localizeInternal(href: string): string {
  const hashIndex = href.indexOf('#');
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';
  const path = (hashIndex >= 0 ? href.slice(0, hashIndex) : href) || '/';
  const [pathname, search = ''] = path.split('?');
  const localized = localizeHref(pathname || '/');
  return `${localized}${search ? `?${search}` : ''}${hash}`;
}

export default function Link({ href, ...rest }: LinkProps) {
  const resolved = /^(https?:|mailto:|tel:)/i.test(href)
    ? href
    : localizeInternal(href);
  return <a href={resolved} {...rest} />;
}
