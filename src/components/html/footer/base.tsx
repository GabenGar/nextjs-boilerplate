import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLFooterProps extends BlockProps<"footer"> {}

export const HTMLFooter = blockComponent<HTMLFooterProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <footer {...blockProps}>{children}</footer>;
  }
);
