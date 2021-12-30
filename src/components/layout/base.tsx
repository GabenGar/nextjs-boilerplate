import { ERROR_MESSAGE } from "#environment/constant";
import { RootlessProps } from "#types/props";

export interface LayoutProps extends RootlessProps {}

export function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <header>{ERROR_MESSAGE}</header>
      <main>{children}</main>
      <footer>{ERROR_MESSAGE}</footer>
    </>
  );
}
