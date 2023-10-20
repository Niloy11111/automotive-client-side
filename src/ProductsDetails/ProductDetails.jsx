import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product = useLoaderData();

    const {_id, photoURL, productName, brandName, productType, productPrice, description, rating } = product ;


    return (
        <div>
            
            <div className="flex gap-6 items-center">
              <div className="flex-1">
              <img src={photoURL}></img>
              </div>
         
              <div className="flex-1">
              <h2 className="text-[#100F0F] text-xl  font-inter font-medium mb-2">{productName}</h2>
                <h2 className="text-[#100F0F] text-xl  font-inter font-medium mb-2">{brandName}</h2>
                <p className="text-[#706F6F] mb-2 text-lg font-inter font-semibold">{description}</p>
              </div>
            </div>


        </div>
    );
};

export default ProductDetails;