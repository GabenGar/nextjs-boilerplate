import { blockComponent } from "#components/meta";
import { Card, CardBody, CardHeader, CardFooter } from "#components/cards";
import styles from "./card.module.scss";

import type { CardProps } from "#components/cards";

interface TemplateCardProps extends CardProps {
}

const AccountCard = blockComponent<TemplateCardProps>(
  styles.block,
  ({ ...blockProps }) => {
    return (
      <Card {...blockProps}>
        <CardHeader></CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>
    );
  }
);
