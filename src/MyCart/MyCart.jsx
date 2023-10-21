import { useLoaderData } from "react-router-dom";
import Cart from "../MySingleCart/Cart";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyCart = () => {
    const {user} = useContext(AuthContext)

    const loadedcarts = useLoaderData() ;
    const [carts , setCarts] = useState(loadedcarts)
    return (
        <div>
            <h2 className="text-4xl  my-20 font-inter text-center font-bold">Your Selected Products</h2>

            <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    carts.map(cart => <Cart
                    cart={cart}
                    carts={carts}
                    setCarts={setCarts}
                    key={cart._id}
                    >
                    </Cart> )
                }
            </div>
        </div>
    );
};

export default MyCart;