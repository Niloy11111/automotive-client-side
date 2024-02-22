const Gallary = () => {
  return (
    <div className="mb-24 mt-44 ">
      <div className="flex items-center justify-center gap-20 ">
        <div className="flex-1">
          <h2 className="  text-2xl  text-center lg:text-left lg:text-3xl font-Inter font-extrabold uppercase mb-3 ">
            Welcome to RevAuto
          </h2>
          <p className="text-center lg:text-left mt-2 lg:mt-3 font-Inter ">
            RevAuto is your premier destination for top-notch cars from leading
            brands. With a passion for excellence and a commitment to customer
            satisfaction, we're here to redefine your driving experience.
          </p>
          <h2 className=" mt-5 mb-3 text-xl  text-center lg:text-left lg:text-2xl font-Inter font-extrabold uppercase">
            What we offer
          </h2>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              {" "}
              <img
                className="w-[25px]"
                src="https://i.ibb.co/w45Q4BL/now-in-stock.png"
              ></img>{" "}
              Diverse Brand Selection
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <img
                className="w-[25px]"
                src="https://i.ibb.co/w45Q4BL/now-in-stock.png"
              ></img>{" "}
              Expert Advice & Guidance
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <img
                className="w-[25px]"
                src="https://i.ibb.co/w45Q4BL/now-in-stock.png"
              ></img>{" "}
              Expert Advice & Guidance
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <img
                className="w-[25px]"
                src="https://i.ibb.co/w45Q4BL/now-in-stock.png"
              ></img>{" "}
              Quality Assurance & Warranties
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <img
                className="w-[25px]"
                src="https://i.ibb.co/w45Q4BL/now-in-stock.png"
              ></img>{" "}
              Exceptional Customer Service
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1">
          <div>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/jM1YXNd/3bafc3789efe0abb54f01dc06428ba33.jpg"
            ></img>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/9hmFnmW/16352ba3d24e6a45e1ce57fcc8de6d0b.jpg"
            ></img>
          </div>
          <div>
            <img
              className="rounded-xl "
              src="https://i.ibb.co/bvHqNN3/6295b79e28fc1f3081d38306f387f855.jpg"
            ></img>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/c2W15bC/c2967812fb5074cb642ddbd211aff50e.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
