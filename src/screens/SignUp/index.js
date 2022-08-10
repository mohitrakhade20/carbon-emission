import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignUp.module.sass";
import Login from "../../components/Login";
import Form from "./Form";
import Confirm from "./Confirm";
import Code from "./Code";

const SignUp = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Login
      content="Already have an account?"
      linkText="Login"
      linkUrl="/sign-in"
    >
      {activeIndex === 0 && <Form goNext={() => setActiveIndex(1)} />}
      {activeIndex === 1 && <Confirm goNext={() => setActiveIndex(2)} />}
      {activeIndex === 2 && <Code />}
    </Login>
  );
};

export default SignUp;
