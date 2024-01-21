import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const {
    signInUser,
    user,
    createUser,
    googleSignIn,
    logOut,
    handleUpdateProfile,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user);
  const [toogle, setToogle] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then((res) => {
        console.log("from sign in", res.user);
        new Swal("Login Successful!", "Welcome back!", "success");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const onSubmitRegister = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    console.log(data.photoURL, data.name);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        handleUpdateProfile(data.name, data.photoURL)
          .then(() => {
            navigate("/");
          })

          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        new Swal("Login Successful!", "Welcome back!", "success");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  if (toogle) {
    return (
      <div className=" -mx-12 lg:-mx-72 flex md:flex-row lg:flex-row flex-col h-[92vh]">
        <div className="md:w-3/4 lg:w-3/4 flex justify-center items-center">
          <div className="md:w-5/6  lg:w-1/2 mx-auto">
            <h2 className="text-3xl font-bold font-Montserrat text-center mt-10 lg:mt-0">
              Register Here
            </h2>
            <p className=" font-Montserrat font-medium mt-4 text-center">
              Get started - it's free. No credit card needed.
            </p>

            <div>
              <div
                onClick={handleGoogleLogin}
                className="mt-10 cursor-pointer mx-auto w-3/4 justify-center flex items-center gap-2  py-2 text-base border border-[#444] bg-[#FFF]"
              >
                <div className="flex items-center gap-2">
                  <FcGoogle className="text-2xl"></FcGoogle>
                  <h2 className="font-semibold text-[#00000080] font-Inter">
                    Continue with Google
                  </h2>
                </div>
              </div>
              <div className="flex mb-5 items-center gap-2 mt-6 justify-center">
                <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
                <p className="text-xl text-[#191A48]">Or</p>
                <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
              </div>
              {/* form */}

              <form className="px-7 lg:px-14 w-3/4 mx-auto">
                <input
                  className="border-gray-300 pl-5 bg-[#FFF] py-2 outline-none w-full block border pb-3 mb-8"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  name="name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}

                <input
                  className="border-gray-300 pl-5 bg-[#FFF]  py-2 outline-none w-full block border pb-3 mb-8"
                  type="text"
                  placeholder="photo URL"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-600">photo is required</span>
                )}

                <input
                  className="border-y-gray-300 bg-[#FFF] w-full outline-none border block pl-5 py-2 mb-5"
                  type="email"
                  placeholder="Username or Email"
                  {...register("email", { required: true })}
                  name="email"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">email is required</span>
                )}

                <div className="relative mb-8">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="border border-gray-300 outline-none block pl-5 py-2  bg-[#FFF] w-full"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be at least 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must contain at least one uppercase letter, one
                      lowercase letter, one number, and one special character
                    </p>
                  )}

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xl cursor-pointer absolute top-3 right-2"
                  >
                    {showPassword ? (
                      <AiFillEye></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    )}
                  </span>
                </div>
                <input
                  onClick={handleSubmit(onSubmitRegister)}
                  className="cursor-pointer py-2 mx-auto w-full mb-4 text-[#FFF] font-Inter  bg-[#0073EA] "
                  type="submit"
                  value="Let's Go"
                />

                <p className="text-center text-base font-Inter">
                  Already have an account?{" "}
                  <a
                    onClick={() => setToogle(!toogle)}
                    className="text-blue-600 cursor-pointer"
                  >
                    {" "}
                    Login{" "}
                  </a>{" "}
                </p>
              </form>

              {/* form closed */}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-0 lg-mt-0 md:w-2/4 lg:w-2/4">
          <img
            className="h-full w-full"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
          ></img>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="-mx-12 lg:-mx-72 flex md:flex-row lg:flex-row flex-col h-[92vh]">
          <div className="md:w-3/4 lg:w-3/4 flex justify-center items-center">
            <div className="md:w-5/6 lg:w-1/2 mx-auto">
              <h2 className="text-3xl font-bold font-Montserrat text-center mt-10 lg-mt=0">
                Welcome to Carwale
              </h2>
              <p className=" font-Montserrat font-medium mt-4 text-center">
                Get started - it's free. No credit card needed.
              </p>

              <div>
                <div
                  onClick={handleGoogleLogin}
                  className="mt-10 cursor-pointer mx-auto w-3/4 justify-center flex items-center gap-2  py-2 text-base border border-[#444] bg-[#FFF]"
                >
                  <div className="flex items-center gap-2">
                    <FcGoogle className="text-2xl"></FcGoogle>
                    <h2 className="font-semibold text-[#00000080] font-Inter">
                      Continue with Google
                    </h2>
                  </div>
                </div>
                <div className="flex mb-5 items-center gap-2 mt-6 justify-center">
                  <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
                  <p className="text-xl text-[#191A48]">Or</p>
                  <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
                </div>
                {/* form */}

                <form className="px-7 lg:px-14 w-3/4 mx-auto">
                  <input
                    className="border-y-gray-300 bg-[#FFF] w-full outline-none border block pl-5 py-2 mb-5"
                    type="email"
                    placeholder="Username or Email"
                    {...register("email", { required: true })}
                    name="email"
                    required
                  />
                  {errors.email && (
                    <span className="text-red-600">email is required</span>
                  )}

                  <div className="relative mb-8">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="border border-gray-300 outline-none block pl-5 py-2  bg-[#FFF] w-full"
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />

                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be at least 6 characters
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-600">
                        Password must be less than 20 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must contain at least one uppercase letter, one
                        lowercase letter, one number, and one special character
                      </p>
                    )}

                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xl cursor-pointer absolute top-3 right-2"
                    >
                      {showPassword ? (
                        <AiFillEye></AiFillEye>
                      ) : (
                        <AiFillEyeInvisible></AiFillEyeInvisible>
                      )}
                    </span>
                  </div>
                  <input
                    onClick={handleSubmit(onSubmitLogin)}
                    className="cursor-pointer py-2 mx-auto w-full mb-4 text-[#FFF] font-Inter  bg-[#0073EA] "
                    type="submit"
                    value="Continue"
                  />

                  <p className="text-center text-base font-Inter ">
                    Don't have an account?{" "}
                    <a
                      onClick={() => setToogle(!toogle)}
                      className="text-blue-600 cursor-pointer"
                    >
                      {" "}
                      Create an Account
                    </a>{" "}
                  </p>
                </form>

                {/* form closed */}
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-0 lg-mt-0 md:w-2/4 lg:w-2/4">
            <img
              className="h-full w-full"
              src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
            ></img>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
