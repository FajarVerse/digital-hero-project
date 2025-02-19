import SectionThreeFragment from "../components/fragments/section-three/SectionThree";
import AuthLayout from "../components/layouts/AuthLayout";

const SectionThree = () => {
  return (
    <>
      <AuthLayout className="bg-white">
        <div className=" w-full px-5 md:px-7 lg:px-10 xl:px-20">
          <SectionThreeFragment />
        </div>
      </AuthLayout>
    </>
  );
};

export default SectionThree;
