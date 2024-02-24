import { ISlide } from '@/mock/slider.data';

import { FC } from 'react';

export const MiniBanner: FC<ISlide> = (props) => {
  const { url } = props;
  return <div className="w-full h-full"></div>;
};
