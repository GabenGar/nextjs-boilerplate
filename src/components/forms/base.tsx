import { blockComponent } from "#components/meta";
import { HTMLForm } from "#components/html/form";
import { ButtonSubmit } from "#components/buttons";
import styles from "./_index.module.scss";

import type { HTMLFormProps } from "#components/html/form";

export interface FormProps extends HTMLFormProps {
  submitButton?: string | JSX.Element;
}

export const Form = blockComponent<FormProps>(
  styles.block,
  ({ submitButton = "Submit", children, ...blockProps }) => {
    return (
      <HTMLForm {...blockProps}>
        {children}
        {typeof submitButton === "string" ? (
          <ButtonSubmit>{submitButton}</ButtonSubmit>
        ) : (
          { submitButton }
        )}
      </HTMLForm>
    );
  }
);
