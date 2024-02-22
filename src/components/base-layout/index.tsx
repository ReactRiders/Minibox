import { Fragment, ReactNode } from 'react'

import { Footer, Header } from '../'
import { TLocale } from '@/types'

interface IBaseLayout {
  children: ReactNode;
  lang: TLocale;
}

export const BaseLayout = ({ children, lang }: IBaseLayout) => (
  <Fragment>
    <Header lang={lang} />
    <main className="container">{children}</main>
    <Footer lang={lang} />
  </Fragment>
)
