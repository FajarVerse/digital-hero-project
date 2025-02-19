import Header from "../../elements/section-one/header";
import imageSection1 from "../../../assets/image/diro_image_section1.png"
import Paragraph from "../../elements/section-one/paragraph";
import Button from "../../elements/button";

const SectionOneFragment = () => {
  return (
    <>
      <div className="w-full mb-3 lg:mb-2 xl:mb-0">
        <Header>DIRO: Digital Intelligence</Header>
        <Header>Reservation Oracle</Header>
      </div>
      <div className="w-full mb-3 xl:mb-0">
        <img
          src={imageSection1}
          alt=""
          className="md:w-[85%] mx-auto lg:w-[80%] xl:w-[60%] "
        />
      </div>
      <div className="w-full mb-2 md:px-10 lg:px-20 xl:px-56">
        <Paragraph>
          Revolutionizing Indonesia's businesses with AI-powered
          reservation-bringing efficiency, automation and seamless experiences
          to drive growth and streamine operations effortlessly.
        </Paragraph>
      </div>
      <div className="w-full flex justify-center gap-2 mt-3 md:gap-3 xl:gap-5">
        <Button className="bg-linear-to-r from-digital-aqua to-deep-blue text-white shadow-[0_0_20px_rgba(0,198,255,0.6)]">
          Start Free Trial
        </Button>
        <Button className="bg-deep-blue/20 text-indigo-blue gap-1 xl:gap-2 ">
          <div className="w-5 h-5 bg-deep-blue/15 rounded-full flex items-center justify-center md:w-[1.4rem] md:h-[1.4rem] xl:w-8 xl:h-8 ">
            <div className="segitiga bg-deep-blue w-2 h-2 ml-0.5"></div>
          </div>
          Request Demo
        </Button>
      </div>
    </>
  );
};

export default SectionOneFragment;
