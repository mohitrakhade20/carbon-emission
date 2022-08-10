import React, { useState } from "react";
import cn from "classnames";
import styles from "./ForgotPassword.module.sass";
import Login from "../../components/Login";
import Form from "./Form";
import Verification from "./Verification";
import NewPassword from "./NewPassword";

const ForgotPassword = () => {
  const [acitveIndex, setAcitveIndex] = useState(0);

  return (
    <Login
      content="Don’t have an account?"
      linkText="Sign up for free"
      linkUrl="/sign-up"
    >
      {acitveIndex === 0 && <Form goNext={() => setAcitveIndex(1)} />}
      {acitveIndex === 1 && <Verification goNext={() => setAcitveIndex(2)} />}
      {acitveIndex === 2 && <NewPassword />}
    </Login>
  );
};

export default ForgotPassword;
