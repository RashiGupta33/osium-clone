import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="https://framerusercontent.com/assets/FfTBt5ik0VlvbASgpapJSuuH8.png"
                        alt="Osium AI"
                        className="h-10 w-auto"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-[16px] font-medium text-[#07328F]">
                    <a href="/our-solutions" className="hover:text-blue-500 transition">Solutions</a>
                    <a href="/technology" className="hover:text-blue-500 transition">Technology</a>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition">
                        Company <ChevronDown size={14} />
                    </button>
                    <a href="/use-cases" className="hover:text-blue-500 transition">Use Cases</a>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition">
                        Resources <ChevronDown size={14} />
                    </button>
                </nav>

                {/* Desktop CTA */}
                <a
                    href="/request-a-demo"
                    className="hidden md:inline-block rounded-lg bg-[#6AB896] px-4 py-2 text-white font-medium text-[16px] transition hover:bg-[#5ca484]"
                >
                    Request a demo
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-[#07328F]"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-[16px] font-medium text-[#07328F]">
                    <a href="/our-solutions">Solutions</a>
                    <a href="/technology">Technology</a>
                    <a href="#">Company</a>
                    <a href="/use-cases">Use Cases</a>
                    <a href="#">Resources</a>
                    <a
                        href="/request-a-demo"
                        className="mt-2 w-full text-center rounded-lg bg-[#6AB896] px-4 py-2 text-white font-medium"
                    >
                        Request a demo
                    </a>
                </div>
            )}
        </header>
    );
}