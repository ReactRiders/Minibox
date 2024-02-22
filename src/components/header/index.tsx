'use client';

import { HeaderTop } from '@/components/header/header-top';
import { TopCategories } from '@/components/top-categories';
import { useLocaleLink } from '@/hooks/locale-link';
import { logo_icon, search_icon } from '@/mock';
import { headerData } from '@/mock/header.data';
import { topCategories } from '@/mock/top-categories.data';
import { TLocale } from '@/types';

import { useEffect, useState } from 'react';

import { Button, Image, Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { MenuButton, MobileNav } from '../';

interface IHeader {
  lang: TLocale;
}

export const Header = ({ lang }: IHeader) => {
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const t = useTranslations('header');
  const { LocaleLink } = useLocaleLink();

  const onWindowScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 40) {
       setIsFixed(true);
    } else {
       setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  return (
    <header className="container">
      <HeaderTop data={headerData.headerTop} />
      <nav
        className={`${isFixed && 'fixed container shadow-lg top-0 left-0 w-full z-[1001] bg-white'} flex justify-between gap-5 py-3 items-center`}
      >
        <div className="flex gap-7">
          <Image
            src={logo_icon.src}
            alt="logo icon"
            className="rounded-none"
          />
          <Button
            color="primary"
            onClick={() => setIsCatalogOpen((prev) => !prev)}
            startContent={<MenuButton isActive={isCatalogOpen} />}
            size="lg"
          >
            {t('catalog')}
          </Button>
        </div>
        <div className="flex-1">
          <Input
            size="sm"
            type="text"
            placeholder={t('search')}
            variant="bordered"
            radius="lg"
            classNames={{
              innerWrapper: 'bg-transparent p-0 shadow-none border-none',
              inputWrapper: 'bg-transparent p-0 shadow-none border',
              input: 'bg-transparent border-none pl-5 shadow-none',
            }}
            endContent={
              <Button
                color="primary"
                size="lg"
              >
                <Image
                  src={search_icon.src}
                  alt="search icon"
                  className="w-6 invert"
                />
              </Button>
            }
          />
        </div>
        <ul className="hidden lg:flex gap-4 items-center">
          {headerData.headerLink.map(({ key, classes, icon, url }, idx) => (
            <li
              key={idx}
              className={`flex ${classes} text-sm font-semibold cursor-pointer flex-col gap-1 items-center justify-center`}
            >
              <Image
                src={icon.src}
                alt={key + ' icon'}
                className="w-8"
              />
              <LocaleLink href={url as string}>{t(key)}</LocaleLink>
            </li>
          ))}
        </ul>
      </nav>
      <MobileNav lang={lang} />
      <TopCategories
        isFixed={isFixed}
        data={topCategories}
      />
    </header>
  );
};
