import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const supportsHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) return; // hide on touch devices

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("[data-cursor]") as HTMLElement | null;
      setIsHovering(Boolean(el || (target && (target.tagName === "A" || target.tagName === "BUTTON"))));
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    let raf = 0;
    const render = () => {
      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${posX - 18}px, ${posY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    // add class to hide native cursor while mounted (desktop only)
    document.documentElement.classList.add("custom-cursor-enabled");

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <>
      <div
        ref={outlineRef}
        className={`fixed pointer-events-none z-[9999] hidden md:block w-9 h-9 rounded-full border border-white/10 bg-transparent transition-all duration-300 transform-gpu ${
          visible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "scale-125 bg-white/6 border-accent/40" : ""}`}
        style={{ mixBlendMode: "difference" }}
      />

      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[9999] hidden md:block w-3 h-3 rounded-full bg-accent transition-all duration-150 transform-gpu ${
          visible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "scale-150" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
