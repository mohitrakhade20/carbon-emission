import React from "react";
import cn from "classnames";
import styles from "./Popular.module.sass";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Card from "./Card";

const items = [
  {
    title: "Buy & Sell Crypto",
    content:
      "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.",
    button: "Buy crypto",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    url: "/buy-crypto",
  },
  {
    title: "Trade Assets",
    content:
      "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.",
    button: "Trade now",
    image: "/images/content/card-pic-2.png",
    image2x: "/images/content/card-pic-2@2x.png",
    url: "/exchange",
  },
  {
    title: "Learn crypto",
    content:
      "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.",
    button: "Learn now",
    image: "/images/content/card-pic-3.png",
    image2x: "/images/content/card-pic-3@2x.png",
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
            Become a crypto trader in seconds
          </h2>
          <div className={styles.info}>
            We've got everything you need to start trading.
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {items.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
          </Slider>
        </div>
        <div className={styles.btns}>
          <Link className={cn("button", styles.button)} to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
