import SectionSixFragment from "../components/fragments/section-six/SectionSix";
import AuthLayout from "../components/layouts/AuthLayout";

const SectionSix = () => {
  return (
    <AuthLayout className="bg-white" id="pricing">
      <div className=" w-full px-5 md:px-7 lg:px-16 xl:px-20 2xl:px-48">
        <SectionSixFragment />
      </div>
    </AuthLayout>
  );
};

export default SectionSix;
