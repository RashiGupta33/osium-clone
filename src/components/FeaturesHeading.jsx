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
                    <div className="mx-auto max-w-8xl text-center">
                        <h2 className="text-[38px] font-semibold leading-[120%] tracking-[-1px] text-[#07328F]">
                            <span className="text-[#6AB896]">
                                Get rid of trial-and-error
                            </span>{" "}
                            approaches and unlock your R&amp;D's full potential with our{" "}
                            <span className="text-[#6AB896]">
                                cutting-edge functionalities
                            </span>
                        </h2>

                        <p className="mt-12 text-[30px] leading-[135%] tracking-[-0.03em] text-[#07328F]">
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
                <div className="mx-auto max-w-7xl px-2 -mt-20">

                    {/* Top Row */}
                    <div className="grid gap-10 md:grid-cols-3">

                        {/* Card 1 */}
                        <div className="rounded-3xl bg-white p-8 pb-25 pl-8 pr-6">
                            <img
                                src={Properties}
                                alt="Properties prediction"
                                className="h-20 w-20"
                            />

                            <h3 className="mt-12 text-[30px] font-bold text-[#6AB896]">
                                Properties prediction
                            </h3>

                            <p className="mt-8 text-[18px] leading-[135%] text-[#07328F]/50">
                                Predict any material or chemical property in just a few seconds.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-3xl bg-white p-8">
                            <img
                                src={Materials}
                                alt="Materials design"
                                className="h-20 w-20"
                            />

                            <h3 className="mt-11 text-[30px] font-bold text-[#6AB896]">
                                Materials and chemicals design
                            </h3>

                            <p className="mt-2 text-[18px] leading-[135%] text-[#07328F]/50">
                                Design the optimal route for your <br /> R&amp;D experiments planning.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-3xl bg-white p-8">
                            <img
                                src={Characterization}
                                alt="Characterization"
                                className="h-20 w-20"
                            />

                            <h3 className="mt-11 text-[30px] font-bold text-[#6AB896]">
                                Characterization
                            </h3>

                            <p className="mt-10 text-[18px] leading-[135%] text-[#07328F]/50">
                                Analyze your materials and <br /> chemicals characteristics and defects <br /> in just a
                                few seconds.
                            </p>
                        </div>

                    </div>

                    {/* Bottom Row */}
                    <div className="mt-12 grid gap-10 md:grid-cols-3">

                        {/* Card 4 */}
                        <div className="rounded-3xl bg-white p-8 pb-24 pl-8 pr-6">
                            <img
                                src={Process}
                                alt="Process optimization"
                                className="h-20 w-20"
                            />

                            <h3 className="mt-11 text-[30px] font-bold text-[#6AB896]">
                                Processes optimization
                            </h3>

                            <p className="mt-2 text-[18px] leading-[135%] text-[#07328F]/50">
                                Optimize your existing processes to decrease your costs, enhance your
                                materials and chemicals properties and decrease your CO₂ emissions.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="rounded-3xl bg-white p-8">
                            <img
                                src={Scaleup}
                                alt="Scale up"
                                className="h-20 w-20"
                            />

                            <h3 className="mt-11 text-[30px] font-bold text-[#6AB896]">
                                Scale-up plan
                            </h3>

                            <p className="mt-4 text-[15px] leading-[135%] text-[#07328F]/50">
                                Move faster from the R&amp;D experiments to manufacturing thanks to optimized
                                scale-up plans.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="rounded-3xl bg-white p-8">
                            <img
                                src={Quality}
                                alt="Quality control"
                                className="h-20 w-20"
                            />

                            <h3 className="mt-11 text-[30px] font-bold text-[#6AB896]">
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