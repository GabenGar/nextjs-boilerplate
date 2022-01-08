import Link from "next/link";
import clsx from "clsx";
import { HTMLA } from "#components/html/a";

import type { PropsWithChildren } from "react";
import type { LinkProps } from "next/link";
import type { HTMLAProps } from "#components/html/a";

export interface LinkInternalProps extends PropsWithChildren<LinkProps> {
  className?: string;
}

export function LinkInternal({
  className,
  children,
  ...linkProps
}: LinkInternalProps) {
  const anchorClass = clsx(className);
  return (
    <Link {...linkProps} passHref>
      <a className={anchorClass}>{children}</a>
    </Link>
  );
}
