import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 md:px-12">
        {/* Wrapper untuk center alignment */}
        <div className="flex flex-col items-center justify-center">
          {/* Nama / Copyright (Selalu Center) */}
          <div className="text-sm md:text-base text-center">
            © {new Date().getFullYear()} Made with ❤️ by Esa. All Rights Reserved.
          </div>

          {/* Ikon Sosial Media (Juga Center) */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400 transition" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
