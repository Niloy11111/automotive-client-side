import { NavLink } from "react-router-dom";


const Accessory = () => {
    return (
        <div className="-mx-12 lg:-mx-36 h-[290px] lg:h-[75vh] rounded lg:rounded-none" style={{
            backgroundImage : `URL("https://www.bmwusa.com/content/dam/bmwusa/common/fma/new-aftersales-fmas-assets/bmw-accessory-center/BMW-AccCen-Section-FMA-1280.jpg")`,
            backgroundRepeat : 'no-repeat',
            backgroundBlendMode : 'color',
            backgroundSize : 'cover'
        }}>
        
        <div className="ml-20 pt-20">
        <h2 className="text-[#FFF] text-5xl">THW BMW <br />
        ACCESSORY CENTER</h2>
        <h3 className="mt-7 text-xl text-[#FFF]">Customize your SUV before delivery</h3>
        <NavLink to="/login"><button className="px-6 lg:px-16 text-[black] font-extrabold py-3 lg:py-4 text-lg font-Inter mt-6 bg-[#FFF]">Learn More</button> </NavLink>
        </div>
        
        </div>
    );
};

export default Accessory;