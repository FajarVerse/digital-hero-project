import AuthLayout from "./components/layouts/AuthLayout";
import Navbar from "./components/layouts/Navbar";
import SectionOne from "./pages/section-one";
import SectionThree from "./pages/section-three";
import shape from "./assets/image/section2/shape.png";
import Header from "./components/elements/header";
import ilustrasi from "./assets/image/section2/diro_ilus_2.png";

function App() {
  return (
    <>
      <Navbar />
      <SectionOne />

      <AuthLayout className="bg-linear-to-r from-digital-aqua to-deep-blue relative overflow-hidden">
        <div className="w-1/2 absolute top-0 left-0 bottom-0 overflow-hidden">
          <img
            src={shape}
            alt=""
            className="scale-[500%] absolute bottom-40 left-0 rotate-90 -translate-x-52 opacity-35"
          />
        </div>
        <div className="w-1/2 absolute top-0 right-0 bottom-0 overflow-hidden">
          <img
            src={shape}
            alt=""
            className="scale-[350%] absolute bottom-20  right-0 translate-x-20 opacity-35"
          />
        </div>

        <div className="w-full px-5 z-50 overflow-hidden">
          <div className="w-full">
            <Header className="text-white">
              We've Listened and Understood Your Struggles
            </Header>
          </div>
          <div className="w-full absolute bottom-6 left-1/2 -translate-x-1/2">
            <img src={ilustrasi} alt="" className="scale-125" />
          </div>
          <div className="w-full">
            <div className="w-32 px-2.5 py-2 rounded-md bg-white">
              <h1 className="font-poppins font-semibold text-[0.6rem] text-indigo-blue text-center">
                Lack of Membership & Loyalty Tracking
              </h1>
              <p className="font-poppins font-light text-[0.45rem] text-black text-center mt-1">
                Regular customers have no way to track their usage, balances, or
                earn rewards, making retention harder.
              </p>
            </div>
          </div>
        </div>
      </AuthLayout>

      <SectionThree />
    </>
  );
}

export default App;
