'use client';

import { IPageParams } from '@/types';

import { useTranslations } from 'next-intl';

interface IProfilePage extends IPageParams {}

export const ProfilePage = ({ lang }: IProfilePage) => {
  const t = useTranslations('header-links');
  return (
    <section>
      <h1>Profile page</h1>
    </section>
  );
};
