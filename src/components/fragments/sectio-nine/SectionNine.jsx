import Header from "../../elements/header";
import ButtonContact from "../../elements/section-nine/buttonContact";
import ilustrasi from "../../../assets/image/section9/ilus_contact.png"

const SectionNineFragment = () => {
  return (
    <>
        <div className="w-full md:hidden">
          <Header className="text-white">Have a Question?</Header>
        </div>
        <div className="w-full">
          <img
            src={ilustrasi}
            alt=""
            className="w-[13rem] mx-auto md:w-[17rem] translate-y-5 lg:w-[18rem] xl:w-[25rem] xl:translate-y-10"
          />
        </div>
        <div className="w-full mt-5 lg:pr-4 xl:pr-6 2xl:pr-16">
          <Header className="text-white md:text-left mb-3">
            Have a Question?
          </Header>
          <p className="font-poppins font-medium text-sm text-white lg:text-base xl:text-lg">
            We're ready to help your business grow with an easy and efficient
            reservation system. Our support team is available 24/7 with English
            and Bahasa Indonesia support.
          </p>
          <ButtonContact />
        </div>
    </>
  );
};

export default SectionNineFragment;
