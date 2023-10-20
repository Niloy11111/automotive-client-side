import Accessory from "../../Accessory/Accessory";
import Banner from "../../Banner/Banner";
import BrandsName from "../../BrandsName/BrandsName";
import Footer from "../../Footer/Footer";
import Gallary from "../../Gallary/Gallary";





const HomePage = () => {
  

    return (
        <div data-aos="fade-up" className=''>
            <Banner></Banner>
            <Gallary></Gallary>
            <BrandsName></BrandsName>
            <Accessory></Accessory>
            <Footer></Footer>
           
          
        </div>
    );
};

export default HomePage;