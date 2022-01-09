import { blockComponent } from "#components/meta";
import { HTMLDd } from "#components/html/dd";
import styles from "./_index.module.scss";

import type { HTMLDdProps } from "#components/html/dd";

export interface DListDetailsProps extends HTMLDdProps {}

export const DListDetails = blockComponent<DListDetailsProps>(
  styles.details,

  ({ children, ...blockProps }) => {
    return <HTMLDd {...blockProps}>{children ? children : "unknown"}</HTMLDd>;
  }
);
