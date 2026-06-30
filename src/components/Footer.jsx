export default function Footer() {
    const footerLinks = {
        Solutions: [
            { label: "Our offer", href: "#" },
            { label: "Use cases", href: "#" },
        ],
        Technology: [
            { label: "Product", href: "#" },
            { label: "AI model", href: "#" },
        ],
        Company: [
            { label: "About us", href: "#" },
            { label: "Careers", href: "#" },
        ],
        Resources: [
            { label: "Blog", href: "#" },
            { label: "News", href: "#" },
        ],
    };

    return (
        <footer className="bg-[#07328F] text-white">
            <div className="mx-auto max-w-[1500px] px-10 py-14">

                {/* ================= TOP ================= */}

                <div className="grid grid-cols-[1fr_auto] items-start">

                    {/* Left Columns */}

                    <div className="grid grid-cols-4 gap-20">

                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="mb-5 text-[18px] font-semibold">
                                    {title}
                                </h3>

                                <div className="space-y-3">
                                    {links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="block text-[15px] text-white/85 hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Right Side */}

                    <div className="flex flex-col items-center gap-6">

                        <a
                            href="https://www.linkedin.com/company/osiumai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 fill-white"
                            >
                                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.27 10.13H5.5V18.5H8.27V10.13ZM6.88 5.19A1.69 1.69 0 1 0 6.88 8.56A1.68 1.68 0 0 0 6.88 5.19ZM18.5 13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C15.08 12.17 15.71 12.8 15.71 13.57V18.5H18.5V13.2Z" />
                            </svg>
                        </a>

                        <button className="h-[56px] w-[210px] rounded-lg bg-[#9CD0B8] text-[18px] font-medium text-white hover:opacity-90">
                            Request a demo
                        </button>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-12 border-t border-white/20"></div>

                {/* ================= BOTTOM ================= */}

                <div className="grid grid-cols-3 items-center">

                    {/* Logo */}

                    <div>
                        <img
                            src="https://framerusercontent.com/images/2lFE5P6AYniOZfbL5kPTyBp7bG4.png"
                            alt="Osium"
                            className="h-10"
                        />
                    </div>

                    {/* Center */}

                    <div className="flex items-center justify-center gap-8">

                        <a
                            href="#"
                            className="text-[15px] text-white/85 hover:text-white"
                        >
                            Privacy Policy
                        </a>

                        <img
                            src="https://framerusercontent.com/images/uTHc6UyFc8yDpgHXPRLbPTyU7y4.png"
                            alt="SOC2"
                            className="h-12"
                        />

                        <button className="text-[15px] text-white/85 hover:text-white">
                            Cookie Settings
                        </button>

                    </div>

                    {/* Copyright */}

                    <div className="text-right">
                        <p className="text-[14px] text-white/85">
                            © 2024, Osium. Copyrights, All Rights Reserved.
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
}