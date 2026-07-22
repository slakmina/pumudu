export const siteConfig = {
  name: "Pumudu Perera",
  title: "Creative Designer & Photographer",
  description:
    "Pumudu Perera is a Creative Designer and Photographer specializing in visual storytelling, brand design, and commercial photography. Based in Sri Lanka, crafting premium visual experiences.",
  url: "https://pumuduperera.com",
  ogImage: "/images/og-image.jpg",
  email: "hello@pumuduperera.com",
  phone: "+94 77 123 4567",
  location: "Colombo, Sri Lanka",
  behance: "https://www.behance.net/pumuduperera",
  linkedin: "https://www.linkedin.com/in/pumuduperera/",
  facebook: "https://www.facebook.com/pumudupereraphotography/",
  instagram: "https://www.instagram.com/pumudu_perera_photography/",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Photography", href: "#gallery" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  greeting: "Hello, I'm",
  name: "Pumudu Perera",
  roles: ["Creative Designer", "Photographer", "Visual Storyteller"],
  introduction:
    "I craft visual narratives that blend creative design with the art of photography. Every project is an opportunity to tell a story that resonates, inspires, and leaves a lasting impression.",
  cta: [
    { label: "View Portfolio", href: "#portfolio", primary: true },
    { label: "Let's Work Together", href: "#contact", primary: false },
  ],
};

export const aboutContent = {
  title: "About Me",
  subtitle: "The story behind the lens",
  paragraphs: [
    "I'm Pumudu Perera — a creative designer and photographer driven by the power of visual storytelling. My journey began with a deep curiosity for the way images can capture emotion, time, and[...]
    "With years of experience spanning brand design, commercial photography, and creative direction, I've developed a philosophy rooted in authenticity and intention. Every project is approached w[...]
    "My photography is about more than just taking pictures — it's about understanding light, composition, and the subtle moments that make an image unforgettable. From intimate portraits to exp[...]
    "When I'm not behind the camera or designing brand identities, you'll find me exploring new creative techniques, collaborating with fellow artists, or seeking inspiration in the world around m[...]
  ],
  stats: [
    { value: 8, label: "Years Experience", suffix: "+" },
    { value: 350, label: "Projects Completed", suffix: "+" },
    { value: 120, label: "Happy Clients", suffix: "+" },
    { value: 15, label: "Awards Won", suffix: "" },
  ],
};

export const servicesContent = {
  title: "Services",
  subtitle: "What I offer",
  services: [
    {
      icon: "Palette",
      title: "Creative Direction",
      description:
        "Full-scale creative direction for brands, campaigns, and visual projects that need a cohesive artistic vision and strategic guidance.",
    },
    {
      icon: "Shapes",
      title: "Brand Design",
      description:
        "Comprehensive brand identity design including logos, color systems, typography, and brand guidelines that capture your unique essence.",
    },
    {
      icon: "PenTool",
      title: "Graphic Design",
      description:
        "Print and digital design solutions — from brochures and posters to social media assets and marketing collateral.",
    },
    {
      icon: "Camera",
      title: "Photography",
      description:
        "Professional photography services spanning portraits, events, commercial, and lifestyle photography with a cinematic touch.",
    },
    {
      icon: "User",
      title: "Portrait Photography",
      description:
        "Capturing authentic expressions and personalities through carefully composed and beautifully lit portrait sessions.",
    },
    {
      icon: "Building2",
      title: "Commercial Photography",
      description:
        "High-impact commercial imagery for brands, products, and advertising campaigns that drive engagement and conversions.",
    },
    {
      icon: "Share2",
      title: "Social Media Design",
      description:
        "Scroll-stopping social media content designed to elevate your brand's digital presence across all platforms.",
    },
    {
      icon: "Wand2",
      title: "Photo Editing & Retouching",
      description:
        "Professional post-production including color grading, retouching, compositing, and image enhancement.",
    },
    {
      icon: "Clapperboard",
      title: "Visual Content Creation",
      description:
        "End-to-end visual content production — from concept development and art direction to final delivery.",
    },
  ],
};

export const projectsContent = {
  title: "Featured Projects",
  subtitle: "Selected works",
  projects: [
    {
      title: "Brand Identity — Aura Wellness",
      category: "Brand Design",
      year: "2024",
      description:
        "Complete brand identity design for a premium wellness brand, including logo, color palette, typography, and brand guidelines.",
      image: "/images/project-1.jpg",
      tags: ["Branding", "Logo Design", "Identity"],
    },
    {
      title: "Urban Portraits Series",
      category: "Photography",
      year: "2024",
      description:
        "A cinematic portrait series capturing raw human emotion against urban landscapes, blending natural and artificial light.",
      image: "/images/project-2.jpg",
      tags: ["Portrait", "Cinematic", "Urban"],
    },
    {
      title: "Eclipse — Fashion Editorial",
      category: "Creative Direction",
      year: "2023",
      description:
        "Art direction and photography for a high-fashion editorial campaign inspired by celestial geometry and shadow play.",
      image: "/images/project-3.jpg",
      tags: ["Editorial", "Fashion", "Art Direction"],
    },
    {
      title: "Ocean Brew Co. Packaging",
      category: "Graphic Design",
      year: "2023",
      description:
        "Premium packaging design for a craft coffee brand, featuring custom illustrations and tactile finishing techniques.",
      image: "/images/project-4.jpg",
      tags: ["Packaging", "Illustration", "Print"],
    },
    {
      title: "Wanderlust Travel Campaign",
      category: "Commercial Photography",
      year: "2023",
      description:
        "A destination-focused commercial campaign capturing the essence of travel through vibrant, story-driven imagery.",
      image: "/images/project-5.jpg",
      tags: ["Travel", "Commercial", "Campaign"],
    },
    {
      title: "Lumina — Social Media Rebrand",
      category: "Social Media Design",
      year: "2022",
      description:
        "Complete social media rebranding including content strategy, template design, and visual storytelling assets.",
      image: "/images/project-6.jpg",
      tags: ["Social Media", "Content", "Strategy"],
    },
  ],
};

export const galleryContent = {
  title: "Photography",
  subtitle: "Gallery",
  categories: [
    "All",
    "Portraits",
    "Travel",
    "Lifestyle",
    "Commercial",
    "Events",
    "Street",
    "Landscape",
  ],
  images: [
    { src: "/images/gallery-1.jpg", category: "Portraits", alt: "Portrait in natural light" },
    { src: "/images/gallery-2.jpg", category: "Travel", alt: "Mountain landscape at sunrise" },
    { src: "/images/gallery-3.jpg", category: "Lifestyle", alt: "Urban lifestyle scene" },
    { src: "/images/gallery-4.jpg", category: "Commercial", alt: "Product photography setup" },
    { src: "/images/gallery-5.jpg", category: "Events", alt: "Wedding ceremony moment" },
    { src: "/images/gallery-6.jpg", category: "Street", alt: "Street photography in Colombo" },
    { src: "/images/gallery-7.jpg", category: "Landscape", alt: "Coastal landscape at golden hour" },
    { src: "/images/gallery-8.jpg", category: "Portraits", alt: "Studio portrait session" },
    { src: "/images/gallery-9.jpg", category: "Travel", alt: "Ancient temple architecture" },
    { src: "/images/gallery-10.jpg", category: "Lifestyle", alt: "Coffee shop ambiance" },
    { src: "/images/gallery-11.jpg", category: "Commercial", alt: "Brand campaign shoot" },
    { src: "/images/gallery-12.jpg", category: "Events", alt: "Cultural festival celebration" },
  ],
};

export const processContent = {
  title: "Creative Process",
  subtitle: "How I work",
  steps: [
    {
      step: "01",
      title: "Discover",
      description:
        "Deep-dive into your vision, goals, and audience. Research, moodboarding, and strategic planning to establish a clear creative direction.",
    },
    {
      step: "02",
      title: "Concept",
      description:
        "Developing creative concepts, sketches, and visual directions. Exploring multiple approaches to find the most compelling solution.",
    },
    {
      step: "03",
      title: "Create",
      description:
        "Bringing concepts to life through meticulous execution. Every detail is crafted with precision — from initial captures to final edits.",
    },
    {
      step: "04",
      title: "Deliver",
      description:
        "Polished final assets delivered with care. Comprehensive file formats, usage guidelines, and ongoing support for seamless implementation.",
    },
  ],
};

export const skillsContent = {
  title: "Skills & Expertise",
  subtitle: "Tools of the trade",
  categories: [
    {
      title: "Creative Design",
      skills: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Lightroom",
        "Adobe After Effects",
        "Figma",
        "Brand Identity",
        "Typography",
        "Layout Design",
      ],
    },
    {
      title: "Photography",
      skills: [
        "Portrait Photography",
        "Commercial Photography",
        "Photo Retouching",
        "Color Grading",
        "Lighting Techniques",
        "Visual Storytelling",
        "Composition",
        "Post-Production",
      ],
    },
  ],
};

export const testimonialsContent = {
  title: "Testimonials",
  subtitle: "What clients say",
  testimonials: [
    {
      quote:
        "Pumudu transformed our brand identity completely. His creative vision and attention to detail are truly exceptional. The result exceeded all expectations.",
      author: "Sarah Fernando",
      role: "Founder, Aura Wellness",
    },
    {
      quote:
        "Working with Pumudu was an absolute pleasure. His photography captured the essence of our brand in ways we couldn't have imagined. Highly recommended.",
      author: "Rajith De Silva",
      role: "Marketing Director, Ocean Brew Co.",
    },
    {
      quote:
        "The editorial shoot Pumudu directed was world-class. Every frame told a story, and the creative direction was impeccably executed from concept to final delivery.",
      author: "Maya Gunasekara",
      role: "Editor-in-Chief, Eclipse Magazine",
    },
    {
      quote:
        "Professional, creative, and incredibly talented. Pumudu's ability to understand our vision and translate it into stunning visuals is remarkable.",
      author: "David Wickramasinghe",
      role: "CEO, Lumina Digital",
    },
  ],
};

export const experienceContent = {
  title: "Experience",
  subtitle: "Professional journey",
  timeline: [
    {
      year: "2024",
      title: "Senior Creative Designer",
      company: "Freelance / Studio Pumudu",
      description:
        "Leading creative direction and design projects for international clients across brand identity, photography, and visual content.",
    },
    {
      year: "2022",
      title: "Creative Designer & Photographer",
      company: "Freelance",
      description:
        "Expanded services to include full-scale photography alongside design, working with brands across fashion, hospitality, and lifestyle.",
    },
    {
      year: "2020",
      title: "Graphic Designer",
      company: "Creative Agency, Colombo",
      description:
        "Designed brand identities, marketing collateral, and digital assets for a diverse portfolio of local and regional clients.",
    },
    {
      year: "2018",
      title: "Junior Designer",
      company: "Design Studio, Colombo",
      description:
        "Began professional journey in graphic design, honing skills in typography, layout, and visual communication.",
    },
  ],
  education: [
    {
      year: "2018",
      degree: "BA (Hons) Graphic Design",
      school: "University of Moratuwa",
    },
    {
      year: "2021",
      degree: "Professional Photography Certification",
      school: "Sri Lanka Institute of Photography",
    },
  ],
  awards: [
    { year: "2023", title: "Best Commercial Photographer", org: "Sri Lanka Design Awards" },
    { year: "2022", title: "Excellence in Brand Identity", org: "Adobe Creative Awards" },
    { year: "2021", title: "Portrait Photography Gold", org: "Asia Photo Awards" },
    { year: "2020", title: "Emerging Designer of the Year", org: "Design Collective SL" },
  ],
};
