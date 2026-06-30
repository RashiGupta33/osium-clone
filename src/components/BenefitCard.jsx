export default function BenefitCard({
    icon,
    title,
    description,
}) {
    return (
        <div className="rounded-[10px] bg-[#073285] px-6 py-6 sm:px-8 sm:py-8">
            <img
                src={icon}
                alt={title}
                className="mb-6 mt-2 h-16 w-16 sm:mb-8 sm:h-19 sm:w-19"
            />

            <h3 className="mt-4 text-[22px] font-bold text-white sm:mt-6 sm:text-[24px]">
                {title}
            </h3>

            <p className="mt-6 text-[15px] leading-7 text-white/90 sm:mt-8">
                {description}
            </p>
        </div>
    );
}
