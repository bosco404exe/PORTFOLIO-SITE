"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Applai Grants – Backend Engineer",
      duration: "October 2024 – Present",
      location: "Lagos, Nigeria",
      description: [
        "Collaborated with cross-functional teams of UI/UX, frontend, and backend engineers to maintain and scale an AI-powered grant application platform for startups and SMEs.",
        "Improved backend performance, security, and API integrations to enhance automation and user experience.",
        "Contributed to the development and testing of the platform’s upcoming V2 release, focusing on scalability and new AI-driven features.",
        "Participated in agile sprints, code reviews, and CI/CD pipelines to ensure efficient, high-quality releases.",
      ],
      image: "/applai.png",
    },
    {
      id: 2,
      title: "RiseVest – Backend Trainee",
      duration: "January 2024 – Present",
      location: "Lagos, Nigeria",
      description: [
        "Created and maintained detailed API documentation with Swagger, improving collaboration and integration efficiency across teams.",
        "Applied DevOps practices using Docker, Prometheus, and Grafana for system monitoring, performance insights, and deployment automation.",
        "Leading backend development of a community platform launching early 2026, enabling diaspora and local members to contribute to village initiatives.",
        "Published several cloud-based solutions, including an electronic diary application, a company file drive system, and multiple APIs for blog platforms.",
      ],
      image: "/rise.png",
    },
    {
      id: 3,
      title: "Freelance – ACIU (Community Platform)",
      duration: "July 2025 – January 2026 (ongoing)",
      location: "Remote / RiseVest Project",
      description: [
        "Backend Developer in a team of Product Manager, 2 frontend developers, UI/UX designer, and another backend developer.",
        "Implemented Stripe payments, mass email sending with queue workers (Resend), and admin dashboards for dues, donations, projects, and events.",
        "Designed scalable backend architecture for national and branch admins with members management.",
      ],
      image: "/aciu1.png",
    },
    {
      id: 4,
      title: "HubbleMind – Machine Learning Engineer (Intern)",
      duration: "December 2024",
      location: "Bangalore, India",
      description: [
        "Designed and implemented a Coupon Recommendation System using Random Forest, Logistic Regression, and Decision Trees.",
        "Delivered detailed weekly technical reports highlighting project progress, code development, and optimization efforts.",
        "Enhanced model performance by 20% through hyperparameter tuning and iterative refinement.",
      ],
      image: "/hubblemind.png",
    },
    {
      id: 5,
      title: "EISL Lab – Hardware Engineer (Intern)",
      duration: "June 2024 – November 2024",
      location: "Niger, Nigeria",
      description: [
        "Developed a flash flood classification model using a custom CNN for real-time flood detection.",
        "Collaborated with ML and QA engineers to prototype AI-integrated embedded systems.",
        "Enhanced legacy embedded system projects from past five years, achieving 20% improvement in success rate.",
      ],
      image: "/EISL.jpg",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Design Thinking – Certificate of Completion",
      issuer: "HP LIFE Online Course",
      date: "May 31, 2025",
      image: "/DT.png",
    },
    {
      id: 2,
      title: "Effective Communication – Certificate of Completion",
      issuer: "HP LIFE Online Course",
      date: "June 2, 2025",
      image: "/EC.png",
    },
    {
      id: 3,
      title: "Certificate of Internship – Machine Learning Intern",
      issuer: "HubbleMind Labs Private Limited",
      date: "January 9, 2025",
      image: "/hubbleC.png",
    },
    {
      id: 4,
      title: "Introduction to the Internet of Things and Embedded Systems",
      issuer: "University of California, Irvine – Coursera",
      date: "December 27, 2023",
      image: "/cousera.png",
    },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-black">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4 font-mono">
          EXPERIENCE & CERTIFICATIONS
        </h2>

        <div className="h-1 w-32 bg-[#00ff88] mx-auto mb-12"></div>

        {/* Experience Section */}
        <h3 className="text-3xl font-bold text-white mb-6 font-mono">
          Work Experience
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border border-[#333333] rounded-2xl overflow-hidden hover:border-[#00ff88] transition-colors flex flex-col bg-[#1a1a1a]"
            >
              <div className="relative h-64">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-white mb-2 font-mono">
                  {exp.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 font-mono">
                  {exp.location} | {exp.duration}
                </p>
                <ul className="flex-1 space-y-3 text-gray-300 text-sm">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 text-[#00ff88] flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <h3 className="text-3xl font-bold text-white mb-6 font-mono">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-[#333333] rounded-2xl overflow-hidden hover:border-[#00ff88] transition-colors flex flex-col items-center text-center p-4 bg-[#1a1a1a]"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-1 font-mono">
                {cert.title}
              </h4>
              <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
