import SectionOneFragment from "../components/fragments/section-one/SectionOne";
import AuthLayout from "../components/layouts/AuthLayout";

const SectionOne = () => {
  return (
    <>
      <AuthLayout className="bg-white md:py-20 md:pb-0 lg:py-24 lg:pb-10 xl:py-20 xl:pb-0">
        <div className="px-5 w-full flex flex-col justify-center md:px-7 lg:px-10 xl:px-14">
          <SectionOneFragment />
        </div>
      </AuthLayout>
    </>
  );
};

export default SectionOne;
