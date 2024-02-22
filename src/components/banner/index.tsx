import { ISlide } from '@/mock/slider.data';

import { FC } from 'react';

import { Image } from '@nextui-org/react';

export const Banner: FC<ISlide> = (props) => {
  const { url } = props;
  return (
    <div className="w-full h-full">
      <Image
        className="rounded-none w-full h-full"
        src={url}
        alt="banner-img"
      />
    </div>
  );
};
