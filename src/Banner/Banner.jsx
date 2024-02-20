import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import "../../src/css/All.css";
import BannerSlider from "./BannerSlider";
const Banner = () => {
  const slides = [
    {
      url: "https://i.ibb.co/m4r63m8/purple-convertible-purple-background-vector-53876-67342.jpg",
      title: "car-1",
    },
    {
      url: "https://i.ibb.co/16WWTHJ/brown-hatchback-car-brown-background-vector-53876-64414.jpg",
      title: "car-2",
    },
    {
      url: "https://i.ibb.co/Ws70cmg/luxury-car-speeds-by-modern-building-dusk-generative-ai-188544-8048.jpg",
      title: "car-3",
    },
    {
      url: "https://i.ibb.co/3SVG9Zn/red-sedan-car-red-background-vector-53876-64410.jpg",
      title: "car-4",
    },
    {
      url: "https://i.ibb.co/QMgcSF9/blue-sports-car-blue-background-vector-53876-64362.jpg",
      title: "car-5",
    },
  ];

  return (
    <>
      <div className="w-full h-[750px] mx-auto  ">
        <BannerSlider slides={slides}> </BannerSlider>
      </div>
    </>
  );
};

export default Banner;
