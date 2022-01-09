import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLH2Props extends BlockProps<"h2"> {}

export const HTMLH2 = blockComponent<HTMLH2Props>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <h2 {...blockProps}>{children}</h2>;
  }
);
