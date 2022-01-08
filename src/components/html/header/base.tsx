import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLHeaderProps extends BlockProps<"header"> {}

export const HTMLHeader = blockComponent<HTMLHeaderProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <header {...blockProps}>{children}</header>;
  }
);
