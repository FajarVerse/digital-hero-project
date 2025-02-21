import Header from "../../elements/header";
import Indicator from "../../elements/section-eight/indicator";
import TestimonyContent from "./TestimonyContent";

const SectionEightFragment = () => {
  return (
    <>
      <div className="w-full mb-16">
        <Header>
          <span className="text-indigo-blue">What</span>{" "}
          <span className="bg-linear-to-r from-digital-aqua to-deep-blue bg-clip-text text-transparent">
            Our Customers
          </span>{" "}
          <span className="text-indigo-blue">Say</span>
        </Header>
      </div>
      <TestimonyContent />
      <div className="hidden mt-16 md:flex md:justify-center md:gap-2 md:mt-28 2xl:mt-36">
        <Indicator className="bg-linear-to-r from-digital-aqua to-deep-blue" />
        <Indicator className="bg-[#D9D9D9]" />
        <Indicator className="bg-[#D9D9D9]" />
      </div>
    </>
  );
};

export default SectionEightFragment;
