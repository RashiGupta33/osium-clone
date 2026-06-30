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
    { src: CNRS, alt: "CNRS", width: "w-[50px]", fit: "cover" },
    { src: H545, alt: "5H45", width: "w-[70px]", fit: "cover" },
    { src: Aperam, alt: "Aperam", width: "w-[136px]", fit: "cover" },
    { src: Safran, alt: "Safran", width: "w-[187px]", fit: "cover" },
    { src: Decathlon, alt: "Decathlon", width: "w-[218px]", fit: "cover" },
    { src: Cemef, alt: "Cemef", width: "w-[84px]", fit: "contain" },
    { src: Stan, alt: "Stanford", width: "w-[149px]", fit: "cover" },
    { src: Filab, alt: "Filab", width: "w-[126px]", fit: "cover" },
    { src: LVMH, alt: "LVMH", width: "w-[120px]", fit: "cover" },
    { src: Fluro, alt: "Fluorotechnique", width: "w-[244px]", fit: "cover" },
    { src: Sorbonne, alt: "Sorbonne", width: "w-[165px]", fit: "cover" },
    { src: VNComposites, alt: "VN Composites", width: "w-[185px]", fit: "cover" },
    { src: Colas, alt: "Colas", width: "w-[130px]", fit: "cover" },
    { src: Maes, alt: "Maestria", width: "w-[206px]", fit: "cover" },
    { src: PSL, alt: "PSL", width: "w-[109px]", fit: "contain" },
    { src: Resicare, alt: "Resicare", width: "w-[72px]", fit: "cover" },
    { src: Airbus, alt: "Airbus", width: "w-[173px]", fit: "cover" },
    { src: Israel, alt: "Technion", width: "w-[120px]", fit: "cover" },
    { src: Expiris, alt: "Expiris", width: "w-[110px]", fit: "cover" },
    { src: Atem, alt: "ATEM", width: "w-[159px]", fit: "cover" },
    { src: Urgo, alt: "Urgo", width: "w-[167px]", fit: "cover" },
];

export default function Trusted() {
    return (
        <section className="w-full bg-[#D3DBED4D] py-[60px]">
            <div className="mx-auto max-w-[1440px] px-8">
                <h2 className="text-center text-[24px] md:text-[40px] font-semibold tracking-[-2px] text-[#07328F]">
                    Trusted by 50+ materials and chemicals{" "}
                    <span className="text-[#6AB896]">innovators</span>
                </h2>

                <div
                    className="mt-25 mb-20 overflow-hidden"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                    }}
                >
                    <div className="flex min-w-max items-center gap-30 animate-marquee">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className={`h-17 shrink-0 object-cover`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}