import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built end to end."
          description="A mix of full-stack systems and AI-powered tools — from schema to shipped UI."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
