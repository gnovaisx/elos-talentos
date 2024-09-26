"use client"
import { Button } from "@/components/ui/button"; // Importe o botão do ShadCN
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#d7f8fa] w-full fixed top-0 left-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/images/logo.png" // Caminho do logo
              alt="Elos Logo"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu links */}
        <div className="hidden md:flex space-x-6 items-center">

          <Link href="/sobre" className="text-black hover:text-[#1d8e94]">
            Sobre
          </Link>
          <Link href="/servicos" className="text-black hover:text-[#1d8e94]">
            Serviços
          </Link>
          <Link href="/contato" className="text-black hover:text-[#1d8e94]">
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button usando ShadCN Button */}
        <div className="md:hidden flex items-center">
          <Button onClick={toggleMenu} variant="outline" className="text-black border-black hover:bg-[#1d8e94]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-white py-4 space-y-4">
            <Link href="/" className="text-black hover:text-[#1d8e94]" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/sobre" className="text-black hover:text-[#1d8e94]" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link href="/contato" className="text-black hover:text-[#1d8e94]" onClick={toggleMenu}>
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
