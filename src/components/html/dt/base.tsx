import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLDtProps extends BlockProps<"dt"> {}

export const HTMLDt = blockComponent<HTMLDtProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <dt {...blockProps}>{children}</dt>;
  }
);
