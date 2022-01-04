import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLDivProps extends BlockProps<"div"> {}

export const HTMLDiv = blockComponent<HTMLDivProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <div {...blockProps}>{children}</div>;
  }
);
