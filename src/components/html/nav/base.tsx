import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLNavProps extends BlockProps<"nav"> { }

export const HTMLNav = blockComponent<HTMLNavProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<nav {...blockProps}>{children}</nav>);
  }
)