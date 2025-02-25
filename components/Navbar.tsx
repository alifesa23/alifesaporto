"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, FileText, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // ✅ Smooth Scroll Function
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 
                    bg-white dark:bg-gray-900 rounded-full shadow-lg 
                    px-8 py-3 flex items-center justify-between 
                    w-[85%] max-w-3xl z-50 backdrop-blur-md bg-opacity-80">
      {/* Menu Navigasi */}
      <div className="flex space-x-6 text-gray-800 dark:text-gray-200 font-semibold">
        <Button variant="ghost" onClick={() => handleScroll("home")} className="hover:text-gray-500">
          Home
        </Button>
        <Button variant="ghost" onClick={() => handleScroll("about")} className="hover:text-gray-500">
          About
        </Button>
        <Button variant="ghost" onClick={() => handleScroll("projects")} className="hover:text-gray-500">
          Projects
        </Button>
      </div>

      {/* Ikon Aksi */}
      <div className="flex items-center space-x-4">
        {/* GitHub Link */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 text-gray-800 dark:text-gray-200 hover:text-gray-500" />
        </a>

        {/* Resume Link */}
        <a href="/resume.pdf" target="_blank">
          <FileText className="w-5 h-5 text-gray-800 dark:text-gray-200 hover:text-gray-500" />
        </a>

        {/* Divider */}
        <span className="w-px h-5 bg-gray-400"></span>

        {/* Tombol Tema */}
        <Button onClick={toggleTheme} variant="outline" className="p-2">
          {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </Button>
      </div>
    </nav>
  );
}
