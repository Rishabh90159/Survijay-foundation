import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navItems = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Impact", "/impact"],
  ["Stories", "/stories"],
  ["Gallery", "/gallery"],
  ["Get Involved", "/get-involved"],
  ["Volunteer", "/volunteer"],
  ["Transparency", "/transparency"],
  ["Contact", "/contact"],
];

export const metadata: Metadata = {
  metadataBase: new URL("https://survijay-foundation.rgiiitdwd.chatgpt.site"),
  title: {
    default: "SurVijay Foundation | NGO for Education, Health and Community Support",
    template: "%s | SurVijay Foundation",
  },
  description:
    "A static, SEO-friendly NGO website for SurVijay Foundation, focused on education, health, women empowerment, volunteering, and transparent impact.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "SurVijay Foundation",
    description:
      "Helping communities build safer, stronger futures through education, health, and volunteer-led support.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SurVijay Foundation",
    description:
      "Helping communities build safer, stronger futures through education, health, and volunteer-led support.",
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
        <header className="sticky top-0 z-50 border-b border-[#d9e5e0] bg-white/94 backdrop-blur">
          <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
            <Link className="brand" href="/" aria-label="SurVijay Foundation home">
              <span>SV</span>
              <strong>SurVijay Foundation</strong>
            </Link>
            <div className="hidden items-center gap-4 lg:flex">
              {navItems.map(([label, href]) => (
                <Link className="nav-link" href={href} key={href}>
                  {label}
                </Link>
              ))}
            </div>
            <Link className="donate-link" href="/donate">
              Donate
            </Link>
          </nav>
        </header>
        {children}
        <footer className="bg-[#102730] px-5 py-12 text-white sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
            <div>
              <Link className="brand text-white" href="/">
                <span>SV</span>
                <strong>SurVijay Foundation</strong>
              </Link>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
                A community-first NGO website blueprint built as a static,
                accessible, SEO-ready Next.js application.
              </p>
            </div>
            <div>
              <h2 className="footer-title">Quick links</h2>
              <div className="footer-links">
                {navItems.slice(0, 5).map(([label, href]) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="footer-title">Support</h2>
              <div className="footer-links">
                {navItems.slice(5).map(([label, href]) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
                <Link href="/donate">Donate</Link>
              </div>
            </div>
            <div>
              <h2 className="footer-title">Contact</h2>
              <p className="text-sm leading-7 text-white/72">
                hello@survijay.org
                <br />
                +91 98765 43210
                <br />
                New Delhi, India
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
