import Link from "next/link";

import type { PropsWithChildren } from "react";
import type { LinkProps } from "next/link";

export interface LinkInternalProps extends PropsWithChildren<{}>, LinkProps {
  className: string
}

export function LinkInternal({ className, children, ...linkProps }: LinkInternalProps) {
  return (<Link {...linkProps} passHref ><a className={className}>{children}</a></Link>)
}
