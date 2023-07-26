// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const MyComponent = () => {
//   const [products, setProducts] = useState("");
//   const fetchUser = async () => {
//     const fetchUserUrl = "https://fakestoreapi.com/products";
//     try {
//       const response = await axios.get(fetchUserUrl);
//       setProducts(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("fetchUser xatolik", error);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return (
//     <div>
//       {Array.isArray(products)
//         ? products.map((item) => <h1 key={item.id}>{item.category}</h1>)
//         : null}
//     </div>
//   );
// };

// export default MyComponent;

// import React from "react";
// import { spfOne } from "./assets/images/index";
// import {
//   default as Heading,
//   default as Product,
// } from "./components/home/Products/Product";
// import { BrowserRouter as Router } from "react-router-dom";

// const products = () => {
//   return (
//     <div className="w-full pb-20">
//       <Heading heading="Maxsus takliflar" />
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
//         <Product
//           _id="1101"
//           img={spfOne}
//           productName="Cap for Boys"
//           price="35.00"
//           color="Blank and White"
//           badge={true}
//           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
//         />
//       </div>
//     </div>
//   );
// };

// export default products;

import React from "react";

function mycomponent() {
  return <div>mycomponent</div>;
}

export default mycomponent;
