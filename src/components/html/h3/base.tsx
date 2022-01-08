import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLH3Props extends BlockProps<"h3"> {}

export const HTMLH3 = blockComponent<HTMLH3Props>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <h3 {...blockProps}>{children}</h3>;
  }
);
