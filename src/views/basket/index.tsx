'use client';

import { IPageParams } from '@/types';

import { useTranslations } from 'next-intl';

interface IBasketPage extends IPageParams {}

export const BasketPage = ({ lang }: IBasketPage) => {
  const t = useTranslations('header-links');
  return (
    <section>
      <h1>Basket page</h1>
    </section>
  );
};
