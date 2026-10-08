export const navigation = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

export const skillGroups = [
  { title: "Languages", skills: ["JavaScript ES6+", "HTML5", "CSS3", "Python (Basic)"] },
  { title: "Frontend", skills: ["React.js", "Vite", "Responsive Web Design"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "RESTful APIs"] },
  { title: "Database", skills: ["MongoDB", "MongoDB Atlas", "Mongoose"] },
  { title: "Developer Tools", skills: ["Git", "GitHub", "Visual Studio Code"] },
  { title: "Core Concepts", skills: ["CRUD Operations", "HTTP", "API Integration", "Component-Based Development"] },
];

export const projects = [
  {
    name: "138 Love Yourself", year: "2026", role: "Full-stack Developer", featured: true,
    github: "https://github.com/quyenhoang0712/138Loveyourself", live: "https://138loveyourself.vn",
    stack: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "Vercel"],
    description: "A full-stack interactive web platform offering personalized experiences, community interactions, user authentication, and engagement analytics.",
    features: ["Authentication and session management", "Email verification and OAuth integration", "User profile management", "Community content and interactions", "RESTful APIs", "Engagement analytics", "Admin access controls", "API rate limiting", "Custom domain and Vercel deployment"],
  },
  {
    name: "Online Tutoring Center", year: "2026", role: "Full-stack Developer",
    github: "https://github.com/quyenhoang0712/finalproject",
    stack: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Swagger"],
    description: "A MERN-stack education management platform designed to support teaching operations, scheduling, student administration, and learning activities.",
    features: ["Role-specific dashboards", "Course and class management", "Student enrollment", "Assignments and attendance", "Learning materials", "JWT authentication", "Role-based authorization", "Swagger API documentation"],
  },
  {
    name: "TN Ideal", year: "2026", role: "Full-stack Developer",
    github: "https://github.com/quyenhoang0712/TNIDEAL",
    stack: ["React 19", "Vite", "Node.js", "Express.js 5", "MongoDB", "Mongoose"],
    description: "A full-stack project management application for administrative operations, project status tracking, and contractor management.",
    features: ["Project management dashboards", "Project creation and tracking", "RESTful backend APIs", "MongoDB data management", "Role-based access control", "Admin and contractor operations", "Data validation"],
  },
];

export const contact = {
  name: "Hoang Quang Quyen", location: "Ho Chi Minh City, Vietnam", phone: "0373291626",
  email: "hqq.7.12.03@gmail.com", github: "https://github.com/quyenhoang0712",
};
