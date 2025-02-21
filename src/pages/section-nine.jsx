import ShapeContact from "../components/elements/section-nine/shapeContact";
import SectionNineFragment from "../components/fragments/sectio-nine/SectionNine";

const SectionNine = () => {
  return (
    <>
      <section className="py-5 blue-gradient relative xl:py-10">
        <div className="w-full relative z-30 px-5 md:px-10 md:flex items-center lg:px-14 xl:px-32">
          <SectionNineFragment/>
        </div>
        <div className="w-full absolute top-0 left-0 bottom-0 right-0">
          <ShapeContact className="top-0 left-0 opacity-60 lg:opacity-30" />
          <ShapeContact className="bottom-0 right-0 rotate-180 opacity-30 lg:top-0 lg:rotate-0 lg:scale-x-[-1] xl:opacity-15" />
        </div>
      </section>
    </>
  );
};

export default SectionNine;
