import Properties from "../assets/properties.avif";
import Materials from "../assets/materials.avif";
import Characterization from "../assets/characterization.avif";
import Process from "../assets/processes.avif";
import Scaleup from "../assets/scale-up.avif";
import Quality from "../assets/quality.avif";

export default function FeaturesHeading() {
    return (
        <>
            <section id="product" className="py-24 bg-[#D3DBED4D]">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <h2 className="text-[30px] font-semibold leading-[110%] tracking-[-2.4px] text-[#07328F]">
                            <span className="text-[#6AB896]">
                                Get rid of trial-and-error
                            </span>{" "}
                            approaches and unlock your R&amp;D's full potential with our{" "}
                            <span className="text-[#6AB896]">
                                cutting-edge functionalities
                            </span>
                        </h2>

                        <p className="mt-8 text-[25px] leading-[135%] tracking-[-0.03em] text-[#07328F]">
                            Benefit from a significant{" "}
                            <span className="font-medium text-[#6AB896]">
                                R&amp;D competitive advantage
                            </span>{" "}
                            thanks to our AI-powered software
                        </p>
                    </div>

                </div>
            </section>
            <section className="py-20 bg-[#D3DBED4D]">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Top Row */}
                    <div className="grid gap-8 md:grid-cols-3">

                        {/* Card 1 */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <img
                                src={Properties}
                                alt="Properties prediction"
                                className="h-16 w-16"
                            />

                            <h3 className="mt-6 text-xl font-bold text-[#9CD0B8]">
                                Properties prediction
                            </h3>

                            <p className="mt-4 text-[15px] leading-[135%] text-[#07328F]/50">
                                Predict any material or chemical property in just a few seconds.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <img
                                src={Materials}
                                alt="Materials design"
                                className="h-16 w-16"
                            />

                            <h3 className="mt-6 text-xl font-bold text-[#9CD0B8]">
                                Materials and chemicals design
                            </h3>

                            <p className="mt-4 text-[15px] leading-[135%] text-[#07328F]/50">
                                Design the optimal route for your R&amp;D experiments planning.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <img
                                src={Characterization}
                                alt="Characterization"
                                className="h-16 w-16"
                            />

                            <h3 className="mt-6 text-xl font-bold text-[#9CD0B8]">
                                Characterization
                            </h3>

                            <p className="mt-4 text-[15px] leading-[135%] text-[#07328F]/50">
                                Analyze your materials and chemicals characteristics and defects in just a
                                few seconds.
                            </p>
                        </div>

                    </div>

                    {/* Bottom Row */}
                    <div className="mt-8 grid gap-8 md:grid-cols-3">

                        {/* Card 4 */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <img
                                src={Process}
                                alt="Process optimization"
                                className="h-16 w-16"
                            />

                            <h3 className="mt-6 text-xl font-bold text-[#9CD0B8]">
                                Processes optimization
                            </h3>

                            <p className="mt-4 text-[15px] leading-[135%] text-[#07328F]/50">
                                Optimize your existing processes to decrease your costs, enhance your
                                materials and chemicals properties and decrease your CO₂ emissions.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <img
                                src={Scaleup}
                                alt="Scale up"
                                className="h-16 w-16"
                            />

                            <h3 className="mt-6 text-xl font-bold text-[#9CD0B8]">
                                Scale-up plan
                            </h3>

                            <p className="mt-4 text-[15px] leading-[135%] text-[#07328F]/50">
                                Move faster from the R&amp;D experiments to manufacturing thanks to optimized
                                scale-up plans.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <img
                                src={Quality}
                                alt="Quality control"
                                className="h-16 w-16"
                            />

                            <h3 className="mt-6 text-xl font-bold text-[#9CD0B8]">
                                Quality control
                            </h3>

                            <p className="mt-4 text-[15px] leading-[135%] text-[#07328F]/50">
                                Assess the quality and defects of your materials and chemicals at scale in
                                just a few seconds.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}