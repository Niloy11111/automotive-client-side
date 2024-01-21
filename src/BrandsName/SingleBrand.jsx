import { Link } from "react-router-dom";

const SingleBrand = ({ brand }) => {
  const { id, brand_name, brand_img } = brand;

  return (
    <Link to={`/brandProductList/${brand_name}`}>
      <div className="bg-[#FFFBF8] border hover:shadow-xl transition duration-150 p-3">
        <img className="h-[70px] w-[90px] mx-auto" src={brand_img}></img>
        <h3 className=" font-Inter text-[#0B0B0B] text-xl text-center font-semibold pt-4 pb-4">
          {brand_name}
        </h3>
      </div>
    </Link>
  );
};

export default SingleBrand;
