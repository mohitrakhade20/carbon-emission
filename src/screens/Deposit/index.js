import React, { useState } from "react";
import Bidding from "../../components/Bidding";
import SelectCurrency from "./SelectCurrency";
import ImportantNotes from "./ImportantNotes";
import PaymentDetails from "./PaymentDetails";
import Popular from "../../components/Popular";

const steps = ["Buy with currency", "Claim Carbon Credit", "Payment details"];

const Deposit = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      
          <SelectCurrency goNext={() => setActiveIndex(1)} />
       
    </>
  );
};

export default Deposit;
