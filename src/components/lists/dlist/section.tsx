import { blockComponent } from "#components/meta";
import { HTMLDiv } from "#components/html/div";
import { DListTerm } from "./term";
import { DListDetails } from "./details";
import styles from "./_index.module.scss";

import type { HTMLDivProps } from "#components/html/div";

export interface DListSectionProps extends HTMLDivProps {
  dKey?: string | JSX.Element;
  dValue?: string | JSX.Element;
}

export const DListSection = blockComponent<DListSectionProps>(
  styles.section,
  ({ dKey, dValue, children, ...blockProps }) => {
    return (
      <HTMLDiv {...blockProps}>
        {children ? (
          children
        ) : (
          <>
            <DListTerm>{dKey}</DListTerm>
            <DListDetails>{dValue}</DListDetails>
          </>
        )}
      </HTMLDiv>
    );
  }
);
