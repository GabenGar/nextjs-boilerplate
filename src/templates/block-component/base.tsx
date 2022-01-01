import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

interface ComponentProps extends BlockProps<"div"> { }

const BlockComponent = blockComponent<ComponentProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return (<div {...blockProps}>{children}</div>);
  }
)