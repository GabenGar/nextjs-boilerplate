import { blockComponent } from "#components/meta";
import { HTMLArticle } from "#components/html/article";
import { HTMLHeader } from "#components/html/header";
import { HTMLSection } from "#components/html/section";
import { HTMLFooter } from "#components/html/footer";
import styles from "./base.module.scss";

import type { HTMLArticleProps } from "#components/html/article";
import type { HTMLHeaderProps } from "#components/html/header";
import type { HTMLSectionProps } from "#components/html/section";
import type { HTMLFooterProps } from "#components/html/footer";

export interface CardProps extends HTMLArticleProps {}
export interface CardHeaderProps extends HTMLHeaderProps {}
export interface CardBodyProps extends HTMLSectionProps {}
export interface CardFooterProps extends HTMLFooterProps {}

export const Card = blockComponent<CardProps>(
  styles.block,
  ({ children, ...blockProps }) => {
    return <HTMLArticle {...blockProps}>{children}</HTMLArticle>;
  }
);

export const CardHeader = blockComponent<CardHeaderProps>(
  styles.header,
  ({ children, ...blockProps }) => {
    return <HTMLHeader {...blockProps}>{children}</HTMLHeader>;
  }
);

export const CardBody = blockComponent<CardBodyProps>(
  styles.body,
  ({ children, ...blockProps }) => {
    return <HTMLSection {...blockProps}>{children}</HTMLSection>;
  }
);

export const CardFooter = blockComponent<CardFooterProps>(
  styles.footer,
  ({ children, ...blockProps }) => {
    return <HTMLFooter {...blockProps}>{children}</HTMLFooter>;
  }
);
