import BodyFooterContent from "../components/fragments/footer/BodyFooterContent";
import BottomFooterContent from "../components/fragments/footer/BottomContent";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-10 px-5 md:px-7 lg:px-16 xl:px-40">
        <BodyFooterContent />
        <BottomFooterContent />
      </footer>
    </>
  );
};

export default Footer;
