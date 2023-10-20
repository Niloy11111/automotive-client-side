import { Link } from "react-router-dom";


const SingleBrandProduct = ({product}) => {

    const {_id, photoURL, productName, brandName, productType, productPrice, description, rating } = product ;
    return (
        <div>

            

            <div className="p-4 border rounded-lg bg-[#FFF]">

                <img className="h-[350px] rounded-lg" src={photoURL}></img>   

                 <h3 className="text-[#403F3F] text-2xl text-center font-inter font-bold mt-6 mb-2">{productName}</h3>

                 <h3 className="text-[#100F0F] text-xl text-center font-inter font-medium mb-2">{brandName}</h3>

                 <h3 className="text-[#706F6F] mb-2 text-lg text-center font-inter font-semibold">{productType}</h3>

                 <h3 className="text-[#403F3F] text-2xl text-center font-inter font-bold mt-2">{productPrice}</h3>

                 <p className="text-[#403F3F] text-2xl text-center font-inter font-bold mt-2">{rating}</p>
                 <Link to={`/details/${_id}`}>
                 <button className="w-full mt-4 block px-6 py-3 text-[#FFF] text-xl font-semibold font-inter bg-[#0D6EFD] rounded-lg">Show Details</button></Link>

               <Link to={`/updateProducts/${_id}`}> <button  className="w-full mt-4 px-6 py-3 text-[#FFF] text-xl font-semibold font-inter bg-[#7A5CFA] rounded-lg">Update</button></Link> 
               
            </div>
        </div>
    );
};

export default SingleBrandProduct;