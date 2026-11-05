export const profile = {
  name: "Chintan Brahmbhatt",
  firstName: "Chintan",
  lastName: "Brahmbhatt",
  title: "Computer Operator · Administrative Support · Data Entry",
  location: "Anand, Gujarat, India",
  email: "Brahmbhattchintan9@gmail.com",
  phone: "7698042897",
  summary:
    "A motivated professional with experience in administrative support and quality control, currently pursuing a Diploma in Computer Engineering. I bring technical aptitude, clear communication, fast typing, and a strong interest in learning new technologies.",
  objective:
    "Seeking a challenging professional role where I can contribute my organizational, computer operation, administrative, and problem-solving abilities.",
} as const;

export const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["photos", "Photos"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["contact", "Contact"],
] as const;

export const photos = [
  { src: "/images/chintan-beach.jpg", alt: "Chintan by the sea", label: "By the water", number: "01" },
  { src: "/images/chintan-sunset.jpg", alt: "Chintan outdoors at sunset", label: "Golden hour", number: "02" },
  { src: "/images/chintan-drive.jpg", alt: "AI-generated portrait of Chintan in a car", label: "AI portrait study", number: "03" },
  { src: "/images/chintan-blazer.jpg", alt: "Chintan wearing a black blazer", label: "A formal look", number: "04" },
  { src: "/images/chintan-city.jpg", alt: "Chintan outdoors in the city", label: "City evening", number: "05" },
  { src: "/images/chintan-festival.jpg", alt: "Chintan in a pink kurta at a colorful celebration", label: "Celebration colors", number: "06" },
] as const;

export const experience = [
  {
    company: "MGVCL",
    fullCompany: "Madhya Gujarat Vij Company Ltd",
    sector: "Government sector",
    role: "Computer Operator & Data Entry",
    period: "2023 — 2024",
    number: "01",
    responsibilities: [
      "Provided operational and administrative support.",
      "Handled customer inquiries.",
      "Managed official documents and files.",
      "Assisted with data entry and office operations.",
    ],
  },
  {
    company: "Crest Leather",
    fullCompany: "Crest Leather, Anand",
    sector: "Manufacturing",
    role: "Account Assistant · Purchase Department",
    period: "2024 — 2025",
    number: "02",
    responsibilities: [
      "Managed purchase department operations.",
      "Assisted in leather processing and manufacturing operations.",
      "Maintained quality control records.",
      "Assisted with production workflow.",
    ],
  },
] as const;

export const skills = [
  "Creativity",
  "Leadership",
  "Organization",
  "Problem solving",
  "Teamwork",
  "Computer operations",
  "Data entry",
  "Administrative support",
  "Documentation",
  "Quality control",
] as const;

export const education = [
  {
    course: "Computer Operator and Programming Assistant",
    institution: "D.S Patel I.T.I, Vasad",
    date: "July 2021",
    type: "Vocational course",
  },
  {
    course: "10th Standard",
    institution: "J N Patel High School",
    date: "September 2019",
    type: "School education",
  },
  {
    course: "Diploma in Computer Engineering",
    institution: "Currently pursuing",
    date: "In progress",
    type: "Further education",
  },
] as const;

export const projects = [
  {
    number: "01",
    title: "Office Management Dashboard",
    category: "Operations · Concept",
    description:
      "A concept for bringing daily office tasks, documents, and team updates into one considered workspace.",
    visual: "dashboard",
  },
  {
    number: "02",
    title: "Data Entry Interface",
    category: "Data · Concept",
    description:
      "A sample interface exploring clear form structure, keyboard-first entry, and readable records.",
    visual: "entry",
  },
  {
    number: "03",
    title: "Inventory Management UI",
    category: "Inventory · Concept",
    description:
      "A conceptual stock view designed to make product status and routine updates easier to scan.",
    visual: "inventory",
  },
  {
    number: "04",
    title: "Purchase Records System",
    category: "Purchasing · Concept",
    description:
      "A sample purchase record flow for organizing orders, suppliers, and quality documentation.",
    visual: "purchase",
  },
] as const;
