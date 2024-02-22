import {
  laptop_icon,
  phone_icon,
  refrigerator_icon,
  tv_icon,
  vacuumCleaner_icon,
  washingMachine_icon,
} from '@/mock/index';

export interface ISlide {
  url: string;
}

export interface ISliderBrands {
  url: string;
  title: string;
  description: string;
}

export interface IPopularCategory {
  icon: string;
  text: string;
}

export const popularBrandData: ISlide[] = [
  {
    url: 'https://cdn.mediapark.uz/images/39cf5026-f1e8-4f56-8f3e-91e245a07b99_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-21.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/3ef87389-ac93-4054-8cb4-3acc6bea3269_lg.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/39cf5026-f1e8-4f56-8f3e-91e245a07b99_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-21.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
];

export const bannerData: ISlide[] = [
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
];

export const brandData: ISliderBrands[] = [
  {
    url: 'https://mediapark.uz/svg/tool.svg',
    title: "Muddatli to'lovga sotib olish",
    description:
      'Respublika boʻyicha jami 38 ta Mediapark savdo nuqtasi boʻlib, siz oʻzingizga eng yaqin doʻkondan xarid qilishingiz mumkin.',
  },
  {
    url: 'https://mediapark.uz/svg/tool.svg',
    title: "Butun O'zbekiston bo'ylab doʻkonlar",
    description:
      'Respublika boʻyicha jami 38 ta Mediapark savdo nuqtasi boʻlib, siz oʻzingizga eng yaqin doʻkondan xarid qilishingiz mumkin.',
  },
  {
    url: 'https://mediapark.uz/svg/tool.svg',
    title: "Butun O'zbekiston bo'ylab doʻkonlar",
    description:
      'Respublika boʻyicha jami 38 ta Mediapark savdo nuqtasi boʻlib, siz oʻzingizga eng yaqin doʻkondan xarid qilishingiz mumkin.',
  },
  {
    url: 'https://mediapark.uz/svg/tool.svg',
    title: "Butun O'zbekiston bo'ylab doʻkonlar",
    description:
      'Respublika boʻyicha jami 38 ta Mediapark savdo nuqtasi boʻlib, siz oʻzingizga eng yaqin doʻkondan xarid qilishingiz mumkin.',
  },
  {
    url: 'https://mediapark.uz/svg/tool.svg',
    title: "Butun O'zbekiston bo'ylab doʻkonlar",
    description:
      'Respublika boʻyicha jami 38 ta Mediapark savdo nuqtasi boʻlib, siz oʻzingizga eng yaqin doʻkondan xarid qilishingiz mumkin.',
  },
  {
    url: 'https://mediapark.uz/svg/tool.svg',
    title: "Butun O'zbekiston bo'ylab doʻkonlar",
    description:
      'Respublika boʻyicha jami 38 ta Mediapark savdo nuqtasi boʻlib, siz oʻzingizga eng yaqin doʻkondan xarid qilishingiz mumkin.',
  },
  {
    url: 'https://mediapark.uz/svg/tool.svg',
    title: "Butun O'zbekiston bo'ylab doʻkonlar",
    description:
      'Respublika boʻyicha jami 38 ta Mediapark savdo nuqtasi boʻlib, siz oʻzingizga eng yaqin doʻkondan xarid qilishingiz mumkin.',
  },
];

export const popularCategoriesData: IPopularCategory[] = [
  {
    icon: 'https://cdn.mediapark.uz/imgs/02ccd425-36d9-41d7-9718-c74e52bbe13a_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C5.webp',
    text: 'Smartfonlar',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/27925aad-3b38-4ca6-898e-48927c51bd20_1_@1300.webp',
    text: 'iPhone',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/061f70c3-d187-45ab-9552-46f26f15ae46.webp',
    text: 'Windows',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/e309f284-48b3-460b-a5fe-9d50ea99c21f_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C8.webp',
    text: 'Planshetlar',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/061f70c3-d187-45ab-9552-46f26f15ae46.webp',
    text: 'Windows',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/27925aad-3b38-4ca6-898e-48927c51bd20_1_@1300.webp',
    text: 'iPhone',
  },
];
