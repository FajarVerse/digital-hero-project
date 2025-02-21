import SectionFourFragment from "../components/fragments/section-four/SectionFour";
import AuthLayout from "../components/layouts/AuthLayout";

const SectionFour = () => {
  return (
    <>
      <AuthLayout className="pt-28" id="solutions">
        <div className="w-full px-5 md:px-10 lg:px-14 xl:px-16 2xl:px-48">
          <SectionFourFragment />
        </div>
      </AuthLayout>
    </>
  );
};


export default SectionFour