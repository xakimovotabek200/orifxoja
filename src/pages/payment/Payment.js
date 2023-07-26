import React from "react";
import { Link } from "react-router-dom";
import Mycomponent from "../../mycomponent";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Mycomponent />
      <Link to="/">
        <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
          Koʻproq oʻrganing
        </button>
      </Link>
    </div>
  );
};

export default Payment;
