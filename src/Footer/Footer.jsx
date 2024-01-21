import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="mt-24 -mx-12 lg:-mx-36 h-[45vh]  bg-[#121212] text-primary-content flex justify-center items-center">

    //     <footer className="space-y-6">

    //  <div className="flex justify-center items-center gap-3">
    //  <div className="text-center">
    //         <h2 className="text-3xl font-Inter font-bold"> <span className="text-[#F85559]">C</span>arwale</h2>
    //       </div>

    //       <div className="py-3 flex justify-center">
    //         <NavLink to="/login"><button className="border-2 text-lg border-[#FFF] text-[FFF] px-4 rounded-lg py-3 hover:bg-[#FFF] hover:text-[#0B0D17]">Subscribe</button></NavLink>
    //       </div>
    //  </div>

    //     <div className="flex justify-center">
    //      <div className="flex gap-8">
    //      <a href="https:/facebook.com"> <FaFacebook className="text-3xl"></FaFacebook> </a>
    //       <a href="https:/instagram.com"> <FaInstagramSquare className="text-3xl"></FaInstagramSquare> </a>
    //       <a href="https:/twitter.com"> <FaTwitterSquare className="text-3xl"></FaTwitterSquare> </a>
    //       <a href="https:/linkedin.com"> <FaLinkedin className="text-3xl"></FaLinkedin> </a>
    //       <a href="https:/youtube.com"> <FaYoutube className="text-3xl"></FaYoutube>  </ a>
    //      </div>
    //     </div>

    //     <div className="flex justify-center">
    //       <ul className="flex gap-5">
    //       <a href="">  <li>Our customers</li></a>
    //      <a href="">   <li>About Us</li></a>
    //         <a href=""><li> Awards </li></a>
    //         <a href=""><li> Blog </li></a>
    //         <a href=""> <li>Products</li></a>
    //       </ul>

    //     </div>

    //     <p className="font-medium text-base text-center">
    //     Discover the perfect car that matches your style and aspirations. With our dedicated team of experts, we provide personalized assistance to help you find the luxury car that exceeds your expectations.
    //     </p>
    //     <p className="text-center">Copyright © 2023 - All right reserved</p>
    // </footer>

    // </div>
    <div className="pb-10 bg-[#0D1B3E] pt-12  -mx-12 lg:-mx-72">
      <div className="flex lg:flex-row flex-col pt-10 items-center gap-10 justify-center">
        <div>
          <img
            className=""
            src="https://hive.com/wp-content/uploads/2022/05/Graphic.svg"
          ></img>
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            See for yourself why <br /> people love <br /> to stay in carwale.
          </h2>
          <Link to="/login">
            {" "}
            <button className="mt-6 bg-[#6473FF] px-8 py-3 font-semibold font-Inter text-white ">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="pt-10 lg:w-7/12 mx-auto">
        <div className="flex lg:flex-row flex-col md:flex-row  lg:justify-between w-3/4 md:w-full ld:w-3/4 my-10 mx-auto md:justify-center md:gap-14 lg:gap-0">
          <div className="text-white ">
            <h2 className="text-white mb-5 font-semibold">Our Brands </h2>
            <ul className="text-gray-300 space-y-3">
              <li>
                <a className="link link-hover">Auto Credit Express</a>{" "}
              </li>
              <li>
                <a className="link link-hover">The Car Connection</a>{" "}
              </li>
              <li>
                <a className="link link-hover">Motor Authority</a>{" "}
              </li>

              <li>
                <a className="link link-hover">Green Car Reports</a>
              </li>
              <li>
                <a className="link link-hover">Green Cars</a>
              </li>
            </ul>
          </div>
          <div className="text-white lg:mb-0 mb-5 font-semibold">
            <h2 className="text-white mb-5 font-semibold">Company</h2>
            <ul className="text-gray-300 space-y-3">
              <li>
                {" "}
                <a className="link link-hover">About us</a>{" "}
              </li>
              <li>
                {" "}
                <a className="link link-hover">Careers</a>{" "}
              </li>
              <li>
                {" "}
                <a className="link link-hover">Contact Us</a>{" "}
              </li>
              <li>
                {" "}
                <a className="link link-hover">Privacy Policy</a>
              </li>
              <li>
                {" "}
                <a className="link link-hover">Feedback</a>
              </li>
              <li>
                {" "}
                <a className="link link-hover">Sidemap</a>
              </li>
              <li>
                {" "}
                <a className="link link-hover">Terms of Use</a>
              </li>
            </ul>
          </div>

          <div className="text-white lg:mb-0 mb-5 font-semibold">
            <h2 className="text-white mb-5 font-semibold">Buyer Resources</h2>
            <ul className="text-gray-300 space-y-3">
              <li>
                {" "}
                <a className="link link-hover">Car Pricing</a>{" "}
              </li>
              <li>
                {" "}
                <a className="link link-hover">Car Buying</a>{" "}
              </li>
              <li>
                {" "}
                <a className="link link-hover">Buying Guides</a>
              </li>
              <li>
                {" "}
                <a className="link link-hover">New Car Deals</a>
              </li>
              <li>
                {" "}
                <a className="link link-hover">Deals of the Month </a>
              </li>
            </ul>
          </div>

          <div className="text-white lg:mb-0 mb-5 font-semibold">
            <h2 className="text-white mb-5 font-semibold">Popular Brands</h2>
            <ul className="text-gray-300 space-y-3">
              <li>
                {" "}
                <a className="link link-hover">For Dealers </a>{" "}
              </li>
              <li>
                {" "}
                <a className="link link-hover">New Car Leads</a>{" "}
              </li>
              <li>
                {" "}
                <a className="link link-hover"> Used Car Leads</a>{" "}
              </li>
              <li>
                {" "}
                <a className="link link-hover">Special Finance Leads </a>
              </li>
              <li>
                {" "}
                <a className="link link-hover">Dealer Portal Login</a>
              </li>
              <li>
                {" "}
                <a className="link link-hover">Car Comparison</a>
              </li>
              <li>
                {" "}
                <a className="link link-hover">Auto Loans</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-evenly  border-t pt-10 lg:pt-20 space-y-3">
          <div className="flex items-center gap-2">
            <img
              className="mx-auto lg:mx-0 w-[50px] "
              src="https://hive.com/wp-content/uploads/2022/05/Graphic.svg"
            ></img>
            <h2 className="text-white text-lg font-Inter font-semibold">
              carwale
            </h2>
          </div>
          {/* <a className="text-white text-center " href="">
            Carwale
          </a> */}

          <a className="text-white text-center " href="">
            Terms of Service
          </a>
          <a className="text-white text-center" href="">
            @2015 - 2023 CARWALE INC.
          </a>

          <div className="flex gap-1 justify-center">
            <a href="https:/facebook.com">
              {" "}
              <FaFacebook className="text-3xl text-white"></FaFacebook>{" "}
            </a>
            <a href="https:/instagram.com">
              {" "}
              <FaInstagramSquare className="text-white text-3xl"></FaInstagramSquare>{" "}
            </a>
            <a href="https:/twitter.com">
              {" "}
              <FaTwitterSquare className="text-white text-3xl"></FaTwitterSquare>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
