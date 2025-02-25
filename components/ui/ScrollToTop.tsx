"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Cek posisi scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<button
  onClick={scrollToTop}
  className="fixed bottom-24 right-6 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
  aria-label="Scroll to top"
>
  <ArrowUp size={24} />
</button>





  
  
  );
};

export default ScrollToTop;
