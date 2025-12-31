import Navbar from "../components/Navbar"
import Stats from "../components/Stats"
import ProjectCard from "../components/ProjectCard"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Saurabh Prajapati | About";
  }, []);

  const projects = [
    {
      title: "Unified Consent & Authorization Management System (UCAMS)",
      image: "../src/assets/projects/ucams.png",
    },
    {
      title: "EPR Portal for Management of Waste Tyre",
      image: "../src/assets/projects/Waste-Tyre.png",
    },
    {
      title: "EPR Portal for Battery Waste Management",
      image: "../src/assets/projects/EPR-Battery.png",
    },
    {
      title: "BFC Softtect Website",
      image: "../src/assets/projects/BFC-Softtech.png",
    },
    {
      title: "BFC Publications Book Store",
      image: "../src/assets/projects/Book-Store.png",
    },
  ];


  return (
    <div className="flex gap-6 max-w-7xl mx-auto">

      <section className="flex-1 relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-10">
        <Navbar />

        <h1 className="text-4xl font-bold text-white">
          Digital Identity
        </h1>

        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-3 rounded-full" />

        <p className="text-gray-300 mt-6 max-w-3xl leading-relaxed">
          I'm <span className="gradient-text">Saurabh Prajpaati</span>, a Senior MERN Stack Developer with 8+ years of experience in designing, developing, and maintaining scalable web applications using Node.js, React.js, and MongoDB. Extensive experience working on government and fintech platforms, RESTful APIs, authentication, payment gateway integrations, and performance optimization.
        </p>

        <Stats />

        <h2 className="text-xl font-semibold mt-12 text-white">
          Featured Projects
        </h2>
        <p className="text-gray-400 mb-6">
          A glimpse into my professional journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>

      </section>

    </div>
  )
}
