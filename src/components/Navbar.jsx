import { ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-8">

                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="https://framerusercontent.com/assets/FfTBt5ik0VlvbASgpapJSuuH8.png"
                        alt="Osium AI"
                        className="h-12 w-auto -ml-3"
                    />
                </a>

                {/* Navigation */}
                <nav className="flex items-center gap-6 text-[20px] font-medium text-[#07328F] -ml-28">

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

                {/* CTA */}
                <a
                    href="/request-a-demo"
                    className="rounded-lg bg-[#6AB896] px-5 py-2.5 text-white font-medium text-[21px] transition hover:bg-[#5ca484]"
                >
                    Request a demo
                </a>

            </div>
        </header>
    );
}