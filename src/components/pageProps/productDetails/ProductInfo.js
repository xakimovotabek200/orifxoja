import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
<<<<<<< HEAD
      <p className="text-sm">
Birinchi bo'lib sharh qoldiring.</p>
=======
      <p className="text-sm">Birinchi bo'lib sharh qoldiring</p>
>>>>>>> 3d7e66db397859b270454382f516cb1364fafe90
      <p className="font-medium text-lg">
        <span className="font-normal">Ranglar:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
<<<<<<< HEAD
        Savatchaga qo'shish
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Kategoriyalar:</span> Bahor
        to'plam, Streetwear, Ayollar Teglar: xususiyatli SKU: N/A
=======
        Savatga qo'shish
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Turlari:</span> Baxorgi
        Kolleksiyalr turkiyadan kelgan
>>>>>>> 3d7e66db397859b270454382f516cb1364fafe90
      </p>
    </div>
  );
};

export default ProductInfo;
