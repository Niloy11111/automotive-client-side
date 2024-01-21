import React from "react";
import { Link } from "react-router-dom";

const SingleLatest = ({ product }) => {
  const {
    _id,
    photoURL,
    productName,
    brandName,
    productType,
    productPrice,
    description,
    rating,
  } = product;
  return (
    <div className="bg-[#FFFBF8]">
      <div className="  hover:shadow-xl transition duration-150">
        <img className="h-[170px] w-full" src={photoURL}></img>

        <div className="p-3">
          <h3 className=" font-Inter font-semibold mt-2">{productName}</h3>

          <div className="flex justify-between ">
            <div>
              <h3 className="text-[#100F0F] text-sm font-Inter font-medium">
                {brandName}
              </h3>

              <h3 className="text-[#100F0F] mb-2 text-sm font-Inter font-semibold">
                {productType}
              </h3>
            </div>
            <div>
              <h3 className=" text-sm font-Inter font-bold ">{productPrice}</h3>

              <p className="text-sm font-Inter font-medium flex justify-end">
                Rating <span className="text-[#CE0000]">*</span> {rating}
              </p>
            </div>
          </div>
          <div className="flex justify-between ">
            <Link to={`/details/${_id}`}>
              <button className="w-full text-sm mt-1  px-3 py-1 text-[#FFF]  font-Inter bg-[#6473FF] rounded">
                Details
              </button>
            </Link>

            {/* <Link to={`/updateProducts/${_id}`}>
              {" "}
              <button className="w-full text-sm mt-1 px-3 py-1 text-[#FFF]  font-Inter bg-[#7A5CFA] ">
                Update
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLatest;
