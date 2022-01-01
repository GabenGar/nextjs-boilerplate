import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLLabelProps extends BlockProps<"label"> { }

export const HTMLLabel = blockComponent<HTMLLabelProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<label {...blockProps}>{children}</label>);
  }
)