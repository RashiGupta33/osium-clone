export default function Contact() {
    return (
        <section
            id="faq"
            className="w-full bg-[#DEECFA] py-24 -mb-5"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-[48px] font-semibold leading-[1.5] tracking-[0px] text-[#07328F]">
                        Get in touch
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-[21px] leading-[1.5] tracking-[-0.3px] text-[#07328F]">
                        Talk to one of our experts and discover how we can help
                        you streamline your end-to-end materials and chemicals
                        development cycles.
                    </p>
                </div>

                {/* Typeform */}

                <div className="mx-auto mt-16 max-w-3xl">
                    <div className="overflow-hidden shadow-lg">
                        <iframe
                            src="https://form.typeform.com/to/utdtcEYM"
                            title="Contact Form"
                            className="h-[410px] w-full border-0"
                            allow="microphone; camera"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}