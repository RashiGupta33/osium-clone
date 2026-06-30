import H545 from "../assets/5h45.avif";
import Aperam from "../assets/aperam.png";
import Safran from "../assets/safran.avif";
import Decathlon from "../assets/decathalon.png";
import Cemef from "../assets/cemef.avif";
import Stan from "../assets/stan.avif";
import Filab from "../assets/filab.avif";
import LVMH from "../assets/lvmh.avif";
import Fluro from "../assets/fluro.avif";
import Sorbonne from "../assets/sorbonne.avif";
import VNComposites from "../assets/Vncomposites.avif";
import Colas from "../assets/colas.avif";
import Maes from "../assets/maes.avif";
import PSL from "../assets/psl.avif";
import Resicare from "../assets/resicare.avif";
import Airbus from "../assets/airbus.avif";
import Israel from "../assets/israel.avif";
import Expiris from "../assets/expiris.avif";
import Atem from "../assets/atem.avif";
import Urgo from "../assets/urgo.avif";
import CNRS from "../assets/cnrs.avif";

const logos = [
    { src: CNRS, alt: "CNRS" },
    { src: H545, alt: "5H45" },
    { src: Aperam, alt: "Aperam" },
    { src: Safran, alt: "Safran" },
    { src: Decathlon, alt: "Decathlon" },
    { src: Cemef, alt: "Cemef" },
    { src: Stan, alt: "Stanford" },
    { src: Filab, alt: "Filab" },
    { src: LVMH, alt: "LVMH" },
    { src: Fluro, alt: "Fluorotechnique" },
    { src: Sorbonne, alt: "Sorbonne" },
    { src: VNComposites, alt: "VN Composites" },
    { src: Colas, alt: "Colas" },
    { src: Maes, alt: "Maestria" },
    { src: PSL, alt: "PSL" },
    { src: Resicare, alt: "Resicare" },
    { src: Airbus, alt: "Airbus" },
    { src: Israel, alt: "Technion" },
    { src: Expiris, alt: "Expiris" },
    { src: Atem, alt: "ATEM" },
    { src: Urgo, alt: "Urgo" },
];

export default function Trusted() {
    return (
        <section className="w-full bg-[#D3DBED4D] py-14 sm:py-[60px]">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
                <h2 className="text-center text-[24px] font-semibold tracking-[-1px] text-[#07328F] md:text-[40px] md:tracking-[-2px]">
                    Trusted by 50+ materials and chemicals <span className="text-[#6AB896]">innovators</span>
                </h2>

                <div
                    className="mt-12 mb-8 overflow-hidden sm:mt-16 sm:mb-12"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                    }}
                >
                    <div className="animate-marquee flex min-w-max items-center gap-12 sm:gap-20 lg:gap-30">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 shrink-0 object-contain sm:h-12 md:h-14 lg:h-17"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
