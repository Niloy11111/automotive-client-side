import { NavLink } from "react-router-dom";



const Banner = () => {
    return (
        <div  className="lg:-mx-36 flex justify-center items-center h-[350px] lg:h-[84vh] rounded lg:rounded-none" style={
            {
                backgroundImage : `URL("https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_1080/auto-client/7f289c2e621570b7a68b352ebd8f6411/a0290795.jpg")` ,
                backgroundRepeat : 'no-repeat',
                backgroundColor : `rgba(8, 8, 8, 0.70)`,
                backgroundBlendMode : 'color',
                backgroundSize : 'cover'
            }
        }>

           <div>
           <h2 className="text-center text-[#FFF] text-3xl lg:text-5xl font-Inter font-semibold">Where Luxury Meets Performance, <br /> Every Mile Matters !  </h2>
            <p className="text-center mt-4 lg:mt-6 font-inter text-[#FFF]">Where Automotive Perfection Meets Your Imagination, Drive Beyond Limits</p>
            <div className="flex justify-center">
            <NavLink to="/login"><button className="px-6 lg:px-9 text-[#FFF] py-3 lg:py-4 text-base font-Inter mt-6 rounded bg-[#009EE2]">LET'S TALK</button> </NavLink>
            </div>

           </div>
        </div>
    );
};

export default Banner;


// i am making a automative industry based website where i have 6 types of brand and products , the brand name are Toyota, Ford, BMW, Mercedes-Benz, Tesla, Honda . i am making banner , what can be my slogan which i will use over the banner