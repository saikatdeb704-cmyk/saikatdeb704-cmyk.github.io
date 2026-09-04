import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              {SITE_CONFIG.name.toUpperCase()}
            </h3>
            <p className="text-sm text-gray-500">
              BTech CSE (AI/ML) • Developer • AI Enthusiast
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-mono tracking-wider">
            © 2026 Saikat Deb Sharma. Built with curiosity & code.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500/60 rounded-full animate-pulse" />
            <span className="text-xs text-gray-600 font-mono">
              Available for collaboration
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
