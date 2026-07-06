import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import "./index.css";
import {
  FaAndroid,
  FaApple,
  FaArrowRight,
  FaBars,
  FaEnvelope,
  FaGithub,
  FaGlobeAfrica,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

const websiteProjects = [
  { name: "Daybreak Learner", url: "https://www.daybreaklearner.com", category: "Learning platform", accent: "from-amber-300 to-orange-500" },
  { name: "Mindcare Health", url: "https://www.mindcarehealth.co.ke", category: "Digital health", accent: "from-emerald-300 to-teal-600" },
  { name: "Nairobi Tyres Experts", url: "https://www.nairobityresexperts.co.ke", category: "Auto services", accent: "from-zinc-200 to-zinc-600" },
  { name: "Grogon Digital", url: "https://www.grogondigital.co.ke", category: "Digital agency", accent: "from-sky-300 to-blue-700" },
  { name: "Pickaxe Trader", url: "https://www.pickaxetrader.com", category: "Trading product", accent: "from-yellow-200 to-lime-600" },
  { name: "eKazi", url: "https://www.ekazi.co.ke", category: "Workforce platform", accent: "from-cyan-300 to-indigo-600" },
  { name: "Grogon Sacco", url: "https://www.grogonsacco.co.ke", category: "Sacco platform", accent: "from-green-300 to-emerald-700" },
  { name: "One Dollar CV Pro", url: "https://www.onedollarcvpro.com", category: "Career tools", accent: "from-fuchsia-300 to-rose-600" },
];

const appProjects = [
  {
    name: "Daybreak App",
    tagline: "Learning that follows the student.",
    description:
      "Online learning, institution classrooms, course media, and an AI tutor that helps learners revise, ask questions, and keep moving through lessons.",
  },
  {
    name: "Grogon App",
    tagline: "A marketplace for motion.",
    description:
      "A listing app for auto spare parts, motorcycle parts, and vehicle sales, built to help buyers discover stock faster and sellers move inventory clearly.",
  },
  {
    name: "Grogon Sacco App",
    tagline: "Member services for the Grogon ecosystem.",
    description:
      "A SACCO app for Grogon shop owners and mechanics to access member services, manage activity, and stay connected to their business community.",
  },
  {
    name: "Mindcare App",
    tagline: "Therapy access from anywhere.",
    description:
      "An online therapy experience for clients to connect with mental health support, book care, and continue wellness conversations privately.",
  },
  {
    name: "eKazi App",
    tagline: "Handyman work made easier to find.",
    description:
      "A service app for handyman activities, connecting customers with practical help for repairs, maintenance, installation, and field tasks.",
  },
];

const skills = ["React", "React Native", "TypeScript", "Node.js", "Express", "Tailwind CSS", "WordPress", "MongoDB", "Cloud hosting", "Product design", "Mobile apps", "Payments"];

const contact = {
  phone: "+25472887280",
  whatsapp: "https://wa.me/25472887280",
  email: "support@ekazi.co.ke",
  location: "2nd Floor, Room B18, Kirinyaga Business Center, Nairobi",
  github: "https://github.com/paulmbugua",
};

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 70 });
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_uj9fjgu", "template_ldwubdp", form.current, "leR4zXkF9jQQQ8871")
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully.");
          e.target.reset();
          setTimeout(() => setIsModalOpen(false), 1800);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  const navItems = ["About", "Websites", "Apps", "Contact"];

  return (
    <div className="min-h-screen bg-[#070a12] text-white">
      <div className="fixed inset-0 -z-10">
        <img src="/landing.png" alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.35),transparent_35%),linear-gradient(135deg,rgba(7,10,18,0.92),rgba(15,23,42,0.9)_45%,rgba(2,6,23,0.95))]" />
      </div>

      <nav className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${isScrolled ? "border-b border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img src="/brand-mark.svg" alt="Paul DevWorks" className="h-9 w-9 rounded-2xl object-contain shadow-lg shadow-cyan-950/20" />
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-white">Paul DevWorks</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:text-cyan-300">
                {item}
              </a>
            ))}
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-cyan-300 hover:text-cyan-300" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white md:hidden" aria-label="Toggle menu">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                  {item}
                </a>
              ))}
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        )}
      </nav>

      <main id="home" className="relative mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <section className="grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Full-stack builder in Nairobi</div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">I build useful websites, apps, and platforms for real businesses.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">I design and ship digital products across education, healthcare, mobility, finance, recruitment, and commerce, turning ideas into polished systems people can actually use.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-cyan-200">Start a project <FaArrowRight /></button>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"><FaGithub /> View GitHub</a>
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-emerald-300 hover:text-emerald-200"><FaPhoneAlt /> Call</a>
            </div>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-300/25 via-fuchsia-400/20 to-amber-300/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                <img src="/profile.jpeg" alt="Paul DevWorks profile" className="aspect-square w-full rounded-full border-4 border-white/25 object-cover shadow-2xl ring-8 ring-cyan-300/15" />
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  <Stat number="8" label="Websites" />
                  <Stat number="5" label="Apps" />
                  <Stat number="1" label="Studio" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-aos="fade-right">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">About</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Digital products with business logic, clean interfaces, and momentum.</h2>
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <p className="text-base leading-8 text-slate-200">I work across strategy, design, frontend, backend, and mobile delivery. My focus is building platforms that feel clear to use and strong enough to run day-to-day operations.</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100">{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="websites" className="scroll-mt-24 py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div data-aos="fade-up">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Websites</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Published web portfolio</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">A focused collection of live platforms across learning, health, commerce, mobility, jobs, SACCO services, and career tools.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {websiteProjects.map((project, index) => (
              <a key={project.url} href={project.url} target="_blank" rel="noopener noreferrer" className="group min-h-[190px] rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.12]" data-aos="fade-up" data-aos-delay={index * 45}>
                <div className={`mb-6 h-2 w-20 rounded-full bg-gradient-to-r ${project.accent}`} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{project.category}</p>
                    <h3 className="mt-3 text-xl font-black text-white">{project.name}</h3>
                  </div>
                  <FaGlobeAfrica className="mt-1 text-xl text-cyan-300" />
                </div>
                <div className="mt-8 flex items-center justify-between gap-3 text-sm font-semibold text-slate-300">
                  <span className="break-all">{project.url.replace("https://", "")}</span>
                  <FaArrowRight className="shrink-0 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="apps" className="scroll-mt-24 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-aos="fade-right">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Apps</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Mobile products built around daily workflows.</h2>
              <p className="mt-5 text-base leading-8 text-slate-200">These apps extend the web platforms into practical mobile experiences for learners, customers, SACCO members, patients, and job seekers.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-left">
              {appProjects.map((app, index) => (
                <div key={app} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-black/20">
                  <div className="mb-6 flex items-center gap-3 text-cyan-300">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10">{index % 2 === 0 ? <FaAndroid /> : <FaApple />}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Mobile app</span>
                  </div>
                  <h3 className="text-xl font-black">{app.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{app.tagline}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
              <div className="p-6 sm:p-10" data-aos="fade-right">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">Have a platform, app, or business system to build?</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">Reach me directly for websites, mobile apps, product rebuilds, dashboards, integrations, and digital business systems.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">Send message <FaEnvelope /></button>
                  <button onClick={() => setIsContactPopupOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200">Contact details <FaPhoneAlt /></button>
                </div>
              </div>

              <div className="border-t border-white/10 bg-slate-950/70 p-6 sm:p-10 lg:border-l lg:border-t-0">
                <div className="space-y-5">
                  <ContactLink icon={<FaPhoneAlt />} label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
                  <ContactLink icon={<FaWhatsapp />} label="WhatsApp" value="Message on WhatsApp" href={contact.whatsapp} />
                  <ContactLink icon={<FaEnvelope />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                  <ContactLink icon={<FaGithub />} label="GitHub" value={contact.github.replace("https://", "")} href={contact.github} />
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Location</p>
                      <p className="mt-1 text-sm leading-6 text-white">{contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">Start a Conversation</h2>
                <p className="mt-1 text-sm text-slate-600">Tell me what you want to build.</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700" aria-label="Close"><FaTimes /></button>
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <Field label="Name" name="user_name" type="text" />
              <Field label="Email" name="user_email" type="email" />
              <div>
                <label className="mb-1 block text-sm font-bold">Message</label>
                <textarea name="message" required rows="5" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" />
              </div>
              <button type="submit" className="w-full rounded-2xl bg-slate-950 py-3 text-sm font-bold text-white transition hover:bg-slate-800">Send Message</button>
              {statusMessage && <p className="text-center text-sm font-semibold text-emerald-700">{statusMessage}</p>}
            </form>
          </div>
        </div>
      )}

      {isContactPopupOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <h2 className="text-2xl font-black">Contact Details</h2>
              <button onClick={() => setIsContactPopupOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700" aria-label="Close"><FaTimes /></button>
            </div>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${contact.email}`} className="block rounded-2xl bg-slate-100 p-4 font-semibold text-slate-900">{contact.email}</a>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 font-semibold text-emerald-700"><FaWhatsapp /> {contact.phone}</a>
              <p className="rounded-2xl bg-slate-100 p-4 font-semibold text-slate-900">{contact.location}</p>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 py-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">&copy; {new Date().getFullYear()} Paul DevWorks. All Rights Reserved.</footer>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl bg-slate-950/70 p-3">
      <div className="text-2xl font-black">{number}</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-300">{label}</div>
    </div>
  );
}

function Field({ label, name, type }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-bold">{label}</label>
      <input type={type} name={name} required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" />
    </div>
  );
}

function ContactLink({ icon, label, value, href }) {
  const isExternal = href.startsWith("http");
  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/50 hover:bg-white/10">
      <span className="mt-1 shrink-0 text-cyan-300">{icon}</span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{label}</span>
        <span className="mt-1 block break-words text-sm font-semibold text-white">{value}</span>
      </span>
    </a>
  );
}
