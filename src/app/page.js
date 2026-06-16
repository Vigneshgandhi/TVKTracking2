import Navbar from "./components/Navbar";
import Main from "./components/Home/Main";
import CMProfile from "./components/Home/cm-profile";
import Footer from "./components/Footer";
import ConfidenceMotion from "./components/Home/confidenceMotion";
import SwearingInCeremonyCard from "./components/Home/SwearingCeremony";
export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <CMProfile />
      <ConfidenceMotion/>
      <SwearingInCeremonyCard/>
      <Footer />
    </>
  );
}
