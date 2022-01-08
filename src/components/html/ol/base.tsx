import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLOlProps extends BlockProps<"ol"> {}

export const HTMLOl = blockComponent<HTMLOlProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <ol {...blockProps}>{children}</ol>;
  }
);
