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
        <section className="w-full bg-white py-24 -mb-4">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}

                <h2 className="mb-14 -mt-15 text-center text-[30px] font-semibold tracking-[-0px] text-[#6AB896]">
                    We are supported by the best
                </h2>

                {/* Marquee */}

                <div
                    className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
                >
                    <div className="flex w-max animate-marquee gap-10">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Partner Logo"
                                className="h-14 w-auto flex-shrink-0 object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}