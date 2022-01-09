import { blockComponent } from "#components/meta";
import styles from "./_index.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLArticleProps extends BlockProps<"article"> {}

export const HTMLArticle = blockComponent<HTMLArticleProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <article {...blockProps}>{children}</article>;
  }
);
