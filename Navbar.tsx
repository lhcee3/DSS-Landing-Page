'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dss%20logo-R8VwfqJHCrweUkR0ODY8tDHENw8x2b.jpeg"
            alt="DSS Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-bold">DSS</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-black">
          {["Home", "About Us", "Team", "Events", "Resources", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium transition-colors hover:text-blue-500"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="Toggle Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white">
          <nav className="flex flex-col space-y-4">
            {["Home", "About Us", "Team", "Events", "Resources", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium transition-colors hover:text-blue-500"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
