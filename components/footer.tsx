import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#333333] bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-[#00ff88] flex items-center justify-center rounded">
                <span className="text-[#00ff88] font-mono text-sm font-bold">
                  &lt;&gt;
                </span>
              </div>
              <span className="text-white font-bold">AHNY.DEV</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to building projects that engage and inspire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 font-mono text-sm">
              QUICK LINKS
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "HOME", href: "/" },
                { label: "ABOUT", href: "/about" },
                { label: "EXPERIENCE", href: "/experience" },
                { label: "PROJECTS", href: "/projects" },
                { label: "CONTACT", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#00ff88] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4 font-mono text-sm">
              CONNECT
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Ahny678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#333333] rounded-full flex items-center justify-center text-gray-400 hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/tiffany-ugwunebo-1a59372a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#333333] rounded-full flex items-center justify-center text-gray-400 hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:nebotiffany@gmail.com"
                className="w-10 h-10 border border-[#333333] rounded-full flex items-center justify-center text-gray-400 hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-8 text-center">
          <p className="text-gray-500 text-sm font-mono">
            © {currentYear} AHNY.DEV • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
