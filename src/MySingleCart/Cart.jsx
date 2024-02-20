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
    <div className="bg-[#EDFDE8] p-4 rounded-3xl dark:bg-neutral-800  border  border-[#E7E7E7]">
      <img className="lg:h-[250px] rounded-xl w-full" src={photoURL}></img>
      <div className="p-3">
        <h2 className="mt-2 dark:text-white text-xl font-semibold font-Inter">
          {productName}
        </h2>

        <p className="mt-2 text-sm font-Inter">{description.slice(0, 229)}</p>

        <div className="flex justify-between">
          <div>
            <h2 className="mt-2 flex gap-2  items-center">
              <img
                className="w-[30px]"
                src="https://i.ibb.co/5GVc6wy/stars.png"
              ></img>
              {rating}
            </h2>
          </div>

          <button
            onClick={() => handleDeleteProduct(_id)}
            className="bg-[#CAFCDD] px-4 py-2  rounded hover:shadow-lg hover:translate-x-1 transition-all duration-300 "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
