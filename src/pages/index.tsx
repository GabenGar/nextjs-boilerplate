import { useEffect } from 'react';
import Head from 'next/head'
import { ERROR_MESSAGE } from '#environment/constant';
import { BaseLayout } from '#components/layout'
import styles from './index.module.scss'

import type { ReactElement } from 'react';

export function IndexPage() {
  useEffect(() => {
    console.log(ERROR_MESSAGE);
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>{ERROR_MESSAGE}</title>
        <meta name="description" content={ERROR_MESSAGE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FLYING POLLAR BUFFALLO ERROR
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

IndexPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}

export default IndexPage
