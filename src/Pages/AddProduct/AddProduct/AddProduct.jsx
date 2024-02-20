import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const AddProduct = () => {
  const axiosPublic = UseAxiosPublic();

  const { register, handleSubmit } = useForm();

  const onSubmitAddProduct = async (data) => {
    const productInfo = {
      photoURL: data.photoURL,
      productName: data.productName,
      brandName: data.brandName,
      productType: data.productType,
      productPrice: data.productPrice,
      description: data.description,
      rating: data.rating,
    };
    console.log(productInfo);

    const productRes = await axiosPublic.post("/addProduct", productInfo);

    if (productRes.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.productName} is added`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="mt-20 h-[86vh]">
      <h2 className="text-3xl  text-center lg:text-4xl font-Inter font-extrabold uppercase mb-14">
        Let's Add a Product
      </h2>
      <form className="">
        <div className="lg:w-2/4 mx-auto">
          <label htmlFor="">
            <h4 className="mb-2 text-lg font-Inter font-semibold">
              Product Image
            </h4>
            <input
              {...register("photoURL", { required: true })}
              className=" pl-5   py-2 outline-none w-full block border  pb-3 mb-6 rounded-3xl"
              type="text"
              placeholder="photoURL"
            />
          </label>

          <div className="flex gap-6">
            <label className="flex-1" htmlFor="">
              <h4 className="mb-2 font-Inter text-lg  font-semibold">
                Product Name
              </h4>
              <input
                {...register("productName", { required: true })}
                className=" pl-5   py-2 outline-none w-full block border   pb-3 mb-4 rounded-3xl"
                type="text"
                placeholder="productName"
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
                {...register("brandName", { required: true })}
                className=" pl-5    py-2 outline-none w-full block border  pb-3 mb-4 rounded-3xl"
                type="text"
                placeholder="Brand Name"
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

          <div className="flex gap-4">
            <label className="flex-1" htmlFor="">
              <h4 className="mb-2 text-lg  font-Inter font-semibold">
                Product Types
              </h4>
              <input
                {...register("productType", { required: true })}
                className=" pl-5   py-2 outline-none w-full block border  pb-3 mb-4 rounded-3xl"
                type="text"
                placeholder="Product Type"
                name="productType"
                id=""
              />
            </label>

            <label className="flex-1" htmlFor="">
              <h4 className="mb-2 text-lg font-Inter font-semibold">
                Product Price
              </h4>
              <input
                {...register("productPrice", { required: true })}
                className=" pl-5   py-2 outline-none w-full block border  pb-3 mb-4 rounded-3xl"
                type="text"
                placeholder="Product Price"
                name="productPrice"
                id=""
              />
            </label>

            <label className="flex-1" htmlFor="">
              <h4 className="mb-2 text-lg font-Inter font-semibold">Rating</h4>
              <input
                {...register("rating", { required: true })}
                className=" pl-5   py-2 outline-none w-full block border  pb-3 mb-6 rounded-3xl"
                type="text"
                placeholder="Rating"
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
              {...register("description", { required: true })}
              className=" pl-5   py-2 outline-none w-full block border  pb-3 mb-4 rounded-3xl"
              type="text"
              placeholder="Short Description"
              name="description"
              cols="30"
              rows="5"
            ></textarea>
          </label>

          <button
            onClick={handleSubmit(onSubmitAddProduct)}
            className="w-full bg-[#C9F620] py-2   text-base font-Inter font-medium rounded-3xl"
          >
            {" "}
            Add Product{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
