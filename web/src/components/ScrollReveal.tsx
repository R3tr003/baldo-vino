"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(
      ".reveal, .reveal--left, .reveal--right, .reveal--scale",
    );

    if (!revealEls.length) return;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 100px 0px" },
      );

      revealEls.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }

    revealEls.forEach((el) => el.classList.add("is-visible"));
  }, []);

  return null;
}
