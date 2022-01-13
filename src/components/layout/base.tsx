import { ERROR_MESSAGE } from "#environment/constants";
import { HTMLMain } from "#components/html/main";
import { GlobalNav } from "#components/navigation";
import styles from "./base.module.scss";

import type { RootlessProps } from "#types/props";
import type { INavItem } from "#components/navigation";

export interface LayoutProps extends RootlessProps {}

const globalNav: INavItem[] = [{ link: "/", title: "home" }];

export function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <GlobalNav navItems={globalNav} />
      </header>

      <HTMLMain className={styles.body}>{children}</HTMLMain>

      <footer className={styles.footer}>{ERROR_MESSAGE}</footer>
    </>
  );
}
