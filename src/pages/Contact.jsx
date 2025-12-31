import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faPaperclip,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = "Saurabh Prajapati | Contact";
    }, []);

    return (
        <section className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-10">
            <Navbar />
            {/* Header */}
            <h1 className="text-4xl font-bold text-white">Let’s Connect</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-3 rounded-full" />

            {/* Map */}
            {/* <div className="mt-8 rounded-2xl overflow-hidden border border-white/10">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Thidiff%20Technologies%20Bangalore&output=embed"
          className="w-full h-[320px] grayscale contrast-125 opacity-90"
          loading="lazy"
        />
      </div> */}

            {/* Contact Details */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Info */}
                <div className="md:col-span-2 rounded-2xl bg-black/40 border border-white/10 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Contact Details
                    </h2>

                    <div className="space-y-4 text-gray-300 text-sm">
                        <p className="flex items-center gap-3">
                            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-900/30 border border-cyan-400/30">
                                <FontAwesomeIcon icon={faPhone} className="text-cyan-400" />
                            </span>
                            +91 96510 44338
                        </p>

                        <p className="flex items-center gap-3">
                            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-900/30 border border-cyan-400/30">
                                <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" />
                            </span>
                            saurabhprajapati242@gmail.com
                        </p>
                    </div>
                </div>

                {/* QR */}
                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 flex items-center justify-center">
                    {/* <img
            src="/qr.png"
            alt="QR Code"
            className="w-32 h-32 opacity-90"
          /> */}
                </div>
            </div>

            {/* Contact Form */}
            <div className="mt-10 rounded-2xl bg-black/40 border border-white/10 p-6">
                <h2 className="text-xl font-semibold text-white mb-6">
                    Contact Form
                </h2>

                <form className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60"
                        />
                    </div>

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60"
                    />

                    {/* File Upload */}
                    <label className="flex items-center gap-3 text-cyan-400 cursor-pointer text-sm">
                        <FontAwesomeIcon icon={faPaperclip} />
                        Attach PDF (Optional)
                        <input type="file" accept="application/pdf" hidden />
                    </label>

                    <p className="text-xs text-gray-500">Only PDF up to 10 MB</p>

                    {/* Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-medium hover:opacity-90 transition"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                            Send Message
                        </button>
                    </div>

                </form>
            </div>

        </section>
    );
}
