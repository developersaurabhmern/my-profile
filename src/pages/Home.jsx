import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import ucams from "../assets/projects/ucams.png";
import WasteTyre from "../assets/projects/Waste-Tyre.png";
import EPRBattery from "../assets/projects/EPR-Battery.png";
import BFCSofttech from "../assets/projects/BFC-Softtech.png";
import BookStore from "../assets/projects/Book-Store.png";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Saurabh Prajapati | About";

    // Simulate image loading
    const images = [ucams, WasteTyre, EPRBattery, BFCSofttech, BookStore];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false); // all images loaded
        }
      };
    });
  }, []);

  const projects = [
    { title: "Unified Consent & Authorization Management System (UCAMS)", image: ucams },
    { title: "EPR Portal for Management of Waste Tyre", image: WasteTyre },
    { title: "EPR Portal for Battery Waste Management", image: EPRBattery },
    { title: "BFC Softtect Website", image: BFCSofttech },
    { title: "BFC Publications Book Store", image: BookStore },
  ];

  if (loading) {
    // Simple loader
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="flex gap-6 max-w-7xl mx-auto">
      <section className="flex-1 relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-10">
        <Navbar />

        <h1 className="text-4xl font-bold text-white">Digital Identity</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-3 rounded-full" />

        <p className="text-gray-300 mt-6 max-w-3xl leading-relaxed">
          I'm <span className="gradient-text">Saurabh Prajapati</span>, a Senior MERN Stack Developer with 8+ years of experience in designing, developing, and maintaining scalable web applications using Node.js, React.js, and MongoDB. Extensive experience working on government and fintech platforms, RESTful APIs, authentication, payment gateway integrations, and performance optimization.
        </p>

        <Stats />

        <h2 className="text-xl font-semibold mt-12 text-white">Featured Projects</h2>
        <p className="text-gray-400 mb-6">A glimpse into my professional journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} image={project.image} title={project.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
