"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeams";
import { FlipWords } from "./ui/FlipWords";
import { FloatingDock } from "./ui/FloatingDock";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ChatBubble from "./ui/ChatBubble";
import ScrollToTop from "./ui/ScrollToTop";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import Navbar from "./Navbar"; // ✅ Pindahkan Navbar ke file terpisah

const words = ["Striker", "Midfielder", "Defender"];
const links = [
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://www.linkedin.com/in/your-profile",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://github.com/your-username",
  },
  {
    title: "Email",
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "mailto:your-email@example.com",
  },
];

const Hero = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000); // Reset efek setiap 5 detik

    return () => clearTimeout(timeout);
  }, [key]);

  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
<div id="home" className="w-full min-h-screen relative flex flex-col lg:flex-row justify-center items-center lg:items-start overflow-hidden">
<BackgroundBeamsWithCollision className="absolute inset-0 w-full min-h-full z-0 overflow-hidden">
  {/* Bisa dikosongkan, atau tambahkan elemen seperti div */}
  <div></div>
</BackgroundBeamsWithCollision>


      {/* ✅ Navbar Floating */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-20 flex flex-col w-full max-w-7xl pt-44">
        <div className="lg:flex items-center w-full">
          <div className="lg:w-1/2 text-center lg:text-left px-6">
            {/* 🔄 Reset otomatis dengan key */}
            <TextGenerateEffect
              key={key}
              words="Halo ! 👋 Saya Alif Esa"
              className="text-left text-[40px] md:text-5xl lg:text-6xl"
            />
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-white font-sans tracking-tight mt-6">
              Saya adalah seorang <FlipWords words={words} /> PEDEKA FC
            </div>
            <div className="text-lg md:text-xl lg:text-2xl text-white font-sans tracking-tight mt-6 font-bold">
              Tapi yang pasti saya adalah seorang Fullstack Developer yang antusias dalam menciptakan pengalaman web yang user-friendly dan modern.
            </div>
          </div>

          {/* Bagian Foto */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-[-40px] lg:mt-[-30px]">
            <Image
              src="/images/profil.png"
              alt="Foto Profil"
              width={2256}
              height={1504}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto scale-125"
            />
          </div>
        </div>

        {/* Floating Dock berada di bawah */}
        <div className="w-full mt-10 flex justify-start">
          <FloatingDock items={links} />
        </div>
      </div>
      {/* Chat Bubble */}
      <ChatBubble isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />

      {/* Sembunyikan ScrollToTop jika chat terbuka */}
      {!isChatOpen && <ScrollToTop />}
    </div>
  );
};

export default Hero;
