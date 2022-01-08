import { blockComponent } from "#components/meta";
import { HTMLDt } from "#components/html/dt";
import styles from "./_index.module.scss";

import type { HTMLDtProps } from "#components/html/dt";

export interface DListTermProps extends HTMLDtProps {}

export const DListTerm = blockComponent<DListTermProps>(
  styles.term,
  ({ children, ...blockProps }) => {
    return <HTMLDt {...blockProps}>{children}</HTMLDt>;
  }
);