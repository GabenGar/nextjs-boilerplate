import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLH1Props extends BlockProps<"h1"> {}

export const HTMLH1 = blockComponent<HTMLH1Props>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <h1 {...blockProps}>{children}</h1>;
  }
);
