import { Link } from "react-router-dom";

const SingleBrandProduct = ({ product }) => {
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
    <div className="pb-20">
      <div className="  hover:shadow-xl transition duration-150">
        <img className="h-[230px] w-full" src={photoURL}></img>

        <div className="p-3">
          <h3 className="text-lg font-Inter font-semibold mt-2">
            {productName}
          </h3>

          <div className="flex justify-between ">
            <div>
              <h3 className="text-[#100F0F] dark:text-white text-sm font-Inter font-medium">
                {brandName}
              </h3>

              <h3 className="text-[#100F0F] dark:text-white mb-2 text-sm font-Inter font-semibold">
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
              <button className="w-full text-sm mt-1  px-3 py-1 text-[#FFF]  font-Inter bg-[#6473FF] ">
                Details
              </button>
            </Link>

            <Link to={`/updateProducts/${_id}`}>
              {" "}
              <button className="w-full text-sm mt-1 px-3 py-1 text-[#FFF]  font-Inter bg-[#7A5CFA] ">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBrandProduct;
