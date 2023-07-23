import axios from "axios";
import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [products, setProducts] = useState("");
  const fetchUser = async () => {
    const fetchUserUrl =
      "https://komiljonovdev.uz/Bobur/legendApi/api/getProduct";
    try {
      const response = await axios.get(fetchUserUrl);
      setProducts(response.data.products);
      console.log(response.data);
    } catch (error) {
      console.error("fetchUser xatolik", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {Array.isArray(products)
        ? products.map((item, index) => <h1 key={index}>{item.cost}</h1>)
        : null}
    </div>
  );
};

export default MyComponent;
