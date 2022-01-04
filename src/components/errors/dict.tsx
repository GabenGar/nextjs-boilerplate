import { blockComponent } from "#components/meta";
import { HTMLDl } from "#components/html/dl";
import styles from "./_index.module.scss";

import type { HTMLDlProps } from "#components/html/dl";

export interface ErrorDictProps extends HTMLDlProps {
  errors: Record<string, string[]>;
}

export const ErrorDict = blockComponent<ErrorDictProps>(
  styles.dict,
  ({ errors, ...blockProps }) => {
    return (
      <HTMLDl {...blockProps}>
        {Object.entries(errors).map(([key, errors]) => (
          <div key={key}>
            <dt>{key}</dt>
            {errors.map((error, index) => (
              <dd key={index + error}>{error}</dd>
            ))}
          </div>
        ))}
      </HTMLDl>
    );
  }
);
