import Accessory from "../../Accessory/Accessory";
import Banner from "../../Banner/Banner";
import BrandsName from "../../BrandsName/BrandsName";
import Footer from "../../Footer/Footer";
import Gallary from "../../Gallary/Gallary";
import Latest from "./Latest/Latest";
import Why from "./Why";

const HomePage = () => {
  return (
    <div className=" ">
      <Banner></Banner>
      <Gallary></Gallary>

      <Why></Why>

      <BrandsName></BrandsName>
      <Accessory></Accessory>
      <Latest></Latest>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
