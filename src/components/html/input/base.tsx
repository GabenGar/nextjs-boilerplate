import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLInputProps extends BlockProps<"input"> { }

export const HTMLInput = blockComponent<HTMLInputProps>(
  styles.block,
  ({ ...blockProps }) => {
    return (<input {...blockProps} />);
  }
)