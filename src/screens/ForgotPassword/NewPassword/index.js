import React from "react";
import cn from "classnames";
import styles from "./NewPassword.module.sass";
import TextInput from "../../../components/TextInput";

const NewPassword = () => {
  return (
    <form className={styles.form}>
      <h3 className={cn("h3", styles.title)}>New password</h3>
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="email"
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
        <TextInput
          className={styles.field}
          label="new password"
          name="new-password"
          type="password"
          placeholder="Password"
          required
          view
        />
        <TextInput
          className={styles.field}
          label="confirm password"
          name="confirm-password"
          type="password"
          placeholder="Password"
          required
          view
        />
      </div>
      <button className={cn("button", styles.button)}>Continue</button>
    </form>
  );
};

export default NewPassword;
