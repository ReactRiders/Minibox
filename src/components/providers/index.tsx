'use client';

import { TLocale } from '@/types';

import { ReactNode } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

interface IProvider {
  children: ReactNode;
  lang: TLocale;
  messages: AbstractIntlMessages;
}

export const Providers = ({ children, lang, messages }: IProvider) => (
  <NextIntlClientProvider
    locale={lang}
    messages={messages}
  >
    <NextUIProvider>{children}</NextUIProvider>
  </NextIntlClientProvider>
);
