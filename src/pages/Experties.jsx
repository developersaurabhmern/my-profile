import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faServer,
    faCloud,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import { useEffect } from "react";


const Section = ({ icon, title, subtitle, items }) => (
    <div className="relative pl-14 pb-14">

        {/* Timeline Line */}
        <span className="absolute left-6 top-0 h-full w-px bg-cyan-400/30"></span>

        {/* Icon */}
        <div className="absolute left-2 top-0 w-10 h-10 rounded-xl bg-black border border-cyan-400/40 flex items-center justify-center shadow-lg">
            <FontAwesomeIcon icon={icon} className="text-cyan-400 text-lg" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-cyan-400 mb-3">{subtitle}</p>

        <ul className="list-disc list-inside text-gray-300 space-y-1">
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
);
export default function Expertise() {
    useEffect(() => {
        document.title = "Saurabh Prajapati | My Expertise";
    }, []);

    return (
        <section className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-10">
            <Navbar />
            {/* Header */}
            <h1 className="text-4xl font-bold text-white">Expertise</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-3 rounded-full" />

            <div className="mt-12">

                <Section
                    icon={faServer}
                    title="Backend & APIs"
                    subtitle="Node.js • NestJS • PostgreSQL • JWT • REST • AWS"
                    items={[
                        "RESTful API design",
                        "JWT authentication & authorization",
                        "Role-based access control (RBAC)",
                        "Secure API architecture",
                        "WebSockets & Socket.IO",
                        "File uploads & media processing",
                        "Background jobs & queues",
                        "Rate limiting & security hardening",
                        "Microservice-ready architecture",
                        "AWS EC2, S3 & Lambda deployments",
                    ]}
                />

                <Section
                    icon={faGlobe}
                    title="Web Applications"
                    subtitle="React • Next.js • Tailwind • Bootstrap • SEO"
                    items={[
                        "SEO optimized pages",
                        "Admin dashboards",
                        "Authentication systems",
                        "Chrome extensions",
                        "Analytics tracking",
                        "High-performance UI/UX",
                    ]}
                />

                <Section
                    icon={faCloud}
                    title="DevOps, Cloud & AWS"
                    subtitle="Docker • GitHub • AWS • Kubernetes"
                    items={[
                        "Dockerized application deployments",
                        "CI/CD pipelines (GitHub Actions, Jenkins)",
                        "Infrastructure as Code (Terraform / CloudFormation)",
                        "Cloud monitoring & logging",
                        "Auto-scaling & load balancing",
                        "Multi-environment deployment",
                        "AWS SES transactional emails",
                        "Cloud-based AI/ML integrations",
                    ]}
                />


            </div>
        </section>
    );
}
