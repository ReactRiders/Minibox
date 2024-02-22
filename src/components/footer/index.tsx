'use client';

import { facebook, footer_data, paymentMethod, instagram, telegram, twitter } from '@/mock';
import { TLocale } from '@/types';

import { Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

interface IFooter {
  lang: TLocale;
}

const imgLogo = [
  { img: facebook, link: 'https://www.facebook.com/' },
  { img: instagram, link: 'https://www.instagram.com/' },
  { img: telegram, link: 'https://www.telegram.com/' },
  { img: twitter, link: 'https://twitter.com/i/flow/signup' },
];

export const Footer = ({ lang }: IFooter) => {
  const t = useTranslations('footer-link');
  return (
    <footer className="hidden lg:block bg-slate-900 w-full relative z-3">
      <div className="container mx-auto grid xl:grid-cols-2 grid-cols-1 pt-[44px] pb-6 w-full">
        <div className="grid grid-cols-2 xl:mb-0 mb-10">
          <div className="text-white xl:ml-0 ml-5">
            <h1 className="font-bold text-3xl mb-5">MEDIAPARK</h1>
            <p className="text-sm font-normal mb-5">{t('questions')}</p>
            <a
              className="text-base font-semibold text-white mb-4 block"
              href="tel:+998712033333"
            >
              +998 71 203 33 33
            </a>
            <p className="text-sm font-normal mb-2"> {t('time')}</p>
            <p className="text-base font-semibold text-white"> {t('everyday')}</p>
          </div>
          <div className="w-full text-white ">
            <h1 className="text-base font-semibold text-white cursor-pointer mb-5">
              {t('payment_methods')}
            </h1>
            <div className="flex flex-wrap gap-3">
              {paymentMethod.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-slate-800 p-4 w-28 rounded-lg h-12 flex items-center justify-center"
                  >
                    <Image
                      src={item.paymentImg}
                      alt="payment image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          {footer_data.map((item, index) => {
            return (
              <div
                className="w-full px-10"
                key={index}
              >
                <h1 className="text-base font-semibold text-white cursor-pointer mb-3">
                  {t(item.title)}
                </h1>
                <div className="flex flex-col gap-1">
                  {item.footerlist.map((data, index) => {
                    return (
                      <a
                        key={index}
                        className="text-sm text-gray-300 opacity-50 hover:opacity-100 w-max py-0.5"
                        href={data.link}
                      >
                        {t(data.listName)}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-slate-800 w-full py-3">
        <div className="container mx-auto text-white flex items-center justify-between py-1.5">
          <h1>© Все права защищены. "OOO MEDIAPARK GROUP"</h1>
          <div className="flex gap-4">
            {imgLogo.map((item, index: number) => {
              return (
                <a
                  className="flex justify-center items-center rounded-full w-9"
                  key={index}
                  href={item.link}
                >
                  <Image
                    className="bg-white rounded-full w-9"
                    src={item.img.src}
                    alt="image"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
