import { NavLink } from "react-router-dom";



const Banner = () => {
    return (
        <div  className="-mx-12 lg:-mx-36 flex justify-center items-center h-[290px] lg:h-[84vh] " style={
            {
                backgroundImage : `URL("https://www.bmwusa.com/content/dam/bmwusa/common/homepage/fmas/2023-07/desktop/BMW-MY24-i7-Homepage-FMA-Desktop.jpg")` ,
                backgroundRepeat : 'no-repeat',
                backgroundBlendMode : 'color',
                backgroundSize : 'cover'
            }
        }>
            
            

           <div>
           <h2 className="text-center text-[#FFF] text-3xl lg:text-5xl font-Inter font-semibold">YOUR DREAM
BUILD STARTS HERE   </h2>
            <p className="text-center mt-4 lg:mt-6 font-inter text-[#FFF]">Where Automotive Perfection Meets Your Imagination, Drive Beyond Limits</p>
            <div className="flex justify-center">
            <NavLink to="/login"><button className="px-6 lg:px-9 text-[#FFF] py-3 lg:py-4 text-base font-Inter mt-6 rounded bg-[#009EE2]">SHOP NOW</button> </NavLink>
            </div>

           </div>
        </div>
    );
};

export default Banner;


// i am making a automative industry based website where i have 6 types of brand and products , the brand name are Toyota, Ford, BMW, Mercedes-Benz, Tesla, Honda . i am making banner , what can be my slogan which i will use over the banner