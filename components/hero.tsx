"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 font-mono tracking-tight">
          AHNY.DEV
        </h1>
        <div className="h-1 w-32 bg-[#00ff88] mx-auto mb-8"></div>

        <p className="text-lg sm:text-xl text-[#00ff88] font-mono mb-6 tracking-wide">
          {">"} SOFTWARE DEVELOPER
        </p>

        <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6 sm:p-8 mb-8 max-w-2xl mx-auto">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Hi, my name is{" "}
            <span className="bg-white text-black px-2 py-1 rounded font-semibold">
              Tiffany Ugwunebo
            </span>{" "}
            I am a software developer with experience in backend development,
            frontend development, machine learning and technical writing
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/projects"
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            VIEW PROJECTS
          </Link>
          <Link
            href="/experience"
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            VIEW EXPERIENCE
          </Link>
          <Link
            href="/TIFFANY UGWUNEBO _ BACKEND DEVELOPER .pdf"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            DOWNLOAD CV
          </Link>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="https://github.com/Ahny678"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-[#333333] rounded-full flex items-center justify-center text-white hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tiffany-ugwunebo-1a59372a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-[#333333] rounded-full flex items-center justify-center text-white hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:nebotiffany@gmail.com"
            className="w-12 h-12 border-2 border-[#333333] rounded-full flex items-center justify-center text-white hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={24} className="mx-auto text-[#00ff88]" />
        </div>
      </div>
    </section>
  );
}
