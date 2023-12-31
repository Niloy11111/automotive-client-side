import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ProductDetails = () => {

    const {user} = useContext(AuthContext)

    console.log(user)

    const {email, uid } = user  ;
    console.log(email)

    const product = useLoaderData();

    const { photoURL, productName, brandName, productType, productPrice, description, rating } = product ;

    const handleAddToCart = () => {
        

        fetch(' https://automotive-server-side-eur51ebix-niloys-projects-a44fef83.vercel.app/addToCart', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({photoURL,email,uid, productName, brandName, productType, productPrice, description, rating})
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
        <div className="mb-14">
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
              <img className="rounded w-full h-full" src={photoURL}></img>
              </div>
         
              <div className="flex-1">
              <h2 className="text-[#100F0F] mb-3 text-4xl  font-inter font-semibold">{productName}</h2>
                <h2 className="text-[#100F0F]  text-2xl  font-inter font-semibold mb-2">{brandName}</h2>

                <h2 className="text-[#100F0F]  text-xl  font-inter font-medium mb-2">{productPrice}</h2>
                <p className="text-[#706F6F] mt-2 mb-2 text-lg font-inter font-semibold">{description}</p>

               <button onClick={handleAddToCart} className="mt-4 rounded px-10 py-3 font-inter font-bold text-xl text-[#FFF] bg-[#DC3545]">Add to Cart</button>
              </div>
            </div>


        </div>
    );
};

export default ProductDetails;