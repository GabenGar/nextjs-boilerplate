import { blockComponent } from "#components/meta";
import { HTMLInput } from "#components/html/input";
import styles from "./_index.module.scss";

import type { HTMLInputProps } from "#components/html/input";

export interface InputPasswordProps extends HTMLInputProps {
  isNew?: boolean
}

export const InputPassword = blockComponent<InputPasswordProps>(
  styles.password,
  ({ isNew = true, autoComplete, type, ...blockProps }) => {
    return (<HTMLInput
      type="password"
      autoComplete={isNew ? "new-password" : "current-password"}
      {...blockProps}
    />);
  }
)