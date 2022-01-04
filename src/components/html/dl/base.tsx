import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLDLProps extends BlockProps<"dl"> {}

export const HTMLDl = blockComponent<HTMLDLProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <dl {...blockProps}>{children}</dl>;
  }
);
