import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { BsSearch } from "react-icons/bs";
const Banner = () => {
  return (
    // <div
    //   className="-mx-12 lg:-mx-72 flex justify-center items-center h-[290px] lg:h-[65vh] "
    //   style={{
    //     backgroundImage: `URL("https://assets.cars24.com/production/c2b-website/240119160544/js/d8e03eca1c5e5bcf4363a9191a0a406b.webp")`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundBlendMode: "color",
    //     backgroundSize: "cover",
    //   }}
    // >
    //   <div>
    //     <h2 className="text-center text-[#FFF] text-3xl lg:text-5xl font-Inter font-semibold">
    //       YOUR DREAM BUILD STARTS HERE{" "}
    //     </h2>
    //     <p className="text-center mt-4 lg:mt-6 font-inter text-[#FFF]">
    //       Where Automotive Perfection Meets Your Imagination, Drive Beyond
    //       Limits
    //     </p>
    //     <div className="flex justify-center">
    //       <NavLink to="/login">
    //         <button className="px-6 lg:px-9 text-[#FFF] py-3 lg:py-4 text-base font-Inter mt-6 rounded bg-[#009EE2]">
    //           SHOP NOW
    //         </button>{" "}
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>

    <div className="-mx-12 lg:-mx-72 relative">
      <AwesomeSlider className="h-[62vh] ">
        <div
          style={{
            backgroundImage: `URL("https://assets.cars24.com/production/c2b-website/240119160544/js/d8e03eca1c5e5bcf4363a9191a0a406b.webp")`,
            backgroundRepeat: "no-repeat",
          }}
          className="text-white absolute top-36 left-72"
        >
          <div className=" ">
            <div>
              <h2 className="text-2xl font-bold font-Inter text-[#FFFFFF]">
                {" "}
                Certified cars with
              </h2>
              <h2 className="mt-5 text-4xl font-bold font-Inter text-[#FFFFFF]">
                up to 12-month <br /> warranty plans
              </h2>
              <div className="mt-10 border-2 flex rounded py-1 lg:mt-10  bg-[#FFF]  w-[300px] md:w-[300px] lg:w-[470px] border-[#9adbf5]">
                <button
                  type="submit"
                  className=" flex items-center justify-center w-[50px] h-[40px] rounded-full ml-2 text-lg font-semibold text-[#333F]"
                >
                  {" "}
                  <BsSearch></BsSearch>
                </button>
                <input
                  name="category"
                  id="field-id"
                  className="pl-1 outline-none w-full rounded"
                  type="text"
                  placeholder="Search for your favourite cars"
                />
              </div>

              <div className="flex gap-6 mt-10">
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/tesla-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/mercedes-benz-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/bmw-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/ford-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/honda-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/toyota-logo.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `URL("https://assets.cars24.com/production/c2b-website/240119160544/js/b826677e31b9d490bc0e9ff5b810e87a.png")`,
            backgroundRepeat: "no-repeat",
          }}
          className="text-white absolute top-36 left-72"
        >
          <div className=" ">
            <div>
              <h2 className="text-2xl font-bold font-Inter text-[#FFFFFF]">
                {" "}
                Certified cars with
              </h2>
              <h2 className="mt-5 text-4xl font-bold font-Inter text-[#FFFFFF]">
                up to 12-month <br /> warranty plans
              </h2>
              <div className="mt-6 border-2 flex rounded py-1 lg:mt-10  bg-[#FFF]  w-[300px] md:w-[300px] lg:w-[470px] border-[#9adbf5]">
                <button
                  type="submit"
                  className=" flex items-center justify-center w-[50px] h-[40px] rounded-full ml-2 text-lg font-semibold text-[#333F]"
                >
                  {" "}
                  <BsSearch></BsSearch>
                </button>
                <input
                  name="category"
                  id="field-id"
                  className="pl-1 outline-none w-full rounded"
                  type="text"
                  placeholder="Search for your favourite cars"
                />
              </div>

              <div className="flex gap-6 mt-10">
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/tesla-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/mercedes-benz-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/bmw-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/ford-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/honda-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/toyota-logo.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `URL("https://assets.cars24.com/production/c2b-website/240119160544/js/add3515cee57c3f3d36023ce13b5c8e2.png")`,
            backgroundRepeat: "no-repeat",
          }}
          className="text-white absolute top-36 left-72"
        >
          <div className=" ">
            <div>
              <h2 className="text-2xl font-bold font-Inter text-[#FFFFFF]">
                {" "}
                Certified cars with
              </h2>
              <h2 className="mt-5 text-4xl font-bold font-Inter text-[#FFFFFF]">
                up to 12-month <br /> warranty plans
              </h2>
              <div className="mt-6 border-2 flex rounded py-1 lg:mt-10  bg-[#FFF]  w-[300px] md:w-[300px] lg:w-[470px] border-[#9adbf5]">
                <button
                  type="submit"
                  className=" flex items-center justify-center w-[50px] h-[40px] rounded-full ml-2 text-lg font-semibold text-[#333F]"
                >
                  {" "}
                  <BsSearch></BsSearch>
                </button>
                <input
                  name="category"
                  id="field-id"
                  className="pl-1 outline-none w-full rounded"
                  type="text"
                  placeholder="Search for your favourite cars"
                />
              </div>

              <div className="flex gap-6 mt-10">
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/tesla-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/mercedes-benz-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/bmw-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/ford-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/honda-logo.png"></img>
                </div>
                <div className="bg-white w-[90px] rounded">
                  <img src="https://www.carlogos.org/car-logos/toyota-logo.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
