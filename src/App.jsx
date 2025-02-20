import Header from "./components/elements/header";
import List from "./components/elements/list";
import AuthLayout from "./components/layouts/AuthLayout";
import Navbar from "./components/layouts/Navbar";
import SectionFive from "./pages/section-five";
import SectionFour from "./pages/section-four";
import SectionOne from "./pages/section-one";
import SectionThree from "./pages/section-three";
import SectionTwo from "./pages/section-two";
import icon1 from "./assets/image/section6/diro_icon_1.png";
import ListBigCard from "./components/elements/section-six/listBigCard";
import BigCard from "./components/elements/section-six/bigCard";
import SectionSix from "./pages/section-six";

function App() {
  const list = [
    "Everything in the Basic Plan",
    "Advanced Analytics Dashboard",
    "Loyalty & Rewards Program Management",
    "Multi-location Management",
  ];

  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </>
  );
}

export default App;
