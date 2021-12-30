import { forwardRef } from "react";
import { blockComponent } from "#components/meta";
import styles from "./base.module.scss";

import type { BlockProps } from "#types/props";

export interface HTMLAProps extends BlockProps<"a"> { }

export const HTMLA = blockComponent<HTMLAProps>(
  styles.block,
  ({ children, ...htmlaProps }) => {
    return (<a {...htmlaProps}>{children}</a>);
  }
)