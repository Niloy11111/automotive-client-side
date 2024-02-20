import { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";

const BrandsName = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="my-20">
      <h2 className=" text-3xl  text-center lg:text-4xl font-Inter font-extrabold uppercase">
        Car brands
      </h2>

      <p className="text-[#12121299] dark:text-white font-inter font-medium text-center  mb-12 ">
        The joys of driving begin with a feeling of control and safety behind
        the wheel. That’s why we’re proud to announce that all tested RevAuto
        vehicles have earned the 2023 IIHS TOP SAFETY PICK award.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        {brands.map((brand) => (
          <SingleBrand key={brand.id} brand={brand}></SingleBrand>
        ))}
      </div>
    </div>
  );
};

export default BrandsName;
