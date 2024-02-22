import { ISlide } from '@/mock/slider.data';

import { FC } from 'react';

import { Image } from '@nextui-org/react';

export const Banner: FC<ISlide> = (props) => {
  const { url } = props;
  return (
    <div className="w-full h-full">
      <Image
        className="w-full h-full rounded-md"
        src={url}
        alt="banner-img"
      />
    </div>
  );
};
