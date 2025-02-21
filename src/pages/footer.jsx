import BodyFooterContent from "../components/fragments/footer/BodyFooterContent";
import BottomFooterContent from "../components/fragments/footer/BottomFooterContent";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-10 px-5 md:px-7 lg:px-16 xl:px-40 2xl:px-48">
        <BodyFooterContent />
        <BottomFooterContent />
      </footer>
    </>
  );
};

export default Footer;
