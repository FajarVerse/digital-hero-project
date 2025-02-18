import logo from "../src/assets/image/diro_logo.png";

function App() {
  return (
    <>
      <header className="absolute top-0 w-full bg-white">
        <div className="container mx-auto">
          <div className="w-full px-5 py-4 mx-auto flex items-center">
            <div className="w-[90%] h-full flex gap-2">
              <div className="w-auto">
                <a href="">
                  <img src={logo} alt="" className="h-6" />
                </a>
              </div>
              <div className="absolute top-14 right-5 px-5 py-5 flex flex-col gap-5 bg-white shadow-md shadow-slate-500 rounded-md -translate-y-24 invisible">
                <ul className="w-full flex flex-col gap-2">
                  <li>
                    <a href="" className="navbar-list font-open-sans">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list font-open-sans">
                      Feature
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list font-open-sans">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list font-open-sans">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list font-open-sans">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list font-open-sans">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="" className="navbar-list font-open-sans">
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div className="w-auto flex gap-2">
                  <div className="w-24 rounded-full p-[0.1rem] bg-linear-to-r from-digital-aqua to-deep-blue">
                    <button className="w-full rounded-full bg-white">
                      <span className=" text-base font-semibold bg-linear-to-r from-digital-aqua to-deep-blue bg-clip-text text-transparent inline-block">
                        Login
                      </span>
                    </button>
                  </div>

                  <div className="w-24 rounded-full p-[0.1rem] bg-linear-to-r from-digital-aqua to-deep-blue">
                    <button className="w-full rounded-full bg-transparent text-white text-base font-semibold">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[10%]">
              <button className="flex flex-col gap-1">
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
}

export default App;
