import DonateSection from "./DonateSection";
import Hero from "./Hero";
import VolunteerSection from "./VolunteerSection";
import ProgramsSection from "./ProgramsSection";
import "./styles/Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <ProgramsSection />
      <DonateSection />
      <VolunteerSection />
    </>
  );
};

export default Home;
