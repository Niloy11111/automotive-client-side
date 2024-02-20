import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleBrandProduct from "./SingleBrandProduct";

const ProductList = () => {
  const products = useLoaderData();

  const { adds } = useContext(AuthContext);

  const params = useParams();
  const brandName = params.brandName;

  const clickedBrand = adds.filter((each) => each.brand_name === brandName);

  if (products.length > 0) {
    return (
      <div className="dark:text-[#0B0E01]">
        <h2 className="mb-10  dark:text-white lg:my-16 text-4xl lg:text-5xl font-bold font-Inter text-center  ">
          {" "}
          Our Popular Products{" "}
        </h2>

        <div className="carousel mb-16 w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={clickedBrand[0].adds_img_1}
              className="w-full h-[300px] lg:h-[500px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={clickedBrand[0].adds_img_2}
              className="w-full h-[300px] lg:h-[500px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={clickedBrand[0].adds_img_3}
              className="w-full h-[300px] lg:h-[500px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <SingleBrandProduct
              key={product._id}
              product={product}
            ></SingleBrandProduct>
          ))}
        </div>
      </div>
    );
  } else {
    new Swal("Sorry !", "Currently No Product Available Here !", "error");
  }
};

export default ProductList;
