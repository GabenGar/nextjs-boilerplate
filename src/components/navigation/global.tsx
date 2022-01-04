import { useSession } from "next-auth/react";
import { blockComponent } from "#components/meta";
import { HTMLNav } from "#components/html/nav";
import { HTMLUl } from "#components/html/ul";
import { HTMLLi } from "#components/html/li";
import { LinkInternal } from "#components/links";
import styles from "./_index.module.scss";

import type { HTMLNavProps } from "#components/html/nav";
import clsx from "clsx";

export interface NavItem {
  link: string;
  title: string;
}

export interface GlobalNavProps extends HTMLNavProps {
  navItems: NavItem[];
}

export const GlobalNav = blockComponent<GlobalNavProps>(
  styles.block,
  ({ navItems, ...blockProps }) => {
    return (
      <HTMLNav {...blockProps}>
        <HTMLUl className={styles.list}>
          {navItems.map(({ link, title }) => (
            <HTMLLi key={link + title} className={styles.item}>
              <LinkInternal className={styles.link} href={link}>
                {title}
              </LinkInternal>
            </HTMLLi>
          ))}
        </HTMLUl>
        <AccountNav />
      </HTMLNav>
    );
  }
);

function AccountNav() {
  const { data: session, status } = useSession();
  return (
    <HTMLUl className={clsx(styles.list, styles.account)}>
      {!session ? (
        <>
          <HTMLLi>
            <LinkInternal className={styles.link} href="/auth/login">
              login
            </LinkInternal>
          </HTMLLi>
          <HTMLLi>
            <LinkInternal className={styles.link} href="/auth/register">
              register
            </LinkInternal>
          </HTMLLi>
        </>
      ) : (
        <HTMLLi>
          <LinkInternal className={styles.link} href="/auth/logout">
            logout
          </LinkInternal>
        </HTMLLi>
      )}
    </HTMLUl>
  );
}
