"use client";

import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ink & Keys",
      description:
        "AI-powered writing platform with OCR, AI image generation, and smart document management. Built with React, NestJS, and PostgreSQL for writers and content creators.",
      video: "INKKEYS.mp4",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Tesseract.js",
        "Hugging Face API",
        "Cloudinary",
        "Docker",
      ],
      buttons: [
        {
          label: "CODE",
          type: "code",
          href: "https://github.com/Ahny678/INK-AND-KEYS",
        },
        {
          label: "PREVIEW",
          type: "preview",
          href: "https://ink-and-keys.vercel.app",
        },
      ],
    },
    {
      id: 2,
      title: "IntelliScout",
      description:
        "Intelligent resume parsing and job matching backend powered by GPT-4.1, BullMQ, and RapidAPI. Automates resume analysis, scoring, and notifications for HR workflows.",
      image: "/Intelliscout.png",

      technologies: [
        "NestJS",
        "TypeScript",
        "BullMQ",
        "TypeORM",
        "PostgreSQL",
        "Azure OpenAI",
        "RapidAPI",
        "JWT",
        "Swagger",
      ],
      buttons: [
        {
          label: "CODE",
          type: "code",
          href: "https://github.com/Ahny678/IntelliScout",
        },
        // {
        //   label: "PREVIEW",
        //   type: "preview",
        //   href: "https://e-chronicles.onrender.com/api",
        // },
      ],
    },
    {
      id: 3,
      title: "E-Chronicles",
      description:
        "Media-rich personal diary and matchmaking app built with NestJS, GraphQL, and Redis. Users can record text, audio, video, and find connections via personality scoring.",
      video: "/E-chronicles.mp4",
      technologies: [
        "NestJS",
        "GraphQL",
        "Redis",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
        "Nodemailer",
        "WebSockets",
        "JWT",
      ],
      buttons: [
        {
          label: "CODE",
          type: "code",
          href: "https://github.com/Ahny678/E-Chronicles",
        },
        {
          label: "PREVIEW",
          type: "preview",
          href: "https://e-chronicles.onrender.com/api",
        },
      ],
    },
    {
      id: 4,
      title: "Gesture Controller System",
      description:
        "Python-based computer vision system that controls volume, brightness, screenshots, and voice recording via hand gestures using MediaPipe and OpenCV.",
      // image: "/gesture-controller-system.jpg",
      video: "GESTURE CONTROLLER SYSTEM.mp4",
      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "PyCaw",
        "PyAudio",
        "Vosk",
        "NumPy",
        "PyAutoGUI",
      ],
      buttons: [
        {
          label: "CODE",
          type: "code",
          href: "https://github.com/Ahny678/GESTURE-CONTROLLER-SYSTEM",
        },
      ],
    },
    {
      id: 5,
      title: "PR’s Status Board",
      description:
        "A React + Vite dashboard that visualizes GitHub Pull Requests for teams — showing open and closed PRs with reviewer data, actions, and a heatmap of daily activity.",
      video: "/psb1.mp4",
      technologies: [
        "React",
        "Vite",
        "CSS Modules",
        "GitHub REST API",
        "LocalStorage",
        "react-calendar-heatmap",
      ],
      buttons: [
        {
          label: "CODE",
          type: "code",
          href: "https://github.com/chingu-voyages/V57-tier1-team-03",
        },
        {
          label: "PREVIEW",
          type: "preview",
          href: "https://pull-requests-data-tracker.netlify.app/",
        },
      ],
    },
    {
      id: 6,
      title: "Public Safety Wiki",
      description:
        "A media-rich fan wiki for the anime Chainsaw Man, featuring detailed profiles of Public Safety Division members, devils, and entities. Built with React and Vite, it showcases interactive cards, responsive grids, flexbox layouts, and hover effects to provide an immersive browsing experience.",
      video: "psw.mp4",
      technologies: [
        "React",
        "Vite",
        "CSS Grid",
        "Flexbox",
        "React Router DOM",
        "ESLint",
      ],
      buttons: [
        {
          label: "CODE",
          type: "code",
          href: "https://github.com/Ahny678/PUBLIC_SAFETY_WIKI",
        },
        {
          label: "PREVIEW",
          type: "preview",
          href: "https://public-safety-wiki.vercel.app/",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl sm:text-6xl font-bold text-white text-center mb-4 font-mono">
          PROJECTS
        </h2>
        <div className="h-1 w-32 bg-[#00ff88] mx-auto mb-12"></div>

        <p className="text-center text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-16">
          This gallery highlights a curated selection of projects that reflect
          the breadth and depth of my technical experience. Each project
          demonstrates my capabilities across various domains, including backend
          development, frontend development, machine learning, and computer
          vision. These works not only showcase my versatility as a developer
          but also my commitment to building meaningful, well-engineered
          solutions across diverse areas of technology
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-[#333333] rounded-2xl overflow-hidden hover:border-[#00ff88] transition-colors flex flex-col"
            >
              <div className="relative h-64 bg-[#1a1a1a]">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={project.image || "/placeholder.svg"} // optional poster
                  />
                ) : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1a1a1a] text-white text-xs font-mono border border-[#333333] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.buttons.map((button) => (
                    <a
                      key={button.label}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      {button.type === "code" ? (
                        <Code2 size={16} />
                      ) : (
                        <ExternalLink size={16} />
                      )}
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
