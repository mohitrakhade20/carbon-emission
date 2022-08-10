import React, { useState } from "react";
import cn from "classnames";
import styles from "./Question.module.sass";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";

const optionsCurrency = [
  "Have a question about Bitcloud fees",
  "Have a question about Ethereum fees",
  "Have a question about Dogcoin fees",
];

const optionsCategory = [
  "Transactions and spending",
  "Transactions",
  "Spending",
];

const Question = () => {
  const [currency, setCurrency] = useState(optionsCurrency[0]);
  const [category, setCategory] = useState(optionsCategory[0]);
  const [topic, setTopic] = useState(true);

  return (
    <div className={cn("section-bg section-mb0", styles.section)}>
      <div className={cn("container", styles.container)}>
        <form className={styles.form} action="">
          <div className={styles.fieldset}>
            <div className={styles.field}>
              <div className={styles.label}>Select a topic</div>
              <div className={styles.variants}>
                <label className={styles.radio}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="topic"
                    onChange={() => setTopic(true)}
                    checked={topic}
                  />
                  <span className={styles.inner}>
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: "#3772FF" }}
                    >
                      <Icon name="wallet" size="20" />
                    </div>
                    <span className={styles.text}>Wallet</span>
                  </span>
                </label>
                <label className={styles.radio}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="topic"
                    onChange={() => setTopic(false)}
                    checked={!topic}
                  />
                  <span className={styles.inner}>
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: "#9757D7" }}
                    >
                      <Icon name="candlesticks" size="20" />
                    </div>
                    <span className={styles.text}>Exchange</span>
                  </span>
                </label>
              </div>
            </div>
            <div className={styles.field}>
              <Dropdown
                className={styles.dropdown}
                label="What is your issue about?"
                value={currency}
                setValue={setCurrency}
                options={optionsCurrency}
              />
            </div>
            <div className={styles.field}>
              <Dropdown
                className={styles.dropdown}
                label="What is your issue about?"
                value={category}
                setValue={setCategory}
                options={optionsCategory}
              />
            </div>
            <TextInput
              className={styles.field}
              label="Email address"
              name="email"
              type="email"
              required
            />
            <TextInput
              className={styles.field}
              label="Subject"
              name="subject"
              type="text"
              required
            />
            <TextArea
              className={styles.field}
              label="message"
              name="message"
              placeholder="Say something"
              required
            />
          </div>
          <div className={styles.btns}>
            <button className={cn("button-small", styles.button)}>
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;
