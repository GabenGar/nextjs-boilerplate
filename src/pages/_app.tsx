// this goes first to avoid specificity issues
import '#styles/globals.scss'

import { BaseLayout } from '#components/layout'
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
