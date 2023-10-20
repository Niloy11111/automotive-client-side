import { useLoaderData } from "react-router-dom";
import Cart from "../MySingleCart/Cart";
import { useState } from "react";


const MyCart = () => {
    const loadedcarts = useLoaderData() ;
    const [carts , setCarts] = useState(loadedcarts)
    return (
        <div>
            <h2 className="text-3xl my-20 font-inter text-center font-bold">Your Previous Products</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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