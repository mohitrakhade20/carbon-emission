import React, { useState } from "react";
import Bidding from "../../components/Bidding";
import SelectCurrency from "./SelectCurrency";
import ImportantNotes from "./ImportantNotes";
import PaymentDetails from "./PaymentDetails";
import Popular from "../../components/Popular";

const steps = ["Buy with currency", "Claim Carbon Credit", "Payment details"];

const DepositFiat = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Bidding title="Buy Carbon Credit" items={steps} activeIndex={activeIndex}>
        {activeIndex === 0 && (
          <SelectCurrency goNext={() => setActiveIndex(1)} />
        )}
        {activeIndex === 1 && (
          <ImportantNotes goNext={() => setActiveIndex(2)} />
        )}
        {activeIndex === 2 && <PaymentDetails />}
      </Bidding>
      <Popular classSection="section-bg section-mb0" />
    </>
  );
};

export default DepositFiat;
