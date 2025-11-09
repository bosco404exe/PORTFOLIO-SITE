import { Code2, Server, Smartphone, Globe, PenTool } from "lucide-react";

export const skills = [
  {
    icon: Server,
    title: "BACKEND",
    technologies:
      "NestJS, Express, Hono, Bun, NPM, ORMs, DBMS, JWT, OAuth, System Design",
    description:
      "Building scalable server-side applications, APIs, and authentication systems",
  },
  {
    icon: Code2,
    title: "API DOCUMENTATION",
    technologies: "Swagger, Apidog, Postman",
    description:
      "Designing, testing, and documenting APIs for developers and clients",
  },
  {
    icon: Smartphone,
    title: "FRONTEND",
    technologies: "React, CSS, Responsive Design, Vercel",
    description:
      "Developing interactive and responsive user interfaces for web applications",
  },
  {
    icon: Globe,
    title: "DEVOPS",
    technologies: "GitHub Actions, CI/CD, Prometheus, Grafana, Render",
    description:
      "Automating deployments, monitoring, and managing cloud infrastructure",
  },
  {
    icon: Code2,
    title: "AI & ML",
    technologies:
      "Neural Networks, Computer Vision, Random Forest, Logistic Regression, TinyML, AI Agents (Claude, Cursor, Kiro)",
    description:
      "Implementing AI models, machine learning pipelines, and intelligent agents",
  },
  {
    icon: PenTool,
    title: "TECHNICAL & CREATIVE WRITING",
    technologies: "Hasnode, Instagram, Markdown, Storytelling",
    description: (
      <>
        Writing both technical and creative content — from developer-focused
        documentation and tutorials to expressive storytelling and reflections.
        <div className="flex flex-wrap items-center mt-2">
          <a
            href="https://restwithgres.hashnode.dev/how-to-build-a-rest-api-using-expressjs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff88] underline hover:text-white transition-colors"
          >
            Technical Writing ↗
          </a>
          <span className="mx-3 text-gray-500">|</span>
          <a
            href="https://www.instagram.com/the_flavoured_pen?igsh=MXZ2dmY5Mzlya2g4NA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff88] underline hover:text-white transition-colors"
          >
            Creative Writing ↗
          </a>
        </div>
      </>
    ),
  },
];

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl sm:text-6xl font-bold text-white text-center mb-4 font-mono">
          ABOUT
        </h2>
        <div className="h-1 w-32 bg-[#00ff88] mx-auto mb-12"></div>

        <p className="text-center text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          I'm a software developer with a strong drive to take on new challenges
          and continuously expand my knowledge. My passion for learning has led
          me to explore and gain hands-on experience across multiple domains
          within the tech industry — including web development, artificial
          intelligence, technical and creative writing. This diverse background
          has equipped me with a well-rounded skill set and a deep appreciation
          for solving problems across the full stack. I bring curiosity,
          dedication, and versatility to every project I engage with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="border border-[#333333] rounded-2xl p-6 hover:border-[#00ff88] transition-colors group"
              >
                <Icon
                  size={32}
                  className="text-[#00ff88] mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-bold text-white mb-2 font-mono">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {skill.technologies}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white text-black rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-[#00ff88] font-mono text-sm font-bold mb-2">
            {">"} CURRENT STATUS:
          </p>
          <p className="text-[#00ff88] font-bold text-lg mb-2">
            AVAILABLE FOR PROJECTS
          </p>
          <p className="text-gray-700 text-sm">
            Ready to collaborate on your next big idea
          </p>
        </div>
      </div>
    </section>
  );
}
