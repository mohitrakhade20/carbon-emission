import React, { useState } from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import Card from "../../../components/Card";

// data
import { articles } from "../../../mocks/articles";

const dateOptions = ["Recently added", "Long added"];
const sortingOptions = ["Tutorial", "Usecase", "Trading", "Wallet"];

const Catalog = ({ scrollToRefCatalog }) => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(dateOptions[0]);
  const [sorting, setSorting] = useState(sortingOptions[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div
      className={cn("section-padding section-mb0", styles.section)}
      ref={scrollToRefCatalog}
    >
      <div className={cn("container", styles.container)}>
        <form className={styles.form} action="" onSubmit={() => handleSubmit()}>
          <input
            className={styles.input}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="search"
            placeholder="Search anything about crypto"
            required
          />
          <button className={cn("button-circle", styles.result)}>
            <Icon name="search" size="24" />
          </button>
        </form>
        <div className={styles.sorting}>
          <div className={styles.dropdown}>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div>
          <div className={styles.nav}>
            {sortingOptions.map((x, index) => (
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
          <div className={cn("tablet-show", styles.dropdown)}>
            <Dropdown
              className={styles.dropdown}
              value={sorting}
              setValue={setSorting}
              options={sortingOptions}
            />
          </div>
        </div>
        <div className={styles.list}>
          {articles.map((x, index) => (
            <Card className={styles.card} item={x} key={index} />
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            <span>Learn more</span>
            <Icon name="arrow-down" size="16" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
