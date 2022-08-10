import React from "react";
import cn from "classnames";
import styles from "./PaymentDetails.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "Account name",
    content: "Veum Cecilia",
  },
  {
    title: "Account number",
    content: "548422222221",
  },
  {
    title: "Address",
    content: "079 Dariana Knoll, CA",
  },
  {
    title: "SWIFT Code",
    content: "UI8",
  },
  {
    title: "Bank Address",
    content: "55416 Powlowski Spring, CA",
  },
];

const PaymentDetails = () => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>Payment details</div>
      <div className={styles.info}>Bank account</div>
      <div className={styles.list}>
        {items.map((x, index) => (
          <div className={styles.line} key={index}>
            <div className={styles.subtitle}>{x.title}</div>
            <div className={styles.details}>
              <div className={styles.content}>{x.content}</div>
              <button className={styles.copy}>
                <Icon name="copy" size="24" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.info}>Reference code</div>
      <div className={styles.text}>
        You MUST include the Reference Code in your deposit in order to credit
        your account! <br></br>Reference Code:
      </div>
      <div className={styles.code}>BLUTUKHY34PB</div>
      <div className={styles.btns}>
        <Link
          className={cn("button-stroke", styles.button)}
          to="/wallet-overview"
        >
          View wallet
        </Link>
      </div>
    </div>
  );
};

export default PaymentDetails;
