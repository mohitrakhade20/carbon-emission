import React, { useState } from "react";
import cn from "classnames";
import styles from "./Activity.module.sass";
import Icon from "../../components/Icon";
import Actions from "../../components/Actions";
import Calendar from "../../components/Calendar";
import Export from "../../components/Export";
import Dropdown from "../../components/Dropdown";
import Table from "./Table";

const navigation = [
  "All type",
  "Withdrawals",
  "Deposit",
  "Transfer",
  "Bank credit",
];

const table = [
  {
    withdrew: true,
    currency: "Bitcoin",
    image: "/images/content/currency/bitcoin.svg",
    amount: "1,641.20 BTC",
    address: "3DkQyAdif6kQLPMBu",
    transaction: "3DkQyAdif6kQLPMBu",
    date: "2021-06-05 04:12:30",
    url: "/buy-crypto",
  },
  {
    deposited: true,
    currency: "Bitcoin",
    image: "/images/content/currency/bitcoin.svg",
    amount: "1,641.20 BTC",
    address: "3DkQyAdif6kQLPMBu",
    transaction: "3DkQyAdif6kQLPMBu",
    date: "2021-06-05 04:12:30",
    url: "/buy-crypto",
  },
  {
    withdrew: true,
    currency: "Bitcoin",
    image: "/images/content/currency/bitcoin.svg",
    amount: "1,641.20 BTC",
    address: "3DkQyAdif6kQLPMBu",
    transaction: "3DkQyAdif6kQLPMBu",
    date: "2021-06-05 04:12:30",
    url: "/buy-crypto",
  },
  {
    deposited: true,
    currency: "Bitcoin",
    image: "/images/content/currency/bitcoin.svg",
    amount: "1,641.20 BTC",
    address: "3DkQyAdif6kQLPMBu",
    transaction: "3DkQyAdif6kQLPMBu",
    date: "2021-06-05 04:12:30",
    url: "/buy-crypto",
  },
  {
    deposited: true,
    currency: "Bitcoin",
    image: "/images/content/currency/bitcoin.svg",
    amount: "1,641.20 BTC",
    address: "3DkQyAdif6kQLPMBu",
    transaction: "3DkQyAdif6kQLPMBu",
    date: "2021-06-05 04:12:30",
    url: "/buy-crypto",
  },
];

const Activity = () => {
  const [email, setEmail] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const [sorting, setSorting] = useState(navigation[0]);

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={styles.activity}>
      <div className={cn("container", styles.container)}>
        <div className={styles.body}>
          <div className={styles.top}>
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
            <div className={styles.dropdown}>
              <Dropdown
                className={styles.dropdown}
                classDropdownHead={styles.dropdownHead}
                value={sorting}
                setValue={setSorting}
                options={navigation}
              />
            </div>
            <form
              className={styles.form}
              action=""
              onSubmit={() => handleSubmit()}
            >
              <input
                className={styles.input}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="search"
                placeholder="Search"
                required
              />
              <button className={styles.result}>
                <Icon name="search" size="20" />
              </button>
            </form>
            <Calendar className={styles.calendar} />
          </div>
          <div className={styles.line}>
            <h4 className={cn("h4", styles.title)}>Activity</h4>
            <Export className={styles.export} />
          </div>
          <Table className={styles.table} items={table} />
        </div>
        <Actions className={styles.actions} />
      </div>
    </div>
  );
};

export default Activity;
