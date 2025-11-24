import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

type NavLink = { to: string; label: string };

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  onNavigate?: (to: string) => void;
};

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, links, onNavigate }) => {
  const panelRef = useRef<HTMLElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // disable body scroll when open
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;

      // focus the first focusable element inside the drawer after it opens
      setTimeout(() => {
        const panel = panelRef.current;
        if (!panel) return;
        const focusable = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length) focusable[0].focus();
      }, 120);

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        }

        if (e.key === "Tab") {
          // focus trap
          const panel = panelRef.current;
          if (!panel) return;
          const focusable = Array.from(panel.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          ));
          if (!focusable.length) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", onKey);

      return () => {
        document.removeEventListener("keydown", onKey);
        // restore focus
        previouslyFocused.current?.focus?.();
      };
    }
    return;
  }, [open, onClose]);

  return (
    <div aria-hidden={!open} className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer panel: slide from left */}
      <aside
        ref={panelRef}
        className={`pointer-events-auto fixed left-0 top-0 bottom-0 z-50 w-72 sm:w-80 transform-gpu bg-background/95 backdrop-blur border-r border-border/40 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="font-semibold">Menu</div>
            <button className="p-2" onClick={onClose} aria-label="Close menu">
              <X className="h-6 w-6 icon-interactive" />
            </button>
          </div>

            <nav className="mt-2 px-2 py-4 flex-1 overflow-visible">
            <ul className="grid gap-2">
              {links.map((l, idx) => {
                const enterDelay = `${idx * 60}ms`;
                const exitDelay = `${(links.length - idx) * 40}ms`;
                const style: React.CSSProperties = {
                  transitionDelay: open ? enterDelay : exitDelay,
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(-8px)",
                };

                return (
                  <li key={l.to} style={style} className="drawer-item drawer-item-transition">
                      <Link
                        to={l.to}
                        className="block px-3 py-3 rounded-md text-base font-medium text-foreground/90 bg-muted/10 hover:bg-muted/50 transition-colors"
                      onClick={() => {
                        onNavigate?.(l.to);
                        onClose();
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default MobileDrawer;
