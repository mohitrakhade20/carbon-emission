import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";

const items = [
  {
    title: "General",
    items: [
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How can i set up a new website?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How can i set up a new website?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
    ],
  },
  {
    title: "Hosting",
    items: [
      {
        title: "How can i set up a new website?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
    ],
  },
  {
    title: "Product",
    items: [
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How can i set up a new website?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How does it work?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
      {
        title: "How can i set up a new website?",
        content:
          'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.',
      },
    ],
  },
];

const Faq = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [category, setCategory] = useState(options[0]);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <h2 className={cn("h2", styles.title)}>Frequently asked questions</h2>
          <div className={styles.nav}>
            {items.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title === category,
                })}
                onClick={() => setCategory(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={category}
            setValue={setCategory}
            options={options}
          />
        </div>
        <div className={styles.list}>
          {items
            .find((x) => x.title === category)
            .items.map((x, index) => (
              <Item
                className={styles.item}
                item={x}
                index={index}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
