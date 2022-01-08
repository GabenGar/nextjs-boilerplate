import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLDlProps extends BlockProps<"dl"> {}

export const HTMLDl = blockComponent<HTMLDlProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <dl {...blockProps}>{children}</dl>;
  }
);
