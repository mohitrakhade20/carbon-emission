import React, { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Form from "../../../components/Form";

const Main = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={cn("section-mb0", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Save your time with Stacks
          </div>
          <h1 className={cn("h1", styles.title)}>How can we help</h1>
          <div className={styles.text}>
            A creative agency that lead and inspire
          </div>
          <Form
            className={styles.form}
            value={search}
            setValue={setSearch}
            onSubmit={() => handleSubmit()}
            placeholder="Search anything"
            type="text"
            name="search"
            icon="arrow-next"
          />
        </div>
        <div className={styles.bg}>
          <img
            srcSet="/images/content/contact-pic@2x.png 2x"
            src="/images/content/contact-pic.png"
            alt="Cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
