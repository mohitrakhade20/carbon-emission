import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Actions.module.sass";
import Icon from "../../../components/Icon";
import Form from "./Form";

const navigation = ["Limit", "Stop-limit", "Market"];

const Actions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleAction, setVisibleAction] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleClickBuy = () => {
    setVisibleAction(true);
    setVisible(true);
  };

  const handleClickSell = () => {
    setVisibleAction(false);
    setVisible(true);
  };

  return (
    <div className={styles.actions}>
      <div className={styles.head}>
        <div className={styles.nav}>
          {navigation.map((x, index) => (
            <button
              className={cn(styles.link, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x}
            </button>
          ))}
        </div>
        <div className={styles.info}>
          Crypto trading tutorial
          <Link to="/learn-crypto">
            Learn now <Icon name="arrow-right" size="20" />
          </Link>
        </div>
      </div>
      <div className={cn(styles.wrapper, { [styles.show]: visible })}>
        {activeIndex === 0 && (
          <Form
            contentBuy="10,098.36 USDT"
            contentSell="1.0356875565 BTC"
            price
            visible={visibleAction}
            setValue={setVisible}
          />
        )}
        {activeIndex === 1 && (
          <Form
            contentBuy="10,098.36 USDT"
            contentSell="1.0356875565 BTC"
            stop
            limit
            visible={visibleAction}
            setValue={setVisible}
          />
        )}
        {activeIndex === 2 && (
          <Form
            contentBuy="USDT"
            contentSell="BTC"
            limit
            visible={visibleAction}
            setValue={setVisible}
          />
        )}
      </div>
      <div className={styles.btns}>
        <button
          className={cn("button-green button-small", styles.button)}
          onClick={() => handleClickBuy()}
        >
          Buy
        </button>
        <button
          className={cn("button-red button-small", styles.button)}
          onClick={() => handleClickSell()}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default Actions;
