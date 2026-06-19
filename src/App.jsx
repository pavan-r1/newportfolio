import { useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaCertificate } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiDownload,
  FiFileText,
} from "react-icons/fi";
import {
  FiActivity,
  FiArrowUpRight,
  FiAward,
  FiBarChart2,
  FiBriefcase,
  FiCode,
  FiGithub,
  FiGlobe,
  FiGrid,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiPlay,
  FiPause,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { SiGooglecloud, SiGooglecolab, SiJupyter, SiMysql, SiPython } from 'react-icons/si';

const certificatePath = (fileName) => `/certificates/${encodeURIComponent(fileName)}`;

const certificateGallery = [
  'Azure Data Fundamentals (Microsoft).jpg',
  'Certificate of Completion.jpg',
  'GHCI 2025 - Hackathon Participation Certificate.png',
  'google certified professional machine learning course(udemy).jpg',
  'google spreadsheet.jpg',
  'intern as data visulazion trainee(Excelerate).jpg',
  'INTERN at Data Analyst Associate(Excelerate).jpg',
  'internship on AI fundamentals by INBiOT.jpg',
  'INTRODUCTION TO AI by coursera.jpg',
  'maximize Productivity with ai tool with coursera.jpg',
  'microsoft excel.jpg',
  'NLP certified by NPTEL.jpg',
  'nptel certified Data Analytics using python.jpg',
  'RDBMS AND MICROSOFT FABRIC.jpg',
  'tjitaz_Internship Certificate.jpg',
  'tj_beds239954-Machine Learning (2).jpg',
].map((fileName) => ({
  name: fileName,
  src: certificatePath(fileName),
  isPdf: fileName.toLowerCase().endsWith('.pdf'),
}));
const projectPriority = [
  { key: 'ekyc', label: 'eKYC' },
  { key: 'dataviz-pro', label: 'DataViz Pro' },
  {
    key: 'integrated-platform-for-crowdsourced-ocean-hazard-reporting-and-social-media-analytics',
    label: 'Integrated Platform for Crowdsourced Ocean Hazard Reporting and Social Media Analytics',
  },
  
  { key: 'dsaproject', label: 'Banking System' },
  { key: 'techfest', label: 'Force Website' },
  {
  key: 'edhumind-ai',
  label: 'EduMind AI - AI-Powered Education Platform',
},
{
    key: 'internationconf',
    label: 'International Conference On RATE - 2K26',
  },
];
const excludedProjectKeys = ['charan_portfoilio', 'certificate'];
const normalizeRepoName = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '');

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const roleTitles = [
  'Data Science Undergraduate',
  'AI Enthusiast',
  'Machine Learning Explorer',
  'Cloud & Analytics Learner',
];

const subtitles = [
  { start: 0, end: 10, text: 'Hello, I am Pavan R, a Data Science undergraduate at T. John Institute of Technology under VTU.' },
  { start: 10, end: 20, text: 'My interests span Artificial Intelligence, Machine Learning, Data Analytics, Cloud Computing, and Generative AI.' },
  { start: 20, end: 32, text: 'I have earned certifications from Microsoft, NPTEL, Google Coursera, and Excelerate along with global internship experience.' },
  { start: 32, end: 48, text: 'I actively build projects, participate in hackathons, and focus on impactful AI-driven solutions for real-world problems.' },
];

const aboutParagraphs = [
  'I am Pavan R, a Data Science undergraduate at T. John Institute of Technology (VTU) with a strong passion for Artificial Intelligence, Machine Learning, Data Analytics, Cloud Computing, and Generative AI. I am committed to leveraging data-driven technologies to solve real-world problems and create innovative solutions.',
  'Throughout my academic journey, I have earned industry-recognized certifications from Microsoft, NPTEL, Google Coursera, and Excelerate, strengthening my expertise in AI, data analytics, cloud technologies, and natural language processing. I have also gained practical experience through global internships in Data Analytics and Data Visualization with Saint Louis University and Excelerate, where I was recognized as a Star Performer for my contributions.',
  'My goal is to become a skilled AI and Data Science professional capable of developing intelligent systems that create meaningful impact across industries and society.',
];

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: FiCode,
    items: ['Python', 'SQL', 'Java (Basic)', 'C Programming'],
  },
  {
    title: 'Data Science & Analytics',
    icon: FiGrid,
    items: ['Data Analysis', 'Data Visualization', 'Statistical Analysis', 'Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Business Intelligence'],
  },
  {
    title: 'AI & Machine Learning',
    icon: FiActivity,
    items: ['Machine Learning', 'Artificial Intelligence', 'Natural Language Processing (NLP)', 'Generative AI', 'Prompt Engineering'],
  },
  {
    title: 'Cloud & Technologies',
    icon: FiLayers,
    items: ['Microsoft Azure', 'Cloud Computing', 'Azure Data Fundamentals'],
  },
  {
    title: 'Tools & Platforms',
    icon: FiGlobe,
    items: ['Power BI', 'Microsoft Excel', 'Git', 'GitHub', 'Jupyter Notebook', 'Google Colab'],
  },
  {
    title: 'Database & Professional',
    icon: FiBriefcase,
    items: ['MySQL', 'DBMS', 'Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Communication', 'Project Management', 'Continuous Learning'],
  },
];

const quickSkills = [
  { label: 'Python', icon: SiPython },
  { label: 'Power BI', icon: FiBarChart2 },
  { label: 'Azure', icon: FiLayers },
  { label: 'MySQL', icon: SiMysql },
  { label: 'Jupyter', icon: SiJupyter },
  { label: 'Colab', icon: SiGooglecolab },
  { label: 'Cloud', icon: SiGooglecloud },
];

const certificationsList = [
  {
    title: 'Microsoft Certifications',
    items: ['Microsoft Azure Data Fundamentals'],
  },
  {
    title: 'NPTEL Certifications',
    items: ['Data Analytics Using Python', 'Natural Language Processing (NLP)'],
  },
  {
    title: 'Google Certifications',
    items: ['Introduction to AI (Google Coursera)', 'Maximize Productivity with AI Tools (Google Coursera)', 'Google Spreadsheets'],
  },
  {
    title: 'Machine Learning Certifications',
    items: ['Machine Learning Certification', 'Google Professional Machine Learning Course'],
  },
  {
    title: 'Data & Analytics Certifications',
    items: ['RDBMS and Microsoft Fabric', 'Microsoft Excel'],
  },
  {
    title: 'Internships & Training Certificates',
    items: [
      'Data Analyst Associate Internship - Excelerate & Saint Louis University',
      'Data Visualization Trainee Internship - Excelerate & Saint Louis University',
      'Microsoft Azure Fundamentals Internship',
      'AI Fundamentals Internship - INBiOT',
    ],
  },
  {
    title: 'Hackathons & Achievements',
    items: ['GHCI 2025 GenAI Hackathon Participation Certificate', 'Certificate of Completion (Professional Training Program)'],
  },
];

const experienceTimeline = [
  {
    role: 'Data Analyst Associate Intern',
    org: 'Excelerate & Saint Louis University | Global Remote Internship',
    points: [
      'Analyzed real-world datasets to derive actionable insights and support data-driven decisions.',
      'Performed data cleaning, transformation, and exploratory analysis on practical projects.',
      'Collaborated with international teams on analytics and business intelligence initiatives.',
      'Developed analytical thinking, reporting, and problem-solving skills through hands-on project work.',
    ],
  },
  {
    role: 'Data Visualization Trainee Intern',
    org: 'Excelerate & Saint Louis University | Global Remote Internship',
    points: [
      'Designed interactive dashboards and reports to communicate insights clearly.',
      'Worked on visualization techniques to identify trends, patterns, and opportunities.',
      'Contributed to team projects focused on transforming complex datasets into visual stories.',
      'Recognized as a Star Performer for outstanding contribution and performance.',
    ],
  },
  {
    role: 'Azure Fundamentals Intern',
    org: 'INBiOT | Virtual Internship',
    points: [
      'Gained practical exposure to Microsoft Azure cloud services and cloud computing concepts.',
      'Learned infrastructure, storage, security, and data management fundamentals.',
      'Applied Azure technologies to understand real-world cloud solution workflows.',
      'Strengthened cloud platform understanding and modern data technology skills.',
    ],
  },
  {
    role: 'Hackathon & Innovation Experience',
    org: 'IndiaAI CyberGuard AI Hackathon & GHCI 2025 GenAI Hackathon',
    points: [
      'Led team DRVHA in IndiaAI CyberGuard AI Hackathon to build cybercrime prevention solutions.',
      'Applied ML and NLP for cybercrime/fraud classification and managed project coordination.',
      'Participated in GHCI 2025 GenAI Hackathon and strengthened innovation and collaboration skills.',
      'Continually build practical AI and analytics projects for real-world impact.',
    ],
  },
  {
    role: 'Personal Projects & Innovation',
    org: 'EduMind AI - AI-Powered Education Platform',
    points: [
      'Teacher Authentication - Secure login/signup with subject and department management',
      'File Upload System - Support for PDF, PPT, DOCX files organized by subject',
      'PDF/Text Processing - Extract and chunk content with vector embeddings',
      'AI Summary Generator - Topic-wise explanations and student-friendly summaries',
      'Important Topic Extraction - Identify key concepts and exam-important points',
    ],
  },
];

const counters = [
  { label: 'Certifications', value: 18 },
  { label: 'Internships', value: 4 },
  { label: 'Hackathons', value: 2 },
  { label: 'Core Skill Areas', value: 6 },
];

function useTypewriter(words, speed = 70, pause = 1500) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const update = () => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = window.setTimeout(update, deleting ? speed / 2 : speed);
    return () => window.clearTimeout(timer);
  }, [deleting, index, pause, speed, text, words]);

  return text;
}

function Counter({ end, label }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(end / 35));
    const id = window.setInterval(() => {
      current += step;
      if (current >= end) {
        setValue(end);
        window.clearInterval(id);
        return;
      }
      setValue(current);
    }, 35);
    return () => window.clearInterval(id);
  }, [end]);

  return (
    <div className="rounded-2xl border border-cyber-cyan/20 bg-cyber-card/70 p-4 text-center backdrop-blur-xl">
      <p className="font-header text-3xl font-bold text-cyber-cyan">{value}+</p>
      <p className="text-sm text-cyber-textMuted">{label}</p>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeSubtitle, setActiveSubtitle] = useState(subtitles[0].text);
  const [audioProgress, setAudioProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mouseGlow, setMouseGlow] = useState({ x: -300, y: -300 });
  const [repos, setRepos] = useState([]);
  const [openCert, setOpenCert] = useState(null);
  const [activeCertIndex, setActiveCertIndex] = useState(null);
  const autoPlayAttemptedRef = useRef(false);

  const typedRole = useTypewriter(roleTitles);

  const particleCanvasRef = useRef(null);
  const visualizerCanvasRef = useRef(null);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const animationRef = useRef(null);
  const projectImages = {
  "eKYC": "/project/KYC.png",
  "DataViz Pro": "/project/DataViz Pro.png",
  "Banking System": "/project/Banking System.png",
  "Force Website": "/project/Force.png",
  "EduMind AI - AI-Powered Education Platform": "/project/EduMind AI.png",
  "International Conference On RATE - 2K26": "/project/RATE.png",
  "Integrated Platform for Crowdsourced Ocean Hazard Reporting and Social Media Analytics":
    "/project/Integrated Platform for Crowdsourced Ocean Hazard Reporting and Social Media Analytics.png",
};
  const iconOrbits = useMemo(
    () => [
      { icon: SiPython, angle: 15, r: 205 },
      { icon: FiBarChart2, angle: 85, r: 215 },
      { icon: FiLayers, angle: 150, r: 200 },
      { icon: SiMysql, angle: 220, r: 210 },
      { icon: SiJupyter, angle: 290, r: 200 },
      { icon: SiGooglecolab, angle: 335, r: 210 },
    ],
    []
  );

  useEffect(() => {
    const onMouseMove = (event) => setMouseGlow({ x: event.clientX, y: event.clientY });
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(value);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 72;
    let frame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const build = () => {
      particles = Array.from({ length: maxParticles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.4 - 0.2,
        vy: Math.random() * 0.4 - 0.2,
        size: Math.random() * 2.2 + 0.6,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        context.beginPath();
        context.fillStyle = 'rgba(0, 244, 255, 0.7)';
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 110) {
            const alpha = (1 - distance / 110) * 0.2;
            context.strokeStyle = `rgba(140, 116, 255, ${alpha})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    build();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const loadGitData = async () => {
      try {
        const reposResponse = await fetch('https://api.github.com/users/pavan-r1/repos?sort=updated&per_page=100');
        const reposJson = await reposResponse.json();
        if (Array.isArray(reposJson)) {
          const byNormalizedName = new Map(
            reposJson
              .filter((repo) => !repo.fork)
              .map((repo) => [normalizeRepoName(repo.name), repo])
          );

          const curatedRepos = projectPriority
            .map((project) => {
              const matchedRepo = byNormalizedName.get(normalizeRepoName(project.key));
              if (!matchedRepo || excludedProjectKeys.includes(normalizeRepoName(matchedRepo.name))) {
                return null;
              }

              return {
                name: project.label,
                description: matchedRepo.description || 'Project repository by Pavan R',
                url: matchedRepo.html_url,
                language: matchedRepo.language || 'JavaScript',
              };
            })
            .filter(Boolean);

          setRepos(curatedRepos);
        }
      } catch {
        setRepos([]);
      }
    };

    loadGitData();
  }, []);

  useEffect(() => {
    const updateDocumentMeta = () => {
      const canonicalUrl = window.location.origin + '/';
      const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    };

    updateDocumentMeta();
  }, []);

 useEffect(() => {
  const startAudio = async () => {
    try {
      initAudio();

      if (audioRef.current) {
        await audioRef.current.play();
        setIsAudioPlaying(true);
      }
    } catch (error) {
      console.log("Autoplay blocked:", error);
    }
  };

  document.addEventListener("click", startAudio, { once: true });

  return () => {
    document.removeEventListener("click", startAudio);
  };
}, []);

  useEffect(() => {
    const canvas = visualizerCanvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    let idleFrame;
    let pulse = 0;

    const drawIdle = () => {
      if (isAudioPlaying) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      pulse += 0.04;
      const r = 152 + Math.sin(pulse) * 6;
      context.beginPath();
      context.strokeStyle = 'rgba(0, 244, 255, 0.45)';
      context.shadowBlur = 18;
      context.shadowColor = 'rgba(0, 244, 255, 0.7)';
      context.lineWidth = 2;
      context.arc(canvas.width / 2, canvas.height / 2, r, 0, Math.PI * 2);
      context.stroke();
      idleFrame = window.requestAnimationFrame(drawIdle);
    };

    const drawActive = () => {
      if (!isAudioPlaying || !analyserRef.current) return;
      const analyser = analyserRef.current;
      const bufferLength = analyser.frequencyBinCount;
      const data = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(data);

      context.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const bars = 72;
      const baseRadius = 150;

      context.beginPath();
      for (let i = 0; i < bars; i += 1) {
        const angle = (i / bars) * Math.PI * 2;
        const idx = Math.floor((i / bars) * bufferLength);
        const amp = (data[idx] || 1) / 255;
        const radius = baseRadius + amp * 42;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        if (i === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.closePath();

      const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#00f4ff');
      gradient.addColorStop(0.5, '#7a57ff');
      gradient.addColorStop(1, '#ff3db8');
      context.strokeStyle = gradient;
      context.shadowBlur = 16;
      context.shadowColor = 'rgba(122, 87, 255, 0.75)';
      context.lineWidth = 3;
      context.stroke();
      animationRef.current = window.requestAnimationFrame(drawActive);
    };

    if (isAudioPlaying) {
      window.cancelAnimationFrame(idleFrame);
      drawActive();
    } else {
      window.cancelAnimationFrame(animationRef.current);
      drawIdle();
    }

    return () => {
      window.cancelAnimationFrame(idleFrame);
      window.cancelAnimationFrame(animationRef.current);
    };
  }, [isAudioPlaying]);

  const initAudio = () => {
    if (audioCtxRef.current || !audioRef.current) return;
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = context.createAnalyser();
    analyser.fftSize = 256;
    const source = context.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(context.destination);
    audioCtxRef.current = context;
    analyserRef.current = analyser;
  };

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    initAudio();

    if (audioCtxRef.current?.state === 'suspended') {
      await audioCtxRef.current.resume();
    }

    if (audio.paused) {
      await audio.play();
      setIsAudioPlaying(true);
    } else {
      audio.pause();
      setIsAudioPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const duration = audio.duration || 48;
    const current = audio.currentTime;
    setAudioProgress((current / duration) * 100);

    const currentSubtitle = subtitles.find((item) => current >= item.start && current < item.end);
    if (currentSubtitle) {
      setActiveSubtitle(currentSubtitle.text);
    }
  };

  const smoothScroll = (href) => {
    const node = document.querySelector(href);
    if (!node) return;
    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none fixed left-0 top-0 z-[999] h-1 w-full bg-transparent">
        <div className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink transition-all duration-200" style={{ width: `${progress}%` }} />
      </div>

      <canvas ref={particleCanvasRef} id="particle-canvas" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-0 h-80 w-80 rounded-full bg-cyber-purple/20 blur-[120px] transition-transform duration-300"
        style={{ transform: `translate(${mouseGlow.x - 160}px, ${mouseGlow.y - 160}px)` }}
      />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-cyber-cyan/25 bg-cyber-card/60 px-5 py-3 shadow-[0_0_30px_rgba(0,244,255,0.1)] backdrop-blur-2xl">
          <button onClick={() => smoothScroll('#home')} className="font-header text-base font-bold text-cyber-cyan sm:text-lg">
            [PAVAN R] 
          </button>

          <ul className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <button onClick={() => smoothScroll(item.href)} className="text-sm text-slate-300 transition hover:text-cyber-cyan">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="https://github.com/pavan-r1" target="_blank" rel="noreferrer" className="rounded-full border border-cyber-cyan/25 p-2 text-cyber-cyan transition hover:border-cyber-purple hover:text-cyber-pink">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/pavan-r-244678292" target="_blank" rel="noreferrer" className="rounded-full border border-cyber-cyan/25 p-2 text-cyber-cyan transition hover:border-cyber-purple hover:text-cyber-pink">
              <FiLinkedin />
            </a>
          </div>

          <button onClick={() => setIsMenuOpen((value) => !value)} className="rounded-lg border border-cyber-cyan/25 p-2 text-cyber-cyan lg:hidden" aria-label="Toggle menu">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28 }}
              className="absolute right-4 top-[82px] w-[82vw] max-w-sm rounded-3xl border border-cyber-cyan/25 bg-[#0b1228]/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button onClick={() => smoothScroll(item.href)} className="w-full rounded-xl border border-transparent px-3 py-2 text-left text-slate-200 transition hover:border-cyber-cyan/30 hover:bg-cyber-card/40 hover:text-cyber-cyan">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.aside>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto flex min-h-screen w-full max-w-6xl flex-col-reverse justify-center px-4 pb-16 pt-28 sm:px-6 lg:flex-row lg:items-center lg:gap-8">
          <div className="w-full lg:w-1/2">
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-2 font-header text-lg uppercase tracking-[0.3em] text-cyber-cyan/85">
              AI x Data Science
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-header text-4xl font-extrabold leading-tight text-slate-100 sm:text-6xl">
              <span className="block text-cyber-cyan">HELLO, I AM</span>
              <span className="cyber-title-glow block">PAVAN R</span>
            </motion.h1>

            <p className="mt-4 text-xl font-semibold text-cyber-cyan/95">{typedRole}<span className="typing-cursor">|</span></p>
            <p className="mt-3 max-w-xl text-lg text-slate-200">Data Science Undergraduate & AI Enthusiast</p>
            <p className="mt-2 text-cyber-textMuted">Innovating with Data. Building the Future of AI.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* Download Resume */}
              <a
                href="/resume/PAVAN_RESUME.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-cyber-cyan/45 bg-cyber-cyan/10 px-5 py-2.5 text-cyber-cyan transition hover:shadow-[0_0_24px_rgba(0,244,255,0.45)]"
              >
                <FiDownload />
                Download Resume
              </a>

              {/* View Resume */}
              <a
                href="/resume/PAVAN_RESUME.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyber-purple/45 bg-cyber-purple/10 px-5 py-2.5 text-cyber-purple transition hover:shadow-[0_0_24px_rgba(122,87,255,0.45)]"
              >
                <FiFileText />
                View Resume
              </a>

              {/* Projects Button */}
              <button
                onClick={() => smoothScroll('#projects')}
                className="inline-flex items-center gap-2 rounded-full border border-cyber-pink/45 bg-cyber-pink/10 px-5 py-2.5 text-cyber-pink transition hover:shadow-[0_0_24px_rgba(255,61,184,0.45)]"
              >
                <FiCode />
                Explore My Work
              </button>
            </div>
            
          </div>

          <div className="relative mt-12 flex w-full justify-center lg:mt-0 lg:w-1/2">
            {iconOrbits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`${item.angle}-${idx}`}
                  className="floating-tech-icon"
                  style={{ transform: `translate(${Math.cos((item.angle * Math.PI) / 180) * item.r}px, ${Math.sin((item.angle * Math.PI) / 180) * item.r}px)` }}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 3 + idx * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Icon />
                </motion.div>
              );
            })}

            <div className="relative">
              <canvas ref={visualizerCanvasRef} width={420} height={420} className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 sm:h-[420px] sm:w-[420px]" />
              <div className="hero-video-ring relative h-[300px] w-[300px] overflow-hidden rounded-full border border-cyber-cyan/30 bg-black shadow-[0_0_45px_rgba(0,244,255,0.32)] sm:h-[340px] sm:w-[340px]">
                <video src="/intro.mp4" autoPlay loop muted playsInline preload="auto" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6 }}
    className="grid items-center gap-12 md:grid-cols-2"
  >

    {/* Left Side */}
    <div>
      <div className="mb-3 flex items-center gap-2 text-cyber-cyan uppercase tracking-[0.2em]">
        <FiUser />
        <span>About</span>
      </div>

      <h2 className="mb-6 font-header text-5xl font-bold cyber-title-glow">
        ABOUT ME.
      </h2>

      <div className="space-y-5 text-slate-300 leading-relaxed">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {counters.map((item) => (
          <Counter
            key={item.label}
            end={item.value}
            label={item.label}
          />
        ))}
      </div>
    </div>

    {/* Right Side */}
    <div className="relative">
      <div className="absolute -left-10 top-12 hidden h-[2px] w-24 bg-cyber-cyan md:block"></div>

      <img
        src="/profile.jpeg"
        alt="Pavan R"
        className="h-[550px] w-full rounded-2xl object-cover border border-cyber-cyan/20 shadow-[0_0_40px_rgba(0,244,255,0.25)]"
      />
    </div>

  </motion.div>
</section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 flex flex-col items-center justify-center text-center text-cyber-cyan">
            <FiActivity className="mb-2 text-4xl" />
            <h2 className="font-header text-4xl font-bold">
              Skills
            </h2>
          </div>                              

          <div className="mb-8 flex flex-wrap gap-3">
            {quickSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.label} whileHover={{ y: -4, scale: 1.05 }} className="inline-flex items-center gap-2 rounded-full border border-cyber-cyan/25 bg-cyber-card/60 px-4 py-2 text-sm text-slate-200">
                  <Icon className="text-cyber-cyan" />
                  {skill.label}
                </motion.div>
              );
            })}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -6 }}
                  className="glass-card interactive-skill"
                >
                  <h3 className="mb-3 flex items-center gap-2 font-header text-xl text-cyber-cyan">
                    <Icon /> {group.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-lg border border-cyber-cyan/10 bg-slate-900/40 px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">        
          <div className="mb-10 flex items-center justify-center gap-3 text-cyber-cyan">
          <FiBriefcase className="text-3xl" />
          <h2 className="font-header text-4xl font-bold">
            Experience
          </h2>
        </div>

          <div className="relative">
  {/* Center Line */}
  <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] md:-translate-x-1/2 bg-cyber-cyan/30"></div>

  {experienceTimeline.map((item, idx) => (
    <motion.div
      key={item.role}
      initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative mb-12 flex w-full ${
        idx % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-1/2 top-8 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-cyber-cyan bg-cyber-dark shadow-[0_0_20px_rgba(0,244,255,0.9)]"></div>

      {/* Card */}
      <div className="glass-card ml-14 md:ml-0 w-[calc(100%-4rem)] md:w-[45%]">
        <h3 className="font-header text-xl text-cyber-cyan">
          {item.role}
        </h3>

        <p className="mb-3 text-sm text-cyber-textMuted">
          {item.org}
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</div>
        </section>

        <section id="certifications" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 flex flex-col items-center justify-center text-center text-cyber-cyan">
            <FiAward />
            <h2 className="font-header text-3xl font-bold">Certifications</h2>
          </div>

          <div className="mb-6 rounded-2xl border border-cyber-purple/25 bg-cyber-card/60 p-4 text-sm text-slate-300">
            Certificates are loaded from the local certificates folder in this workspace and also available in the <a className="text-cyber-cyan underline" href="https://github.com/pavan-r1/Certificate-" target="_blank" rel="noreferrer">Certificate- repository</a>.
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {certificationsList.map((group, idx) => (
              <motion.article key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }} className="glass-card">
                <h3 className="font-header text-lg text-cyber-cyan">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-lg border border-cyber-cyan/10 bg-slate-900/45 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
          </section>
          <section id="certificate-gallery" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <div className="mb-10 flex items-center justify-center gap-3 text-cyber-cyan">
          <FaCertificate className="mb-2 text-4xl" />
          <h2 className="font-header text-4xl font-bold">
          Certificate Gallery
          </h2>
        </div>
          <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 2500 }}
            slidesPerView={3}
            centeredSlides
            spaceBetween={20}
            loop
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {certificateGallery.length > 0 ? (
              certificateGallery.map((file, idx) => (
                <SwiperSlide key={`${file.name}-${idx}`}>
                  <button
                    onClick={() => {
                      setOpenCert(file.src);
                      setActiveCertIndex(idx);
                    }}
                    className="group overflow-hidden rounded-2xl border border-cyber-cyan/25 bg-cyber-card/55 text-left transition hover:border-cyber-pink/45"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-900/70">
                      {file.isPdf ? (
                        <div className="flex h-full items-center justify-center text-cyber-cyan">
                          PDF Preview
                        </div>
                      ) : (
                        <img
                          src={file.src}
                          alt={file.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      )}
                    </div>

                    <div className="p-3 text-center text-sm text-slate-300">
                      {file.name}
                    </div>
                  </button>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-sm text-cyber-textMuted">
                Certificate files are loaded from the local certificates folder.
              </p>
            )}
        </Swiper>
        </div>
        </section>

        
        <section
          id="projects"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6"
        >
          <div className="mb-10 flex flex-col items-center justify-center text-center text-cyber-cyan">
            <FiCode className="mb-2 text-4xl" />
            <h2 className="font-header text-3xl font-bold">
              Projects
            </h2>
            <p className="mt-2 text-cyber-textMuted">
              AI, Data Science, Analytics & Web Development Projects
            </p>
          </div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            navigation
            className="projectSwiper"
          >
            {repos.length > 0 ? (
              repos.map((repo, idx) => (
                <SwiperSlide
                    key={repo.name}
                    className="!w-[280px] md:!w-[380px]"
                >
                  <motion.a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="group glass-card block overflow-hidden"
                  >
                    <img
                      src={projectImages[repo.name]}
                      alt={repo.name}
                      className="mb-4 h-40 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/avatar.jpg";
                      }}
                    />

                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-header text-lg md:text-xl text-cyber-cyan">
                        {repo.name}
                      </h3>

                      <FiArrowUpRight className="text-cyber-pink transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <p className="mb-4 text-xs md:text-sm text-slate-300">
                      {repo.description}
                    </p>

                    <div className="inline-flex items-center rounded-full border border-cyber-cyan/30 px-3 py-1 text-xs text-cyber-cyan">
                      {repo.language}
                    </div>
                  </motion.a>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center text-sm text-cyber-textMuted">
                Projects will auto-load from GitHub profile repositories.
              </p>
            )}
          </Swiper>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6">
          <div className="mb-10 flex flex-col items-center justify-center text-center text-cyber-cyan">
            <FiMail className="mb-2 text-4xl" />
            <h2 className="font-header text-3xl font-bold">Contact</h2>
          </div>

          <div className="glass-card space-y-4">
            <p className="text-slate-300">I am always open to discussing opportunities, collaborations, internships, research projects, and innovative AI/data ideas.</p>
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <a href="mailto:pavanrpavanr567@gmail.com" className="contact-chip"><FiMail /> pavanrpavanr567@gmail.com</a>
              <a href="tel:+918317497526" className="contact-chip"><FiPhone /> +91 8317497526</a>
              <a href="https://www.linkedin.com/in/pavan-r-244678292" target="_blank" rel="noreferrer" className="contact-chip"><FiLinkedin /> LinkedIn Profile</a>
              <a href="https://github.com/pavan-r1" target="_blank" rel="noreferrer" className="contact-chip"><FiGithub /> GitHub Profile</a>
              
              <a href="https://maps.app.goo.gl/raubQDn8csQYH6Cy8" target="_blank" rel="noreferrer" className="contact-chip sm:col-span-2"><FiMapPin /> Bengaluru, Karnataka, India</a>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {openCert ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[#030712]/85 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpenCert(null);
              setActiveCertIndex(null);
            }}
          >
            <motion.div
              initial={{ y: 30, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.97 }}
              className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-cyber-cyan/30 bg-[#091127]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-cyber-cyan/20 px-4 py-3">
                <p className="text-sm text-cyber-cyan">Certificate Preview {activeCertIndex !== null ? `#${activeCertIndex + 1}` : ''}</p>
                <button onClick={() => setOpenCert(null)} className="rounded-lg border border-cyber-cyan/30 p-2 text-cyber-cyan" aria-label="Close modal">
                  <FiX />
                </button>
              </div>
              <div className="max-h-[calc(90vh-58px)] overflow-auto bg-slate-950 p-3">
                {openCert.toLowerCase().endsWith('.pdf') ? (
                  <iframe title="Certificate PDF" src={openCert} className="h-[75vh] w-full rounded-xl" />
                ) : (
                  <img src={openCert} alt="Certificate preview" className="mx-auto rounded-xl" />
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
