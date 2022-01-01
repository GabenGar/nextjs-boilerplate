import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { FormEvent } from "react";
import type { BlockProps } from "#types/props";

export interface SubmitArgs extends FormEvent<HTMLFormElement> {}

export interface HTMLFormProps extends BlockProps<"form"> { }

export const HTMLForm = blockComponent<HTMLFormProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<form {...blockProps}>{children}</form>);
  }
)