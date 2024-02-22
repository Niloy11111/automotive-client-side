import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  const slides = [
    {
      url: "https://i.ibb.co/6s2Kngx/pexels-photo-627678.jpg",
      title: "car-1",
    },
    {
      url: "https://i.ibb.co/HDLhQQ6/pexels-photo-4024490.jpg",
      title: "car-2",
    },
    {
      url: "https://i.ibb.co/Ws70cmg/luxury-car-speeds-by-modern-building-dusk-generative-ai-188544-8048.jpg",
      title: "car-3",
    },
    {
      url: "https://i.ibb.co/gr9ddD5/luxury-car-speeds-by-modern-building-dusk-generative-ai-188544-8048.jpg",
      title: "car-4",
    },
    {
      url: "https://i.ibb.co/dmFTyJh/pexels-photo-1082655.jpg",
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
