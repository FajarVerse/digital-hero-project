import Navbar from "./components/layouts/Navbar";
import SectionEight from "./pages/section-eight";
import SectionFive from "./pages/section-five";
import SectionFour from "./pages/section-four";
import SectionOne from "./pages/section-one";
import SectionSeven from "./pages/section-seven";
import SectionSix from "./pages/section-six";
import SectionThree from "./pages/section-three";
import SectionTwo from "./pages/section-two";
import SectionNine from "./pages/section-nine";
import AuthLayout from "./components/layouts/AuthLayout";
import logo from "./assets/image/diro_logo.png";
import ListFooter from "./components/elements/footer/listFooter";
import SubHeader from "./components/elements/footer/subHeader";
import GooglePlay from "./assets/image/footer/googleplay.png";
import AppStore from "./assets/image/footer/appstore.png";
import BodyFooterContent from "./components/fragments/footer/BodyFooterContent";
import BottomFooterContent from "./components/fragments/footer/BottomContent";
import Footer from "./pages/footer";

function App() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <Footer />
    </>
  );
}

export default App;
