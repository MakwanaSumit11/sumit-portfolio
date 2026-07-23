import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import CursorGlow from "./components/CursorGlow";
import LoadingScreen from "./components/LoadingScreen";
import InteractiveCanvas from "./components/InteractiveCanvas";
import ProjectDetailsModal from "./components/ProjectDetailsModal";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ProjectsHub from "./sections/ProjectsHub";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("home"); // "home" | "projects-hub"

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [view]);

  return (
    <ThemeProvider>
      <LoadingScreen visible={loading} />
      <InteractiveCanvas />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar
        currentView={view}
        onViewProjects={() => setView("projects-hub")}
        onViewHome={() => setView("home")}
      />
      
      {view === "home" ? (
        <main className="relative z-10">
          <Hero onViewProjects={() => setView("projects-hub")} />
          <About />
          <Skills />
          <Projects onOpenDetails={handleOpenDetails} />
          <Experience />
          <Certificates />
          <Achievements />
          <Contact />
        </main>
      ) : (
        <main className="relative z-10">
          <ProjectsHub onBack={() => setView("home")} />
        </main>
      )}

      <Footer />
      <BackToTop />
      
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />
    </ThemeProvider>
  );
}
