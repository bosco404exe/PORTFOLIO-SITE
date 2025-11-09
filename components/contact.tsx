"use client";

import type React from "react";

import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl sm:text-6xl font-bold text-white text-center mb-4 font-mono">
          CONTACT
        </h2>
        <div className="h-1 w-32 bg-[#00ff88] mx-auto mb-12"></div>

        <p className="text-center text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-16">
          Got an idea in mind? Collaborate and build something remarkable.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border border-[#333333] rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              SEND A MESSAGE
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-xs font-bold mb-2 block font-mono">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#333333] text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white text-xs font-bold mb-2 block font-mono">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#333333] text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-xs font-bold mb-2 block font-mono">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#333333] text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                />
              </div>

              <div>
                <label className="text-white text-xs font-bold mb-2 block font-mono">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project ..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-[#1a1a1a] border border-[#333333] text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-6"
              >
                <Send size={16} />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                GET IN TOUCH
              </h3>

              <div className="space-y-4 mb-8">
                <div className="border border-[#333333] rounded-lg p-4 hover:border-[#00ff88] transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={20} className="text-[#00ff88]" />
                    <label className="text-white text-xs font-bold font-mono">
                      EMAIL
                    </label>
                  </div>
                  <p className="text-gray-300 ml-8 text-sm">
                    nebotiffany@gmail.com
                  </p>
                </div>

                <div className="border border-[#333333] rounded-lg p-4 hover:border-[#00ff88] transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={20} className="text-[#00ff88]" />
                    <label className="text-white text-xs font-bold font-mono">
                      PHONE
                    </label>
                  </div>
                  <p className="text-gray-300 ml-8 text-sm">
                    +234 (0) 814 682 9093
                  </p>
                </div>

                <div className="border border-[#333333] rounded-lg p-4 hover:border-[#00ff88] transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} className="text-[#00ff88]" />
                    <label className="text-white text-xs font-bold font-mono">
                      LOCATION
                    </label>
                  </div>
                  <p className="text-gray-300 ml-8 text-sm">
                    Calabar, Cross River
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4 font-mono">
                SOCIAL LINKS
              </h3>
              <div className="flex gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
