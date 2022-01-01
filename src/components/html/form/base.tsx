import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLFormProps extends BlockProps<"form"> { }

export const HTMLForm = blockComponent<HTMLFormProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<form {...blockProps}>{children}</form>);
  }
)