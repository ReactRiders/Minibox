import { i18n } from '@/i18n.config';

import { ReactNode } from 'react';

import Link from 'next/link';

interface ICustomLink {
  href: string;
  lang: string;
  children: ReactNode;
  [key: string]: any;
}

export const CustomLink = ({ href, lang, ...props }: ICustomLink) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return (
    <Link
      href={path}
      {...props}
    />
  );
};
