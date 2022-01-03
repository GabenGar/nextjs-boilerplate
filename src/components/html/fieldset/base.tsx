import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLFieldsetProps extends BlockProps<"fieldset"> { }

export const HTMLFieldset = blockComponent<HTMLFieldsetProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<fieldset {...blockProps}>{children}</fieldset>);
  }
)