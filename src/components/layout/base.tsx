import { LinkInternal } from "#components/links";
import { ERROR_MESSAGE } from "#environment/constants";
import styles from "./_index.module.scss";

import type { RootlessProps } from "#types/props";

export interface LayoutProps extends RootlessProps { }

export function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}><LinkInternal href="/">{ERROR_MESSAGE}</LinkInternal></header>
      <main className={styles.body}>{children}</main>
      <footer className={styles.footer}>{ERROR_MESSAGE}</footer>
    </>
  );
}
