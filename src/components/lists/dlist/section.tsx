import { blockComponent } from "#components/meta";
import { HTMLDiv } from "#components/html/div";
import styles from "./_index.module.scss";

import type { HTMLDivProps } from "#components/html/div";

export interface DListSectionProps extends HTMLDivProps {}

export const DListSection = blockComponent<DListSectionProps>(
  styles.section,
  ({ children, ...blockProps }) => {
    return <HTMLDiv {...blockProps}>{children}</HTMLDiv>;
  }
);