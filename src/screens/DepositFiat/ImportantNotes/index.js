import React from "react";
import cn from "classnames";
import styles from "./ImportantNotes.module.sass";

const ImportantNotes = ({ goNext }) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>Important notes</div>
      <div className={styles.text}>
        We ONLY accept fundings from a bank account under your own name:
      </div>
      <div className={styles.info}>Veum Cecilia</div>
      <div className={styles.text}>
        You MUST include the Reference Code in your deposit in order to credit
        your account! <br></br>Reference Code:
      </div>
      <div className={styles.code}>BLUTUKHY34PB</div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)} onClick={goNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ImportantNotes;
