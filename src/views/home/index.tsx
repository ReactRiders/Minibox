'use client';

import {
  About_applications,
  Banner,
  BrandCard,
  PopularCategoryCard,
  ProductCard,
  Slider,
} from '@/components';
import { productData, popularCategoriesData, bannerData } from '@/mock';
import { brandData, popularBrandData } from '@/mock/slider.data';
import { IPageParams } from '@/types';

interface IHomePage extends IPageParams {}

export const HomePage = ({ lang }: IHomePage) => {
  return (
    <>
      <Slider
        component={Banner}
        childClass=""
        sliderData={bannerData}
        items={{ desktop: 1, tablet: 1, mobile: 1 }}
      />
      <p className="text-2xl mt-4 mb-6 font-bold">Ommabop kategoriyalar</p>
      <div className="flex gap-3 hide-scroll overflow-x-auto">
        {popularCategoriesData?.map((item, idx) => (
          <PopularCategoryCard
            key={idx}
            {...item}
          />
        ))}
      </div>
      <Slider
        title="Yangiliklar"
        titleClass="text-2xl font-bold"
        component={ProductCard}
        sliderData={productData}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
      <Slider
        title="Xitlar"
        titleClass="text-2xl font-bold"
        component={ProductCard}
        sliderData={productData}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
      <Slider
        component={Banner}
        childClass=""
        parentClass="rounded-3xl overflow-hidden my-6"
        sliderData={bannerData}
        items={{ desktop: 1, tablet: 1, mobile: 1 }}
      />
      <Slider
        title="Ommabop brendlar"
        childClass="px-1.5"
        titleClass="text-2xl font-bold"
        component={BrandCard}
        sliderData={popularBrandData}
        items={{ desktop: 6, tablet: 3, mobile: 2 }}
      />
      <Slider
        title="Nega aynan Mediapark?"
        childClass="px-1.5"
        titleClass="text-2xl font-bold"
        component={BrandCard}
        sliderData={brandData}
        items={{ desktop: 6, tablet: 3, mobile: 2 }}
      />
      <About_applications lang={lang} />
    </>
  );
};
