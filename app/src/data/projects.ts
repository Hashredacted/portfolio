export interface CaseStudy {
  problem: string;
  solution: string;
  engineering: string[];
  results: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  blurb: string;
  categories: string[];
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  stack: string[];
  highlights: string[];
  tags: string[];
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "workspace-erp",
    title: "WorkSpace: Multi-Tenant SaaS & ERP",
    description:
      "Enterprise-style multi-tenant SaaS and ERP platform combining company management, role-based access, invoicing, inventory, payments, finance, and reporting.",
    blurb:
      "Built a multi-tenant SaaS/ERP platform with secure authentication, tenant isolation, inventory management, GST invoicing, payments, financial workflows, and operational dashboards.",
    categories: ["SaaS", "ERP", "Backend"],
    featured: true,
    githubUrl: "https://github.com/Hashredacted/work-company",
    stack: ["Node.js", "Express 5", "MongoDB", "Mongoose", "JWT", "Zod"],
    highlights: [
      "Multi-tenant architecture with tenant isolation",
      "RBAC with super-admin & company workspaces",
      "GST invoicing, inventory & multi-warehouse",
      "Financial audit trails & aging analysis",
    ],
    tags: ["SaaS", "ERP", "Node.js", "Express", "MongoDB", "RBAC", "Multi-Tenancy", "REST API", "Inventory"],
    caseStudy: {
      problem:
        "Businesses need complex ERP tooling — inventory, invoicing, role-based access, and financial reporting — without expensive enterprise software licenses.",
      solution:
        "Built a full multi-tenant SaaS/ERP platform that isolates tenant data, enforces role-based permissions, and provides end-to-end business management from inventory to financial audit trails.",
      engineering: [
        "Multi-tenant data isolation with per-tenant namespacing",
        "RBAC middleware enforcing super-admin, company-admin, and staff roles",
        "GST-compliant sales invoice and purchase bill generation",
        "Multi-warehouse stock movement ledger with SKU and barcode support",
        "Bill-wise payment allocation, receivables & payables tracking",
        "Cash and bank management with full financial audit trail",
        "REST API with Zod validation, Helmet security, and rate limiting",
      ],
      results: [
        "Full ERP feature set covering inventory, invoicing, and finance",
        "Secure tenant isolation preventing cross-tenant data leakage",
        "Role-based access control across all API endpoints",
      ],
    },
  },
  {
    slug: "healthcare-symptom-checker",
    title: "Healthcare Symptom Checker",
    description:
      "AI-powered educational application using a safety-gated workflow before generating structured responses from natural-language symptom input.",
    blurb:
      "Built an AI-assisted FastAPI application that combines LLM generation with a rule-based safety layer and persistent request history.",
    categories: ["AI/ML", "Backend"],
    featured: true,
    githubUrl: "https://github.com/Hashredacted/Healthcare-Symptom-Checker",
    stack: ["FastAPI", "Python", "Gemini API", "MongoDB", "PyMongo"],
    highlights: [
      "Safety-gated LLM workflow with urgent/emergency routing",
      "Gemini API integration for structured AI responses",
      "Natural-language symptom input with follow-up questions",
      "MongoDB history for persistent request tracking",
    ],
    tags: ["Python", "FastAPI", "Gemini", "LLM", "MongoDB", "AI Automation"],
    caseStudy: {
      problem:
        "Medical symptom analysis requires strict clinical safety guardrails — unconstrained LLMs risk hallucinating dangerous advice or missing critical emergencies.",
      solution:
        "Engineered an AI symptom evaluation backend using FastAPI and Gemini API, backed by a deterministic safety layer that routes red-flag symptoms to urgent care before LLM generation.",
      engineering: [
        "Deterministic pre-inference emergency keyword & severity gate",
        "Gemini API prompt engineering producing structured non-prescriptive assessments",
        "Contextual dynamic follow-up questions tailored to patient input",
        "FastAPI async backend with PyMongo persistent consultation tracking",
        "Structured JSON response schema with disclaimers and emergency hotline numbers",
      ],
      results: [
        "100% interception of red-flag emergency symptoms prior to LLM invocation",
        "Sub-800ms average response latency for complete structured assessments",
        "Robust input validation preventing prompt injection and unconstrained diagnoses",
      ],
    },
  },
  {
    slug: "ai-spillguard",
    title: "AI SpillGuard: Oil Spill Detection",
    description:
      "Deep-learning computer-vision system that detects and segments oil spills in satellite imagery and exposes the trained model through a Streamlit application.",
    blurb:
      "Built an end-to-end computer-vision application that segments oil spills from remote-sensing imagery and turns model predictions into usable visual analytics.",
    categories: ["AI/ML", "Computer Vision"],
    featured: true,
    githubUrl: "https://github.com/Hashredacted/AI_SpillGuard_OSD-Mohammad-Afnan-Mirza",
    liveUrl: "https://aispillguardosd-mohammad-afnan-mirza-ab7rbxck5ehj68knalfegk.streamlit.app/",
    stack: ["Python", "TensorFlow", "Keras", "U-Net", "OpenCV", "Streamlit"],
    highlights: [
      "U-Net semantic segmentation, 5-class pixel-level prediction",
      "~97% overall pixel accuracy, ~0.95 precision & recall",
      "Oil-spill area analysis and severity classification",
      "<500ms inference time via Streamlit web UI",
    ],
    tags: ["Python", "TensorFlow", "Keras", "U-Net", "Computer Vision", "Segmentation", "Streamlit"],
    caseStudy: {
      problem:
        "Manual detection of oil spills in satellite imagery is slow, error-prone, and unable to scale to real-time environmental monitoring.",
      solution:
        "Trained a U-Net segmentation model on remote-sensing satellite data and deployed it through an interactive Streamlit application for real-time visual analysis.",
      engineering: [
        "U-Net architecture for pixel-level semantic segmentation across 5 classes",
        "TensorFlow/Keras training pipeline with OpenCV image preprocessing",
        "Oil-spill area quantification and severity classification from model output",
        "Overlay and mask generation for visual interpretability",
        "Streamlit web UI for model inference and exportable results",
      ],
      results: [
        "~97% overall pixel accuracy on test imagery",
        "~0.95 oil-spill precision and recall",
        "Sub-500ms inference time per image",
      ],
    },
  },
  {
    slug: "knickknack-shop",
    title: "KnickKnack-Shop: Full-Stack E-Commerce",
    description:
      "Production-style e-commerce application with authentication, product management, cart and checkout, Stripe payments, email workflows, PDF invoices, and an admin dashboard.",
    blurb:
      "Built a complete e-commerce system covering the customer journey from authentication and product discovery to checkout, payment, order management, and invoicing.",
    categories: ["Full Stack", "E-Commerce"],
    featured: true,
    githubUrl: "https://github.com/Hashredacted/KnickKnack-shop",
    liveUrl: "https://knickknack-shop.onrender.com",
    stack: ["Node.js", "Express", "MongoDB", "Stripe", "PDFKit", "EJS"],
    highlights: [
      "End-to-end checkout with Stripe payment integration",
      "Session-based auth with password reset by email",
      "PDF invoice generation per order",
      "Admin product CRUD with image uploads & CSRF protection",
    ],
    tags: ["Node.js", "Express", "MongoDB", "Stripe", "E-commerce", "Authentication", "REST"],
    caseStudy: {
      problem:
        "Clients need production-ready e-commerce systems with real payment flows, authentication, order management, and admin tooling — not just static storefronts.",
      solution:
        "Built a full-stack e-commerce platform covering the complete customer and admin journey: registration, login, product catalog, cart, Stripe checkout, PDF invoices, and admin CRUD.",
      engineering: [
        "Session-based authentication with bcryptjs and password reset via email",
        "Stripe payment gateway integration with order status management",
        "PDFKit invoice generation attached to confirmed orders",
        "Admin panel with Multer image uploads, product CRUD, and validation",
        "CSRF protection and MongoDB-backed sessions for security",
      ],
      results: [
        "Full customer journey from discovery to payment and invoicing",
        "Production-grade security with CSRF protection and input validation",
        "Admin panel covering all product and order management needs",
      ],
    },
  },
  {
    slug: "raizada-compusoft",
    title: "Raizada CompuSoft: Business Platform",
    description:
      "Full-stack business website with pricing, downloads, product information, and a secure admin portal for managing business content through REST APIs.",
    blurb:
      "Built a business-focused web platform that combines a polished public site with an authenticated admin system for managing content and business data.",
    categories: ["Full Stack", "Business"],
    featured: true,
    githubUrl: "https://github.com/Hashredacted/work",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "HTML/CSS/JS"],
    highlights: [
      "Public-facing business site with pricing and downloads",
      "JWT-authenticated admin portal",
      "Content CRUD with logo and settings management",
      "Responsive UI with REST API backend",
    ],
    tags: ["Full Stack", "Node.js", "Express", "Admin Panel", "REST API", "MongoDB"],
  },
  {
    slug: "school-management",
    title: "School Management System",
    description:
      "Modern school-management web application demonstrating authentication, role-based interfaces, CRUD workflows, dashboards, and responsive design.",
    blurb:
      "Built a role-based school-management platform with authenticated dashboards, CRUD workflows, and responsive Next.js interfaces.",
    categories: ["Full Stack", "Dashboard"],
    featured: true,
    githubUrl: "https://github.com/Hashredacted/school",
    liveUrl: "https://school-iota-nine-81.vercel.app/login",
    stack: ["Next.js", "React", "TypeScript", "MongoDB Atlas", "NextAuth", "Recharts"],
    highlights: [
      "Role-based admin and student interfaces",
      "Authenticated dashboards with Recharts visualizations",
      "User, class, and CRUD workflow management",
      "Responsive Tailwind CSS design with TypeScript",
    ],
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "Authentication", "Dashboard"],
  },
];

export const secondaryProjects = [
  {
    title: "Oil Spill Classification + Grad-CAM",
    description: "CNN image classifier with Grad-CAM explainability for oil vs. no-oil detection in satellite imagery.",
    highlights: ["~93% validation accuracy", "ROC-AUC: 0.96", "Grad-CAM visual explainability"],
    tags: ["Python", "TensorFlow", "CNN", "Grad-CAM", "Computer Vision"],
    githubUrl: "https://github.com/Hashredacted/oill-spill-detection",
  },
  {
    title: "Face Emotion Detection",
    description: "Experimental real-time webcam emotion recognition across seven emotion classes.",
    highlights: ["7-class emotion recognition", "Real-time webcam inference", "Haar cascade + Keras"],
    tags: ["Python", "Keras", "OpenCV", "Computer Vision"],
    githubUrl: "https://github.com/Hashredacted/face-emotion-detection",
  },
  {
    title: "Object Detection",
    description: "Experimental object detection pipeline using SSD MobileNet V2 and Faster R-CNN with bounding-box visualization.",
    highlights: ["SSD MobileNet V2", "Faster R-CNN", "Non-maximum suppression"],
    tags: ["Python", "TensorFlow", "TensorFlow Hub", "OpenCV"],
    githubUrl: "https://github.com/Hashredacted/object-detection",
  },
];
