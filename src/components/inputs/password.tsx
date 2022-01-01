import { blockComponent } from "#components/meta";
import { HTMLInput } from "#components/html/input";
import styles from "./_index.module.scss";

import type { HTMLInputProps } from "#components/html/input";

export interface InputPasswordProps extends HTMLInputProps { }

export const InputPassword = blockComponent<InputPasswordProps>(
  styles.password,
  ({ type, ...blockProps }) => {
    return (<HTMLInput type="password" {...blockProps} />);
  }
)