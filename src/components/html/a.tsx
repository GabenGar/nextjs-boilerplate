import { blockComponent } from "#components/meta";
import { BlockProps } from "#types/props";
import styles from "./a.module.scss";

export interface HTMLAProps extends BlockProps<"a"> { }

export const HTMLA = blockComponent<HTMLAProps>(styles.block, ({ ...htmlaProps }) => {
  return (<a {...htmlaProps}></a>);
})