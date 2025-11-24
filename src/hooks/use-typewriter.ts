import { useEffect, useState } from "react";

type UseTypewriterOptions = {
  speed?: number; // ms per character
  loop?: boolean;
  onComplete?: () => void;
};

export default function useTypewriter(text: string, options: UseTypewriterOptions = {}) {
  const { speed = 45, loop = false, onComplete } = options;
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    if (index >= text.length) {
      onComplete?.();
      if (loop) {
        const t = setTimeout(() => setIndex(0), 800);
        return () => clearTimeout(t);
      }
      return;
    }

    const id = window.setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => clearTimeout(id);
  }, [index, isPlaying, text, speed, loop, onComplete]);

  useEffect(() => {
    // reset when text changes
    setIndex(0);
    setIsPlaying(true);
  }, [text]);

  const typed = text.slice(0, index);

  return {
    typed,
    isComplete: index >= text.length,
    pause: () => setIsPlaying(false),
    play: () => setIsPlaying(true),
  } as const;
}
