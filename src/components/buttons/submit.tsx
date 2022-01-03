import { blockComponent } from "#components/meta";
import { HTMLButton } from "#components/html/button";
import styles from "./_index.module.scss";

import type { HTMLButtonProps } from "#components/html/button";

export interface ButtonSubmitProps extends HTMLButtonProps { }

export const ButtonSubmit = blockComponent<ButtonSubmitProps>(
  styles.submit,
  ({ type, children, ...blockProps }) => {
    return (<HTMLButton type="submit"{...blockProps}>{children}</HTMLButton>);
  }
)