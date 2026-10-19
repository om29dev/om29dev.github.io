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
    tags: ['Backend Architecture', 'Database Design', 'API Integration', 'Team Lead']
  },
  {
    id: 'ieee-r10',
    title: '1st Place Round 1 & 3rd Prize Finals',
    competition: 'IEEE R10 ACEI INV.ENT Pitch Competition 2026',
    award: 'Regional Podium Winner',
    date: '2026',
    team: 'Team Hustlers',
    description: 'Engineered and demonstrated NIRIKSHA, a functional environmental monitoring and early-hazard alert system prototype. Recognized by IEEE Pune Section and faculty evaluators for feasibility, real-world utility, and hardware-software integration.',
    tags: ['IoT Sensor Mesh', 'Hazard Detection', 'Embedded Systems', 'Hardware Prototype']
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
    tags: ['Artificial Intelligence', 'AWS Cloud', 'Civic Tech', 'Edge Model']
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
  }
];

export const certifications: Certification[] = [
  {
    id: 'alphabyte-winner',
    title: '1st Place Winner - Alphabyte 3.0 National Hackathon',
    issuer: 'GDG On Campus, PCCOE',
    date: '2025',
    type: 'Competition Award',
    details: '24-hour national hackathon winner out of competing engineering institutions.'
  },
  {
    id: 'tigc-grant',
    title: 'Technology Infusion Grand Challenge Phase II & AUD 750 Grant',
    issuer: 'La Trobe University, Australia & PCCOE',
    date: '2025',
    type: 'Research & Innovation Grant',
    details: 'International recognition and funding for Civic Aegis smart city telemetry prototype.'
  },
  {
    id: 'fullstack-bootcamp',
    title: 'The Complete Full-Stack Web Development Bootcamp Course',
    issuer: 'Udemy / Professional Training',
    date: '2025',
    type: 'Technical Certification',
    details: 'Comprehensive full-stack architecture covering frontends, relational databases, and REST APIs.'
  },
  {
    id: 'ai-upskilling',
    title: 'Artificial Intelligence Upskilling Course',
    issuer: 'Professional Technical Certification',
    date: '2025',
    type: 'AI / Machine Learning',
    details: 'Practical applied machine learning, neural networks, and computer vision architectures.'
  },
  {
    id: 'java-masterclass',
    title: 'Java Masterclass 2025: 130+ Hours of Expert Lessons Course',
    issuer: 'Professional Technical Certification',
    date: '2025',
    type: 'Software Engineering',
    details: '130+ hours of advanced OOP, concurrency, JVM internals, and Enterprise Spring development.'
  },
  {
    id: 'spectrum-volunteer',
    title: 'Volunteer - Blind Coding Team | SPECTRUM 25',
    issuer: 'PCCOE Tech Council',
    date: '2025',
    type: 'Leadership & Community',
    details: 'Coordinated technical execution and challenge authoring for campus blind coding competition.'
  }
];
