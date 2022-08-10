import React, { useState } from "react";
import cn from "classnames";
import styles from "./Actions.module.sass";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Modal from "../Modal";
import Transfer from "../Transfer";

const items = [
  {
    title: "Bank deposit",
    content:
      "Deposit crypto or cash currency to your wallet and start trading on the world largest exchange!",
    color: "#E4D7CF",
    image: "/images/content/actions-pic-1.png",
    image2x: "/images/content/actions-pic-1@2x.png",
    buttonText: "Bank deposit",
    url: "/deposit-fiat",
  },
  {
    title: "Transfer",
    content: "Internal transfers are free on Bitcloud.",
    color: "#CDB4DB",
    image: "/images/content/actions-pic-2.png",
    image2x: "/images/content/actions-pic-2@2x.png",
    buttonText: "Transfer coin",
  },
];

const Actions = ({ className }) => {
  const [visibleTransfer, setVisibleTransfer] = useState(false);

  return (
    <>
      <div className={cn(className, styles.actions)}>
        <div className={styles.list}>
          {items.map((x, index) => (
            <div className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Action" />
              </div>
              <div className={styles.details}>
                <div className={styles.title}>{x.title}</div>
                <div className={styles.content}>{x.content}</div>
                {x.url ? (
                  <Link
                    className={cn("button-stroke button-small", styles.button)}
                    to={x.url}
                  >
                    <span>{x.buttonText}</span>
                    <Icon name="arrow-next" size="10" />
                  </Link>
                ) : (
                  <button
                    className={cn("button-stroke button-small", styles.button)}
                    onClick={() => setVisibleTransfer(true)}
                  >
                    <span>{x.buttonText}</span>
                    <Icon name="arrow-next" size="10" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        visible={visibleTransfer}
        onClose={() => setVisibleTransfer(false)}
      >
        <Transfer />
      </Modal>
    </>
  );
};

export default Actions;
