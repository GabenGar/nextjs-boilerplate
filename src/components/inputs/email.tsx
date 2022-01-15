import { blockComponent } from "#components/meta";
import { HTMLInput } from "#components/html/input";
import styles from "./_index.module.scss";

import type { HTMLInputProps } from "#components/html/input";

export interface InputEmailProps extends HTMLInputProps {}

export const InputEmail = blockComponent<InputEmailProps>(
  styles.text,
  ({ ...blockProps }) => {
    return <HTMLInput {...blockProps} type="email" />;
  }
);
