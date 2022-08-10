import React, { useState } from "react";
import Bidding from "../../components/Bidding";
import SelectCrypto from "../../components/SelectCrypto";
import EnterAmount from "./EnterAmount";
import PaymentInfo from "./PaymentInfo";
import ConfirmOrder from "./ConfirmOrder";
import Popular from "../../components/Popular";

const steps = [
  "Select crypto",
  "Enter amount",
  "Payment info",
  "Confirm order",
];

const BuyCrypto = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Bidding title="Buy crypto" items={steps} activeIndex={activeIndex}>
        {activeIndex === 0 && <SelectCrypto goNext={() => setActiveIndex(1)} />}
        {activeIndex === 1 && (
          <EnterAmount
            goBack={() => setActiveIndex(0)}
            goNext={() => setActiveIndex(2)}
          />
        )}
        {activeIndex === 2 && (
          <PaymentInfo
            goBack={() => setActiveIndex(1)}
            goNext={() => setActiveIndex(3)}
          />
        )}
        {activeIndex === 3 && (
          <ConfirmOrder
            goBack={() => setActiveIndex(2)}
            goStart={() => setActiveIndex(0)}
          />
        )}
      </Bidding>
      <Popular classSection="section-bg section-mb0" />
    </>
  );
};

export default BuyCrypto;
