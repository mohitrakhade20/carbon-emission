import React, { useState } from "react";
import cn from "classnames";
import styles from "./ProfileInfo.module.sass";
import Profile from "../../components/Profile";
import Dropdown from "../../components/Dropdown";
import Switch from "../../components/Switch";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Profile info",
  },
];

const languageOptions = ["🇺🇸 USA", "🇻🇳 VIE", "🇷🇺 RUS"];

const settings = [
  {
    title: "level 1",
    items: [
      {
        title: "Deposit assets",
        id: 1,
      },
      {
        title: "Withdraw assets",
        content: "Enabled $1,000,000/day",
      },
      {
        title: "Card purchases",
        id: 2,
      },
      {
        title: "Bank deposit",
        id: 3,
      },
    ],
  },
  {
    title: "level 2",
    items: [
      {
        title: "Fiat and Spot wallet",
        id: 4,
      },
      {
        title: "Margin wallet",
        content: "Enabled 100x Leverage",
      },
    ],
  },
];

const ProfileInfo = () => {
  const [language, setLanguage] = useState(languageOptions[0]);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <Profile title="Profile info" breadcrumbs={breadcrumbs}>
      <div className={styles.head}>
        <div className={styles.details}>
          <div className={styles.user}>Breanne Schinner</div>
          <div className={styles.email}>schinner@ui8.net</div>
          <div className={styles.level}>Level 2 verified</div>
        </div>
        <Dropdown
          className={styles.dropdown}
          classDropdownHead={styles.dropdownHead}
          value={language}
          setValue={setLanguage}
          options={languageOptions}
        />
      </div>
      <div className={styles.settings}>
        <div className={styles.title}>Features</div>
        {settings.map((x, index) => (
          <div className={styles.box} key={index}>
            <div className={styles.subtitle}>{x.title}</div>
            {x.items.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.category}>{item.title}</div>
                {item.id && (
                  <Switch
                    className={styles.switch}
                    value={selectedFilters.includes(item.id)}
                    onChange={() => handleChange(item.id)}
                  />
                )}
                {item.content && (
                  <div className={styles.content}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>Save settings</button>
      </div>
    </Profile>
  );
};

export default ProfileInfo;
