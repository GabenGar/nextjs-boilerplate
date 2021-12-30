import Link from "next/link";
import { HTMLA } from "#components/html/a";

import type { PropsWithChildren } from "react";
import type { LinkProps } from "next/link";
import type { HTMLAProps } from "#components/html/a";

export interface LinkInternalProps extends PropsWithChildren<{}>, LinkProps {
  className: string
}

export function LinkInternal({ className, children, ...linkProps }: LinkInternalProps) {

  return (<Link {...linkProps} passHref ><HTMLA className={className}>{children}</HTMLA></Link>)
}
