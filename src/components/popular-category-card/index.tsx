import { FC } from 'react';

import { Image } from '@nextui-org/react';

interface IPopularCategoryCard {
  text: string;
  icon: { src: string };
}

export const PopularCategoryCard: FC<IPopularCategoryCard> = ({ text = 'Televizorlar', icon }) => {
  return (
    <div className="flex min-w-52 gap-3 p-3 h-full items-center border rounded-xl">
      <div className="w-14 h-14 flex items-center justify-center bg-pink-100 p-3 rounded-xl">
        <Image
          className="rounded-none"
          src={icon.src}
          alt="popular-category icon"
        />
      </div>
      <p className="line-clamp-2 leading-5 font-semibold text-muted">{text}</p>
    </div>
  );
};
