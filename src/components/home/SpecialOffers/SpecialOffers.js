import React, {useState, useEffect} from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  const [data, setData] = useState([])
  useEffect(() => {
      fetch('http://komiljonovdev.uz/Bobur/legendApi/api/getProduct')
        .then(response => response.json())
        .then(data => {
          console.log(data.products);
          setData(data.products)
        })
    }, [])
  return (
    <div className="w-full pb-20">
      <Heading heading="Maxsus takliflar" />
      {
        data?.map((item) => {
          return (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          key={item.id}
          img={spfOne}
          productName={item.category}
          price={item.cost}
          des={item.description}
        />
        <Product
          key={item.id}
          img={spfTwo}
          productName={item.category}
          price={item.cost}
          des={item.description}
        />
        <Product
          key={item.id}
          img={spfThree}
          productName={item.category}
          price={item.cost}
          des={item.description}
        />
        <Product
          key={item.id}
          img={spfFour}
          productName={item.category}
          price={item.cost}
          des={item.description}
        />
      </div>
          )
        })
      }
    </div>
  );
};

export default SpecialOffers;