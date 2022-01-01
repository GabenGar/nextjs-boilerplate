import { blockComponent } from "#components/meta";
import { HTMLInput } from "#components/html/input";
import styles from "./_index.module.scss";

import type { HTMLInputProps } from "#components/html/input";

export interface InputTextProps extends HTMLInputProps { }

export const InputText = blockComponent<InputTextProps>(
  styles.text,
  ({ type, ...blockProps }) => {
    return (<HTMLInput type="text" {...blockProps} />);
  }
)