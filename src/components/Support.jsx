const logos = [
    "https://framerusercontent.com/assets/7FCjdhdqgdH8jArxdqyyfOq8ys.png",
    "https://framerusercontent.com/assets/sQneYGcJgvHvPQY8xlroZ6T58zQ.png",
    "https://framerusercontent.com/assets/DaUF4kHfOhFO6Sp2yJGpcopeY.png",
    "https://framerusercontent.com/assets/xj94S4bKWi4vmeyDUSwKCT3fw.png",
    "https://framerusercontent.com/assets/6fFkaZ3jK4w8txzw3jAZCtfbsE.png",
    "https://framerusercontent.com/images/CdMw7cb8W1y6n7e0vpxqigYBrbU.png",
    "https://framerusercontent.com/assets/w5Cb35eR75ZOFaXv87i9BtCKzA.png",
    "https://framerusercontent.com/assets/vYByMIPbK98eI4BJA5O9N4LOQ.png",
    "https://framerusercontent.com/assets/dKLUQHAwMRvf4l50enxTJb507v4.png",
];

export default function SupportedBy() {
    return (
        <section className="-mb-4 w-full bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <h2 className="mb-10 text-center text-[24px] font-semibold text-[#6AB896] sm:mb-14 sm:text-[30px]">
                    We are supported by the best
                </h2>

                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                    <div className="flex w-max animate-marquee gap-8 sm:gap-10">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Partner Logo"
                                className="h-10 w-auto flex-shrink-0 object-contain sm:h-14"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
