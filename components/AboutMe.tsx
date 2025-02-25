import React from "react";

const skills = [
  { name: "JavaScript", icon: "📜" },
  { name: "PHP (Laravel, CodeIgniter)", icon: "💻" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🖥️" },
  { name: "MySQL & PostgreSQL", icon: "🗄️" },
  { name: "Basic DevOps", icon: "⚙️" },
  { name: "WordPress", icon: "🌐" },
  { name: "Git", icon: "🔗" },
  { name: "Security", icon: "🛡️" },
];

const AboutMe = () => {
  return (
    <section id="about" className="w-full bg-gray-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-4xl font-bold">Tentang Saya</h2>

        {/* Deskripsi */}
        <p className="text-lg mt-4 leading-relaxed">
          Berpengalaman dalam pengembangan full-stack menggunakan{" "}
          <span className="text-blue-400 font-semibold">PHP, JavaScript, Python,</span> dan{" "}
          <span className="text-blue-400 font-semibold">SQL</span>. Terampil dalam membangun aplikasi 
          yang efisien, mengoptimalkan basis data, dan mengimplementasikan integrasi API.
        </p>

        {/* Grid Skill */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="mt-2 text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
