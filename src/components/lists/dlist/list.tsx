import { blockComponent } from "#components/meta";
import { HTMLDl } from "#components/html/dl";
import styles from "./_index.module.scss";

import type { HTMLDlProps } from "#components/html/dl";

export interface DListProps extends HTMLDlProps {}

export const DList = blockComponent<DListProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <HTMLDl {...blockProps}>{children}</HTMLDl>;
  }
);
