import Button from "../../elements/button";
import Header from "../../elements/header";

const SectionFourFragment = () => {
  return (
    <>
      <div className="w-full mb-2 lg:mb-5">
        <Header className="text-indigo-blue">
          We Feel You, So We Built This!
        </Header>
      </div>
      <div className="h-full grid grid-cols-1 gap-5 px-1 py-8 md:grid-cols-2 lg:h-80 lg:gap-10 xl:h-96 xl:gap-20">
        <div className="flex flex-col justify-between">
          <p className="font-poppins font-medium text-sm text-black text-justify lg:text-base xl:text-lg">
            DIRO streamlines reservations for Indonesian businesses through an
            AI-powered platform that automates scheduling and management. Our
            integrated system helps companies save time and minimize errors.
            With DIRO, businesses can focus on growth while our smart system
            handles scheduling complexities.
          </p>
          <div className="mt-6 gap-4 hidden md:flex ">
            <Button className="bg-linear-to-r from-digital-aqua to-deep-blue text-white shadow-[0_0_20px_rgba(0,198,255,0.6)]">
              Learn More
            </Button>
            <Button className="bg-deep-blue/20 text-indigo-blue">
              Start Your Free Trial
            </Button>
          </div>
        </div>

        <div className="w-full h-full flex flex-col">
          <div className="w-full h-52 rounded grid place-items-center items-center md:h-full bg-[#D9D9D9]">
            <button className="w-14 h-14 rounded-full flex justify-center items-center bg-linear-to-r from-digital-aqua to-deep-blue md:w-16 md:h-16">
              <a href="#" className="w-7 h-7 ml-2 segitiga bg-white" />
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-5 md:hidden">
            <Button className="py-3 bg-linear-to-r from-digital-aqua to-deep-blue text-white shadow-[0_0_20px_rgba(0,198,255,0.6)]">
              Learn More
            </Button>
            <Button className="bg-deep-blue/20 text-indigo-blue">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFourFragment;
