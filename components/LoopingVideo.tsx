// LoopingVideo.tsx
"use client";

import React from "react";

type LoopingVideoProps = {
  webmSrc?: string;
  mp4Src?: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
};

export default function LoopingVideo({
  webmSrc,
  mp4Src,
  poster,
  className = "",
  autoPlay = true,
}: LoopingVideoProps) {
  return (
    <video
      className={className}
      autoPlay={autoPlay}
      muted
      playsInline
      loop
      preload="auto"
      poster={poster}
      onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      {mp4Src && <source src={mp4Src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
