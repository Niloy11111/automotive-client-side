import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import UseProduct from "../../../Hooks/UseProduct";
import SingleLatest from "./SingleLatest";
const Latest = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const [products] = UseProduct();

  const latestProducts = products?.slice(-8);

  return (
    <div className=" py-20 ">
      <h2 className="text-2xl font-bold font-Inter my-4 ml-2">
        Recently added cars
      </h2>
      <div>
        <Slider {...settings} className="">
          {latestProducts.map((product) => (
            <SingleLatest key={product._id} product={product}></SingleLatest>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Latest;
