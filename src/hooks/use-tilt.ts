import { useEffect, useRef } from "react";

type TiltOptions = {
  maxTilt?: number; // degrees
  scale?: number;
};

export default function useTilt<T extends HTMLElement>(opts: TiltOptions = {}) {
  const ref = useRef<T | null>(null);
  const { maxTilt = 12, scale = 1.03 } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const tiltX = (py - 0.5) * maxTilt * -1; // invert for natural
      const tiltY = (px - 0.5) * maxTilt;

      el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
      el.style.transition = `transform 120ms ease-out`;
    };

    const onLeave = () => {
      el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.transition = `transform 300ms cubic-bezier(.2,.9,.3,1)`;
    };

    el.addEventListener("mousemove", onMove as any);
    el.addEventListener("mouseleave", onLeave as any);
    el.addEventListener("mouseenter", onMove as any);

    return () => {
      el.removeEventListener("mousemove", onMove as any);
      el.removeEventListener("mouseleave", onLeave as any);
      el.removeEventListener("mouseenter", onMove as any);
    };
  }, [maxTilt, scale]);

  return ref;
}
