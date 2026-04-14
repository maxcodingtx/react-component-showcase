const navLinks = [
  { label: "About", href: "#" },
  { label: "Sponsors", href: "#" },
  { label: "Information", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  {
    href: "#",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.733-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand */}
          <div>
            <p className="bg-gradient-to-br from-white to-cyan-400 bg-clip-text text-2xl font-black tracking-tight text-transparent">
              TECH‑WORLD
            </p>
            <p className="text-sm text-gray-500">
              March 7–9, {new Date().getFullYear()} · San Francisco
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-500 transition-colors hover:text-cyan-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-600 transition-colors hover:text-cyan-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Tech-World Conference. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
