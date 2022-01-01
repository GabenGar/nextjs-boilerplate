import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLUlProps extends BlockProps<"ul"> { }

export const HTMLUl = blockComponent<HTMLUlProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<ul {...blockProps}>{children}</ul>);
  }
)