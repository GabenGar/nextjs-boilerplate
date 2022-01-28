import { blockComponent } from "#components/meta";
import { HTMLLabel } from "#components/html/label";
import { InputEmail } from "#components/inputs";
import { FormSection } from "./base";
import styles from "./_index.module.scss";

import type { FormSectionProps } from "./base";

export interface FormSectionEmailProps extends FormSectionProps {
  id: string;
  name: string;
  required?: boolean;
  isReadOnly?: boolean;
}

export const FormSectionEmail = blockComponent<FormSectionEmailProps>(
  styles.text,
  ({
    id,
    name,
    defaultValue,
    isReadOnly,
    required,
    children,
    ...blockProps
  }) => {
    return (
      <FormSection {...blockProps}>
        <HTMLLabel htmlFor={id}>{children}</HTMLLabel>
        <InputEmail
          id={id}
          name={name}
          required={required}
          defaultValue={defaultValue}
          readOnly={isReadOnly}
          autoComplete="email"
        />
      </FormSection>
    );
  }
);
