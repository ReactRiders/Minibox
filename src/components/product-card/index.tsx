'use client';

import HeartIcon from '@/components/product-card/product-favourite-button';
import StarRating from '@/components/product-card/product-rating';
import cartIcon from '@/icons/cart-icon.svg';
import { IProduct } from '@/types/product.types';
import { priceFormat } from '@/utils/price-format';

import { FC, useState } from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Button, Tooltip } from '@nextui-org/react';
import { Chip } from '@nextui-org/react';

export const ProductCard: FC<IProduct> = (props) => {
  const { isNew, productName, bonusPrise, price, monthlyPrice } = props;
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <Card className="pt-4 pb-1 border border-white hover:border-gray-200 relative overflow-hidden group shadow-md">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className={`flex items-center justify-${!isNew ? 'end' : 'between'} w-full -mt-5`}>
            {isNew && (
              <Chip
                size="sm"
                className="-ml-0.5"
                color="success"
              >
                New
              </Chip>
            )}
            <Button
              onClick={() => setLiked((prev) => !prev)}
              className={`${
                liked ? 'translate-x-2.5' : 'translate-x-16'
              } border-none outline-none bg-transparent cursor-pointer group-hover:translate-x-2.5`}
              isIconOnly
              color="warning"
              variant="faded"
              aria-label="Take a photo"
            >
              <HeartIcon
                filled={liked}
                fill="red"
              />
            </Button>
          </div>
          <Image
            isZoomed
            alt="Card background"
            className="object-contain rounded-xl"
            src="https://image.minibox.uz/uploads/photos_1707245921053.jpeg"
            width={290}
            height={300}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <p className="text-muted">Smartfon</p>
          <p className="font-sans text-black leading-[150%] break-all line-clamp-2 mt-3">
            {productName?.ru}
          </p>
          <div className="mt-3">
            <StarRating rating={3.5} />
          </div>
          <Button
            color="secondary"
            variant="bordered"
            size="md"
            className="mt-1 font-bold bg-light-gray flex items-center justify-center"
          >
            {priceFormat(parseInt(String(monthlyPrice)))}$ dan/oyiga
          </Button>

          <Chip
            color="warning"
            variant="dot"
            className="mt-2 border-none flex items-center gap-2"
          >
            <small className="text-gray-400 line-through">{priceFormat(+bonusPrise)}$</small>
            <small className="ml-3 text-black">{priceFormat(+price)}$</small>
          </Chip>
          <Button
            color="primary"
            variant="shadow"
            className="mt-4 shadow-sm"
            startContent={
              <Image
                className="invert"
                src={cartIcon.src}
                alt="icon"
              />
            }
          >
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
