import React, { useState } from "react";
import Bidding from "../../components/Bidding";
import SelectCrypto from "../../components/SelectCrypto";
import EnterAmount from "./EnterAmount";
import Confirm from "./Confirm";

const steps = ["Select crypto", "Enter amount", "Confirm"];

const SellCrypto = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Bidding title="Sell crypto" items={steps} activeIndex={activeIndex}>
        {activeIndex === 0 && <SelectCrypto goNext={() => setActiveIndex(1)} />}
        {activeIndex === 1 && (
          <EnterAmount
            goBack={() => setActiveIndex(0)}
            goNext={() => setActiveIndex(2)}
          />
        )}
        {activeIndex === 2 && (
          <Confirm
            goBack={() => setActiveIndex(1)}
            goFinish={() => setActiveIndex(0)}
          />
        )}
      </Bidding>
    </>
  );
};

export default SellCrypto;
