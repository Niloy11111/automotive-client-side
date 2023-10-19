import { Link } from "react-router-dom";


const SingleBrand = ({brand}) => { 
    const {brand_name, brand_img} = brand ;
    
    return (

        <Link to={`/brandProductList/${brand_name}`}>

           
        
        <div className="">
            <img className="rounded-t-lg h-[290px] w-full" src={brand_img}></img>
            <h3 className="border-b border-r border-l font-Inter text-[#0B0B0B] text-2xl text-center font-semibold pt-4 pb-4">{brand_name}</h3>
        </div>
        </Link>

    );
};

export default SingleBrand;