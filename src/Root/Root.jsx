import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div className="">
      <NavBar></NavBar>

      <div className="mx-12 lg:mx-72">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
