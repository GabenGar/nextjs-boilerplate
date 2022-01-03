import { blockComponent } from "#components/meta";
import { HTMLLabel } from "#components/html/label";
import { InputPassword } from "#components/inputs";
import { FormSection } from "./base";
import styles from "./_index.module.scss";

import type { FormSectionProps } from "./base";

export interface FormSectionPasswordProps extends FormSectionProps {
  id: string
  name: string
  required?: boolean
  isNew?: boolean
}

export const FormSectionPassword = blockComponent<FormSectionPasswordProps>(
  styles.password,
  ({ id, name, required = false, isNew = true, children, ...blockProps }) => {
    return (<FormSection {...blockProps}>
      <HTMLLabel htmlFor={id} >{children}</HTMLLabel>
      <InputPassword id={id} name={name} required={required} isNew={isNew} />
    </FormSection>);
  }
)