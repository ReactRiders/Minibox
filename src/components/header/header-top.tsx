'use client';

import { LocaleSwitcher } from '@/components';
import { call_icon, location_icon } from '@/mock';
import { headerJoinData } from '@/mock/header.data';
import { IHeaderJoin, IHeaderTop } from '@/types';

import { Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

export const HeaderTop = ({ data }: { data: IHeaderTop[] }) => {
  const t = useTranslations('header');

  return (
    <div className="hidden lg:flex items-center justify-between gap-7">
      <div className="flex items-center gap-7 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <p>{t('join')}</p>
          {headerJoinData.map((el: IHeaderJoin) => (
            <Image
              className="w-5 h-5 cursor-pointer"
              key={el?.id}
              src={el.icon?.src}
              alt=""
            />
          ))}
        </div>
        <a
          href="tel:+998990149998"
          className="flex items-center gap-1"
        >
          <Image
            src={call_icon.src}
            alt="call icon"
            className="w-4"
          />
          <span>+998 (99) 014 99 98</span>
        </a>
        <a
          className="flex items-center gap-1"
          target="_blank"
          href="https://https://www.google.com/maps/d/viewer?mid=1IFDOAXA009j9bU8x_h6QYVVN7Ws&hl=en_US&ll=41.282700477834894%2C69.27936669999998&z=11"
        >
          <Image
            src={location_icon.src}
            alt="call icon"
            className="w-4"
          />
          <span>Tashkent</span>
        </a>
      </div>
      <div className="flex items-center flex-1 gap-3 justify-between max-w-xl  text-xs text-gray-600">
        {data.map(({ key, url }, idx) => (
          <p key={idx}>{t(key)}</p>
        ))}
        <LocaleSwitcher />
      </div>
    </div>
  );
};
