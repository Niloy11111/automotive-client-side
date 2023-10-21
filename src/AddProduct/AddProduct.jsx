

const AddProduct = () => {

    const handleAddProduct = e => {
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

        fetch(' https://automotive-server-side-eur51ebix-niloys-projects-a44fef83.vercel.app/addProduct', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(productInfo)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
    }
    return (
        <div className="mb-20">

            <h2 className="text-4xl font-inter font-bold text-center mb-7  ">Let's Add a Product</h2>
            <form className="" onSubmit={handleAddProduct}>

                <div className="lg:w-2/4 mx-auto">
                 
                    
              <label htmlFor="">
                <h4 className="mb-2 text-lg  font-bold">Product Image</h4>
              <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-6" type="text" placeholder="photoURL" src="" name="photoURL" alt="" />
              </label>

                <label htmlFor="">
                <h4 className="mb-2 text-lg  font-bold">Product Name</h4>
                <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="productName" name="productName" id="" />
                </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg  font-bold">Brand Name</h4>
               <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Brand Name" name="brandName" id="" />
               </label>

             <label htmlFor="">
             <h4 className="mb-2 text-lg  font-bold">Product Types</h4>
             <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Product Type" name="productType" id="" />
             </label>
              
             <label htmlFor="">
             <h4 className="mb-2 text-lg  font-bold">Product Price</h4>
             <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Product Price" name="productPrice" id="" />
             </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg  font-bold">Short Description</h4>
                 <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-4" type="text" placeholder="Short Description" name="description" id="" />
               </label>

               <label htmlFor="">
               <h4 className="mb-2 text-lg  font-bold">Rating</h4>
               <input className=" pl-5 bg-[#FFF]  rounded py-3 outline-none w-full block border pb-3 mb-6" type="text" placeholder="Rating" name="rating" id="" />
               </label>
                <button className="w-full bg-[#009EE2] py-3 rounded text-[#FFF] text-base font-inter font-medium"> Add Product </button>
              
                </div>
            </form>
        </div>
    );
};

export default AddProduct;