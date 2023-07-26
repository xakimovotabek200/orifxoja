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
        type="text"
        placeholder="text"
        onChange={pocketInfo}
        name="name"
        value={value.name}
      />
      <br />
      <input
        type="text"
        placeholder="addres"
        onChange={pocketInfo}
        name="location"
        value={value.location}
      />
      <br />
      <input
        type="phone"
        placeholder="phone"
        onChange={pocketInfo}
        name="phone"
        value={value.phone}
      />
      <br />

      <input
        type="text"
        placeholder="product"
        onChange={pocketInfo}
        name="product"
        value={value.product}
      />
      <br />
      <button onClick={addApplication}>click it</button>
    </form>
  );
}

export default Mycomponent;
