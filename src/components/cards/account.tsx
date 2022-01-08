import { blockComponent } from "#components/meta";
import { Card, CardBody, CardHeader, CardFooter } from "./base";
import { Heading } from "#components/headings";
import {
  DList,
  DListDetails,
  DListSection,
  DListTerm,
} from "#components/lists/dlist";
import styles from "./account.module.scss";

import type { Account } from "#types/entities";
import type { CardProps } from "./base";

export interface AccountCardCardProps extends CardProps {
  account: Account;
}

export const AccountCard = blockComponent<AccountCardCardProps>(
  styles.block,
  ({ account, ...blockProps }) => {
    const { name, email, created_at, updated_at, role } = account;
    return (
      <Card {...blockProps}>
        <CardHeader>
          <Heading level={2} className={styles.name}>
            {name}
          </Heading>
        </CardHeader>
        <CardBody>
          <DList>
            <DListSection dKey="Last activity" dValue={updated_at} />
            <DListSection dKey="Role" dValue={role} />
            <DListSection dKey="Email" dValue={email} />
          </DList>
        </CardBody>
        <CardFooter>
          <DList>
            <DListSection dKey="Joined at" dValue={created_at} />
          </DList>
        </CardFooter>
      </Card>
    );
  }
);
