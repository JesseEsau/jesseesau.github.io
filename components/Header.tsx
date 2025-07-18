import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-950 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-green-600">
                    <Link href="/">Jesse</Link>
                </h1>

                <nav className="hidden md:flex space-x-6">
                    {navLinks.map(link => (
                        <Link key={link.name} href={link.path} className="text-gray-200 hover:text-green-600 transition">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <button
                    className="md:hidden text-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X color='white' size={24} /> : <Menu color='white' size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 pb-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="block py-2 text-gray-200 hover:text-green-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Header