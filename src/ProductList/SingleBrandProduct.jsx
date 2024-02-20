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

  const logo = () => {
    if (brandName === "Toyota") {
      return "https://i.ibb.co/Fz6p0MF/toyota.png";
    } else if (brandName === "Ford") {
      return "https://i.ibb.co/cQ6GBbJ/ford.png";
    } else if (brandName === "BMW") {
      return "https://i.ibb.co/j3w5smP/bmw.png";
    } else if (brandName === "Mercedes-Benz") {
      return "https://i.ibb.co/1nSSLVt/mercedes-benz.png";
    } else {
      return "https://i.ibb.co/Ldf1QV1/honda-car.png";
    }
  };

  return (
    <div className="pb-20">
      <div className="p-3 bg-white rounded-3xl shadow-xl transition duration-150">
        <img className="rounded-3xl h-[230px] w-full" src={photoURL}></img>

        <div className="mt-5">
          <h3 className="text-lg font-Inter font-bold uppercase mt-2">
            {productName}
          </h3>

          <div className="flex justify-between ">
            <div>
              <h3 className=" dark: text-sm font-Inter font-medium flex items-center gap-2">
                <img className="w-[25px] h-[25px]" src={logo()}></img>

                {brandName}
              </h3>

              <h3 className="flex items-center gap-2   dark: mb-2 text-sm font-Inter font-semibold ml-[3px]">
                <img
                  className="w-[20px]"
                  src="https://i.ibb.co/1LDKGX0/menu.png"
                ></img>{" "}
                {productType}
              </h3>
            </div>
            <div>
              <h3 className="flex items-center gap-1 text-sm font-Inter font-bold ">
                <img
                  className="w-[20px]"
                  src="https://i.ibb.co/pKfbfVp/dollar-symbol.png"
                ></img>{" "}
                {productPrice}
              </h3>

              <p className="items-center mr-5 gap-2 text-sm font-Inter font-medium flex justify-end">
                <img
                  className="w-[20px]"
                  src="https://i.ibb.co/5GVc6wy/stars.png"
                ></img>{" "}
                {rating}
              </p>
            </div>
          </div>
          <div className="flex justify-between ">
            <Link to={`/details/${_id}`}>
              <button className=" px-4 rounded mt-1 py-1   font-Inter bg-[#C6FD0F] ">
                Details
              </button>
            </Link>

            <Link to={`/updateProducts/${_id}`}>
              {" "}
              <button className="px-4 rounded mt-1 py-1   font-Inter bg-[#D4FCE0]  ">
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
