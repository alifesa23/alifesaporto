import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="relative bg-black flex flex-col items-center min-h-screen w-full">
      <div className="w-full">
        <Hero />
        <AboutMe />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
