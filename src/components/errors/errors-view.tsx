import { blockComponent } from "#components/meta";
import { HTMLDiv } from "#components/html/div";
import styles from "./_index.module.scss";
import { ErrorDict } from "./dict";
import { ErrorList } from "./list";

import type { HTMLDivProps } from "#components/html/div";

export interface ErrorViewProps extends HTMLDivProps {
  errors: Record<string, string[]> | string[];
}

export const ErrorsView = blockComponent<ErrorViewProps>(
  styles.block,
  ({ errors, ...blockProps }) => {
    return (
      <HTMLDiv {...blockProps}>
        {Array.isArray(errors) ? (
          <ErrorList errors={errors} />
        ) : (
          <ErrorDict errors={errors} />
        )}
      </HTMLDiv>
    );
  }
);
