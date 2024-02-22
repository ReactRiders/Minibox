'use client';

import { IPageParams } from '@/types';

import { useTranslations } from 'next-intl';

interface IFavouritesPage extends IPageParams {
}

export const FavouritesPage = ({ lang }: IFavouritesPage) => {
  const t = useTranslations('header-links');
  return <section>
    <h1>Favourites page</h1>
  </section>;
};
