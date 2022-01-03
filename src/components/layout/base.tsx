import { ERROR_MESSAGE } from "#environment/constants";
import { GlobalNav } from "#components/navigation";
import styles from "./base.module.scss";

import type { RootlessProps } from "#types/props";
import type { NavItem } from "#components/navigation";

export interface LayoutProps extends RootlessProps { }

const globalNav: NavItem[] = [
  { link: "/auth/register", title: "register" },
  { link: "/auth/login", title: "login" },
  // { link: "/auth/logout", title: "logout" }
]

export function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <GlobalNav navItems={globalNav} />
      </header>

      <main className={styles.body}>{children}</main>

      <footer className={styles.footer}>{ERROR_MESSAGE}</footer>
    </>
  );
}
