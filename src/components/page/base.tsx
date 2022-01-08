import { blockComponent } from "#components/meta";
import { HTMLSection } from "#components/html/section";
import styles from "./_index.module.scss";

import type { HTMLSectionProps } from "#components/html/section";

export interface SitePageProps extends HTMLSectionProps {}

export const Page = blockComponent<SitePageProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <HTMLSection {...blockProps}>{children}</HTMLSection>;
  }
);
