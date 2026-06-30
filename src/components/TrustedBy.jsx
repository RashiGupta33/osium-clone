import H545 from "../assets/5h45.avif";
import Airbus from "../assets/airbus.avif";
import Atem from "../assets/atem.avif";
import Cemef from "../assets/cemef.avif";
import CNRS from "../assets/cnrs.avif";
import Colas from "../assets/colas.avif";
import Decathlon from "../assets/decathalon.png"; // if this one is PNG
import Expiris from "../assets/expiris.avif";
import Filab from "../assets/filab.avif";
import Fluro from "../assets/fluro.avif";
import Israel from "../assets/israel.avif";
import LVMH from "../assets/lvmh.avif";
import Maes from "../assets/maes.avif";
import MineParis from "../assets/mineparis.avif";
import PSL from "../assets/psl.avif";
import Resicare from "../assets/resicare.avif";

const logos = [
    { src: CNRS, alt: "CNRS", width: "w-[95px]" },
    { src: H545, alt: "5h45", width: "w-[70px]" },
    { src: Airbus, alt: "Airbus", width: "w-[170px]" },
    { src: Atem, alt: "ATEM", width: "w-[170px]" },
    { src: Cemef, alt: "Cemef", width: "w-[150px]" },
    { src: Colas, alt: "Colas", width: "w-[150px]" },
    { src: Decathlon, alt: "Decathlon", width: "w-[210px]" },
    { src: Expiris, alt: "Expiris", width: "w-[130px]" },
    { src: Filab, alt: "Filab", width: "w-[180px]" },
    { src: Fluro, alt: "Fluro", width: "w-[210px]" },
    { src: Israel, alt: "Technion", width: "w-[170px]" },
    { src: LVMH, alt: "LVMH", width: "w-[170px]" },
    { src: Maes, alt: "Maestria", width: "w-[220px]" },
    { src: MineParis, alt: "Mines Paris", width: "w-[150px]" },
    { src: PSL, alt: "PSL", width: "w-[120px]" },
    { src: Resicare, alt: "Resicare", width: "w-[110px]" },
];


export default function Trusted() {
    return (
        <section className="w-full bg-[#D3DBED4D] py-[59px]">

            <div className="mx-auto max-w-[1400px] px-10">

                <h2 className="text-center text-[40px] font-semibold tracking-[-2px] text-[#07328F]">
                    Trusted by 50+ materials and chemicals{" "}
                    <span className="text-[#6AB896]">
                        innovators
                    </span>
                </h2>

                {/* Marquee */}
                <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">

                    <div className="flex w-30 animate-marquee gap-[30px]">

                        {logos.concat(logos).map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className={logo.className}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}