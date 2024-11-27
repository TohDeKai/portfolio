"use client";

import React, { useEffect, useState } from "react";

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor hidden xl:block"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default GlowingCursor;
