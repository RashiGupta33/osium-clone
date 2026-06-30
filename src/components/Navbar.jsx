import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-25 lg:px-8">
                <a href="/" className="flex items-center">
                    <img
                        src="https://framerusercontent.com/assets/FfTBt5ik0VlvbASgpapJSuuH8.png"
                        alt="Osium AI"
                        className="h-8 w-auto sm:h-10 lg:h-12 lg:-ml-3"
                    />
                </a>

                <nav className="hidden items-center gap-6 text-[20px] font-medium text-[#07328F] transition lg:-ml-28 lg:flex">
                    <a href="/our-solutions" className="hover:text-blue-500 transition">
                        Solutions
                    </a>

                    <a href="/technology" className="hover:text-blue-500 transition">
                        Technology
                    </a>

                    <button className="flex items-center gap-1 hover:text-blue-500 transition">
                        Company
                        <ChevronDown size={16} strokeWidth={2} />
                    </button>

                    <a href="/use-cases" className="hover:text-blue-500 transition">
                        Use Cases
                    </a>

                    <button className="flex items-center gap-1 hover:text-blue-500 transition">
                        Resources
                        <ChevronDown size={16} strokeWidth={2} />
                    </button>
                </nav>

                <a
                    href="/request-a-demo"
                    className="hidden rounded-lg bg-[#6AB896] px-5 py-2.5 text-[21px] font-medium text-white transition hover:bg-[#5ca484] lg:block"
                >
                    Request a demo
                </a>

                <button
                    className="text-[#07328F] lg:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {open && (
                <div className="border-t border-gray-100 bg-white px-4 py-4 text-[16px] font-medium text-[#07328F] lg:hidden sm:px-6">
                    <div className="flex flex-col gap-4">
                        <a href="/our-solutions">Solutions</a>
                        <a href="/technology">Technology</a>
                        <a href="#">Company</a>
                        <a href="/use-cases">Use Cases</a>
                        <a href="#">Resources</a>
                        <a
                            href="/request-a-demo"
                            className="mt-2 rounded-lg bg-[#6AB896] px-4 py-3 text-center font-medium text-white"
                        >
                            Request a demo
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
