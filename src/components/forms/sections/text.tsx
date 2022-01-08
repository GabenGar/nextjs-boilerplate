import { blockComponent } from "#components/meta";
import { HTMLLabel } from "#components/html/label";
import { InputText } from "#components/inputs";
import { FormSection } from "./base";
import styles from "./_index.module.scss";

import type { FormSectionProps } from "./base";

export interface FormSectionTextProps extends FormSectionProps {
  id: string;
  name: string;
  required?: boolean;
}

export const FormSectionText = blockComponent<FormSectionTextProps>(
  styles.text,
  ({ id, name, defaultValue, required, children, ...blockProps }) => {
    return (
      <FormSection {...blockProps}>
        <HTMLLabel htmlFor={id}>{children}</HTMLLabel>
        <InputText
          id={id}
          name={name}
          required={required}
          defaultValue={defaultValue}
        />
      </FormSection>
    );
  }
);
