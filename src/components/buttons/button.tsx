import { blockComponent } from "#components/meta";
import { HTMLButton } from "#components/html/button";
import styles from "./_index.module.scss";

import type { HTMLButtonProps } from "#components/html/button";

export interface ButtonProps extends HTMLButtonProps {}

export const Button = blockComponent<ButtonProps>(
  styles.button,
  ({ type, children, ...blockProps }) => {
    return (
      <HTMLButton type="button" {...blockProps}>
        {children}
      </HTMLButton>
    );
  }
);
