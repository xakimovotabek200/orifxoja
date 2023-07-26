import React, {useState, useEffect} from "react";
import Heading from "../../../../components/home/Products/Heading";
import Product from "../../../../components/home/Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../../assets/images/index";

const Shoes = () => {
  const [data, setData] = useState([])
  useEffect(() => {
      fetch('http://komiljonovdev.uz/Bobur/legendApi/api/getCategory')
        .then(response => response.json())
        .then(response => {
          console.log(response.data);
          setData(response.data)
        })
    }, [])
  return(
    <div className="w-full pb-20">
      <Heading heading="Maxsus takliflar" />
      {Array.isArray(data) ?
        data.map((item) => {
          return (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          key={item.id}
          img={spfOne}
          productName={item.category_name}
          
        />
       
      </div>
          )
        }): "Tovar mavjud emas"
      }
    </div> 
  )
}

export default Shoes;
