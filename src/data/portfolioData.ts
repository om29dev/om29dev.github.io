import { Project, Milestone, Certification, SkillGroup } from '../types';

export const personalInfo = {
  name: 'Om Rajendra Bharambe',
  headline: 'Full-Stack Developer, AI & IoT Engineer',
  tagline: 'B.Tech IT Student @ PCCOE Pune | Building practical, high-impact systems from web backends to edge hardware',
  about: [
    'Curious about what can be built, improved, or engineered differently. I am an Information Technology student at Pimpri Chinchwad College of Engineering (PCCOE) focused on turning concepts into reliable, production-ready solutions.',
    'My approach to learning is strictly hands-on: diving beyond theory to build systems from the ground up, understanding architectural tradeoffs, and iterating under real-world constraints. I enjoy taking on unfamiliar challenges across backend architecture, edge AI models, and IoT telemetry.',
    'Always open to technical internships, engineering collaborations, open-source initiatives, and challenging projects.'
  ],
  education: {
    institution: "Pimpri Chinchwad College of Engineering (PCCOE)",
    parentTrust: "PCET",
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    period: '2024 - 2028',
    location: 'Pune, Maharashtra, India',
    details: 'Focusing on distributed systems, data structures, cloud infrastructure, and embedded hardware development.'
  },
  contacts: {
    phone: '+91 8421936775',
    phoneRaw: '8421936775',
    email: 'ombharambe901@gmail.com',
    linkedin: 'https://www.linkedin.com/in/om29dev',
    github: 'https://github.com/om29dev',
    location: 'Pune / Pimpri-Chinchwad, India'
  }
};

export const milestones: Milestone[] = [
  {
    id: 'alphabyte',
    title: '1st Place Winner',
    competition: 'Alphabyte 3.0 - 24-Hour National Hackathon',
    award: 'National Champion',
    date: '2025',
    team: 'Team Hustlers',
    description: 'Spearheaded backend architecture, relational database design, core application logic, and cross-service integrations during an intensive 24-hour sprint. Competed against university teams across the country to secure first place.',
    tags: ['Backend Architecture', 'Database Design', 'API Integration', 'Team Lead'],
    certificateUrl: './certificates/gdgc-alphabyte-3-winner.pdf'
  },
  {
    id: 'ieee-r10',
    title: '1st Place Round 1 & 3rd Prize Finals',
    competition: 'IEEE R10 ACEI INV.ENT Pitch Competition 2026',
    award: 'Regional Podium Winner',
    date: '2026',
    team: 'Team Hustlers',
    description: 'Engineered and demonstrated NIRIKSHA, a functional environmental monitoring and early-hazard alert system prototype. Recognized by IEEE Pune Section and faculty evaluators for feasibility, real-world utility, and hardware-software integration.',
    tags: ['IoT Sensor Mesh', 'Hazard Detection', 'Embedded Systems', 'Hardware Prototype'],
    certificateUrl: './certificates/ieee-smart-cities-invent-pitch-3rd-prize.pdf'
  },
  {
    id: 'latrobe-tigc',
    title: 'Phase II Qualifier & International Grant',
    competition: 'Technology Infusion Grand Challenge (TIGC)',
    award: 'AUD 750 Innovation Grant',
    date: '2025',
    team: 'Team Hustlers',
    grant: 'AUD 750',
    description: 'Qualified for Phase II in the international innovation competition organized in collaboration with La Trobe University, Australia. Awarded an AUD 750 research and development grant to advance Civic Aegis from concept to physical deployment.',
    tags: ['Civic Aegis', 'International Grant', 'Smart City Telemetry', 'Research & Dev']
  },
  {
    id: 'ai-for-bharat',
    title: 'Top Innovator Shortlist & Prototype Phase',
    competition: 'AI for Bharat National Hackathon',
    award: 'Top Innovator',
    date: '2025',
    team: 'Team Hustlers',
    description: 'Selected as Top Innovator for project Jago Bharat Jago and advanced into the Prototype Development Phase, utilizing AWS cloud services to construct an accessible intelligence layer for civic challenges.',
    tags: ['Artificial Intelligence', 'AWS Cloud', 'Civic Tech', 'Edge Model'],
    certificateUrl: './certificates/aws-hack2skill-ai-for-bharat.pdf'
  }
];

export const projects: Project[] = [
  {
    id: 'civic-voice',
    title: 'Civic Voice',
    subtitle: 'Anonymous Civic Grievance & Triage Platform',
    category: 'fullstack',
    featured: true,
    description: 'Full-stack platform enabling citizens to report civic infrastructure defects anonymously. Implemented location pinning, automated text vectorization to prevent duplicate tickets, and rule-based department routing.',
    tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/om29dev/civic-voice',
    metrics: 'Automated deduplication'
  },
  {
    id: 'niriksha',
    title: 'NIRIKSHA',
    subtitle: 'Intelligent Environmental Telemetry & Hazard System',
    category: 'iot',
    featured: true,
    description: 'Award-winning IoT hazard detection system presented at IEEE R10 ACEI INV.ENT. Combines microcontrollers, environmental sensors, and edge alert protocols to transmit real-time telemetry during air quality spikes or localized hazards.',
    tags: ['ESP32', 'C++', 'IoT Telemetry', 'Sensors', 'Dashboard'],
    githubUrl: 'https://github.com/om29dev/niriksha',
    metrics: 'IEEE R10 Prize Winner'
  },
  {
    id: 'civic-aegis',
    title: 'Civic Aegis',
    subtitle: 'Smart City Infrastructure Monitoring System',
    category: 'iot',
    featured: true,
    description: 'International grant-backed urban resilience platform engineered under La Trobe University TIGC. Captures structural stress and localized hydrological telemetry to trigger automated civic alerts before public safety thresholds are breached.',
    tags: ['IoT', 'Microcontrollers', 'Full-Stack', 'Cloud APIs', 'Analytics'],
    githubUrl: 'https://github.com/om29dev/civic-aegis',
    metrics: 'AUD 750 La Trobe Grant'
  },
  {
    id: 'nivora',
    title: 'Nivora',
    subtitle: 'Mobile Wellness & Crisis Support Application',
    category: 'fullstack',
    featured: true,
    description: 'Cross-platform mobile wellness companion built with Flutter and Firebase. Features encrypted personal journaling, mood state analysis, localized emergency contact dispatch, and offline storage synchronization.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile App', 'REST API'],
    githubUrl: 'https://github.com/om29dev/nivora',
    metrics: 'Offline-first sync'
  },
  {
    id: 'weedsight',
    title: 'WeedSight',
    subtitle: 'Edge Vision Agricultural Weed Detection',
    category: 'ai',
    featured: false,
    description: 'Computer vision pipeline trained on annotated agricultural datasets to distinguish crop seedlings from invasive weeds in real time. Optimized using int8 quantization for edge execution on low-power agricultural sprayers.',
    tags: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'Edge Inference'],
    githubUrl: 'https://github.com/om29dev/weedsight',
    metrics: 'Quantized edge inference'
  },
  {
    id: 'astrolog',
    title: 'AstroLog',
    subtitle: 'Distributed Application Log Streamer & Observability',
    category: 'fullstack',
    featured: false,
    description: 'Lightweight developer observability service for ingesting, querying, and indexing distributed server logs with real-time anomaly thresholds and webhook notification alerts.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Observability'],
    githubUrl: 'https://github.com/om29dev/astrolog',
    metrics: 'Sub-second search'
  },
  {
    id: 'pandharpur-3d',
    title: 'Pandharpur 3D Digital Twin',
    subtitle: 'Spatial Pilgrim Flow Simulation & WebGL Navigation',
    category: 'ai',
    featured: false,
    description: 'Interactive 3D web model of temple pilgrimage routes designed to simulate crowd density bottlenecks and assist municipal route planning during peak festival gatherings.',
    tags: ['Three.js', 'WebGL', 'JavaScript', 'Spatial Modeling', 'Simulations'],
    githubUrl: 'https://github.com/om29dev/pandharpur-3d',
    metrics: 'Interactive 3D WebGL'
  },
  {
    id: 'classroom-server',
    title: 'Classroom Assessment Server',
    subtitle: 'Air-Gapped Examination Engine & Auto-Grader',
    category: 'fullstack',
    featured: false,
    description: 'Self-hosted local-area examination and laboratory testing server providing tamper-resistant question distribution, test session lockouts, and instant code evaluation over internal subnets.',
    tags: ['Java', 'Spring Boot', 'SQLite', 'Local Network', 'Security'],
    githubUrl: 'https://github.com/om29dev/classroom-assessment-server',
    metrics: 'Air-gapped deployment'
  },
  {
    id: 'tessiq',
    title: 'Tessiq',
    subtitle: 'Automated Technical Evaluation Platform',
    category: 'fullstack',
    featured: false,
    description: 'Modular platform for technical assessment authoring, candidate performance tracking, and automated question bank generation with role-based access control.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/om29dev/tessiq',
    metrics: 'Role-based access'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'Dart']
  },
  {
    category: 'Frontend & Mobile',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Flutter', 'HTML5 / CSS3', 'REST Integration']
  },
  {
    category: 'Backend & Cloud',
    skills: ['Node.js', 'Express', 'FastAPI', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS']
  },
  {
    category: 'AI & Edge Vision',
    skills: ['PyTorch', 'YOLOv8', 'OpenCV', 'Model Quantization', 'Computer Vision Pipeline', 'Edge Inference']
  },
  {
    category: 'IoT & Embedded',
    skills: ['ESP32', 'Arduino', 'Sensor Interfacing', 'MQTT', 'Microcontroller Firmware', 'Hardware Prototyping']
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Docker', 'Linux', 'Postman', 'CI/CD Pipelines', 'Vercel', 'VS Code']
  }
];

export const certifications: Certification[] = [
  {
    id: 'gdgc-alphabyte-winner',
    title: '1st Place Winner - Alphabyte 3.0 National Hackathon',
    issuer: 'Google Developer Groups On Campus, PCCOE',
    date: '2025',
    type: 'Hackathon Champion',
    details: 'Awarded 1st place in the 24-hour national level hackathon as Team Hustlers.',
    certificateUrl: './certificates/gdgc-alphabyte-3-winner.pdf',
    previewUrl: './certificates/previews/gdgc-alphabyte-3-winner.png',
    category: 'competitions'
  },
  {
    id: 'ieee-smart-cities-pitch',
    title: '3rd Prize - IEEE InvEnt Pitch Competition 2026',
    issuer: 'IEEE Pune Section & SIG Smart City (with IEEE R10 ACEI)',
    date: 'Aug 2026',
    type: 'Competition Podium',
    details: 'Awarded 3rd prize for outstanding performance in the InvEnt Pitch Competition with Team Hustlers.',
    certificateUrl: './certificates/ieee-smart-cities-invent-pitch-3rd-prize.pdf',
    previewUrl: './certificates/previews/ieee-smart-cities-invent-pitch-3rd-prize.png',
    category: 'competitions'
  },
  {
    id: 'ieee-r10-pitch-position',
    title: '3rd Position - Inv.Ent Pitch Competition 2025',
    issuer: 'IEEE Region 10 ACEI & IEEE Pune Section',
    date: '2025',
    type: 'Competition Podium',
    details: 'Secured 3rd position in the regional entrepreneurship and innovation pitch competition.',
    certificateUrl: './certificates/ieee-r10-invent-pitch-3rd-position.pdf',
    previewUrl: './certificates/previews/ieee-r10-invent-pitch-3rd-position.png',
    category: 'competitions'
  },
  {
    id: 'aws-ai-bharat',
    title: 'AI for Bharat Hackathon - Prototype Execution',
    issuer: 'Amazon Web Services (AWS) & Hack2skill',
    date: 'March 2026',
    type: 'National Hackathon',
    details: 'Successfully built and submitted a qualified prototype demonstrating generative AI tools on AWS (ID: 2026H2S04AIFB-P03086).',
    certificateUrl: './certificates/aws-hack2skill-ai-for-bharat.pdf',
    previewUrl: './certificates/previews/aws-hack2skill-ai-for-bharat.png',
    category: 'competitions'
  },
  {
    id: 'hacktopia-finale',
    title: 'Hacktopia 2025 - Grand Finale 24-Hour Hackathon',
    issuer: 'PCCOE ACM Student Chapter & Unstop',
    date: '2025',
    type: 'Hackathon Finalist',
    details: 'Competed in the 24-hour offline hackathon grand finale as Team Hustlers.',
    certificateUrl: './certificates/hacktopia-2025-grand-finale.pdf',
    previewUrl: './certificates/previews/hacktopia-2025-grand-finale.png',
    category: 'competitions'
  },
  {
    id: 'mlsc-bluebit',
    title: 'Bluebit Hackathon 2025',
    issuer: 'Microsoft Learn Student Chapter (MLSC), PCCOE',
    date: '2025',
    type: 'Hackathon',
    details: 'Active participation in the 2025 edition of the Bluebit Hackathon.',
    certificateUrl: './certificates/mlsc-bluebit-hackathon-2025.pdf',
    previewUrl: './certificates/previews/mlsc-bluebit-hackathon-2025.png',
    category: 'competitions'
  },
  {
    id: 'nutan-ideathon',
    title: 'IDEATHON Competition 2025',
    issuer: 'Nutan Incubation Centre & NMIET Pune',
    date: '2025',
    type: 'Innovation Pitch',
    details: 'Certificate of appreciation for active participation in the campus IDEATHON competition.',
    certificateUrl: './certificates/nutan-ideathon-2025.pdf',
    previewUrl: './certificates/previews/nutan-ideathon-2025.png',
    category: 'competitions'
  },
  {
    id: 'my-job-grow-internship',
    title: 'Artificial Intelligence Internship Completion',
    issuer: 'My Job Grow (in collab with IIT Bombay Techfest)',
    date: 'April 2025',
    type: 'Internship Completion',
    details: 'Issued for outstanding achievement in AI and successful execution of advanced project milestones (ID: MJG0824AI809).',
    certificateUrl: './certificates/my-job-grow-ai-internship.pdf',
    previewUrl: './certificates/previews/my-job-grow-ai-internship.png',
    category: 'courses'
  },
  {
    id: 'my-job-grow-declaration',
    title: 'AI Hybrid Internship Completion Declaration',
    issuer: 'My Job Grow',
    date: 'April 2025',
    type: 'Internship Recommendation',
    details: 'Official letter of completion covering cloud-based AI model development, data processing, and distributed AI systems.',
    certificateUrl: './certificates/my-job-grow-ai-internship-declaration.pdf',
    previewUrl: './certificates/previews/my-job-grow-ai-internship-declaration.png',
    category: 'courses'
  },
  {
    id: 'my-job-grow-upskilling',
    title: 'Artificial Intelligence Upskilling Course',
    issuer: 'My Job Grow',
    date: 'March 2025',
    type: 'AI Course',
    details: '15 hours of structured curriculum covering applied AI, neural representations, and ML model workflows.',
    certificateUrl: './certificates/my-job-grow-ai-upskilling-course.pdf',
    previewUrl: './certificates/previews/my-job-grow-ai-upskilling-course.png',
    category: 'courses'
  },
  {
    id: 'udemy-fullstack',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy (Dr. Angela Yu)',
    date: 'Feb 2025',
    type: 'Professional Bootcamp',
    details: '61.5 total hours covering React, Node.js, Express, PostgreSQL, MongoDB, REST APIs, and web security.',
    certificateUrl: './certificates/udemy-fullstack-web-development-bootcamp.pdf',
    previewUrl: './certificates/previews/udemy-fullstack-web-development-bootcamp.png',
    verificationUrl: 'https://ude.my/UC-806fe9a7-7a21-445b-acae-cda0526420fb',
    category: 'courses'
  },
  {
    id: 'udemy-java',
    title: 'Java Masterclass 2025: 130+ Hours of Expert Lessons',
    issuer: 'Udemy (Tim Buchalka)',
    date: 'Feb 2025',
    type: 'Professional Masterclass',
    details: '135.5 total hours of comprehensive Java, OOP design, concurrency, memory models, and JVM internals.',
    certificateUrl: './certificates/udemy-java-masterclass-2025.pdf',
    previewUrl: './certificates/previews/udemy-java-masterclass-2025.png',
    verificationUrl: 'https://ude.my/UC-5ae2b1e6-7aba-4bad-a40b-3164c7e3878d',
    category: 'courses'
  },
  {
    id: 'gdgc-webdev',
    title: 'Web Development Workshop (MERN Stack)',
    issuer: 'Google Developer Groups On Campus, PCCOE',
    date: '2025',
    type: 'Technical Workshop',
    details: 'Certificate of completion for hands-on MERN stack engineering workshop (MongoDB, Express, React, Node.js).',
    certificateUrl: './certificates/gdgc-web-development-workshop.pdf',
    previewUrl: './certificates/previews/gdgc-web-development-workshop.png',
    category: 'workshops'
  },
  {
    id: 'gdgc-flutter',
    title: 'Flutter Workshop 2025',
    issuer: 'Google Developer Groups On Campus, PCCOE',
    date: '2025',
    type: 'Technical Workshop',
    details: 'Certificate of completion for mobile application development using Flutter and Dart.',
    certificateUrl: './certificates/gdgc-flutter-workshop-2025.pdf',
    previewUrl: './certificates/previews/gdgc-flutter-workshop-2025.png',
    category: 'workshops'
  },
  {
    id: 'mlsc-techroom',
    title: 'AI / Data Science TechRoom Session',
    issuer: 'Microsoft Learn Student Chapter (MLSC), PCCOE',
    date: '2025',
    type: 'Technical Seminar',
    details: 'Certificate of appreciation for active participation in the AI/DS TechRoom technical session.',
    certificateUrl: './certificates/mlsc-ai-ds-techroom-appreciation.pdf',
    previewUrl: './certificates/previews/mlsc-ai-ds-techroom-appreciation.png',
    category: 'workshops'
  },
  {
    id: 'pccoe-spectrum',
    title: 'Volunteer - Blind Coding Team | SPECTRUM \'25',
    issuer: 'PCCOE Department of Applied Sciences and Humanities',
    date: 'March 2025',
    type: 'Technical Volunteering',
    details: 'Certificate of appreciation for contributing as a volunteer in the Blind Coding technical team.',
    certificateUrl: './certificates/pccoe-spectrum-blind-coding-volunteer.pdf',
    previewUrl: './certificates/previews/pccoe-spectrum-blind-coding-volunteer.png',
    category: 'workshops'
  }
];

