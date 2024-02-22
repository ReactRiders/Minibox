import { ISliderBrands } from '@/mock/slider.data';

import React, { FC } from 'react';

import { Image } from '@nextui-org/react';

export const BrandCard: FC<ISliderBrands> = ({ url, title, description }) => {
  return (
    <div className="rounded-xl border p-5">
      <Image
        alt="NextUI Fruit Image with Zoom"
        src={url}
        className={title && description ? 'w-14 h-14 bg-pink-100 py-3' : ''}
      />
      {title && description && (
        <div className="py-3">
          <p className="py-1 font-[700] tablet:text-[16px] text-[14px] w-full">{title}</p>
          <p className="text-[13px] font-[400] text-gray leading-[150%] line-clamp-4">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
