import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import "./index.css";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Update navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uj9fjgu",
        "template_ldwubdp",
        form.current,
        "leR4zXkF9jQQQ8871"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          e.target.reset();
          setTimeout(() => setIsModalOpen(false), 2000);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  // Update navItems to match new headings
  const navItems = ["About", "Expertise", "Portfolio", "Contact"];

  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/landing.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${
          isScrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="text-white font-bold text-xl tracking-wide">
            Paul DevWorks
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white uppercase hover:text-blue-400 transition scroll-mt-24"
              >
                {item}
              </a>
            ))}
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white uppercase hover:text-blue-400 transition scroll-mt-24"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content (Hero Section) */}
      <main className="pt-20 h-[80vh] flex flex-col justify-center items-center text-center text-white relative z-10 gap-4 px-4">
        {/* Responsive Profile Image */}
        <div className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-md">
          Paul DevWorks
        </h1>
        <p className="text-xl font-semibold drop-shadow-md">
          Transforming Ideas Into Digital Realities
        </p>
        <p className="text-lg max-w-xl">
          I empower businesses by creating seamless, scalable digital solutions
          that engage and inspire. Let’s collaborate to bring your vision to life.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-2 bg-white text-indigo-600 px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition"
        >
          Let's Create Your Next Success
        </button>
      </main>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">
              Let's Start a Conversation
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
              {statusMessage && (
                <p className="text-center text-sm text-green-600 mt-2">
                  {statusMessage}
                </p>
              )}
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Sections */}
      <section
        id="content"
        className="-mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 py-10 text-white text-center relative z-10"
      >
        {/* About Section */}
        <div id="about" className="scroll-mt-24" data-aos="fade-right">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-base">
            I'm a full-stack developer with a passion for building modern,
            scalable web applications. I blend creativity with technical
            expertise to deliver solutions that not only look stunning but also
            drive measurable results for your business.
          </p>
        </div>

        {/* Expertise Section */}
        <div id="expertise" className="scroll-mt-24" data-aos="fade-left">
          <h2 className="text-2xl font-semibold">Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              "TypeScript",
              "React.js",
              "Express.js",
              "WordPress",
              "Tailwind CSS",
              "JavaScript",
              "Graphic Design",
              "Figma Design",
              "React Native",
              "MongoDb",
              "Cloud Hosting",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white text-gray-800 py-2 px-3 rounded-lg text-sm shadow hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div id="portfolio" className="scroll-mt-24" data-aos="fade-up">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <ul className="text-base space-y-3">
            {[
              {
                name: "FunzaSasa",
                desc: "Connecting students with expert tutors through an intuitive platform.",
                url: "https://funzasasa.co.ke",
              },
              {
                name: "Supa Toto",
                desc: "A dynamic online store for kids' clothing.",
                url: "https://supatoto.co.ke",
              },
              {
                name: "Ever True Cosmetics",
                desc: "A sleek eCommerce site for beauty products.",
                url: "https://evertruecosmetics.co.ke",
              },
              {
                name: "Tax Blog",
                desc: "A WordPress blog offering insightful tax services.",
                url: "https://taxwise.co.ke",
              },
            ].map((project, index) => (
              <li
                key={index}
                className="bg-white text-gray-800 p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <strong className="font-semibold">{project.name}</strong>
                  <span>{project.desc}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    Visit
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div id="contact" className="scroll-mt-24" data-aos="fade-up">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-base">
            Ready to elevate your digital presence? Let's chat about your next
            project!
          </p>
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="mt-2 bg-white text-indigo-600 px-6 py-2 rounded-full shadow-lg hover:bg-indigo-50 transition"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Contact Pop-up */}
      {isContactPopupOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p>
              Email:{" "}
              <a href="mailto:paulpep2002@gmail.com" className="text-indigo-600">
                paulpep2002@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 mt-4">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/254728872800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600"
              >
                WhatsApp Me
              </a>
            </p>
            <button
              onClick={() => setIsContactPopupOpen(false)}
              className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-4 text-center text-gray-300 relative z-10 text-xs tracking-wider">
        &copy; {new Date().getFullYear()} Paul DevWorks. All Rights Reserved.
      </footer>
    </div>
  );
}
