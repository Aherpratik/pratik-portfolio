import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

const portraitSrc = `${import.meta.env.BASE_URL}Pi7_Passport_Photo.jpeg`;

const featuredProjects = [
  {
    title: "OriginGuard AI Detector",
    year: "2025",
    category: "Generative AI",
    description:
      "AI-generated text and image detection system using RoBERTa-based text detection, image analysis, robustness checks, and a usable interface.",
    link: "https://github.com/Aherpratik/OriginGuard-AI-Detector",
  },
  {
    title: "College Program Chatbot",
    year: "2025",
    category: "Full Stack AI",
    description:
      "Student-focused chatbot built with TensorFlow, FastAPI, React, and Tailwind for fast query handling and clean frontend delivery.",
    link: "https://github.com/Aherpratik/chat_bot",
  },
  {
    title: "Customer Segmentation and Analysis",
    year: "2025",
    category: "Applied ML",
    description:
      "Customer analytics workflow using SQL, Python, Streamlit, and Docker for segmentation and insight generation.",
    link: "https://github.com/Aherpratik/Customer-Segmentation-and-Analysis",
  },
  {
    title: "Hand Sign Language Recognition",
    year: "2024",
    category: "Computer Vision",
    description:
      "Vision-based accessibility project designed to recognize sign language gestures and improve communication support.",
    link: "https://github.com/Aherpratik/Hand-Sign-Language-Recognition-using-AI",
  },
  {
    title: "Handwritten Digits Classification",
    year: "2024",
    category: "Deep Learning",
    description:
      "MNIST classification using a multilayer perceptron built from scratch with NumPy to demonstrate core learning mechanics.",
    link: "https://github.com/Aherpratik/Handwritten-Digits-Classification",
  },
  {
    title: "Flower Image Classification",
    year: "2024",
    category: "Image Classification",
    description:
      "Image classification workflow focused on clean training, inference, and category recognition across flower classes.",
    link: "https://github.com/Aherpratik/flower_image_classification",
  },
];

const experience = [
  {
    role: "GenAI Intern",
    org: "Filmy AI LLC",
    period: "2025 - Present",
    points: [
      "Built agentic RAG pipelines with LangChain and ChromaDB for semantic retrieval and LLM-assisted workflows.",
      "Fine-tuned Gemma models with Hugging Face and LoRA, improving F1 and task accuracy on evaluation benchmarks.",
      "Deployed production-ready AI services using FastAPI, Docker, and AWS for scalable inference.",
    ],
  },
  {
    role: "Research Intern",
    org: "University at Buffalo",
    period: "2025",
    points: [
      "Developed an autonomous ball-tracking system for the Unitree Go2 quadruped robot using YOLOv8 and depth sensing.",
      "Optimized the real-time vision pipeline for low-latency inference and stronger performance in dynamic environments.",
      "Integrated perception with motion control through ROS2 for real-world robotic operation.",
    ],
  },
];

const skills = [
  "Python",
  "SQL",
  "PyTorch",
  "TensorFlow",
  "LangChain",
  "FastAPI",
  "AWS",
  "Docker",
  "ROS2",
  "YOLOv8",
  "RAG",
  "SQL",
  "Reinforcement Learning",
  "Feature Engineering",
  "Model Training",
  "Machine Learning",
  "Natural Language Processing",
  "Deep Learning",

];

const socialLinks = [
  { icon: Github, href: "https://github.com/Aherpratik", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pratikaher9/",
    label: "LinkedIn",
  },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65 },
};

function BackgroundScene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#060b14_0%,#08101c_45%,#050912_100%)]" />

      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(34,211,238,0.12), transparent 20%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.10), transparent 22%), radial-gradient(circle at 50% 78%, rgba(59,130,246,0.08), transparent 24%)",
          backgroundSize: "130% 130%",
        }}
      />

      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -50, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-8%] top-[-8%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, -70, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-[10%] h-[380px] w-[380px] rounded-full bg-fuchsia-400/8 blur-[120px]"
      />

      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-140px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-400/8 blur-[150px]"
      />

      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}

function PortraitHero() {
  return (
    <div className="relative mx-auto flex w-full max-w-[30rem] items-center justify-center">
      <div className="absolute h-[24rem] w-[24rem] rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute h-[18rem] w-[18rem] rounded-full bg-fuchsia-400/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 0.8, 0, -0.8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/15 blur-3xl" />
        <div className="relative h-[22rem] w-[22rem] overflow-hidden rounded-full border border-white/10 bg-white/[0.05] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:h-[25rem] md:w-[25rem]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_40%)]" />
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <img
              src={portraitSrc}
              alt="Pratik Aher"
              className="h-full w-full object-cover object-top saturate-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,18,0.06)_0%,rgba(5,9,18,0.18)_60%,rgba(5,9,18,0.38)_100%)]" />
          </div>
        </div>

        <div className="absolute -right-4 top-8 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-cyan-200 backdrop-blur-xl">
          GenAI
        </div>
        <div className="absolute -left-4 bottom-10 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-xl">
          Robotics
        </div>
      </motion.div>
    </div>
  );
}

function HeaderAvatar({ opacity, scale }) {
  return (
    <motion.div style={{ opacity, scale }} className="hidden md:block">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 backdrop-blur-xl">
        <img
          src={portraitSrc}
          alt="Pratik Aher"
          className="h-8 w-8 rounded-full object-cover object-top"
        />
        <span className="pr-2 text-[10px] uppercase tracking-[0.28em] text-white/60">
          Pratik
        </span>
      </div>
    </motion.div>
  );
}

export default function PratikPortfolio() {
  const { scrollYProgress } = useScroll();
  const avatarOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.14],
    [0, 0, 1]
  );
  const avatarScale = useTransform(scrollYProgress, [0, 0.14], [0.85, 1]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050912] text-white">
      <BackgroundScene />

      <header className="relative z-40">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <div className="relative h-10 w-10 flex items-center justify-center">

            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
                scale: useTransform(scrollYProgress, [0, 0.08], [1, 0.7])
              }}
              className="absolute text-3xl font-bold tracking-[0.12em] text-white"
            >
              PA
            </motion.span>

            <motion.img
              src={portraitSrc}
              alt="Pratik"
              style={{
                opacity: useTransform(scrollYProgress, [0.05, 0.12], [0, 1]),
                scale: useTransform(scrollYProgress, [0.05, 0.12], [0.6, 1])
              }}
              className="absolute h-10 w-10 rounded-full object-cover border border-white/10"
            />

          </div>
          <div className="hidden text-[15px] uppercase tracking-[0.35em] text-white/45 md:block">
            paher3636@gmail.com
          </div>
          <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.35em] text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="relative min-h-[calc(100vh-73px)] overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid min-h-[calc(100vh-73px)] items-center gap-12 py-16 md:grid-cols-[1fr_1.05fr_1fr] md:py-0 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-[24rem]"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90 md:text-base">
                  Hello! I&apos;m
                </p>
                <h1 className="mt-4 text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl xl:text-[5.2rem]">
                  Pratik
                  <br />
                  Aher
                </h1>
                <p className="mt-8 max-w-[22rem] text-lg leading-8 text-white/62 md:text-[15px]">
                  AI engineer focused on generative AI, retrieval systems,
                  applied machine learning, and production-ready software.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="relative flex items-center justify-center"
              >
                <PortraitHero />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="z-10 max-w-[24rem] justify-self-start text-left md:justify-self-end md:text-right"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90 md:text-base">
                  AI / ML
                </p>
                <h2 className="mt-4 text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl xl:text-[5.2rem]">
                  Engineer
                  <br />
                  Developer
                </h2>
                <p className="mt-8 text-lg leading-8 text-white/62 md:ml-auto md:max-w-[22rem] md:text-[15px]">
                  Building intelligent systems across LLM applications, agentic
                  workflows, scalable APIs, and applied machine learning.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 flex flex-col gap-4 text-white/80 md:left-10">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <a
            href="#work"
            className="absolute bottom-10 right-6 text-[11px] uppercase tracking-[0.45em] text-white/45 transition hover:text-white/80 md:right-10"
          >
            Resume
          </a>
        </section>

        <section id="about" className="border-t border-white/8">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
            <motion.div {...reveal} className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.45em] text-white/40">
                  About
                </p>
                <h3 className="mt-4 text-3xl font-semibold uppercase tracking-tight md:text-5xl">
                  Building systems
                  <br />
                  that feel alive
                </h3>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-white/65">
                  I’m an AI engineer focused on building intelligent systems that bridge research and real-world applications. My work spans generative AI, retrieval-augmented systems, applied machine learning, robotics perception, computer vision, and scalable backend infrastructure. I enjoy designing systems that are both technically rigorous and thoughtfully engineered, from training models and building agentic workflows to deploying production-ready AI services. I’m especially interested in building AI products that solve meaningful problems in areas like healthcare, robotics, and real-world automation.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="border-t border-white/8">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.45em] text-white/40">
                  Work
                </p>
                <h3 className="mt-4 text-3xl font-semibold uppercase tracking-tight md:text-5xl">
                  Selected projects
                </h3>
              </div>
              <a
                href="https://github.com/Aherpratik?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-white/55 md:flex"
              >
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.14),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/38">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h4 className="relative mt-6 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h4>
                  <p className="relative mt-4 text-sm leading-7 text-white/62">
                    {project.description}
                  </p>
                  <div className="relative mt-6 flex items-center gap-2 text-sm text-cyan-200">
                    <Sparkles className="h-4 w-4" />
                    <span>Open project</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/8">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
            <div className="grid gap-8 lg:grid-cols-2">
              {experience.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8"
                >
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                    {item.period}
                  </p>
                  <h4 className="mt-4 text-2xl font-semibold uppercase tracking-tight">
                    {item.role}
                  </h4>
                  <p className="mt-2 text-white/58">{item.org}</p>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-white/64">
                    {item.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-2xl font-semibold uppercase tracking-tight">
              Let&apos;s build something sharp.
            </p>
            <p className="mt-2 text-sm text-white/55">
              paher3636@gmail.com · Buffalo, New York
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:paher3636@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.08]"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Aherpratik"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.08]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratikaher9/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.08]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}