import SectionEightFragment from "../components/fragments/section-eight/SectionEight";
import AuthLayout from "../components/layouts/AuthLayout";

const SectionEight = () => {
  return (
    <>
      <AuthLayout className="xl:pt-28">
        <div className="w-full px-5 md:px-10 lg:px-20 xl:px-28 2xl:px-48">
          <SectionEightFragment />
        </div>
      </AuthLayout>
    </>
  );
};

export default SectionEight;
