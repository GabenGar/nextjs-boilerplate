import { blockComponent } from "#components/meta";
import { HTMLNav } from "#components/html/nav";
import { HTMLUl } from "#components/html/ul";
import { HTMLOl } from "#components/html/ol";
import { HTMLLi } from "#components/html/li";
import styles from "./_index.module.scss";

import type { HTMLNavProps } from "#components/html/nav";
import type { HTMLUlProps } from "#components/html/ul";
import type { HTMLOlProps } from "#components/html/ol";
import type { HTMLLiProps } from "#components/html/li";

export interface NavProps extends HTMLNavProps {}

export type NavListProps = HTMLUlProps &
  HTMLOlProps & {
    isOrdered?: boolean;
  };

export interface NavItemProps extends HTMLLiProps {}

export interface NavLinkProps extends HTMLNavProps {}

export const Nav = blockComponent<NavProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <HTMLNav {...blockProps}>{children}</HTMLNav>;
  }
);

export const NavList = blockComponent<NavListProps>(
  styles.list,
  ({ isOrdered = false, children, ...blockProps }) => {
    return isOrdered ? (
      <HTMLOl {...blockProps}>{children}</HTMLOl>
    ) : (
      <HTMLUl {...blockProps}>{children}</HTMLUl>
    );
  }
);

export const NavItem = blockComponent<NavItemProps>(
  styles.item,
  ({ children, ...blockProps }) => {
    return <HTMLLi {...blockProps}>{children}</HTMLLi>;
  }
);
