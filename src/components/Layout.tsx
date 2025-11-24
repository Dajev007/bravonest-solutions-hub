import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import RouteScroll from "@/components/RouteScroll";
import MobileDrawer from "@/components/MobileDrawer";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/learn", label: "Learn" },
  { to: "/contact", label: "Contact" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const scrollToTop = () => {
    // Always scroll to top smoothly
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      // fallback
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
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
                onClick={(e) => {
                  // if already on the same page, just scroll to header instead of navigating
                  if (isActive(link.to)) {
                    e.preventDefault();
                    scrollToTop();
                    setMobileMenuOpen(false);
                  }
                }}
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
            {mobileMenuOpen ? <X className="h-6 w-6 icon-interactive" /> : <Menu className="h-6 w-6 icon-interactive" />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        <MobileDrawer
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          links={navLinks}
          onNavigate={(to) => {
            // if navigating to the same page, scroll to top
            if (isActive(to)) {
              scrollToTop();
            }
          }}
        />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Smooth route scrolling -> scroll to header of new page */}
        <RouteScroll />
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-lg">
                <Code2 className="h-5 w-5 text-primary icon-interactive" />
                <span>Bravonest</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Engineering excellence meets practical education. Building software, PCB designs, and future engineers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                    Software Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                    PCB Design
                  </Link>
                </li>
                <li>
                  <Link to="/learn" className="text-muted-foreground hover:text-primary transition-colors">
                    Courses
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@bravonest.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bravonest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
