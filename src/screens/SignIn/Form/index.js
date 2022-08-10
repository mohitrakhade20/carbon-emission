import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Form.module.sass";
import Dropdown from "../../../components/Dropdown";
import TextInput from "../../../components/TextInput";

const navigation = ["Email", "Mobile"];
const optionsPhone = ["🇺🇸 +1", "🇻🇳 +3", "🇷🇺 +7"];

const Form = ({ onScan }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phone, setPhone] = useState(optionsPhone[0]);

  return (
    <form className={styles.form}>
      <div className={styles.nav}>
        {navigation.map((x, index) => (
          <button
            className={cn(styles.link, {
              [styles.active]: index === activeIndex,
            })}
            onClick={() => setActiveIndex(index)}
            key={index}
            type="button"
          >
            {x}
          </button>
        ))}
      </div>
      <div className={styles.container}>
        {activeIndex === 0 && (
          <TextInput
            className={styles.field}
            label="email"
            name="email"
            type="email"
            placeholder="Email address"
            required
          />
        )}
        {activeIndex === 1 && (
          <div className={styles.line}>
            <div className={styles.field}>
              <Dropdown
                className={styles.dropdown}
                label="mobile"
                value={phone}
                setValue={setPhone}
                options={optionsPhone}
              />
            </div>
            <TextInput
              className={styles.field}
              name="phone"
              type="tel"
              required
            />
          </div>
        )}
      </div>
      <TextInput
        className={styles.field}
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        required
        view
      />
      <div className={styles.foot}>
        <button className={styles.scan} onClick={onScan}>
          Scan to login
        </button>
        <Link className={styles.link} to="/forgot-password">
          Forgot password?
        </Link>
      </div>
      <button className={cn("button", styles.button)}>Login</button>
    </form>
  );
};

export default Form;
