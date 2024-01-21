import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  const { email, uid } = user;
  console.log(email);

  const product = useLoaderData();

  const {
    photoURL,
    productName,
    brandName,
    productType,
    productPrice,
    description,
    rating,
  } = product;

  const handleAddToCart = () => {
    fetch(" https://automotive-server-side-peach.vercel.app/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        photoURL,
        email,
        uid,
        productName,
        brandName,
        productType,
        productPrice,
        description,
        rating,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          new Swal("Product added Successfully!", "Welcome back!", "success");
        }
      });
  };

  return (
    <div className="h-[88vh] ">
      <div className=" gap-12 items-center">
        <h2 className="text-[#100F0F] dark:text-white mb-3 text-2xl  font-Inter font-bold mt-10">
          {productName}
        </h2>
        <img className="rounded w-[700px] h-[500px]" src={photoURL}></img>

        <div className=" mt-8">
          <h2 className="font-Inter font-semibold mb-2">{brandName}</h2>

          <h2 className="  font-Inter font-semibold ">{productPrice}</h2>
          <p className="w-2/3 font-Inter  mb-2">{description}</p>

          <button
            onClick={handleAddToCart}
            className="mt-4  px-6 py-2 font-Inter font-semibold text-[#FFF] bg-[#DC3545]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
