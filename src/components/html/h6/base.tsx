import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLH6Props extends BlockProps<"h6"> {}

export const HTMLH6 = blockComponent<HTMLH6Props>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <h6 {...blockProps}>{children}</h6>;
  }
);
