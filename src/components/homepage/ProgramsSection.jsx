import SectionCard from "./ProgramCard";
import { sectionCards } from "./constants";

const ProgramsSection = () => {
    return (
        <section id="programs-section">
            {sectionCards.map((card) => <SectionCard key={card.title} data={card} />)}
        </section>
    );
}

export default ProgramsSection;