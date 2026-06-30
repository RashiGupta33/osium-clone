export default function BenefitCard({
    icon,
    title,
    description,
}) {
    return (
        <div className="rounded-[10px] bg-[#073285] p-10 px-8 py-4">

            <img
                src={icon}
                alt={title}
                className="mb-8 ml-2 mt-4 h-19 w-19"
            />

            <h3 className="mt-10 text-[24px] font-bold text-white">
                {title}
            </h3>

            <p className="mt-10 text-[15px] leading-7 text-white/90">
                {description}
            </p>

        </div>
    );
}