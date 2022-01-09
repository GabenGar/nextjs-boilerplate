import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLSectionProps extends BlockProps<"section"> {}

export const HTMLSection = blockComponent<HTMLSectionProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <section {...blockProps}>{children}</section>;
  }
);
