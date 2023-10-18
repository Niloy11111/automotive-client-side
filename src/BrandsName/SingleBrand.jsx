

const SingleBrand = ({brand}) => {
    const {brand_name, brand_img} = brand ;
    return (
        <div className="border p-5">
            <img className="h-[290px] w-full rounded-t-lg" src={brand_img}></img>
            <h3 className="font-Inter text-[#0B0B0B] text-2xl text-center font-semibold mt-4">{brand_name}</h3>
        </div>
    );
};

export default SingleBrand;