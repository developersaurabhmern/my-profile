import Navbar from "../components/Navbar"
import { useEffect } from "react";

export default function Resume() {
    useEffect(() => {
        document.title = "Saurabh Prajapati | Resume";
    }, []);

    return (
        <section className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-10">
            <Navbar />
            {/* Header */}
            <h1 className="text-4xl font-bold text-white">
                Career Snapshot
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mt-3 rounded-full" />

            {/* Academic Credentials */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-white mb-4">Academic Credentials</h2>

                <div className="pl-6 border-l border-cyan-400/40">
                    <h3 className="text-lg font-semibold text-white">
                        Bachelor of Computer Application (BCA)
                    </h3>
                    <p className="text-gray-400">
                        Dr. Ram Manohar Lohia Awadh University, Ayodhya (UP)
                    </p>
                </div>

                <div className="pl-6 border-l border-cyan-400/40">
                    <h3 className="text-lg font-semibold text-white">
                        Master of Computer Application (MCA)
                    </h3>
                    <p className="text-gray-400">
                        Sabarmati University, formerly Calorx Teachers' University, Ahmedabad, Gujarat.
                    </p>
                </div>
            </div>

            {/* Work Experience */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-white mb-6">Work Experience</h2>

                <div className="space-y-8 pl-6 border-l border-cyan-400/40">

                    {/* CPCB */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Sr. Full Stack Developer – Central Pollution Control Board (CPCB)
                        </h3>
                        <p className="text-sm text-cyan-400">
                            Through Nippon Data Systems Ltd. & Velocis Systems Pvt. Ltd. (These are payroll company)
                        </p>
                        <p className="text-sm text-gray-400 mb-2">
                            May 2023 – Dec 2025
                        </p>
                        <p className="text-gray-300">
                            Led technical initiatives in web and application development, deployment,
                            and maintenance of multiple CPCB portals and internal tools.
                        </p>
                    </div>

                    {/* BFC Capital */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Senior Full Stack Developer – BFC Capital Pvt. Ltd.
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">
                            Jun 2020 – Apr 2023
                        </p>
                        <p className="text-gray-300">
                            Developed and maintained full-stack applications, ensuring optimized
                            performance, scalability, and secure deployments.
                        </p>
                    </div>

                    {/* Rise Commerce */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Full Stack Developer – Rise Commerce Pvt. Ltd.
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">
                            Mar 2018 – Apr 2020
                        </p>
                        <p className="text-gray-300">
                            Built and deployed web and mobile solutions across multiple projects
                            using modern frontend and backend technologies.
                        </p>
                    </div>

                    {/* Webhearns */}
                    {/* <div>
            <h3 className="text-lg font-semibold text-white">
              Junior Web Developer – Webhearns Pvt. Ltd.
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Jan 2017 – Dec 2017
            </p>
            <p className="text-gray-300">
              Assisted senior developers in PHP and jQuery based projects,
              admin panels, and maintenance tasks.
            </p>
          </div> */}

                </div>
            </div>

            {/* Experience Summary */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-white mb-4">Experience Summary</h2>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>8+ years of experience in web & application development and team leadership.</li>
                    <li>Expert in MERN Stack (Node.js, Express, React.js).</li>
                    <li>Designed and developed secure, scalable RESTful APIs.</li>
                    <li>Integrated third-party APIs and improved UI/UX across applications.</li>
                    <li>Built dashboards, HRMS, BookStore, CMS, and enterprise tools.</li>
                    <li>Experience with Laravel, CodeIgniter, Vue.js.</li>
                    <li>Optimized backend performance and handled large-scale deployments.</li>
                </ul>
            </div>

            {/* Area of Expertise */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-white mb-4">Area of Expertise</h2>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Backend development using Node.js, Express, Socket.io, Laravel.</li>
                    <li>API logic design and system integrations.</li>
                    <li>Docker, Kubernetes, Nginx, Apache deployment & support.</li>
                    <li>Database architecture: MySQL, PostgreSQL, MongoDB.</li>
                    <li>Server setup, CI/CD, and environment configuration.</li>
                    <li>Unit testing and performance optimization.</li>
                    <li>Client-centric solution design within defined timelines.</li>
                </ul>
            </div>

        </section>
    );
}
