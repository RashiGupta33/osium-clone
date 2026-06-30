import BenefitCard from "./BenefitCard";

import speedIcon from "../assets/speedIcon.avif";
import modelingIcon from "../assets/modelingIcon.avif";
import puzzleIcon from "../assets/puzzleIcon.avif";
import flexibilityIcon from "../assets/flexibilityIcon.avif";

const benefits = [
    {
        icon: speedIcon,
        title: "Speed",
        description:
            "Our AI-powered software enables you to speed up your materials and chemicals developments and analysis by a 10x factor.",
    },
    {
        icon: modelingIcon,
        title: "Modeling",
        description:
            "Our proprietary technology enables you to predict materials and chemicals properties in just a few seconds.",
    },
    {
        icon: puzzleIcon,
        title: "All-in-one",
        description:
            "Our software covers every step of your materials and chemicals development cycles, from formulation and characterization to scale-up and manufacturing.",
    },
    {
        icon: flexibilityIcon,
        title: "Flexibility",
        description:
            "Our software is designed to help you with any of your R&D projects and adapts to your evolving R&D needs.",
    },
];

export default function Benefits() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-[1400px] px-6">

                <div className="mx-auto max-w-[1200px] text-center">

                    <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.1] tracking-[-2px] text-[#07328F]">
                        Leverage our{" "}
                        <span className="text-[#6AB896]">
                            proprietary technology
                        </span>{" "}
                        developed by experts with 10 years of experience in AI
                        and authors of{" "}
                        <span className="text-[#6AB896]">
                            multiple AI patents
                        </span>
                    </h2>

                    <p className="mt-6 md:mt-18 text-[20px] md:text-[30px] tracking-[-0.03em] text-[#07328F]">
                        Discover the{" "}
                        <span className="font-medium text-[#6AB896]">
                            benefits
                        </span>{" "}
                        of our solution
                    </p>

                </div>

                <div className="mx-auto mt-12 md:mt-20 max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {benefits.map((item) => (
                        <BenefitCard key={item.title} {...item} />
                    ))}
                </div>

            </div>
        </section>
    );
}