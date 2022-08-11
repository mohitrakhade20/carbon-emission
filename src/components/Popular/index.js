import React from "react";
import cn from "classnames";
import styles from "./Popular.module.sass";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Card from "./Card";

const items = [
  {
    title: "Corporation",
    content:
      "Buy carbon credits with added liquidity & price transparency",
    button: "Corporation",
    image: "/images/content/factory.png",
    image2x: "/images/content/factory.png",
    url: "/buy-crypto",
  },
  {
    title: "Individuals",
    content:
      "Gain access to the voluntary carbon market",
      button: "Individuals",
    image: "/images/content/individuals.png",
    image2x: "/images/content/individuals.png",
    url: "/exchange",
  },
  {
    title: "Developers",
    content:
      "Tokenize your credit issuances for immediate revenue",
    button: "Developers",
    image: "/images/content/corporate.png",
    image2x: "/images/content/corporate.png",
    url: "/learn-crypto",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Popular = ({ classSection }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          nextArrow: (
            <SlickArrow>
              <Icon name="arrow-next" size="18" />
            </SlickArrow>
          ),
          prevArrow: (
            <SlickArrow>
              <Icon name="arrow-prev" size="18" />
            </SlickArrow>
          ),
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: false,
          nextArrow: (
            <SlickArrow>
              <Icon name="arrow-next" size="18" />
            </SlickArrow>
          ),
          prevArrow: (
            <SlickArrow>
              <Icon name="arrow-prev" size="18" />
            </SlickArrow>
          ),
        },
      },
    ],
  };

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>
            Carbon x Crypto
          </h2>
          <div className={styles.info}>
            Carbon Credit operates at the intersection of the voluntary carbon market and Web3, bringing carbon offset credits on chain
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {items.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
          </Slider>
        </div>
        {/* <div className={styles.btns}>
          <Link className={cn("button", styles.button)} to="/contact">
            Contact Us
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Popular;
