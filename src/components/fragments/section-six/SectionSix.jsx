import Header from "../../elements/header";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

const SectionSixFragment = () => {
  return (
    <>
      <div className="w-full mb-5 md:mb-12 lg:mb-7">
        <Header>
          <span className="bg-linear-to-r from-digital-aqua to-deep-blue bg-clip-text text-transparent">
            Flexible Plans
          </span>{" "}
          <span className="text-indigo-blue">Flexible Plans</span>
        </Header>
      </div>
      <div className="w-full flex items-center flex-col gap-5 md:flex-row md:gap-3 lg:justify-center lg:gap-3 xl:gap-7">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
    </>
  );
};

export default SectionSixFragment;
