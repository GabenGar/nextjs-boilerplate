import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface GlobalNavProps extends HTMLNavProps { }

export const BlockComponent = blockComponent<GlobalNavProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<div {...blockProps}>{children}</div>);
  }
)