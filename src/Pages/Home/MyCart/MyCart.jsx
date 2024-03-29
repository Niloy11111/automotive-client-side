import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Cart from "./MySingleCart/Cart";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const loadedcarts = useLoaderData();
  const [carts, setCarts] = useState(loadedcarts);
  return (
    <div className="pb-20">
      <h2 className="text-3xl  text-center lg:text-4xl font-Inter font-extrabold uppercase my-14">
        Your Selected Products
      </h2>

      <div className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {carts.map((cart) => (
          <Cart
            cart={cart}
            carts={carts}
            setCarts={setCarts}
            key={cart._id}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
