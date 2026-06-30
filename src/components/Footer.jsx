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
        <footer className="w-full bg-[#153d99] text-white">
            <div className="mx-auto max-w-[1460px] px-8 pt-[38px] pb-[38px] sm:px-12 lg:px-[74px]">
                <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
                    <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4 lg:gap-x-[88px]">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="min-w-[160px]">
                                <h3 className="mb-[10px] text-[19px] font-normal leading-none tracking-[-0.3px]">
                                    {title}
                                </h3>

                                <div className="space-y-[6px]">
                                    {links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="block text-[14px] font-normal leading-[1.8] text-white transition hover:text-white/85"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-start gap-10 self-start lg:min-w-[535px] lg:flex-row lg:items-start lg:justify-end lg:gap-[112px]">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Osium on LinkedIn"
                            className="flex h-[56px] w-[56px] items-center justify-center rounded-[6px] bg-white text-[#153d99] transition hover:opacity-90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-[38px] w-[38px]"
                                fill="#153D99"
                            >
                                <path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19ZM8.27 10.13H5.5V18.5H8.27V10.13ZM6.88 5.19A1.69 1.69 0 106.88 8.56A1.68 1.68 0 006.88 5.19ZM18.5 13.2A3.26 3.26 0 0015.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C15.08 12.17 15.71 12.8 15.71 13.57V18.5H18.5V13.2Z" />
                            </svg>
                        </a>

                        <button className="h-[45px] min-w-[250px] rounded-[11px] bg-[#78c8a2] px-[24px] text-[25px] font-normal tracking-[-0.4px] text-white transition hover:opacity-90">
                            Request a demo
                        </button>
                    </div>
                </div>

                <div className="mt-[34px] flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-14 lg:gap-[96px]">
                        <img
                            src="https://framerusercontent.com/images/2lFE5P6AYniOZfbL5kPTyBp7bG4.png"
                            alt="Osium"
                            className="ml-3 h-[48px] w-auto"
                        />

                        <a
                            href="#"
                            className="text-[14px] -ml-8 font-normal text-white transition hover:text-white/85"
                        >
                            Privacy Policy
                        </a>

                        {/* <img
                            src="https://framerusercontent.com/images/uTHc6UyFc8yDpgHXPRLbPTyU7y4.png"
                            alt="SOC 2 Type 2"
                            className="h-[78px] w-auto"
                        /> */}
                    </div>

                    <p className="whitespace-nowrap text-[11px] font-normal text-white">
                        � 2024, Osium. Copyrights, All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
