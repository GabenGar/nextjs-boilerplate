import { blockComponent } from "#components/meta";
import { HTMLSection } from "#components/html/section";
import styles from "./_index.module.scss";

import type { HTMLSectionProps } from "#components/html/section";
import { HTMLHeader } from "#components/html/header";
import { Heading } from "#components/headings";

export interface SitePageProps extends HTMLSectionProps {
  heading?: string
}

export const Page = blockComponent<SitePageProps>(
  styles.block,
  ({ heading, children, ...blockProps }) => {
    return (
      <HTMLSection {...blockProps}>
        <HTMLHeader>
          <Heading level={1}></Heading>
        </HTMLHeader>
        {children}
      </HTMLSection>
    );
  }
);
