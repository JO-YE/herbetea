import React from "react";
import Items from "../components/productitem";
import Mainheader from "../components/header";
import Foot from '../components/Footer'

const product = () => {
  return (
    <div>
      <Mainheader />
      <Items />
      <Foot />
    </div>
  );
};

export default product;
