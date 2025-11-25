import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Facebook, Youtube, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollBackground } from "@/components/ScrollBackground";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/learn", label: "Courses" },
  { to: "/contact", label: "Contact" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* Scroll-based background color animation */}
      <ScrollBackground />
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-bold text-xl">
            {/* site logo image from public/bravonest.png (only image shown) */}
            <img
              src="/bravonest.png"
              alt="Bravonest"
              className="h-10 md:h-12 w-auto rounded-full object-contain"
              style={{ padding: '2px' }}
              onError={(e) => {
                // hide broken image and keep accessible label via aria-label on Link
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) parent.classList.add('logo-fallback');
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.to) ? "text-primary" : "text-foreground/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Footer */}
      <footer className="gradient-footer border-t border-border relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center font-bold text-lg">
                  <img
                    src="/bravonest.png"
                    alt="Bravonest"
                    className="h-10 w-auto rounded-full object-contain"
                    style={{ padding: '2px' }}
                  />
                </div>
              <p className="text-sm text-white">
                Engineering excellence meets practical education. Building software, PCB designs, and future engineers.
              </p>
              {/* Social Media Links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://lk.linkedin.com/company/bravonest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/17bDNK8fzo/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com/@bravonest?si=eQjl_BZg2xTf11OT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/solutions" className="text-white hover:text-white transition-colors">
                    Software Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-white hover:text-white transition-colors">
                    PCB Design
                  </Link>
                </li>
                <li>
                  <Link to="/learn" className="text-white hover:text-white transition-colors">
                    Courses
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-white hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <a 
                    href="https://wa.me/94727512373" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-400 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 flex-shrink-0" />
                    <span>+94727512373</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:support@bravonest.lk" 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 flex-shrink-0" />
                    <span>support@bravonest.lk</span>
                  </a>
                </li>
                <li className="pt-1">Palaly road, kondavil east, Jaffna, Sri Lanka</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white">
            © {new Date().getFullYear()} Bravonest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
