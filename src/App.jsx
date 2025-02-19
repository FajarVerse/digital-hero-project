import { useRef } from "react";
import Navbar from "./components/layouts/Navbar";
import imageSection1 from "./assets/image/diro_image_section1.png";

function App() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen py-24 pb-32 bg-white">
        <div className=" container mx-auto">
          <div className="px-5 w-full flex flex-col justify-center">
            <div className="w-full mb-3">
              <h1 className="font-poppins font-bold text-2xl text-center text-indigo-blue">
                DIRO: Digital Intelligence
              </h1>
              <h1 className="font-poppins font-bold text-2xl text-center text-indigo-blue">
                Reservation Oracle
              </h1>
            </div>
            <div className="w-full mb-3">
              <img src={imageSection1} alt="" />
            </div>
            <div className="w-full mb-2">
              <p className="font-poppins font-base text-[0.8rem] text-center text-black">
                Revolutionizing Indonesia's businesses with AI-powered
                reservation-bringing efficiency, automation and seamless
                experiences to drive growth and streamine operations
                effortlessly.
              </p>
            </div>
            <div className="w-full flex justify-center gap-5 mt-3">
              <button className="w-[9.5rem] py-2.5 bg-linear-to-r from-digital-aqua to-deep-blue rounded-sm font-poppins font-medium text-sm text-white shadow-[0_0_20px_rgba(0,198,255,0.6)]">
                Start Free Trial
              </button>
              <button className="w-[9.5rem] py-2.5 bg-deep-blue/20 rounded-sm font-poppins font-medium text-sm text-indigo-blue flex justify-center items-center gap-1">
                <div className="w-7 h-7 bg-deep-blue/15 rounded-full"></div>
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
