import heroBg from "../assets/hero-bg.avif";

export default function Hero() {
    return (
        <section className="relative min-h-170 overflow-hidden md:min-h-205 lg:min-h-screen">
            <img
                src={heroBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center md:object-top lg:object-left"
            />

            <div className="relative z-10 mx-auto flex max-w-275 flex-col items-center px-4 pt-27.5 text-center sm:px-6 md:pt-37.5 lg:pt-50">
                <h1 className="max-w-82.5 text-[34px] font-bold leading-[1.08] tracking-[-0.8px] text-white sm:max-w-140 sm:text-[52px] md:max-w-190 md:text-[64px] lg:max-w-245 lg:text-[72px] lg:leading-[1.1] lg:tracking-[-1px]">
                    Unlock the <span className="text-[#6AB896]">power of AI</span> for
                    <br className="hidden sm:block lg:block" />
                    <span className="text-[#6AB896]"> materials</span> and <span className="text-[#6AB896]">chemicals</span>
                </h1>

                <p className="mt-10 max-w-100 text-[18px] leading-[1.45] tracking-[-0.02em] text-white sm:max-w-155 sm:text-[24px] md:mt-20 md:max-w-225 md:text-[30px] lg:mt-38 lg:max-w-325 lg:text-[37px] lg:leading-[1.2] lg:tracking-[-0.03em]">
                    Osium AI enables industry leaders to <span className="font-medium text-[#6AB896]">accelerate</span> the development of
                    <br className="block lg:hidden" /> <span className="font-medium text-[#6AB896]">sustainable</span> and <span className="font-medium text-[#6AB896]">high-performance</span> materials and chemicals
                </p>

                <a
                    href="/request-a-demo"
                    className="mt-12 mb-20 rounded-lg bg-[#6AB896] px-6 py-3 text-[16px] font-medium text-white transition hover:bg-[#5CA484] sm:px-8 sm:py-4 sm:text-[18px] md:mt-24 md:mb-24 lg:mt-40 lg:mb-30"
                >
                    Request a demo
                </a>
            </div>
        </section>
    );
} 