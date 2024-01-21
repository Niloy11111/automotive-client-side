import Swal from "sweetalert2";

const Cart = ({ cart, carts, setCarts }) => {
  const {
    _id,
    photoURL,
    productName,
    brandName,
    productType,
    productPrice,
    description,
    rating,
  } = cart;

  const handleDeleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to restore this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          ` https://automotive-server-side-peach.vercel.app/addToCart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remaining = carts.filter((cart) => cart._id !== _id);
              setCarts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#FFF] dark:bg-neutral-800  border  border-[#E7E7E7]">
      <img className="lg:h-[250px] w-full" src={photoURL}></img>
      <div className="p-3">
        <h2 className="mt-2 text-[#111] dark:text-white text-xl font-semibold font-Inter">
          {productName}
        </h2>

        <p className="mt-2 text-sm font-Inter">{description.slice(0, 229)}</p>

        <h2 className="mt-2 ">
          <span className="text-[#D72050]">*</span>
          {rating}
          <span className="text-[#D72050]">*</span>
        </h2>

        <button
          onClick={() => handleDeleteProduct(_id)}
          className="bg-[#D72050] mt-3 font-semibold font-Inter px-7 py-2 text-[#FFF]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cart;
