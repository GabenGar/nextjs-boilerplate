import clsx from "clsx";

/**
 * TODO: fix typing.
 * @param blockClassName `className` of the root element
 * @param functionComponent
 * @returns Wrapped function.
 */
export function blockComponent<T>(
  blockClassName: string | string[],
  functionComponent: (props: T) => JSX.Element
): (props: T) => JSX.Element {
  // @ts-expect-error fix later
  return ({ className, ...blockProps }: T) => {
    const baseClass = clsx(blockClassName, className);

    // @ts-expect-error fix later
    return functionComponent({ className: baseClass, ...blockProps });
  };
}
