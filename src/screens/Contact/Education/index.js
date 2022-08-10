import React from "react";
import cn from "classnames";
import styles from "./Education.module.sass";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "Celebrating the new Design System",
    content: "Stack solves business problems from simple to complex",
    category: "purple",
    categoryText: "design news",
    image: "/images/content/education-pic-1.png",
    image2x: "/images/content/education-pic-1@2x.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Celebrating the new Design System",
    content: "Stack solves business problems from simple to complex",
    category: "red",
    categoryText: "resources",
    image: "/images/content/education-pic-2.png",
    image2x: "/images/content/education-pic-2@2x.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Celebrating the new Design System",
    content: "Stack solves business problems from simple to complex",
    category: "green",
    categoryText: "freebies",
    image: "/images/content/education-pic-3.png",
    image2x: "/images/content/education-pic-3@2x.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Celebrating the new Design System",
    content: "Stack solves business problems from simple to complex",
    category: "purple",
    categoryText: "design news",
    image: "/images/content/education-pic-4.png",
    image2x: "/images/content/education-pic-4@2x.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Celebrating the new Design System",
    content: "Stack solves business problems from simple to complex",
    category: "purple",
    categoryText: "design news",
    image: "/images/content/education-pic-1.png",
    image2x: "/images/content/education-pic-1@2x.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Celebrating the new Design System",
    content: "Stack solves business problems from simple to complex",
    category: "red",
    categoryText: "resources",
    image: "/images/content/education-pic-2.png",
    image2x: "/images/content/education-pic-2@2x.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Celebrating the new Design System",
    content: "Stack solves business problems from simple to complex",
    category: "green",
    categoryText: "freebies",
    image: "/images/content/education-pic-3.png",
    image2x: "/images/content/education-pic-3@2x.png",
    url: "/learn-crypto-details",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Education = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.education)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.info}>
          Before asking for an answer, you may find it in our learn crypto
          center
        </div>
        <div className={styles.wrapper}>
          <Slider
            className={cn("education-slider", styles.slider)}
            {...settings}
          >
            {items.map((x, index) => (
              <Link className={styles.item} to={x.url} key={index}>
                <div className={cn("education-preview", styles.preview)}>
                  <div
                    className={cn(
                      "category",
                      {
                        "category-purple": x.category === "purple",
                      },
                      {
                        "category-green": x.category === "green",
                      },
                      {
                        "category-red": x.category === "red",
                      },
                      styles.category
                    )}
                  >
                    {x.categoryText}
                  </div>
                  <img
                    srcSet={`${x.image2x} 2x`}
                    src={x.image}
                    alt="Education"
                  />
                </div>
                <div className={styles.body}>
                  <div className={styles.title}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Education;
