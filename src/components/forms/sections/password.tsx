import clsx from "clsx";
import { blockComponent } from "#components/meta";
import { HTMLDiv } from "#components/html/div";
import { HTMLLabel } from "#components/html/label";
import { InputPassword } from "#components/inputs";
import { FormSection } from "./base";
import styles from "./password.module.scss";

import type { FormSectionProps } from "./base";
import { Button } from "#components/buttons";
import { SVGIcon } from "#components/icons";
import { useState } from "react";

export interface FormSectionPasswordProps extends FormSectionProps {
  id: string;
  name: string;
  required?: boolean;
  isNew?: boolean;
}

export const FormSectionPassword = blockComponent<FormSectionPasswordProps>(
  styles.block,
  ({
    id,
    name,
    defaultValue,
    required = false,
    isNew = true,
    children,
    ...blockProps
  }) => {
    const [isPasswordVisible, changePasswordVisibility] = useState(false);

    return (
      <FormSection {...blockProps}>
        <HTMLLabel htmlFor={id}>{children}</HTMLLabel>
        <HTMLDiv
          className={clsx(
            styles.content,
            isPasswordVisible && styles.content_visible
          )}
        >
          <InputPassword
            id={id}
            className={styles.input}
            type={isPasswordVisible ? "text" : "password"}
            name={name}
            required={required}
            isNew={isNew}
            defaultValue={defaultValue}
          />
          <Button
            className={styles.button}
            onClick={() => {
              changePasswordVisibility(!isPasswordVisible);
            }}
          >
            <SVGIcon className={clsx(styles.icon, styles.eye)} iconID="eye" />
            <SVGIcon className={clsx(styles.icon, styles.noEye)} iconID="eye-slash" />
          </Button>
        </HTMLDiv>
      </FormSection>
    );
  }
);
