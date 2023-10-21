import Swal from "sweetalert2";


const Cart = ({cart, carts, setCarts}) => {
    const {_id, photoURL, productName, brandName, productType, productPrice, description, rating} = cart ;

    const handleDeleteProduct = _id => {

        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to restore this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(` https://automotive-server-side-eur51ebix-niloys-projects-a44fef83.vercel.app/addToCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cart => cart._id !== _id);
                            setCarts(remaining);
                        }
                    })

            }
        })
    }


    return (
        <div className="bg-[#FFF] rounded border p-7 border-[#E7E7E7]">
            <img className="lg:h-[500px] w-full" src={photoURL}></img>
            <h2 className="mt-5 text-[#111] text-2xl font-bold font-inter">{productName}</h2>
          
            <p className="mt-2  text-[#706F6F] font-normal font-inter">{description}</p>
           
            <h2 className="mt-2">{rating}</h2>

            <button onClick={() => handleDeleteProduct(_id)} className="bg-[#D72050] mt-8 text-xl font-medium font-inter px-10 py-2 rounded text-[#FFF]">Delete</button>
        </div>
    );
};

export default Cart;