import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLDdProps extends BlockProps<"dd"> {}

export const HTMLDd = blockComponent<HTMLDdProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <dd {...blockProps}>{children}</dd>;
  }
);
