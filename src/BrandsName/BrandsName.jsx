import { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";


const BrandsName = () => {

    const [brands , setBrands ] = useState([]);

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, [])


    return (
       <div className="grid grid-cols-3 gap-6 mt-24">
         {
            brands.map(brand => <SingleBrand
            key={brand.id}
            brand={brand}
            ></SingleBrand>)
         }
       </div>
    );
};

export default BrandsName;


