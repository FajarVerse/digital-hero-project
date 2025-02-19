import { useRef } from "react";
import logo from "../../assets/image/diro_logo.png";

const Navbar = () => {
  const navbarRef = useRef(null);

  const handleMenuClick = () => {
    navbarRef.current.classList.toggle("navbar-nonactive");
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white">
        <div className="container mx-auto">
          <div className="w-full px-5 py-4 mx-auto flex items-center md:px-7 md:py-5 lg:px-10 xl:px-14">
            <div className="w-[90%] h-full flex gap-2 lg:w-full lg:flex lg:justify-center lg:items-center lg:gap-10 xl:gap-16">
              <div className="w-auto">
                <a href="">
                  <img src={logo} alt="" className="h-6 lg:h-7 xl:h-8" />
                </a>
              </div>
              <div
                className="absolute top-16 right-5 px-5 py-5 flex flex-col gap-5 bg-white shadow-md shadow-slate-500 rounded-md navbar-nonactive transition-all duration-300 ease-in-out md:right-12 lg:static lg:visible lg:opacity-100 lg:p-0 lg:flex-row lg:items-center lg:gap-7 lg:translate-y-[10%] lg:bg-transparent lg:shadow-none xl:gap-10"
                ref={navbarRef}
              >
                <ul className="w-full flex flex-col gap-2 lg:flex-row lg:gap-5 xl:gap-12">
                  <li>
                    <a href="" className="navbar-list xl:text-[1.05rem]">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list xl:text-[1.05rem]">
                      Feature
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list xl:text-[1.05rem]">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list xl:text-[1.05rem]">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list xl:text-[1.05rem]">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list xl:text-[1.05rem]">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list xl:text-[1.05rem]">
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div className="w-auto flex gap-2">
                  <div className="w-24 rounded-full p-[0.1rem] bg-linear-to-r from-digital-aqua to-deep-blue lg:w-20">
                    <button className="w-full rounded-full bg-white">
                      <span className=" text-base font-semibold bg-linear-to-r from-digital-aqua to-deep-blue bg-clip-text text-transparent inline-block lg:text-sm">
                        Login
                      </span>
                    </button>
                  </div>

                  <div className="w-24 rounded-full p-[0.1rem] bg-linear-to-r from-digital-aqua to-deep-blue lg:w-20">
                    <button className="w-full rounded-full bg-transparent text-white text-base font-semibold lg:text-sm">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[10%] flex justify-end lg:hidden">
              <button className="flex flex-col gap-1" onClick={handleMenuClick}>
                <span className="w-8 h-1 bg-black rounded-full"></span>
                <span className="w-8 h-1 bg-black rounded-full"></span>
                <span className="w-8 h-1 bg-black rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
