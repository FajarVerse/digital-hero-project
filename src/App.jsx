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
    </>
  );
}

export default App;
