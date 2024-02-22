'use client';

import { IPageParams } from '@/types';

import { useTranslations } from 'next-intl';

interface IAboutPage extends IPageParams {}

export const AboutPage = ({ lang }: IAboutPage) => {
  const t = useTranslations('header-links');
  return <section>{t('about_us')}</section>;
};
