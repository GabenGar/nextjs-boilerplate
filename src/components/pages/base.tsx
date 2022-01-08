import { Heading } from "#components/headings";
import { HTMLSection } from "#components/html/section";
import styles from "./_index.module.scss";

import type { RootlessProps } from "#types/props";

export interface PageProps extends RootlessProps {
  heading: string | JSX.Element;
}

export function Page({ heading, children }: PageProps) {
  return (
    <>
      <Heading className={styles.heading} level={1}>
        {heading}
      </Heading>

      <HTMLSection className={styles.content}>{children}</HTMLSection>
    </>
  );
}
