import { blockComponent } from "#components/meta";

import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface LinkExternalProps extends BlockProps<"a"> {}

export const LinkExternal = blockComponent<LinkExternalProps>(
  styles.block,
  ({ children, ...props }: LinkExternalProps) => {
    return <a {...props}>{children}</a>;
  }
);
