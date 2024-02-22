import { IParams } from '@/types';
import { AboutPage } from '@/views';

export default function About({ params: { lang } }: IParams) {
  return <AboutPage lang={lang} />;
}
