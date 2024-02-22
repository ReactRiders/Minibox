import { application_link } from '@/mock';
import { TLocale } from '@/types';

import React from 'react';

import { Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

interface IFooter {
  lang: TLocale;
}

export const About_applications = ({ lang }: IFooter) => {
  const t = useTranslations('footer-link');

  return (
    <div className="hidden md:flex gap-2.5 -mx-4 bg-gray-100 mt-6 lg:mt-32 pb-6">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="font-bold text-gray-950 text-4xl xl:text-3xl pt-8 max-w-xl">
            {t('store_application')}
          </h3>
          <p className="text-gray-500 font-normal text-base leading-6 max-w-sm py-2">
            {t('about_application')}
          </p>
          <div className="flex mt-[8px] flex-wrap items-center gap-[16px] ">
            {application_link.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                >
                  <Image
                    isZoomed
                    width={140}
                    height={50}
                    alt="NextUI Fruit Image with Zoom"
                    src={item.icon}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="lg:-mt-16">
          <Image
            className="rounded-none"
            alt="NextUI Fruit Image with Zoom"
            src="https://mediapark.uz/_next/image?url=%2Fimages%2Fstoreimg.png&w=640&q=75"
          />
        </div>
      </div>
    </div>
  );
};
