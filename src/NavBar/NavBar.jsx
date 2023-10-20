import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (

        <div className="flex items-center flex-col lg:flex-row  justify-between mb-14">
            
            <div className="flex items-center">
              <img className="w-[130px] mb-4" src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg" alt="" />
             
            </div>

            
           <div className="flex justify-center">
            <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 text-lg font-Inter font-normal">

            <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[red] underline" : ""
  }><li>Home</li></NavLink>

            <NavLink to="/addProduct" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[red] underline" : ""
  }><li>Add Product</li></NavLink>

            <NavLink to="/myCart" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[red]  underline" : ""
  }><li>My Cart</li></NavLink>

            <NavLink to='/login' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[red] underline" : ""
  }><li>Login</li></NavLink>


            </ul>
           </div>
            
            

        </div>

    );
};

export default NavBar;