import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import { HTMLForm } from "#components/html/form";
import type { HTMLFormProps } from "#components/html/form";

export interface FormProps extends HTMLFormProps { }

export const Form = blockComponent<FormProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<HTMLForm {...blockProps}>
      {children}
    </HTMLForm>);
  }
)