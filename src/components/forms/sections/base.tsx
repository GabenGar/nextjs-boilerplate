import { blockComponent } from "#components/meta";
import { HTMLFieldset } from "#components/html/fieldset";
import styles from "./_index.module.scss";

import type { HTMLFieldsetProps } from "#components/html/fieldset";

export interface FormSectionProps extends HTMLFieldsetProps { }

export const FormSection = blockComponent<FormSectionProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<HTMLFieldset {...blockProps}>{children}</HTMLFieldset>);
  }
)