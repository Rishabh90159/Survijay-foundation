import type { Metadata } from "next";
import { foundationConfig, navigationItems } from "./foundationData";
import "./globals.css";

const whatsappMessage =
  "Hello, I would like to know more about Survijay Foundation and its work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://survijay-foundation.vercel.app"),
  title: "Survijay Foundation | Social Welfare Organisation in Rampur",
  description:
    "Survijay Foundation is a social welfare organisation based in Rampur, Uttar Pradesh, focused on community welfare and responsible social initiatives.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Survijay Foundation",
    description:
      "Working toward stronger and more supported communities in Rampur, Uttar Pradesh.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Survijay Foundation",
    description:
      "Working toward stronger and more supported communities in Rampur, Uttar Pradesh.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="top-info-bar">
            <div>
              <p>Working for Education, Community Welfare & Social Support</p>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.5A7.5 7.5 0 0 0 4.5 10c0 5.6 7.5 11.5 7.5 11.5S19.5 15.6 19.5 10A7.5 7.5 0 0 0 12 2.5Zm0 10.3A2.8 2.8 0 1 1 12 7.2a2.8 2.8 0 0 1 0 5.6Z" />
                </svg>
                {foundationConfig.location}
              </span>
            </div>
          </div>
          <nav className="main-navbar">
            <a className="brand" href="/" aria-label="Survijay Foundation home">
              <span>SV</span>
              <strong>
                {foundationConfig.name}
                <small>Together for Stronger Communities</small>
              </strong>
            </a>
            <div className="hidden items-center gap-4 lg:flex">
              {navigationItems.map(([label, href]) => (
                <a
                  className={href === "/" ? "nav-link nav-link-active" : "nav-link"}
                  href={href}
                  key={href}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="nav-actions">
              <a className="header-cta desktop-cta" href="/get-involved">
                Get Involved
              </a>
              <details className="mobile-menu">
                <summary aria-label="Open menu">
                  <span />
                  <span />
                  <span />
                </summary>
                <div className="mobile-menu-panel" aria-label="Mobile pages">
                  {navigationItems.map(([label, href]) => (
                    <a href={href} key={href}>
                      {label}
                    </a>
                  ))}
                  <a href="/get-involved">Get Involved</a>
                </div>
              </details>
            </div>
          </nav>
        </header>
        {children}
        {(foundationConfig.whatsapp || foundationConfig.phone) && (
          <div className="floating-contact" aria-label="Quick contact">
            {foundationConfig.whatsapp && (
              <a
                className="floating-contact-button floating-contact-whatsapp"
                href={`https://wa.me/${foundationConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Survijay Foundation on WhatsApp"
              >
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16.04 4.02A11.9 11.9 0 0 0 5.9 22.2L4.3 28l5.96-1.56a11.86 11.86 0 0 0 5.78 1.48h.01A11.95 11.95 0 0 0 16.04 4.02Zm.01 21.88h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.22-3.54.93.94-3.45-.24-.36A9.91 9.91 0 1 1 16.05 25.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
              </a>
            )}
            {foundationConfig.phone && (
              <a
                className="floating-contact-button floating-contact-call"
                href={`tel:${foundationConfig.phone}`}
                aria-label="Call Survijay Foundation"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.68-.36 1.04-.25 1.14.37 2.36.57 3.55.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.19.2 2.41.57 3.55.11.36.03.76-.25 1.04l-2.2 2.2Z" />
                </svg>
              </a>
            )}
          </div>
        )}
        <footer className="site-footer bg-[#102730] px-5 py-12 text-white sm:px-8">
          <div className="footer-main mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.8fr_0.7fr]">
            <div className="footer-about">
              <a className="brand text-white" href="/">
                <span>SV</span>
                <strong>{foundationConfig.name}</strong>
              </a>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
                Survijay Foundation is a social welfare organisation based in
                Rampur, Uttar Pradesh, working toward education, community
                welfare and social support.
              </p>
            </div>
            <div className="footer-group">
              <h2 className="footer-title">About</h2>
              <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/about#purpose">Our Purpose</a>
                <a href="/programs">Our Work</a>
              </div>
            </div>
            <div className="footer-group">
              <h2 className="footer-title">Get Involved</h2>
              <div className="footer-links">
                <a href="/get-involved">Volunteer</a>
                <a href="/get-involved">Partner With Us</a>
                <a href="/get-involved">Support Our Work</a>
              </div>
            </div>
            <div className="footer-group footer-contact">
              <h2 className="footer-title">Contact</h2>
              <div className="footer-links">
                <span>{foundationConfig.location}</span>
                <span>Registered Address</span>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
            <div className="footer-group">
              <h2 className="footer-title">Legal</h2>
              <div className="footer-links">
                <span>CIN: {foundationConfig.cin}</span>
                <span>Status: {foundationConfig.status}</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 {foundationConfig.name}. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
