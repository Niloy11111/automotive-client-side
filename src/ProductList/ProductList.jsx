import { useLoaderData, useParams } from "react-router-dom";
import SingleBrandProduct from "./SingleBrandProduct";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ProductList = () => {
    const products = useLoaderData() ;

   const {adds} = useContext(AuthContext)

   const params = useParams() ;
   const brandName = params.brandName ;
  
   const clickedBrand = adds.filter(each => each.brand_name === brandName)


    return (
        <div className="mb-20">
            <h2 className="mb-10 lg:my-16 text-4xl lg:text-5xl font-bold font-Inter text-center text-[#100F0F]"> Our Products </h2>

            <div className="carousel mb-16 w-full">
  <div id="slide1" className="carousel-item relative w-full">
<img src={clickedBrand[0].adds_img_1} className="w-full h-[300px] lg:h-[700px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={clickedBrand[0].adds_img_2} className="w-full h-[300px] lg:h-[700px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={clickedBrand[0].adds_img_3} className="w-full h-[300px] lg:h-[700px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {
                    products.map(product => <SingleBrandProduct
                    key={product._id}
                    product={product}
                    ></SingleBrandProduct> )
                }
            </div>


        </div>
    );
};

export default ProductList;