import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();

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

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photoURL.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const productPrice = form.productPrice.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const productInfo = {
      photoURL,
      productName,
      brandName,
      productType,
      productPrice,
      description,
      rating,
    };
    console.log(productInfo);

    fetch(
      ` https://automotive-server-side-peach.vercel.app/allProducts/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="mt-20 pb-20">
      <h2 className="text-3xl  text-center lg:text-4xl font-Inter font-extrabold uppercase mb-14">
        Update Your Product
      </h2>
      <form className="" onSubmit={handleUpdateProduct}>
        <div className="lg:w-2/4 mx-auto">
          <label htmlFor="">
            <h4 className="mb-2 font-Inter text-lg  font-semibold">
              Product Image
            </h4>
            <input
              className=" pl-5   py-2 outline-none rounded-full w-full block border   pb-3 mb-4"
              type="text"
              placeholder="photoURL"
              defaultValue={photoURL}
              src=""
              name="photoURL"
              alt=""
            />
          </label>

          <div className="flex gap-6">
            <label className="flex-1" htmlFor="">
              <h4 className="mb-2 font-Inter text-lg  font-semibold">
                Product Name
              </h4>
              <input
                className=" pl-5   py-2 outline-none rounded-full w-full block border   pb-3 mb-4"
                type="text"
                placeholder="productName"
                defaultValue={productName}
                name="productName"
                id=""
              />
            </label>
            <div className="flex-1">
              <h4 className="mb-2 text-lg font-Inter  font-semibold ">
                Brand Name
              </h4>

              <select
                defaultValue="default"
                className=" pl-5    py-2 outline-none rounded-full w-full block border  pb-3 mb-4"
                type="text"
                placeholder="Brand Name"
                defaultValue={brandName}
                name="brandName"
                id=""
              >
                <option disabled value="default">
                  Select a brand{" "}
                </option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Tesla">Tesla</option>
                <option value="Honda">Honda</option>
              </select>
            </div>
          </div>

          <div className="flex gap-6">
            <label className="flex-1" htmlFor="">
              <h4 className="mb-2 font-Inter text-lg  font-semibold">
                Product Types
              </h4>
              <input
                className=" pl-5   py-2 outline-none rounded-full w-full block border   pb-3 mb-4"
                type="text"
                placeholder="Product Type"
                defaultValue={productType}
                name="productType"
                id=""
              />
            </label>

            <label className="flex-1" htmlFor="">
              <h4 className="mb-2 font-Inter text-lg  font-semibold">
                Product Price
              </h4>
              <input
                className=" pl-5   py-2 outline-none rounded-full w-full block border   pb-3 mb-4"
                type="text"
                placeholder="Product Price"
                defaultValue={productPrice}
                name="productPrice"
                id=""
              />
            </label>
            <label className="flex-1" htmlFor="">
              <h4 className="mb-2 font-Inter text-lg  font-semibold">Rating</h4>
              <input
                className=" pl-5 bg-[#FFF]  rounded py-3 outline-none rounded-full w-full block border pb-3 mb-6"
                type="text"
                placeholder="Rating"
                defaultValue={rating}
                name="rating"
                id=""
              />
            </label>
          </div>

          <label htmlFor="">
            <h4 className="mb-2 text-lg font-Inter font-semibold">
              Short Description
            </h4>

            <textarea
              className=" pl-5   py-2 outline-none rounded-3xl w-full block border  pb-3 mb-4"
              type="text"
              placeholder="Short Description"
              name="description"
              defaultValue={description}
              cols="30"
              rows="5"
            ></textarea>
          </label>

          <button className="w-full bg-[#C9F620] py-3 rounded  text-base font-Inter font-medium rounded-full">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
