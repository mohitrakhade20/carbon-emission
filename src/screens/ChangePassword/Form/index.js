import React from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import TextInput from "../../../components/TextInput";

const Form = ({ goFinish }) => {
  return (
    <form className={styles.form}>
      <div className={cn("h3", styles.title)}>New password</div>
      <TextInput
        className={styles.field}
        label="email"
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <TextInput
        className={styles.field}
        label="password"
        name="password"
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
      <button className={cn("button", styles.button)} onClick={goFinish}>
        Change password
      </button>
    </form>
  );
};

export default Form;
