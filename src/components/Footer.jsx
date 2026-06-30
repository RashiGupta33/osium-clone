export default function Footer() {
    const footerLinks = {
        Solutions: [
            { label: "Our offer", href: "/our-solutions" },
            { label: "Use cases", href: "/use-cases" },
        ],
        Technology: [
            { label: "Product", href: "/technology" },
            { label: "AI model", href: "/technology" },
        ],
        Company: [
            { label: "About us", href: "/about" },
            { label: "Careers", href: "/careers" },
        ],
        Resources: [
            { label: "Blog", href: "/blog" },
            { label: "News", href: "/news" },
        ],
    };

    return (
        <footer className="w-full bg-[#153d99] text-white">
            <div className="mx-auto max-w-365 px-5 pt-10 pb-8 sm:px-6 lg:px-18.5">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8 self-start sm:grid-cols-4 lg:gap-x-16">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="min-w-0">
                                <h3 className="mb-2 text-[18px] font-normal leading-none sm:text-[19px]">
                                    {title}
                                </h3>

                                <div className="space-y-1">
                                    {links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="block text-[14px] leading-[1.8] text-white transition hover:text-white/85"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex w-full flex-col items-start gap-6 sm:w-auto sm:items-center lg:min-w-90 lg:flex-row lg:items-start lg:justify-end lg:gap-12">
                        <a
                            href="https://www.linkedin.com/company/osiumai"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Osium on LinkedIn"
                            className="flex h-14 w-14 items-center justify-center rounded-md bg-white text-[#153d99] transition hover:opacity-90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-9.5 w-9.5"
                                fill="#153D99"
                            >
                                <path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19ZM8.27 10.13H5.5V18.5H8.27V10.13ZM6.88 5.19A1.69 1.69 0 106.88 8.56A1.68 1.68 0 006.88 5.19ZM18.5 13.2A3.26 3.26 0 0015.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C15.08 12.17 15.71 12.8 15.71 13.57V18.5H18.5V13.2Z" />
                            </svg>
                        </a>

                        <a
                            href="/request-a-demo"
                            className="flex h-11.25 w-full max-w-60 items-center justify-center rounded-[11px] bg-[#78c8a2] px-6 text-[18px] font-normal text-white transition hover:opacity-90 sm:min-w-62.5 sm:max-w-none sm:text-[22px]"
                        >
                            Request a demo
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center gap-5 border-t border-white/10 pt-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-10 lg:items-center">
                        <img
                            src="https://framerusercontent.com/images/2lFE5P6AYniOZfbL5kPTyBp7bG4.png"
                            alt="Osium"
                            className="h-8.5 w-auto sm:h-10.5 lg:h-12"
                        />

                        <a
                            href="/privacy-policy"
                            className="text-[14px] font-normal text-white transition hover:text-white/85"
                        >
                            Privacy Policy
                        </a>
                    </div>

                    <p className="max-w-55 text-[10px] font-normal leading-normal text-white sm:max-w-none sm:text-[12px] lg:text-right">                        Copyright 2024, Osium. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}