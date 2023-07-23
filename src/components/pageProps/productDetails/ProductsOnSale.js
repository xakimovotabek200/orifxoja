import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsOnSale = () => {
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
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Aksiyadagi mahsukotlar
      </h3>
      <div className="flex flex-col gap-2">
        
      </div>
      {/* {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ProductsOnSale;
