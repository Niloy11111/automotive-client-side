import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData();

    const {_id, photoURL, productName, brandName, productType, productPrice, description, rating } = product ;

    const handleUpdateProduct = e => {
        e.preventDefault() ;
        const form = e.target ;
        const photoURL = form.photoURL.value ;
        const productName = form.productName.value ;
        const brandName = form.brandName.value ;
        const productType = form.productType.value ;
        const productPrice = form.productPrice.value ;
        const description = form.description.value ;
        const rating = form.rating.value ;
       
        const productInfo = {
            photoURL, productName, brandName, productType, productPrice,description, rating, 
        }
        console.log(productInfo)

        fetch(`http://localhost:5000/allProducts/${_id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(productInfo)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                 Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
        
    }
    return (
        <div className="mb-20">

            <h2 className="text-3xl font-inter font-bold text-center mb-7 text-[#1C1B1B]">Update Your Product</h2>
            <form className="" onSubmit={handleUpdateProduct}>

                <div className="lg:w-2/4 mx-auto">
                 
                    
              <label htmlFor="">
                <h4 className="mb-2 text-lg text-[#0D0925] font-semibold">Product Image</h4>
              <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-6" type="text" placeholder="photoURL" defaultValue={photoURL} src="" name="photoURL" alt="" />
              </label>

                <label htmlFor="">
                <h4 className="mb-2 text-lg text-[#0D0925] font-semibold">Product Name</h4>
                <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="productName" defaultValue={productName} name="productName" id="" />
                </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg text-[#0D0925] font-semibold">Brand Name</h4>
               <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Brand Name" defaultValue={brandName} name="brandName" id="" />
               </label>

             <label htmlFor="">
             <h4 className="mb-2 text-lg text-[#0D0925] font-semibold">Product Types</h4>
             <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Product Type"defaultValue={productType} name="productType" id="" />
             </label>
              
             <label htmlFor="">
             <h4 className="mb-2 text-lg text-[#0D0925] font-semibold">Product Price</h4>
             <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Product Price"defaultValue={productPrice} name="productPrice" id="" />
             </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg text-[#0D0925] font-semibold">Short Description</h4>
                 <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Short Description" defaultValue={description} name="description" id="" />
               </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg text-[#0D0925] font-semibold">Rating</h4>
               <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-6" type="text" placeholder="Rating"defaultValue={rating} name="rating" id="" />
               </label>
                <button className="w-full bg-[#009EE2] py-3 rounded text-[#FFF] text-base font-inter font-medium"> Submit </button>
              
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;