import { NavLink } from "react-router-dom";

const Accessory = () => {
  return (
    <div
      className="h-[290px] lg:h-[55vh] rounded lg:rounded-3xl"
      style={{
        backgroundImage: `URL("https://i.ibb.co/Wg0688x/c456e6341eed2d8ff528e829569a2eee.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "color",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center dark:text-[#0B0E01]">
        <div className="mt-44 bg-[#EDFDE8] px-8 py-5 rounded-3xl">
          <h2 className=" text-xl font-extrabold ">THW BMW ACCESSORY CENTER</h2>
          <h3 className=" text-center">Customize your SUV before delivery</h3>
          <NavLink to="/login" className="flex justify-center">
            <button className="px-4  rounded py-2  font-Inter mt-2 bg-[#CAFCDD] ">
              Learn More
            </button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
