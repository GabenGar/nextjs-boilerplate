import { blockComponent } from "#components/meta";
import { HTMLH1 } from "#components/html/h1";
import { HTMLH2 } from "#components/html/h2";
import { HTMLH3 } from "#components/html/h3";
import { HTMLH4 } from "#components/html/h4";
import { HTMLH5 } from "#components/html/h5";
import { HTMLH6 } from "#components/html/h6";
import styles from "./_index.module.scss";

import type { HTMLH1Props } from "#components/html/h1";
import type { HTMLH2Props } from "#components/html/h2";
import type { HTMLH3Props } from "#components/html/h3";
import type { HTMLH4Props } from "#components/html/h4";
import type { HTMLH5Props } from "#components/html/h5";
import type { HTMLH6Props } from "#components/html/h6";

export interface HeadingProps
  extends HTMLH1Props,
    HTMLH2Props,
    HTMLH3Props,
    HTMLH4Props,
    HTMLH5Props,
    HTMLH6Props {
  level?: number;
}

export const Heading = blockComponent<HeadingProps>(
  styles.block,
  ({ level = 2, children, ...blockProps }) => {
    switch (level) {
      case 1:
        return <HTMLH1 {...blockProps}>{children}</HTMLH1>;
      case 2:
        return <HTMLH2 {...blockProps}>{children}</HTMLH2>;
      case 3:
        return <HTMLH3 {...blockProps}>{children}</HTMLH3>;
      case 4:
        return <HTMLH4 {...blockProps}>{children}</HTMLH4>;
      case 5:
        return <HTMLH5 {...blockProps}>{children}</HTMLH5>;
      case 6:
        return <HTMLH6 {...blockProps}>{children}</HTMLH6>;

      default:
        throw Error("Unknown heading error.");
    }
  }
);
