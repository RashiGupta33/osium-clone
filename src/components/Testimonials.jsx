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
        <section
            id="testimonials"
            className="w-full bg-white/30 py-20 mb-10"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-12 text-center">
                    <h2 className="text-[24px] md:text-[38px] font-semibold leading-[110%] tracking-[0.3px] text-[#07328F]">
                        Leverage Osium AI platform for many{" "}
                        <span className="text-[#6AB896]">
                            end uses
                        </span>
                    </h2>
                </div>

                {/* Slider */}

                <div className="mt-19 relative px-22">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        spaceBetween={16}
                        slidesPerView={2}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.title}>
                                <div
                                    className={`w-800px h-[300px] rounded-[15px] p-8 flex items-center gap-8
                                    ${card.dark
                                            ? "bg-[#07328F]"
                                            : "bg-[#6AB896]"
                                        }`}
                                >
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="h-30 w-30 object-contain flex-shrink-0"
                                    />

                                    <div>
                                        <h3
                                            className={`text-[30px] font-semibold leading-tight
                                            ${card.dark ? "text-[#6AB896]" : "text-[#07328F]"}`}
                                        >
                                            {card.title}
                                        </h3>

                                        <p
                                            className={`mt-8 max-w-[260px] text-[18px] leading-7
                                            ${card.dark ? "text-[#6AB896]" : "text-[#07328F]/80"}`}
                                        >
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