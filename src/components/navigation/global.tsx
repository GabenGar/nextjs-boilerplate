import { blockComponent } from "#components/meta";
import { HTMLNav } from "#components/html/nav";
import { LinkInternal } from "#components/links";
import styles from "./_index.module.scss";

import type { HTMLNavProps } from "#components/html/nav";
import { HTMLUl } from "#components/html/ul";

export interface NavItem {
  link: string
  title: string
}

export interface GlobalNavProps extends HTMLNavProps {
  navItems: NavItem[]
}

export const GlobalNav = blockComponent<GlobalNavProps>(
  styles.block,
  ({ navItems, ...blockProps }) => {
    return (<HTMLNav className={styles.block} {...blockProps}>
      <HTMLUl className={styles.list}>
        {navItems.map(({ link, title }) => (
          <li key={link + title} className={styles.item}>
            <LinkInternal className={styles.link} href={link}>{title}</LinkInternal>
          </li>
        ))}
      </HTMLUl>
    </HTMLNav>);
  }
)