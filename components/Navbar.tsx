// Navigation bar - sticky header with smooth scrolling
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-coastal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H&K</span>
              </div>
              <span className="hidden sm:inline font-semibold text-coastal-900">Haus & Key</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-coastal-700 hover:text-coastal-500 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-coastal-700 hover:text-coastal-500 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-coastal-700 hover:text-coastal-500 transition-colors">
              About
            </Link>
            <Link href="/contact">
              <button className="px-6 py-2 bg-coastal-500 text-white rounded-lg hover:bg-coastal-600 transition-colors">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-white border-t border-coastal-200">
            <Link
              href="/"
              className="block px-4 py-2 text-coastal-700 hover:bg-coastal-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-coastal-700 hover:bg-coastal-50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-coastal-700 hover:bg-coastal-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-coastal-700 hover:bg-coastal-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
