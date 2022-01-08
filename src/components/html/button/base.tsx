import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLButtonProps extends BlockProps<"button"> {}

export const HTMLButton = blockComponent<HTMLButtonProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <button {...blockProps}>{children}</button>;
  }
);
