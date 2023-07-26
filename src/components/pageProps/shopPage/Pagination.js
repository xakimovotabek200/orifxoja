import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";



const items = paginationItems;
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [fetchPaginations, setFetchPaginations] = useState("");
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct")
  .then(res=>res.json())
  .then(res=>{
    console.log(res.products);
    setFetchPaginations(res.products)
  })

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset},`
    // );
    setItemStart(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        {/* <Items currentItems={currentItems} /> */}
        {Array.isArray(fetchPaginations) ?  fetchPaginations.map((fetchItem, index)=>{
          return(
            <>
            <div style={{width: "100%"}} key={fetchItem.id}>
              <div style={{width: "1000px", display: "flex", alignItems: "center",marginTop: "30px"}}>
              <div style={{ width: "100%", marginLeft: "10px"}}>
              <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
              </div>
        <div style={{ width: "100%", marginLeft: "10px"}}>
        <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
        </div>
        <div style={{width: "100%", marginLeft: "10px"}}>
        <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
        </div>
              </div>
              <div style={{width: "1000px", display: "flex", alignItems: "center",marginTop: "30px"}}>
              <div style={{ width: "100%", marginLeft: "10px"}}>
              <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
              </div>
        <div style={{ width: "100%", marginLeft: "10px"}}>
        <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
        </div>
        <div style={{width: "100%", marginLeft: "10px"}}>
        <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
        </div>
              </div>
              <div style={{width: "1000px", display: "flex", alignItems: "center",marginTop: "30px"}}>
              <div style={{ width: "100%", marginLeft: "10px"}}>
              <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
              </div>
        <div style={{ width: "100%", marginLeft: "10px"}}>
        <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
        </div>
        <div style={{width: "100%", marginLeft: "10px"}}>
        <Product
          // _id={fetchItem.id}
          img={fetchItem.image}
          productName={fetchItem.category}
          price={fetchItem.cost}
          des={fetchItem.description}
        />
        </div>
              </div>
            </div>
            </>
          )
        }) : null}
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Mahsulot from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
