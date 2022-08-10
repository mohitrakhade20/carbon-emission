import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./TwoFa.module.sass";
import Profile from "../../components/Profile";
import TwoFaEnabled from "./TwoFaEnabled";
import TwoFaDisabled from "./TwoFaDisabled";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "2FA",
  },
];

const TwoFa = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Profile title="2FA" breadcrumbs={breadcrumbs}>
      {disabled ? (
        <TwoFaDisabled goEnabled={() => setDisabled(false)} />
      ) : (
        <TwoFaEnabled goDisabled={() => setDisabled(true)} />
      )}
    </Profile>
  );
};

export default TwoFa;
