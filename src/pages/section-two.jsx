import SectionTwoFragment from "../components/fragments/section-two/SectionTwo";
import Shape from "../components/fragments/section-two/Shape";
import AuthLayout from "../components/layouts/AuthLayout";

const SectionTwo = () => {
  return (
    <>
      <AuthLayout className="h-[42rem] bg-linear-to-r from-digital-aqua to-deep-blue relative overflow-hidden lg:py-32 xl:h-[56rem]">
        <Shape />
        <div className="w-full px-5 z-50 overflow-hidden md:px-7">
          <SectionTwoFragment />
        </div>
      </AuthLayout>
    </>
  );
};

export default SectionTwo;
