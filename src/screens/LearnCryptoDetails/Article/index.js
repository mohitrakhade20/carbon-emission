import React from "react";
import cn from "classnames";
import styles from "./Article.module.sass";
import Share from "../../../components/Share";
import Favorite from "../../../components/Favorite";

const Article = () => {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <h3>Introduction</h3>
          <p>
            For traders who love technical analysis, robust charting tools are
            essential. TradingView is one option for both amateur and
            experienced traders. It offers numerous trading and charting tools
            and also a free membership option. Let’s face it... not everyone has
            the money or need for a Bloomberg terminal subscription.
          </p>
          <p>
            The Stacks series of products: Stacks: Landing Page Kit, Stacks:
            Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready
            library of stackable content blocks built in React Native.
          </p>
          <p>
            Mix-and-match dozens of responsive elements to quickly configure
            your favorite landing page layouts or hit the ground running with 10
            pre-built templates, all in light or dark mode."{" "}
          </p>
          <h3>What does TradingView do?</h3>
          <p>
            The Stacks series of products: Stacks: Landing Page Kit, Stacks:
            Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready
            library of stackable content blocks built in React Native.
          </p>
          <p>
            Mix-and-match dozens of responsive elements to quickly configure
            your favorite landing page layouts or hit the ground running with 10
            pre-built templates, all in light or dark mode."
          </p>
          <figure>
            <img src="/images/content/photo.jpg" alt="Content" />
          </figure>
          <h3>How expensive is TradingView?</h3>
          <p>
            The Stacks series of products: Stacks: Landing Page Kit, Stacks:
            Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready
            library of stackable content blocks built in React Native.
          </p>
          <p>
            Mix-and-match dozens of responsive elements to quickly configure
            your favorite landing page layouts or hit the ground running with 10
            pre-built templates, all in light or dark mode."
          </p>
          <h3>Understanding the TradingView UI</h3>
          <p>
            The Stacks series of products: Stacks: Landing Page Kit, Stacks:
            Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready
            library of stackable content blocks built in React Native.
          </p>
          <p>
            Mix-and-match dozens of responsive elements to quickly configure
            your favorite landing page layouts or hit the ground running with 10
            pre-built templates, all in light or dark mode."
          </p>
        </div>
        <div className={styles.actions}>
          <Share openUp />
          <Favorite className={styles.favorite} />
        </div>
      </div>
    </div>
  );
};

export default Article;
