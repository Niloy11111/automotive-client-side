import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pb-10 bg-[#0D1B3E] pt-12  -mx-12 lg:-mx-72">
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
