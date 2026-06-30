import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
    const cards = [
        {
            title: "Energy",
            description:
                "Develop better materials for batteries, solar cells, electronics.",
            image:
                "https://framerusercontent.com/images/eFzxGFaiWMO5KwdNZjhMDKUuqa4.png",
            dark: false,
        },
        {
            title: "Packaging",
            description:
                "Develop more resistant and greener materials.",
            image:
                "https://framerusercontent.com/images/cSIQW0ZX9PSH3G1BHd2OAEZBAA.png",
            dark: true,
        },
        {
            title: "Aeronautics & Aerospace",
            description:
                "Develop lighter composites and alloys.",
            image:
                "https://framerusercontent.com/images/U7zw0zo8kuCPc1qPiCLSL2do5s.png",
            dark: false,
        },
        {
            title: "Chemicals",
            description:
                "Develop more sustainable chemicals with enhanced properties.",
            image:
                "https://framerusercontent.com/images/1L738cTIIymAICNSEnc6lNwRg.png",
            dark: true,
        },
        {
            title: "Textile",
            description:
                "Develop sustainable yarns, dyes and optimize processes.",
            image:
                "https://framerusercontent.com/images/VVHMLptfYvf0JVVoboy5wcho6g.png",
            dark: false,
        },
        {
            title: "Cosmetics",
            description:
                "Develop more sustainable cosmetics with enhanced properties.",
            image:
                "https://framerusercontent.com/images/cdaNg6uZ1oJdlEpzqw2o195x4.png",
            dark: true,
        },
        {
            title: "Bio-based Materials",
            description:
                "Develop bio-based composites, chemicals and textiles.",
            image:
                "https://framerusercontent.com/images/GS6DFM6lXfWbjaCCb7Nbx1uoSM.png",
            dark: false,
        },
        {
            title: "Construction",
            description:
                "Develop advanced materials for construction.",
            image:
                "https://framerusercontent.com/images/2NQORKqLAwfoKUhhJhZeSlzHZTc.png",
            dark: true,
        },
    ];

    return (
        <section id="testimonials" className="mb-10 w-full bg-white/30 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mb-10 text-center sm:mb-12">
                    <h2 className="text-[24px] font-semibold leading-[1.1] tracking-[0.3px] text-[#07328F] md:text-[38px]">
                        Leverage Osium AI platform for many <span className="text-[#6AB896]">end uses</span>
                    </h2>
                </div>

                <div className="relative px-0 sm:px-10 lg:px-16">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.title}>
                                <div
                                    className={`flex min-h-[260px] flex-col gap-6 rounded-[15px] p-6 sm:min-h-[300px] sm:flex-row sm:items-center sm:gap-8 sm:p-8 ${card.dark ? "bg-[#07328F]" : "bg-[#6AB896]"}`}
                                >
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="h-24 w-24 shrink-0 object-contain sm:h-30 sm:w-30"
                                    />

                                    <div>
                                        <h3 className={`text-[24px] font-semibold leading-tight sm:text-[30px] ${card.dark ? "text-[#6AB896]" : "text-[#07328F]"}`}>
                                            {card.title}
                                        </h3>

                                        <p className={`mt-4 max-w-[320px] text-[16px] leading-7 sm:mt-8 sm:text-[18px] ${card.dark ? "text-[#6AB896]" : "text-[#07328F]/80"}`}>
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
