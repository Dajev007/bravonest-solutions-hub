import React from "react";

type ScrollingReelProps = {
  texts?: string[];
  speed?: number; // seconds for full loop
};

const ScrollingReel: React.FC<ScrollingReelProps> = ({
  texts = [
    "Design · Build · Ship",
    "Web Apps · Embedded · Courses",
    "Prototypes · Education · Consulting",
  ],
  speed = 20,
}) => {
  const joined = texts.join(" — ");
  return (
    <div className="overflow-hidden w-full py-2 select-none">
      <div className="reel relative whitespace-nowrap will-change-transform" style={{ ["--d" as any]: `${speed}s` }}>
        <div className="reel-track inline-block">
          <span className="mx-8 text-sm md:text-base text-muted-foreground">{joined}</span>
          <span className="mx-8 text-sm md:text-base text-muted-foreground">{joined}</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingReel;
