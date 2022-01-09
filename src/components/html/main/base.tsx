import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLMainProps extends BlockProps<"main"> {}

export const HTMLMain = blockComponent<HTMLMainProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <main {...blockProps}>{children}</main>;
  }
);
