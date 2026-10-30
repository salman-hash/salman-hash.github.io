// Single source for personal facts used across pages.
// Source of truth: public/cv.pdf — update both together.

export const site = {
  name: 'Salman Sadiq',
  title: 'Salman Sadiq — Robotics & Embedded Systems',
  description:
    'Salman Sadiq — M.Sc. Autonomous Systems student at H-BRS. Robotics, embedded systems, ROS2 and vision-language models for assistive and autonomous machines.',
  tagline: 'Robotics & embedded engineer building machines that sense, reason and move.',
  location: 'Bonn, DE',
  availability: 'Open to working-student & thesis roles',
  email: 'salman_sadiq@outlook.com',
  socials: {
    github: 'https://github.com/salman-hash',
    linkedin: 'https://www.linkedin.com/in/salman-sadiq',
  },
  cv: '/cv.pdf',
};

export const nav = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/research', label: 'research' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
];

export const education = [
  {
    degree: 'M.Sc. Autonomous Systems',
    school: 'Hochschule Bonn-Rhein-Sieg (H-BRS), Germany',
    period: 'Sep 2026 – Present',
    notes: [],
  },
  {
    degree: 'B.E. Mechatronics Engineering',
    school: 'National University of Sciences and Technology (NUST), Pakistan',
    period: 'Nov 2021 – Oct 2025',
    notes: ["Rector's Gold Medal — Best Final Year Project", 'CGPA 3.32 / 4.00'],
  },
];

export const experience = [
  {
    role: 'Senior Technical Support Engineer',
    org: 'Motive Technologies, Inc.',
    place: 'Islamabad, PK',
    period: 'Jul 2025 – Aug 2026',
    points: [
      'Resolved ~15 tickets daily across software, API, firmware and backend issues in connected telematics and AI systems using structured root-cause analysis.',
      'Remotely diagnosed customer telematics devices and worked directly with customers to resolve issues.',
      'Reproduced failures and validated fixes together with engineering and product teams.',
    ],
  },
  {
    role: 'Embedded Design Engineer (Industrial Automation)',
    org: 'Cowlar Inc. (YC W17)',
    place: 'Islamabad, PK',
    period: 'Jul 2024 – Jun 2025',
    points: [
      'Integrated industrial automation systems with client infrastructure — 35% fewer manual processes, 20% better operational efficiency.',
      'Built hardware/software prototypes in C/C++ and Python, including custom device drivers, cutting iteration time by 30%.',
      'Debugged deployed automation systems over SSH on Linux at client sites.',
    ],
  },
  {
    role: 'Embedded Systems Intern',
    org: 'RADWI Electronics',
    place: 'Islamabad, PK',
    period: 'Aug 2023 – Sep 2023',
    points: [
      'Developed an ESP32 smart intercom with audio and camera streaming over I²C and MQTT.',
      'Wrote C/C++ firmware for device control, sensor acquisition and IoT connectivity.',
    ],
  },
];

export const skills = [
  { group: '/lang', items: ['C', 'C++', 'Python', 'Bash', 'SQL'] },
  { group: '/robotics', items: ['ROS2', 'Gazebo', 'OpenCV', 'Computer Vision', 'VLMs / LLMs', 'Sensor Integration'] },
  { group: '/embedded', items: ['ESP32', 'Raspberry Pi', 'RTOS', 'CAN', 'MQTT', 'UART', 'I²C'] },
  { group: '/tools', items: ['Linux', 'Git', 'Docker', 'Azure', 'AWS', 'KiCad'] },
];

export const leadership = [
  {
    title: 'Autonomous Vehicles Team Lead — NUST Automotive Group',
    detail: 'Led a 50-member Formula Student autonomous team across perception, planning, control and integration.',
  },
  {
    title: 'General Secretary — SPCS&M, NUST CEME (May 2024 – May 2025)',
    detail: 'Led six student clubs serving 500+ students; received the Medal of Excellence for institutional leadership.',
  },
];

export const awards = [
  "Rector's Gold Medal — Best Final Year Project, NUST",
  '2nd Runner Up, IoT & Digital Systems — COMPPEC',
  'Millennium Fellowship — Class of 2023',
];

export const languages = ['English (fluent)', 'Urdu (native)', 'Punjabi (native)', 'German (A1)'];
