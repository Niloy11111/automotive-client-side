import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {

    const product = useLoaderData();

    const { photoURL, productName, brandName, productType, productPrice, description, rating } = product ;

    const handleAddToCart = () => {
        

        fetch('http://localhost:5000/addToCart', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({photoURL, productName, brandName, productType, productPrice, description, rating})
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                new Swal("Product added Successfully!", "Welcome back!", "success")
            }
         
        })
    }

    return (
        <div>
            
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
              <img className="rounded" src={photoURL}></img>
              </div>
         
              <div className="flex-1">
              <h2 className="text-[#100F0F] text-xl  font-inter font-medium mb-2">{productName}</h2>
                <h2 className="text-[#100F0F] text-xl  font-inter font-medium mb-2">{brandName}</h2>
                <p className="text-[#706F6F] mt-2 mb-2 text-lg font-inter font-semibold">{description}</p>

                <button onClick={handleAddToCart} className="mt-4 rounded px-10 py-3 font-inter font-bold text-xl text-[#FFF] bg-[#DC3545]">Add to Cart</button>
              </div>
            </div>


        </div>
    );
};

export default ProductDetails;