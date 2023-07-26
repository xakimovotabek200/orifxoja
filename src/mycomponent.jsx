import React, { useEffect } from "react";
import { useForm } from "./useFrom";

const objectApp = {
  name: "",
  phone: "",
  location: "",
  product: "",
};
function Mycomponent() {
  const [value, pocketInfo] = useForm(objectApp);
  const HandelArea = (e) => {
    e.preventDefault();
    console.log(value);
  };
  useEffect(() => {
    console.log("salom");
  }, [value.name]);

  const addApplication = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(value);

    let response = await fetch(
      "https://komiljonovdev.uz/Bobur/legendApi/api/addApplication",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();

    console.log(bodyContent);
  };
  return (
    <form onSubmit={HandelArea}>
      <input
        className="w-full py-1 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="Matn"
        onChange={pocketInfo}
        name="name"
        value={value.name}
      />
      <br />
      <input
        className="w-full py-1 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="manzil"
        onChange={pocketInfo}
        name="location"
        value={value.location}
      />
      <br />
      <input
        className="w-full py-1 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="phone"
        placeholder="telefon raqam"
        onChange={pocketInfo}
        name="phone"
        value={value.phone}
      />
      <br />

      <input
        className="w-full py-1 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="mahsulot"
        onChange={pocketInfo}
        name="product"
        value={value.product}
      />
      <br />
      <button
        onClick={addApplication}
        className="bg-primeColor text-white rounded-xl text-lg mt-6 font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold"
      >
        Arizani jonatish
      </button>
    </form>
  );
}

export default Mycomponent;
