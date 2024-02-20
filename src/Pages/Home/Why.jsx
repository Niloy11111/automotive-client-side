import { Link } from "react-router-dom";

const Why = () => {
  return (
    <div className="dark:text-[#0B0E01]">
      <h2 className="text-3xl dark:text-white  text-center lg:text-4xl font-Inter font-extrabold uppercase mb-14">
        Why choose us
      </h2>

      <div className="grid grid-cols-3 gap-10 ">
        <div className="bg-[#EDFDE8] p-5 rounded-3xl">
          <div className="bg-white max-w-max mx-auto p-5 rounded-full">
            <img
              className="w-[50px] "
              src="https://i.ibb.co/mD4vktG/trust.png"
            ></img>
          </div>
          <h2 className="text-2xl font-bold my-5 text-center">
            Trusted Expertise
          </h2>
          <p className="text-center px-5">
            Benefit from our years of industry knowledge and professionalism,
            ensuring you make informed decisions every step of the way.
          </p>
          <div className="flex justify-center mt-5">
            <Link to={`/login`}>
              <button className="bg-[#CAFCDD] px-4 py-2  rounded hover:shadow-lg hover:translate-x-1 transition-all duration-300 ">
                {" "}
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[#F0FCC4]  p-5 rounded-3xl">
          <div className="bg-white max-w-max mx-auto p-5 rounded-full">
            <img
              className="w-[50px]"
              src="https://i.ibb.co/D77g8qz/problem.png"
            ></img>
          </div>

          <h2 className="text-2xl font-bold my-5 text-center">
            Exceptional Selection
          </h2>
          <p className="text-center px-5">
            Explore our vast array of top-quality vehicles from leading brands,
            meticulously curated to meet your diverse preferences and needs.
          </p>

          <div className="flex justify-center mt-5">
            <Link to={`/login`}>
              <button className="bg-[#C9F620] px-4 py-2  rounded hover:shadow-lg hover:translate-x-1 transition-all duration-300 ">
                {" "}
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[#EDFDE8]  p-5 rounded-3xl">
          <div className="bg-white max-w-max mx-auto p-5 flex justify-center items-center rounded-full ">
            <img
              className="w-[50px]"
              src="https://i.ibb.co/dM8DQmb/skills.png"
            ></img>
          </div>

          <h2 className="text-2xl font-bold my-5 text-center">
            Continued Support{" "}
          </h2>
          <p className="text-center px-5">
            Experience peace of mind knowing our dedicated team will be by your
            side even after your purchase, providing ongoing assistance.
          </p>
          <div className="flex justify-center mt-5">
            <Link to={`/login`}>
              <button className="bg-[#CAFCDD] hover:shadow-lg hover:translate-x-1 transition-all duration-300 px-4 py-2  rounded ">
                {" "}
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
