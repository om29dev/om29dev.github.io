import { Project, Milestone, Certification, SkillGroup, EducationItem } from '../types';

export const personalInfo = {
  name: 'Om Rajendra Bharambe',
  headline: 'Full-Stack Developer, AI & IoT Engineer',
  roles: [
    'Full-Stack Developer',
    'AI & IoT Engineer',
    'Backend Systems Builder',
    'Edge Vision & Embedded Hardware'
  ],
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
    phone: '+918421936775',
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
    previewUrl: './certificates/gdgc-alphabyte-3-winner.webp'
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
    previewUrl: './certificates/ieee-smart-cities-invent-pitch-3rd-prize.webp'
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
    previewUrl: './certificates/aws-hack2skill-ai-for-bharat.webp'
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
    metrics: 'Automated deduplication',
    caseStudy: {
      problem: {
        summary: 'Municipal grievance portals suffer severe user drop-off due to compulsory identity verification, while city administrations face manual triage backlogs with hundreds of duplicate filings for the same pothole or broken utility line.',
        points: [
          'Compulsory login steps discourage citizens from reporting on-the-go municipal hazards.',
          'Identical complaints submitted across social channels and helplines create redundant municipal work orders.',
          'Unstructured textual submissions lack standard severity tags and geographic coordinates, causing dispatch delays.'
        ]
      },
      solution: {
        summary: 'Engineered an anonymous, zero-friction reporting platform featuring instant geospatial pinning, semantic report clustering, and automated department dispatch.',
        points: [
          'Implemented text vectorization and cosine distance clustering to group duplicate reports automatically at ingestion.',
          'Built map-based geofence pinning that automatically attaches ward IDs and street coordinates to every incident.',
          'Designed a department triage dashboard with role-based status tracking, automated alerts, and public resolution timelines.'
        ],
        architecture: ['Next.js App Router', 'Express API Cluster', 'MongoDB Geospatial Indexing', 'TF-IDF Similarity Engine']
      },
      impact: {
        summary: 'Eliminated redundant ticket processing by over 60% and reduced grievance submission times from minutes to under 30 seconds on mobile devices.',
        points: [
          'Deduplication pipeline collapsed repeat complaint filings by 62% in municipal test runs.',
          'Zero-KYC submission workflow reduced report filing duration to under 30 seconds.',
          'Severe road hazard reports are prioritized and assigned to field crews within 2 minutes of submission.'
        ],
        metrics: ['62% triage overhead reduction', '<30s mobile submission time', 'Sub-2min automated hazard routing']
      }
    }
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
    metrics: 'IEEE R10 Prize Winner',
    caseStudy: {
      problem: {
        summary: 'Industrial environments, construction perimeters, and urban corridors lack rapid, localized hazard detection, relying on expensive aggregate stations that fail to capture sudden toxic gas leaks or particulate surges in real time.',
        points: [
          'Commercial monitoring stations are cost-prohibitive for dense multi-point deployment across campus or factory zones.',
          'Batch reporting architectures delay hazardous emission warnings by hours, leaving workers and residents vulnerable.',
          'Power brownouts and unstable field Wi-Fi networks lead to loss of telemetry during critical disaster events.'
        ]
      },
      solution: {
        summary: 'Engineered an autonomous, low-cost environmental monitoring node with onboard sensor calibration, offline flash buffering, and sub-second edge alert broadcast.',
        points: [
          'Constructed hardware modules integrating ESP32, MQ-series gas sensors, optical dust counters, and ambient atmospheric monitors.',
          'Wrote optimized C++ firmware with non-volatile SPIFFS ring buffers to guarantee zero telemetry loss during network drops.',
          'Built a live WebSocket telemetry dashboard featuring spatial heatmaps, historical analytics, and automated buzzer triggers.'
        ],
        architecture: ['ESP32 Dual-Core C++', 'FreeRTOS Tasks', 'Non-volatile SPIFFS Ring Buffer', 'WebSockets Real-time Hub']
      },
      impact: {
        summary: 'Recognized with regional podium honors at IEEE R10 ACEI INV.ENT Pitch Competition 2026, demonstrating reliable edge alert dissemination under sub-500ms latency.',
        points: [
          'Awarded 1st Place Round 1 and 3rd Prize Regional Finals in the IEEE R10 INV.ENT Pitch Competition.',
          'Delivered sub-500ms alert response from gas spike detection to physical buzzer and dashboard actuation.',
          'Maintained 99.8% telemetry packet delivery rate through sustained Wi-Fi dropout stress testing.'
        ],
        metrics: ['IEEE R10 Podium Honor', '<500ms edge alert latency', '99.8% packet delivery reliability']
      }
    }
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
    metrics: 'AUD 750 La Trobe Grant',
    caseStudy: {
      problem: {
        summary: 'Aging civic infrastructure such as low-lying bridges, culverts, and stormwater channels experience unmonitored structural deflection and flash flood overflow during heavy monsoon rainfall, risking citizen lives.',
        points: [
          'Manual bridge inspections during monsoon storms are dangerous, delayed, and incapable of continuous risk assessment.',
          'Absence of early water level rate-of-rise tracking leaves municipal emergency teams reactive rather than preventive.',
          'Harsh outdoor environmental conditions rapidly degrade unshielded field electronics.'
        ]
      },
      solution: {
        summary: 'Designed an industrial-grade sensory telemetry array coupling strain sensors, ultrasonic water-level transducers, and cloud-assisted rate-of-rise prediction models.',
        points: [
          'Engineered ruggedized edge nodes with ultrasonic rangefinders and multi-axis strain gauges measuring bridge deck deflection.',
          'Developed cloud correlation logic that matches localized sensor spikes against real-time meteorological radar feeds.',
          'Created automated municipal webhooks to signal traffic light lockouts and send emergency sirens before flood crests.'
        ],
        architecture: ['Industrial Telemetry Nodes', 'Ultrasonic Array', 'Cloud Event Pipeline', 'Automated Municipal Dispatch Webhooks']
      },
      impact: {
        summary: 'Awarded an AUD 750 International Innovation Grant by La Trobe University, Australia, advancing from concept to full physical deployment verification.',
        points: [
          'Secured AUD 750 Phase II Innovation Grant under the Technology Infusion Grand Challenge (TIGC).',
          'Yielded up to 45 minutes of proactive flood warning lead time for emergency barricade deployments.',
          'Autonomous self-calibration routines eliminated false sensor alerts across 30 days of continuous testing.'
        ],
        metrics: ['AUD 750 La Trobe TIGC Grant', '45min early flood warning lead time', 'Zero false positives over 30d test']
      }
    }
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
    metrics: 'Offline-first sync',
    caseStudy: {
      problem: {
        summary: 'Mental wellness applications often enforce rigid cloud sign-ins, collect sensitive user introspection data without encryption, and fail completely when a user in crisis lacks an active cellular data connection.',
        points: [
          'Network dependency leaves users without grounding exercises or emergency contacts in offline environments.',
          'Complex multi-level menus slow down users who need urgent help or immediate support outreach.',
          'Concerns regarding personal data privacy prevent users from documenting mental wellness transparently.'
        ]
      },
      solution: {
        summary: 'Architected a private, offline-first mobile companion in Flutter and Dart, combining local AES-256 encrypted storage, one-tap SOS dispatch, and cloud backup.',
        points: [
          'Built an offline-first architecture utilizing local Hive databases with transparent Firebase background synchronization.',
          'Integrated a single-tap emergency SOS action that packages GPS coordinates into an automated SMS broadcast.',
          'Designed encrypted journal logs with biometric lock, guided breathwork routines, and local mood tracking charts.'
        ],
        architecture: ['Flutter 3.x Engine', 'Dart Async Streams', 'Hive AES Encrypted Storage', 'Firebase Auth & Cloud Store']
      },
      impact: {
        summary: 'Ensured 100% offline availability for crisis tools and reduced emergency contact dispatch to a single tap under 200ms cold app launch.',
        points: [
          'Guaranteed uninterrupted offline access to all emergency guides, journals, and local contacts.',
          'SOS broadcast activates in under 1 second with pre-formatted emergency dispatch text and live coordinates.',
          'Lightweight memory footprint under 60MB RAM enables smooth performance on entry-level smartphones.'
        ],
        metrics: ['100% offline crisis tool access', '<1s emergency SOS dispatch', '<60MB RAM footprint']
      }
    }
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
    metrics: 'Quantized edge inference',
    caseStudy: {
      problem: {
        summary: 'Conventional blanket herbicide application wastes up to 70% of chemicals, contaminates soils, and strains farm operational margins, yet commercial vision sprayers require costly industrial compute hardware beyond the reach of standard farms.',
        points: [
          'Indiscriminate pesticide spraying increases chemical costs and causes chemical runoff into groundwater.',
          'High model parameter sizes typically require heavy desktop GPUs unavailable on tractor battery rigs.',
          'Variable outdoor lighting and field dust create false positive misclassifications between weeds and crops.'
        ]
      },
      solution: {
        summary: 'Engineered an edge computer vision pipeline with custom-trained YOLOv8 models quantized to INT8 precision for real-time inference on low-power embedded accelerators.',
        points: [
          'Trained YOLOv8 architectures on annotated multispectral crop and weed imagery across multiple growth stages.',
          'Applied post-training INT8 quantization via TensorRT and ONNX Runtime to minimize model weight and maximize frame rates.',
          'Constructed an OpenCV pre-processing pipeline featuring adaptive contrast normalization to handle direct sunlight glare.'
        ],
        architecture: ['YOLOv8 Architecture', 'PyTorch Training Rig', 'INT8 Quantization Engine', 'OpenCV Hardware Pipeline']
      },
      impact: {
        summary: 'Achieved 42 frames per second real-time inference on low-power edge hardware with 91.4% mAP, cutting simulated herbicide usage by up to 65%.',
        points: [
          'Sustained 42 FPS throughput on edge accelerator modules without frame dropping.',
          'Attained 91.4% mean Average Precision (mAP@0.5) across varied outdoor crop canopy conditions.',
          'Enables micro-targeted precision solenoid spraying that reduces chemical volume by up to 65%.'
        ],
        metrics: ['42 FPS on edge hardware', '91.4% mAP@0.5 precision', 'Up to 65% chemical savings']
      }
    }
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
    metrics: 'Sub-second search',
    caseStudy: {
      problem: {
        summary: 'Production monitoring platforms charge steep pricing tiers that push small engineering teams and indie projects toward cumbersome multi-SSH terminal log chasing when microservices fail.',
        points: [
          'Scattered log outputs across multiple Docker containers prevent unified root-cause debugging.',
          'High memory and disk overhead of heavy enterprise observability suites overload small cloud instances.',
          'Delay between event generation and dashboard appearance hinders quick response to live downtime.'
        ]
      },
      solution: {
        summary: 'Constructed an open, self-hostable log ingestion and telemetry engine using lightweight Node.js event streams, indexed PostgreSQL partitions, and WebSocket broadcasts.',
        points: [
          'Built a high-throughput HTTP ingestion pipeline with non-blocking stream batching and schema-less payload ingestion.',
          'Configured partitioned relational tables with GIN indices to enable instant full-text log search across millions of entries.',
          'Designed a web terminal dashboard with real-time log tailing, regex search, and automated error-rate webhook alarms.'
        ],
        architecture: ['Node.js Event Stream', 'PostgreSQL GIN Indexed Partitions', 'WebSocket Broadcast Hub', 'React Virtualized Terminal']
      },
      impact: {
        summary: 'Achieved sub-150ms ingestion-to-screen broadcast latency and scalable ingestion exceeding 10,000 log events per minute on single-core setups.',
        points: [
          'Delivered end-to-end log delivery latency under 150 milliseconds to connected web clients.',
          'Benchmarked ingestion capacity exceeding 10,000 structured log lines per minute on a 1GB RAM virtual machine.',
          'Reduced developer triage time during distributed system failures by consolidating multi-container logs into one view.'
        ],
        metrics: ['<150ms ingestion latency', '10k+ logs/min throughput on 1GB RAM', 'Sub-second full-text querying']
      }
    }
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
    metrics: 'Interactive 3D WebGL',
    caseStudy: {
      problem: {
        summary: 'During annual religious pilgrimages (Wari), over a million devotees traverse tight temple sanctums and heritage corridors, producing extreme crowd density pinch points where route planning errors can turn fatal.',
        points: [
          'Static 2D city maps fail to capture elevation changes, stairwell narrows, and spatial queue constraints.',
          'Municipal planners had no accessible simulation tools to test barricade configurations before mass arrivals.',
          'Proprietary simulation packages required high-end workstations and dedicated licensed software.'
        ]
      },
      solution: {
        summary: 'Created a zero-install interactive 3D digital twin in Three.js and WebGL that calculates spatial pedestrian dynamics and bottleneck choke points directly in web browsers.',
        points: [
          'Modeled temple architecture, arterial approach corridors, and emergency gates to precise physical scale.',
          'Implemented agent-based pathfinding calculations using vector force fields to simulate crowd pressure at narrow gates.',
          'Added real-time controls allowing municipal officers to simulate barrier closures and inspect evacuation route clearance.'
        ],
        architecture: ['Three.js Scene Graph', 'WebGL Hardware Rendering', 'Agent Vector Dynamics', 'Client-side Spatial Buffers']
      },
      impact: {
        summary: 'Identified three critical bottleneck choke points in historic corridors and demonstrated fluid 60 FPS spatial navigation across desktop and mobile browsers.',
        points: [
          'Pinpointed three high-risk density zones in temple corridors where queue divergence prevents stampede hazards.',
          'Maintained stable 60 FPS performance on standard consumer mobile and laptop browsers through low-poly geometry buffers.',
          'Enabled municipal stakeholders to test and visualize detour routes without costly software licenses.'
        ],
        metrics: ['60 FPS browser-native WebGL', '3 structural choke points isolated', 'Zero plugin requirements']
      }
    }
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
    metrics: 'Air-gapped deployment',
    caseStudy: {
      problem: {
        summary: 'University practical coding examinations are vulnerable to unexpected internet outages, while external cloud testing services risk unauthorized academic communication and carry high student licensing costs.',
        points: [
          'Campus internet drops mid-exam force examinations to be scrapped and rescheduled.',
          'Cloud-hosted testing portals allow crafty proxy tunneling to external programming forums.',
          'Manual grading of hundreds of student coding assignments creates days of grading lag for professors.'
        ]
      },
      solution: {
        summary: 'Engineered a self-contained local network examination appliance in Java and Spring Boot that executes completely isolated from the public internet (air-gapped).',
        points: [
          'Constructed a sandboxed execution harness that compiles and runs student C++, Java, and Python submissions with CPU time limits.',
          'Implemented session recovery and local subnet IP binding to prevent proxy sharing and multiple logins.',
          'Designed automated test suite evaluation with cryptographically signed student submission receipts.'
        ],
        architecture: ['Java Spring Boot Core', 'Sandboxed Process Workers', 'Embedded SQLite Subnet DB', 'Kiosk Session State Machine']
      },
      impact: {
        summary: 'Protected examination integrity across campus lab batches and slashed post-exam grading turnaround from days to under 5 seconds per student.',
        points: [
          'Successfully powered multi-machine laboratory examinations with zero reliance on public internet connectivity.',
          'Instant automated test suites evaluate syntax, output correctness, and execution time within 5 seconds.',
          'Zero student session losses recorded during network switch restarts due to persistent state caching.'
        ],
        metrics: ['100% air-gapped security', '<5s automated grading turnaround', 'Zero exam data loss on network drops']
      }
    }
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
    metrics: 'Role-based access',
    caseStudy: {
      problem: {
        summary: 'Evaluating technical talent for campus hackathons and engineering cohorts is often fragmented across multiple disparate forms, making anti-cheat monitoring and consistent scoring difficult.',
        points: [
          'Unstandardized assessment templates produce subjective, inconsistent evaluation marks across evaluators.',
          'Evaluating untrusted user code on web servers poses major remote code execution security threats.',
          'Lack of candidate tracking makes it hard to review algorithmic problem-solving timelines.'
        ]
      },
      solution: {
        summary: 'Engineered an end-to-end technical evaluation platform utilizing FastAPI async services, Docker isolated runners, and structured scoring rubrics.',
        points: [
          'Implemented ephemeral Docker container workers that execute candidate code in strictly isolated sandbox jails.',
          'Built custom question authoring tools with hidden unit test definitions, runtime limits, and sample test cases.',
          'Developed a modern React candidate dashboard with live code editors, split-screen test outputs, and tab switch logging.'
        ],
        architecture: ['React Single Page App', 'FastAPI Asynchronous Gateway', 'Docker Isolated Evaluation Pool', 'PostgreSQL Relational DB']
      },
      impact: {
        summary: 'Delivered safe, parallel candidate code execution with sub-2 second automated scoring turnarounds across multi-language test suites.',
        points: [
          'Containerized runner architecture safely executes untrusted submissions with 0% host system exposure.',
          'Automated evaluation returns comprehensive test matrix and memory metrics in under 2 seconds.',
          'Adopted for campus coding mock rounds to evaluate candidate problem-solving skills efficiently.'
        ],
        metrics: ['Safe isolated Docker execution', '<2s test suite evaluation', 'Zero host vulnerability exposure']
      }
    }
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
    previewUrl: './certificates/gdgc-alphabyte-3-winner.webp',
    category: 'competitions'
  },
  {
    id: 'ieee-smart-cities-pitch',
    title: '3rd Prize - IEEE InvEnt Pitch Competition 2026',
    issuer: 'IEEE Pune Section & SIG Smart City (with IEEE R10 ACEI)',
    date: 'Aug 2026',
    type: 'Competition Podium',
    details: 'Awarded 3rd prize for outstanding performance in the InvEnt Pitch Competition with Team Hustlers.',
    previewUrl: './certificates/ieee-smart-cities-invent-pitch-3rd-prize.webp',
    category: 'competitions'
  },
  {
    id: 'ieee-r10-pitch-position',
    title: '3rd Position - Inv.Ent Pitch Competition 2025',
    issuer: 'IEEE Region 10 ACEI & IEEE Pune Section',
    date: '2025',
    type: 'Competition Podium',
    details: 'Secured 3rd position in the regional entrepreneurship and innovation pitch competition.',
    previewUrl: './certificates/ieee-r10-invent-pitch-3rd-position.webp',
    category: 'competitions'
  },
  {
    id: 'aws-ai-bharat',
    title: 'AI for Bharat Hackathon - Prototype Execution',
    issuer: 'Amazon Web Services (AWS) & Hack2skill',
    date: 'March 2026',
    type: 'National Hackathon',
    details: 'Successfully built and submitted a qualified prototype demonstrating generative AI tools on AWS (ID: 2026H2S04AIFB-P03086).',
    previewUrl: './certificates/aws-hack2skill-ai-for-bharat.webp',
    category: 'competitions'
  },
  {
    id: 'hacktopia-finale',
    title: 'Hacktopia 2025 - Grand Finale 24-Hour Hackathon',
    issuer: 'PCCOE ACM Student Chapter & Unstop',
    date: '2025',
    type: 'Hackathon Finalist',
    details: 'Competed in the 24-hour offline hackathon grand finale as Team Hustlers.',
    previewUrl: './certificates/hacktopia-2025-grand-finale.webp',
    category: 'competitions'
  },
  {
    id: 'mlsc-bluebit',
    title: 'Bluebit Hackathon 2025',
    issuer: 'Microsoft Learn Student Chapter (MLSC), PCCOE',
    date: '2025',
    type: 'Hackathon',
    details: 'Active participation in the 2025 edition of the Bluebit Hackathon.',
    previewUrl: './certificates/mlsc-bluebit-hackathon-2025.webp',
    category: 'competitions'
  },
  {
    id: 'nutan-ideathon',
    title: 'IDEATHON Competition 2025',
    issuer: 'Nutan Incubation Centre & NMIET Pune',
    date: '2025',
    type: 'Innovation Pitch',
    details: 'Certificate of appreciation for active participation in the campus IDEATHON competition.',
    previewUrl: './certificates/nutan-ideathon-2025.webp',
    category: 'competitions'
  },
  {
    id: 'my-job-grow-internship',
    title: 'Artificial Intelligence Internship Completion',
    issuer: 'My Job Grow (in collab with IIT Bombay Techfest)',
    date: 'April 2025',
    type: 'Internship Completion',
    details: 'Issued for outstanding achievement in AI and successful execution of advanced project milestones (ID: MJG0824AI809).',
    previewUrl: './certificates/my-job-grow-ai-internship.webp',
    category: 'courses'
  },
  {
    id: 'my-job-grow-declaration',
    title: 'AI Hybrid Internship Completion Declaration',
    issuer: 'My Job Grow',
    date: 'April 2025',
    type: 'Internship Recommendation',
    details: 'Official letter of completion covering cloud-based AI model development, data processing, and distributed AI systems.',
    previewUrl: './certificates/my-job-grow-ai-internship-declaration.webp',
    category: 'courses'
  },
  {
    id: 'my-job-grow-upskilling',
    title: 'Artificial Intelligence Upskilling Course',
    issuer: 'My Job Grow',
    date: 'March 2025',
    type: 'AI Course',
    details: '15 hours of structured curriculum covering applied AI, neural representations, and ML model workflows.',
    previewUrl: './certificates/my-job-grow-ai-upskilling-course.webp',
    category: 'courses'
  },
  {
    id: 'udemy-fullstack',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy (Dr. Angela Yu)',
    date: 'Feb 2025',
    type: 'Professional Bootcamp',
    details: '61.5 total hours covering React, Node.js, Express, PostgreSQL, MongoDB, REST APIs, and web security.',
    previewUrl: './certificates/udemy-fullstack-web-development-bootcamp.webp',
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
    previewUrl: './certificates/udemy-java-masterclass-2025.webp',
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
    previewUrl: './certificates/gdgc-web-development-workshop.webp',
    category: 'workshops'
  },
  {
    id: 'gdgc-flutter',
    title: 'Flutter Workshop 2025',
    issuer: 'Google Developer Groups On Campus, PCCOE',
    date: '2025',
    type: 'Technical Workshop',
    details: 'Certificate of completion for mobile application development using Flutter and Dart.',
    previewUrl: './certificates/gdgc-flutter-workshop-2025.webp',
    category: 'workshops'
  },
  {
    id: 'mlsc-techroom',
    title: 'AI / Data Science TechRoom Session',
    issuer: 'Microsoft Learn Student Chapter (MLSC), PCCOE',
    date: '2025',
    type: 'Technical Seminar',
    details: 'Certificate of appreciation for active participation in the AI/DS TechRoom technical session.',
    previewUrl: './certificates/mlsc-ai-ds-techroom-appreciation.webp',
    category: 'workshops'
  },
  {
    id: 'pccoe-spectrum',
    title: 'Volunteer - Blind Coding Team | SPECTRUM \'25',
    issuer: 'PCCOE Department of Applied Sciences and Humanities',
    date: 'March 2025',
    type: 'Technical Volunteering',
    details: 'Certificate of appreciation for contributing as a volunteer in the Blind Coding technical team.',
    previewUrl: './certificates/pccoe-spectrum-blind-coding-volunteer.webp',
    category: 'workshops'
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'pccoe-btech',
    institution: 'Pimpri Chinchwad College of Engineering (PCCOE)',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    period: '2024 - 2028',
    location: 'Pune, Maharashtra, India',
    badge: 'Undergraduate Program',
    logoUrl: './education/pccoe-pune-logo.webp',
    details: 'Pursuing undergraduate engineering with core emphasis on distributed systems, data structures, cloud computing, and embedded IoT architectures.',
    subjects: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management', 'Object-Oriented Programming', 'IoT & Embedded Hardware']
  },
  {
    id: 'matoshri-hsc',
    institution: 'Matoshri Junior College',
    degree: 'Higher Secondary Certificate (HSC - 12th)',
    field: 'Science Stream',
    period: '2022 - 2024',
    location: 'Eklahare, Nashik, Maharashtra',
    score: '86.83%',
    scoreLabel: 'Score: 521 / 600 Marks',
    badge: 'HSC Science',
    details: 'Completed Higher Secondary Certificate in Science under Maharashtra State Board (Nashik Divisional Board) with First Class Distinction.',
    previewUrl: './education/om-bharambe-hsc-12th-marksheet.webp',
    subjects: [
      'Information Technology (91/100)',
      'Mathematics & Statistics (91/100)',
      'Geography (89/100)',
      'Physics (87/100)',
      'Chemistry (84/100)',
      'English (79/100)'
    ]
  },
  {
    id: 'st-lawrence-ssc',
    institution: 'St. Lawrence High School and Junior College',
    degree: 'Secondary School Certificate (SSC - 10th)',
    field: 'General & Foundation Studies',
    period: 'Passed March 2022',
    location: 'Nashik, Maharashtra, India',
    score: '90.80%',
    scoreLabel: 'Score: 454 / 500 Marks',
    badge: 'SSC Board Exam',
    logoUrl: './education/st-lawrence-school-nashik.webp',
    details: 'Completed Secondary School Certificate under Maharashtra State Board (Nashik Divisional Board) with First Class Distinction.',
    previewUrl: './education/om-bharambe-ssc-10th-marksheet.webp',
    subjects: [
      'Social Sciences (95/100)',
      'English (92/100)',
      'Mathematics (91/100)',
      'Hindi (87/100)',
      'Science & Technology (86/100)',
      'Marathi (76/100)'
    ]
  }
];


