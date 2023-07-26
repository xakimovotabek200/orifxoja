import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
      });
  }, []);

  return (
    <div className="w-full pb-16">
      <Heading heading="Yangi kelganlar" />
      {data?.map((item) => {
        return (
          <Slider {...settings} key={item.id}>
            <div className="px-2">
              <Product
                key={item.id}
                img={newArrOne}
                productName={item.name}
                price={item.cost}
                des={item.description}
              />
            </div>
            <div className="px-2">
              <Product
                key={item.id}
                img={newArrTwo}
                productName={item.name}
                price={item.cost}
                des={item.description}
              />
            </div>
            <div className="px-2">
              <Product
                key={item.id}
                img={newArrThree}
                productName={item.name}
                price={item.cost}
                des={item.description}
              />
            </div>
            <div className="px-2">
              <Product
                key={item.id}
                img={newArrFour}
                productName={item.category}
                price={item.cost}
                des={item.description}
              />
            </div>
          </Slider>
        );
      })}
    </div>
  );
};

export default NewArrivals;
