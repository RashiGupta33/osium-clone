import heroBg from "../assets/hero-bg.avif";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Background */}

            <img
                src={heroBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-left-top"
            />

            {/* Hero */}

            <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center pt-[120px] md:pt-[200px] text-center px-6">

                <h1 className="max-w-[980px] text-[40px] md:text-[72px] font-bold leading-[1.1] tracking-[-1px] text-white">

                    Unlock the{" "}

                    <span className="text-[#6AB896]">
                        power of AI
                    </span>{" "}

                    for

                    <br />

                    <span className="text-[#6AB896]">
                        materials
                    </span>{" "}

                    and{" "}

                    <span className="text-[#6AB896]">
                        chemicals
                    </span>

                </h1>

                <p className="mt-10 md:mt-38 max-w-[1300px] text-[20px] md:text-[37px] leading-[1.2] tracking-[-0.03em] text-white">

                    Osium AI enables industry leaders to{" "}

                    <span className="font-medium text-[#6AB896]">
                        accelerate
                    </span>{" "}

                    the development of{" "}

                    <span className="font-medium text-[#6AB896]">
                        sustainable
                    </span>{" "}

                    and{" "}

                    <span className="font-medium text-[#6AB896]">
                        high-performance
                    </span>{" "}

                    materials and chemicals

                </p>

                <a
                    href="/request-a-demo"
                    className="mt-10 md:mt-40 mb-16 md:mb-30 rounded-[8px] bg-[#6AB896] px-8 py-4 text-[16px] md:text-[18px] font-medium text-white transition hover:bg-[#5CA484]"
                >
                    Request a demo
                </a>

            </div>

        </section>
    );
}