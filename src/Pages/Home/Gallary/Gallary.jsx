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
              src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/fmas/2023-01/desktop/BMW-Secondary-FMA-Homepage-Cookied-Tile-01-Desktop.jpg"
            ></img>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/fmas/2023-03/desktop/BMW-MY24-X5-HP-Secondary-FMA-Desktop.jpg"
            ></img>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://www.bmwusa.com/content/dam/bmwusa/common/fma/new-secondary-fmas-assets/non-cookied/secondary-fma-2/BMW-MY23-X7-Secondary-FMA-Desktop.jpg"
            ></img>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/fmas/2023-03/desktop/BMW-Secondary-FMA-Homepage-Tile-04-Desktop.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
