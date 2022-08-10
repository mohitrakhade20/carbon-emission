import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Form from "../Form";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
  {
    title: "Home",
    url: "/exchange",
  },
  {
    title: "Token & Crypto",
    url: "/buy-crypto",
  },
  {
    title: "About",
    url: "/market",
  },
  {
    title: "Partnerships",
    url: "/learn-crypto",
  },
  {
    title: "Privacy Policy",
    url: "/contact",
  },
];

const socials = [
  {
    title: "facebook",
    size: "22",
    url: "https://www.facebook.com/aaoblocktech/",
  },
  {
    title: "twitter",
    size: "22",
    url: "https://twitter.com/aaoblocktech",
  },
  {
    title: "instagram",
    size: "22",
    url: "https://www.instagram.com/aaoblocktech/",
  },
  {
    title: "dribbble",
    size: "22",
    url: "https://dribbble.com/aaoblocktech",
  },
  {
    title: "behance",
    size: "22",
    url: "https://www.behance.net/aaoblocktech",
  },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <img
                className={styles.picDesktop}
                src="images/logo-light.png"
                alt="Carbon Credit"
                
              />
              <Image
                className={styles.picMobile}
                src="/images/logo-light.png"
                srcDark="/images/logo-light.png"
                alt="Carbon Credit"
              />
            </Link>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                footer nav
                <Icon name="arrow-down" size="24" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.active}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>contact</div>
            <div className={styles.info}>
              <p>AAO Blocktech</p>
              <p>Bangalore</p>
              <p>India</p>
              <p>info@aaoblocktech.com</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>newsletter</div>
            <div className={styles.info}>
              Subscribe our newsletter to get more free design course and
              resource.
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={() => handleSubmit()}
              placeholder="Enter your email"
              type="email"
              name="email"
              icon="arrow-next"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
            Copyright © 2021 AAO Blocktech All rights reserved
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Icon name={x.title} size={x.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
