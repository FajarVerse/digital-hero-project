import Navbar from "./components/layouts/Navbar";
import Footer from "./pages/footer";
import SectionEight from "./pages/section-eight";
import SectionFive from "./pages/section-five";
import SectionFour from "./pages/section-four";
import SectionNine from "./pages/section-nine";
import SectionOne from "./pages/section-one";
import SectionSeven from "./pages/section-seven";
import SectionSix from "./pages/section-six";
import SectionThree from "./pages/section-three";
import SectionTwo from "./pages/section-two";

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
