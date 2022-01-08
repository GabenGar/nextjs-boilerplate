import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLH4Props extends BlockProps<"h4"> {}

export const HTMLH4 = blockComponent<HTMLH4Props>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <h4 {...blockProps}>{children}</h4>;
  }
);
