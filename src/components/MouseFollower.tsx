"use client";

import React, { useEffect, useState } from "react";

export default function MouseFollower() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="mouse-follower"
      style={{
        background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 113, 227, 0.045), rgba(245, 158, 11, 0.02), transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}
