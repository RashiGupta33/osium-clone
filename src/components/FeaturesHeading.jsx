import Properties from "../assets/properties.avif";
import Materials from "../assets/materials.avif";
import Characterization from "../assets/characterization.avif";
import Process from "../assets/processes.avif";
import Scaleup from "../assets/scale-up.avif";
import Quality from "../assets/quality.avif";

const cards = [
    {
        image: Properties,
        alt: "Properties prediction",
        title: "Properties prediction",
        description: "Predict any material or chemical property in just a few seconds.",
    },
    {
        image: Materials,
        alt: "Materials design",
        title: "Materials and chemicals design",
        description: "Design the optimal route for your R&D experiments planning.",
    },
    {
        image: Characterization,
        alt: "Characterization",
        title: "Characterization",
        description: "Analyze your materials and chemicals characteristics and defects in just a few seconds.",
    },
    {
        image: Process,
        alt: "Process optimization",
        title: "Processes optimization",
        description: "Optimize your existing processes to decrease your costs, enhance your materials and chemicals properties and decrease your CO2 emissions.",
    },
    {
        image: Scaleup,
        alt: "Scale up",
        title: "Scale-up plan",
        description: "Move faster from the R&D experiments to manufacturing thanks to optimized scale-up plans.",
    },
    {
        image: Quality,
        alt: "Quality control",
        title: "Quality control",
        description: "Assess the quality and defects of your materials and chemicals at scale in just a few seconds.",
    },
];

export default function FeaturesHeading() {
    return (
        <>
            <section id="product" className="bg-[#D3DBED4D] py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-6xl text-center">
                        <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-1px] text-[#07328F] md:text-[38px]">
                            <span className="text-[#6AB896]">Get rid of trial-and-error</span> approaches and unlock your R&amp;D&apos;s full potential with our <span className="text-[#6AB896]">cutting-edge functionalities</span>
                        </h2>

                        <p className="mt-6 text-[18px] leading-[1.35] tracking-[-0.02em] text-[#07328F] md:mt-10 md:text-[30px]">
                            Benefit from a significant <span className="font-medium text-[#6AB896]">R&amp;D competitive advantage</span> thanks to our AI-powered software
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#D3DBED4D] pb-16 sm:pb-20">
                <div className="mx-auto -mt-6 max-w-7xl px-4 sm:-mt-10 sm:px-6 lg:-mt-14">
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {cards.map((card) => (
                            <div key={card.title} className="rounded-3xl bg-white p-6 sm:p-8">
                                <img src={card.image} alt={card.alt} className="h-16 w-16 sm:h-20 sm:w-20" />
                                <h3 className="mt-8 text-[24px] font-bold leading-tight text-[#6AB896] sm:text-[30px]">
                                    {card.title}
                                </h3>
                                <p className="mt-4 text-[16px] leading-[1.5] text-[#07328F]/60 sm:text-[18px]">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
