import React, { useState } from "react";
import cn from "classnames";
import styles from "./Action.module.sass";
import { Range, getTrackBackground } from "react-range";
import Icon from "../../../../../components/Icon";

const Action = ({
  title,
  content,
  price,
  stop,
  limit,
  classButton,
  buttonText,
}) => {
  const [values, setValues] = useState([10]);

  const stepPrice = 10;
  const minPrice = 0;
  const maxPrice = 100;

  return (
    <>
      <div className={styles.head}>
        <div className={styles.title}>{title}</div>
        <div className={styles.counter}>
          <Icon name="wallet" size="16" /> {content}
        </div>
      </div>
      {price && (
        <label className={styles.field}>
          <div className={styles.label}>Price</div>
          <input className={styles.input} type="text" name="price" required />
          <div className={styles.currency}>USDT</div>
        </label>
      )}
      {stop && (
        <label className={styles.field}>
          <div className={styles.label}>Stop</div>
          <input className={styles.input} type="text" name="stop" required />
          <div className={styles.currency}>BTC</div>
        </label>
      )}
      {limit && (
        <label className={styles.field}>
          <div className={styles.label}>Limit</div>
          <input className={styles.input} type="text" name="limit" required />
          <div className={styles.currency}>USDT</div>
        </label>
      )}
      <label className={styles.field}>
        <div className={styles.label}>Amount</div>
        <input className={styles.input} type="text" name="amount" required />
        <div className={styles.currency}>BTC</div>
      </label>
      <Range
        values={values}
        step={stepPrice}
        min={minPrice}
        max={maxPrice}
        onChange={(values) => setValues(values)}
        renderMark={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "2px",
              marginTop: "-2px",
              borderRadius: "1px",
              backgroundColor:
                index * stepPrice < values[0] ? "#3772FF" : "#E6E8EC",
            }}
          />
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "2px",
                width: "100%",
                borderRadius: "1px",
                background: getTrackBackground({
                  values,
                  colors: ["#3772FF", "#E6E8EC"],
                  min: minPrice,
                  max: maxPrice,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "18px",
              width: "18px",
              borderRadius: "50%",
              backgroundColor: "#F4F5F6",
              border: "4px solid #777E90",
              boxShadow: "0px 8px 16px -8px rgba(15, 15, 15, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-27px",
                color: "#FCFCFD",
                fontWeight: "600",
                fontSize: "13px",
                lineHeight: "16px",
                fontFamily: "Poppins",
                padding: "2px 6px",
                borderRadius: "6px",
                backgroundColor: "#777E90",
              }}
            >
              {values[0].toFixed(0)}%
            </div>
          </div>
        )}
      />
      <label className={styles.field}>
        <div className={styles.label}>Total</div>
        <input className={styles.input} type="text" name="total" required />
        <div className={styles.currency}>BTC</div>
      </label>
      <button className={cn(classButton, styles.button)}>{buttonText}</button>
    </>
  );
};

export default Action;
