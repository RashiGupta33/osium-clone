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
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="mx-auto max-w-[1200px] text-center">
                    <h2 className="text-[28px] font-semibold leading-[1.15] tracking-[-1px] text-[#07328F] md:text-[40px] md:tracking-[-2px]">
                        Leverage our <span className="text-[#6AB896]">proprietary technology</span> developed by experts with 10 years of experience in AI and authors of <span className="text-[#6AB896]">multiple AI patents</span>
                    </h2>

                    <p className="mt-6 text-[18px] tracking-[-0.02em] text-[#07328F] md:mt-12 md:text-[30px]">
                        Discover the <span className="font-medium text-[#6AB896]">benefits</span> of our solution
                    </p>
                </div>

                <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 md:mt-16">
                    {benefits.map((item) => (
                        <BenefitCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
