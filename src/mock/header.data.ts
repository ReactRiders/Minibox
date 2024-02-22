import { basket_icon, heart_icon, user_icon, home_icon } from '@/mock';
import { IHeaderTop, ITopCategories } from '@/types';

interface IHeaderLink {
  key: string;
  icon: { src: string };
  classes?: string;
  url?: string;
}

export interface IHeaderData {
  headerTop: IHeaderTop[];
  headerLink: IHeaderLink[];
}

export const headerData: IHeaderData = {
  headerTop: [
    { key: 'about_us', url: '/' },
    { key: 'delivery', url: '/' },
    { key: 'shop', url: '/' },
    { key: 'contact', url: '/' },
  ],
  headerLink: [
    { key: 'home', icon: home_icon, url: '/', classes: 'lg:hidden active' },
    { key: 'favourites', icon: heart_icon, url: '/favourites' },
    { key: 'basket', icon: basket_icon, url: '/basket' },
    { key: 'signIn', icon: user_icon, url: '/profile' },
  ],
};
