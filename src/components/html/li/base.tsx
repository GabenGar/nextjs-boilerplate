import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLLiProps extends BlockProps<"li"> { }

export const HTMLLi = blockComponent<HTMLLiProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<li {...blockProps}>{children}</li>);
  }
)