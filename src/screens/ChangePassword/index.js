import React, { useState } from "react";
import Profile from "../../components/Profile";
import Form from "./Form";
import Finish from "./Finish";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Change password",
  },
];

const ChangePassword = () => {
  const [finish, setFinish] = useState(false);

  return (
    <Profile title="Change password" breadcrumbs={breadcrumbs}>
      {finish ? <Finish /> : <Form goFinish={() => setFinish(true)} />}
    </Profile>
  );
};

export default ChangePassword;
