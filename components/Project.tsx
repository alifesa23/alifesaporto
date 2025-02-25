"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/WobbleCard";

const projects = [
  {
    title: "Sistem Insentif Guru (SIGURU)",
    description: "Aplikasi berbasis web untuk pengajuan insentif guru di Kota Tangerang.",
    techStack: "PHP, CodeIgniter, MySQL, AJAX",
    image: "/images/project1.png",
    bgColor: "bg-gradient-to-r from-blue-600 to-gray-200",
  },
  {
    title: "PRA PPDB",
    description: "Sistem untuk daftar siswa prappdb yg akan di gunakan untuk pendaftaran PPDB.",
    techStack: "CodeIgniter 3, MySQL, JavaScript",
    image: "/images/project2.png",
    bgColor: "bg-gradient-to-r from-purple-500 to-blue-800",
  },
  {
    title: "Portfolio Website",
    description: "Website portofolio interaktif dan disertai chat box dengan AI yang dibangun dengan Next.js dan Tailwind CSS.",
    techStack: "Next.js, Tailwind CSS, Vercel",
    image: "/images/project3.png",
    containerClass: "col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]",
  },
];

const Project: React.FC = () => {
  return (
    <section id="projects" className="w-full py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Proyek Saya</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <WobbleCard key={index} containerClassName={`relative overflow-hidden rounded-2xl ${project.bgColor}`}>
              {/* Overlay */}
              <div className="absolute inset-0 backdrop-blur-md bg-black/40 z-0"></div>

              {/* Konten Teks */}
              <div className="relative z-10 flex flex-col justify-center max-w-lg px-8 py-6">
                <h3 className="text-left text-3xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-left text-base text-neutral-200">
                  {project.description}
                </p>
                <span className="block mt-3 text-sm text-blue-300">
                  {project.techStack}
                </span>
              </div>

               {/* Kontainer Gambar */}
                <div className="relative w-full flex justify-center items-center h-48 lg:h-full overflow-hidden">
                <Image
                    src={project.image}
                    width={300}
                    height={200}
                    alt={project.title}
                    className="rounded-lg object-contain mb-auto"
                />
                </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
