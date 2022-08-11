import React, { useRef } from "react";
import Main from "./Main";
import Releases from "./Releases";
import Catalog from "./Catalog";
import News from "../../components/News";

const LearnCrypto = () => {
  const scrollToRef = useRef(null);
  const scrollToRefCatalog = useRef(null);

  return (
    <>
      <Catalog scrollToRefCatalog={scrollToRefCatalog} />
      {/* <Main scrollToRef={scrollToRef} scrollToRefCatalog={scrollToRefCatalog} /> */}
      {/* <Releases scrollToRef={scrollToRef} /> */}
      <News classSection="section-bg section-mb0" />
    </>
  );
};

export default LearnCrypto;
