import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div className="w-2/3 mx-auto dark:text-white">
      <NavBar></NavBar>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
