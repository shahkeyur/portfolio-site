"use client";

import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        display: show ? "flex" : "none",
        position: "fixed",
        bottom: "3rem",
        right: "3rem",
        zIndex: 1000,
        cursor: "pointer",
        background: "white",
        borderRadius: "28%",
        padding: "0.5rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
      aria-label="Back to Top"
      onClick={handleClick}
    >
      <img src="/arrowhead-up.png" width={'20px'} alt="Back to Top" />
    </div>
  );
}

export default BackToTop;
