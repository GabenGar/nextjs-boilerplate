import { blockComponent } from "#components/meta";
import { HTMLUl } from "#components/html/ul";
import { HTMLLi } from "#components/html/li";
import styles from "./_index.module.scss";

import type { HTMLUlProps } from "#components/html/ul";

export interface ErrorListProps extends HTMLUlProps {
  errors: string[];
}

export const ErrorList = blockComponent<ErrorListProps>(
  styles.list,
  ({ errors, ...blockProps }) => {
    return (
      <HTMLUl {...blockProps}>
        {errors.map((error, index) => (
          <HTMLLi key={index + error}>{error}</HTMLLi>
        ))}
      </HTMLUl>
    );
  }
);
