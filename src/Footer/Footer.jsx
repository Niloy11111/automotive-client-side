import { FaFacebook,FaInstagramSquare,FaYoutube, FaLinkedin , FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <div className="mt-24 -mx-12 lg:-mx-36 h-[45vh]  bg-[#121212] text-primary-content flex justify-center items-center">

          <footer className="space-y-6">

       <div className="flex justify-center items-center gap-3">
       <div className="text-center">
              <h2 className="text-3xl font-Inter font-bold"> <span className="text-[#F85559]">C</span>arwale</h2>
            </div>

            <div className="py-3 flex justify-center">
              <NavLink to="/login"><button className="border-2 text-lg border-[#FFF] text-[FFF] px-4 rounded-lg py-3 hover:bg-[#FFF] hover:text-[#0B0D17]">Subscribe</button></NavLink>
            </div>
       </div>

          
          <div className="flex justify-center">
           <div className="flex gap-8">
           <a href="https:/facebook.com"> <FaFacebook className="text-3xl"></FaFacebook> </a> 
            <a href="https:/instagram.com"> <FaInstagramSquare className="text-3xl"></FaInstagramSquare> </a> 
            <a href="https:/twitter.com"> <FaTwitterSquare className="text-3xl"></FaTwitterSquare> </a>
            <a href="https:/linkedin.com"> <FaLinkedin className="text-3xl"></FaLinkedin> </a>
            <a href="https:/youtube.com"> <FaYoutube className="text-3xl"></FaYoutube>  </ a>
           </div>
          </div>

          <div className="flex justify-center">
            <ul className="flex gap-5">
            <a href="">  <li>Our customers</li></a>
           <a href="">   <li>About Us</li></a>
              <a href=""><li> Awards </li></a>
              <a href=""><li> Blog </li></a>
              <a href=""> <li>Products</li></a>
            </ul>
             

          </div>

          <p className="font-medium text-base text-center">
          Discover the perfect car that matches your style and aspirations. With our dedicated team of experts, we provide personalized assistance to help you find the luxury car that exceeds your expectations.
          </p> 
          <p className="text-center">Copyright © 2023 - All right reserved</p>
      </footer>

      
      </div>
    );
};

export default Footer;