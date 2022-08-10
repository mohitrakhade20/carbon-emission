import React from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import { Link } from "react-router-dom";
import TextInput from "../../../components/TextInput";

const Form = ({ goNext }) => {
  return (
    <form className={styles.form}>
      <div className={styles.top}>
        <h3 className={cn("h3", styles.title)}>Forgot password</h3>
        <div className={styles.info}>
          For security purposes, no withdrawals are permitted for 24 hours after
          password changed.
        </div>
      </div>
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="Enter the account email"
          name="email"
          type="email"
          placeholder="Your email"
          icon="email"
          required
        />
      </div>
      <button className={cn("button", styles.button)} onClick={goNext}>
        Continue
      </button>
      <div className={styles.foot}>
        <Link className={styles.link} to="/sign-in">
          Nevermind, I got it
        </Link>
      </div>
    </form>
  );
};

export default Form;
