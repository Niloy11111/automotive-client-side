import { useLoaderData } from "react-router-dom";
import SingleBrandProduct from "./SingleBrandProduct";
import { useEffect, useState } from "react";


const ProductList = () => {

    const [brands , setBrands ] = useState([]);
    
    const [ toyota ] = brands ;
    console.log(toyota)

    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, [])
    
    const products = useLoaderData() ;

    return (
        <div className="mb-20">
            <h2 className="my-16 text-6xl font-bold font-Inter text-center text-[#100F0F]"> Our Products </h2>

            <div className="carousel mb-16 w-full">
  <div id="slide1" className="carousel-item relative w-full">
<img  src="" className="w-full h-[560px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

            <div className="grid grid-cols-4 gap-6">
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