import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLH5Props extends BlockProps<"h5"> {}

export const HTMLH5 = blockComponent<HTMLH5Props>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <h5 {...blockProps}>{children}</h5>;
  }
);
