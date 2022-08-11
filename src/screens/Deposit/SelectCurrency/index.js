import React, { useState } from "react";
import cn from "classnames";
import styles from "./SelectCurrency.module.sass";
import Dropdown from "../../../components/Dropdown";
import TextInput from "../../../components/TextInput";
import Successfully from "./Successfully";
import Modal from "../../../components/Modal";


const currencyOptions = ["USDT", "WVRA", "WGLD"];
const paymentOptions = ["Bank (SWIFT)", "Bank (EUR)", "Bank (USD)"];
const priceVariants = ["50.00", "100.00", "200.00", "500.00"];

const SelectCurrency = ({ goNext }) => {
  const [currency, setCurrency] = useState(currencyOptions[0]);
  const [payment, setPayment] = useState(paymentOptions[0]);
  const [price, setPrice] = useState("50.00");
  const [visibleSuccessfully, setVisibleSuccessfully] = useState(false);


  const handleSubmit = (e) => {
    // alert();
  };

  return (
    <>
    <form className={styles.item} action="" onSubmit={() => handleSubmit()}>
      <div className={styles.title}>Select currency and payment method</div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.label}>Select currency</div>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={currency}
            setValue={setCurrency}
            options={currencyOptions}
          />
        </div>
        <div className={styles.col}>
          <div className={styles.label}>Amount ( currency )</div>
          {/* <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={payment}
            setValue={setPayment}
            options={paymentOptions}
          />
           */}

      <TextInput
          className={styles.field}
          name="card"
          type="tel"
          placeholder="10"
          // required
        />
        </div>

      </div>
      {/* <div className={styles.label}>Amount of Carbon Credits</div>
      <div className={styles.payment}>
        <div className={cn("h4", styles.sign)}>cc</div>
        <div className={styles.field}>
          <div className={styles.value}>{price}</div>
          <input
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div> */}
      {/* <div className={styles.price}>
        {parseInt(price)} <span>Carbon Credits</span>
      </div>
      <div className={styles.variants}>
        {priceVariants.map((x, index) => (
          <button
            className={cn("button-stroke button-small", styles.button)}
            type="button"
            onClick={() => setPrice(x.replace("$", ""))}
            key={index}
          >
            {x}
          </button>
        ))}
      </div> */}
      <div className={styles.btns}>
       
        <button className={cn("button", styles.button)} 
            onClick={() => setVisibleSuccessfully(true)}
        
        >
          Buy
        </button>
        &nbsp;
          &nbsp;
        <button className={cn("button", styles.button)} onClick={goNext}
          style={{
                  background: 'radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)',
                  color: '#000'}}>
        
          Get Carbon Credits with verified certificates
        </button>
      </div>
     
    </form>
     <Modal
     visible={visibleSuccessfully}
     onClose={() => setVisibleSuccessfully(false)}
   >
     <Successfully />
   </Modal>
   </>

  );
};

export default SelectCurrency;
