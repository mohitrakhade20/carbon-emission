import React, { useState } from "react";
import cn from "classnames";
import styles from "./Confirm.module.sass";
import Radio from "../../../components/Radio";
import Icon from "../../../components/Icon";

const Confirm = ({ goNext }) => {
  const [confirm, setConfirm] = useState(true);

  return (
    <form className={styles.form}>
      <h3 className={cn("h3", styles.title)}>Let’s confirm it’s really you</h3>
      <div className={styles.info}>
        Help us secure your account. <br></br>Please complete the verifications
        below
      </div>
      <div className={styles.variants}>
        <Radio
          className={styles.radio}
          name="confirm"
          value={confirm}
          onChange={() => setConfirm(true)}
          content="<span>Get the code by text message (SM) at <strong>+1 234 567 890</strong></span>"
        />
        <Radio
          className={styles.radio}
          name="confirm"
          value={!confirm}
          onChange={() => setConfirm(false)}
          content="<span>Get the code by email at <strong>tranm••••••••••••@gm•••.com</strong></span>"
        />
      </div>
      <button className={cn("button", styles.button)} onClick={goNext}>
        <span>Continue</span>
        <Icon name="arrow-right" size="16" />
      </button>
    </form>
  );
};

export default Confirm;
