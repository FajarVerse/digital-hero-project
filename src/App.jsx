import Navbar from "./components/layouts/Navbar";
import SectionFive from "./pages/section-five";
import SectionFour from "./pages/section-four";
import SectionOne from "./pages/section-one";
import SectionSix from "./pages/section-six";
import SectionThree from "./pages/section-three";
import SectionTwo from "./pages/section-two";
import SectionSeven from "./pages/section-seven";
import AuthLayout from "./components/layouts/AuthLayout";
import Header from "./components/elements/header";
import CardTestimony from "./components/elements/section-eight/cardTestimony";
import Indicator from "./components/elements/section-eight/indicator";
import SectionEight from "./pages/section-eight";

import shapeContact from "./assets/image/section9/shape_contact.png";
import ilustrasi from "./assets/image/section9/ilus_contact.png";
import Button from "./components/elements/button";
import ShapeContact from "./components/elements/section-nine/shapeContact";
import ButtonContact from "./components/elements/section-nine/buttonContact";
import SectionNine from "./pages/section-nine";

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
    </>
  );
}

export default App;
