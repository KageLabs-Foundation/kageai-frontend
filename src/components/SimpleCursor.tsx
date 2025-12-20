import React, { useEffect, useRef } from "react";

const SimpleCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const apply = () => {
      dot.style.transform = `translate3d(${lastPos.current.x}px, ${lastPos.current.y}px, 0) translate(-50%, -50%)`;
    };

    const handleMove = (e: PointerEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
      apply();
    };

    const handleScroll = () => {
      apply();
    };

    apply();
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0"
      style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 0 0 3px rgba(0,0,0,0.35), 0 0 12px rgba(255,255,255,0.7)",
        transform: `translate3d(${window.innerWidth / 2}px, ${window.innerHeight / 2}px, 0) translate(-50%, -50%)`,
        willChange: "transform",
        mixBlendMode: "screen",
        pointerEvents: "none",
        zIndex: 2147483647,
      }}
    />
  );
};

export default SimpleCursor;
