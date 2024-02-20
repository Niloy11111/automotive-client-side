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
    <div className="">
      <div className="  ">
        <img className="h-[220px] rounded-3xl w-full" src={photoURL}></img>

        <div className="p-3 ">
          <h3 className=" font-Inter  uppercase font-bold ">{productName}</h3>

          <div className="flex justify-between my-4">
            <div>
              <h3 className=" text-sm font-Inter font-medium">{brandName}</h3>

              <h3 className=" text-sm font-Inter font-semibold">
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
          <div className="w-full">
            <Link to={`/details/${_id}`}>
              <button className="w-full text-sm mt-1 py-2   font-Inter bg-[#D4FCE0] dark:text-[#0B0E01] rounded">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLatest;
