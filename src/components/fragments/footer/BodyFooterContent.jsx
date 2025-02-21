import ListFooter from "../../elements/footer/listFooter";
import SubHeader from "../../elements/footer/subHeader";
import logo from "../../../assets/image/diro_logo.png";
import googleplay from "../../../assets/image/footer/googleplay.png";
import appstore from "../../../assets/image/footer/appstore.png";

const BodyFooterContent = () => {
  return (
    <>
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:justify-items-center">
        <div>
          <img
            src={logo}
            alt="Diro Logo"
            className="w-48 lg:w-56 lg:h-16 xl:w-72 xl:h-20"
          />
          <p className="mt-4 font-poppins font-[400] text-sm text-gray-600">
            Revolutionizing Indonesia’s businesses with AI-powered
            reservations—bringing efficiency, automation, and seamless
            experiences to drive growth and streamline operations effortlessly.
          </p>
        </div>

        <div>
          <SubHeader>Features</SubHeader>
          <ul>
            <ListFooter>Smart Scheduling</ListFooter>
            <ListFooter>Pricing & Vouchers</ListFooter>
            <ListFooter>Payment Integrations</ListFooter>
            <ListFooter>Customer & Staff Management</ListFooter>
            <ListFooter>Multi-Store Management</ListFooter>
            <ListFooter>Offline Booking Sync</ListFooter>
          </ul>

          <div className="hidden lg:block lg:mt-5">
            <SubHeader>Pricing</SubHeader>
            <SubHeader>FAQ</SubHeader>
            <SubHeader>Testimonial</SubHeader>
            <SubHeader>Blog</SubHeader>
            <SubHeader>Contact Us</SubHeader>
          </div>
        </div>

        <div>
          <SubHeader>Business Solution</SubHeader>
          <ul>
            <ListFooter>Rental Services</ListFooter>
            <ListFooter>Professional Services</ListFooter>
            <ListFooter>Barbershop & Beauty Salon</ListFooter>
          </ul>
        </div>

        <div>
          <SubHeader>Company</SubHeader>
          <ul>
            <ListFooter>Our Story</ListFooter>
            <ListFooter>Mission & Values</ListFooter>
            <ListFooter>Career</ListFooter>
            <ListFooter>Contact Us</ListFooter>
          </ul>

          <div className="md:hidden">
            <SubHeader>Pricing</SubHeader>
            <SubHeader>FAQ</SubHeader>
            <SubHeader>Testimonial</SubHeader>
            <SubHeader>Blog</SubHeader>
            <SubHeader>Contact Us</SubHeader>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <img src={googleplay} alt="Google Play" className="w-32 hover:scale-105 transition duration-300 ease-in-out" />
            <img src={appstore} alt="App Store" className="w-32 hover:scale-105 transition duration-300 ease-in-out" />
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <SubHeader>Pricing</SubHeader>
          <SubHeader>FAQ</SubHeader>
          <SubHeader>Testimonial</SubHeader>
          <SubHeader>Blog</SubHeader>
          <SubHeader>Contact Us</SubHeader>
        </div>
      </div>
    </>
  );
};

export default BodyFooterContent;
