

const Gallary = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">

            <div className="relative">
                <img src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/fmas/2023-01/desktop/BMW-Secondary-FMA-Homepage-Cookied-Tile-01-Desktop.jpg"></img>
                <div className="absolute bottom-28 left-64">
                <h4 className=" text-sm mt-4 lg:mt-6 font-inter font-semibold text-[#FFF]">THE 2024 BMW X5</h4>
                <h2 className="text-[#FFF] lg:text-3xl mb-3">LEAD WITH CONFIDENCE</h2>

                <a className="text-[#FFF] font-inter font-bold  underline" href=""> Learn More </a>
                </div>
            </div>
            
            <div className="relative">
                <img src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/fmas/2023-03/desktop/BMW-MY24-X5-HP-Secondary-FMA-Desktop.jpg"></img>
                <div className="absolute bottom-28 left-64">
                <h4 className=" text-sm mt-4 lg:mt-6 font-inter font-semibold text-[#FFF]">THE 2024 BMW X7</h4>
                <h2 className="text-[#FFF] lg:text-3xl mb-3">NEXT-LEVEL LUXURY</h2>

                <a className="text-[#FFF] font-inter font-bold  underline" href=""> Learn More </a>
                </div>
            </div>
            <div className="relative">
                <img src="https://www.bmwusa.com/content/dam/bmwusa/common/fma/new-secondary-fmas-assets/non-cookied/secondary-fma-2/BMW-MY23-X7-Secondary-FMA-Desktop.jpg"></img>
                <div className="absolute bottom-28 left-64">
                <h4 className=" text-sm mt-4 lg:mt-6 font-inter font-semibold text-[#FFF]">THE 2024 BMW 8 SERIES</h4>
                <h2 className="text-[#FFF] lg:text-3xl mb-3">POWER AND PRESTIGE</h2>

                <a className="text-[#FFF] font-inter font-bold  underline" href=""> Learn More </a>
                </div>
            </div>
            <div className="relative">
                <img src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/fmas/2023-03/desktop/BMW-Secondary-FMA-Homepage-Tile-04-Desktop.jpg"></img>
                <div className="absolute bottom-28 left-64">
                <h4 className=" text-sm mt-4 lg:mt-6 font-inter font-semibold text-[#FFF]">THE 2024 BMW IX</h4>
                <h2 className="text-[#FFF] lg:text-3xl mb-3">AN ELECTRIC FUTURE</h2>

                <a className="text-[#FFF] font-inter font-bold  underline" href=""> Learn More </a>
                </div>
            </div>
            


        </div>
    );
};

export default Gallary;