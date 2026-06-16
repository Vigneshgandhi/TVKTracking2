import Image from "next/image";
import CM from "../../../../public/CM 2026.jpg";
export default function ChiefMinisterProfile() {

    return (

        <section className="
            px-8
            pb-32
            bg-black
        ">

            <div className="
                max-w-7xl
                mx-auto
            ">

                {/* Section Header */}

                <div className="mb-14">

                    <p className="
                        text-yellow-400
                        uppercase
                        tracking-[0.3em]
                        text-sm
                        mb-4
                    ">
                        Leadership Profile
                    </p>

                    <h2 className="
                        text-5xl
                        font-black
                        text-white
                        mb-5
                    ">
                        Chief Minister Profile
                    </h2>

                    <p className="
                        text-white/70
                        text-lg
                        max-w-3xl
                        leading-relaxed
                    ">
                        Track leadership initiatives, governance metrics,
                        manifesto execution, assembly performance,
                        public approval ratings, and administrative decisions.
                    </p>

                </div>

                {/* Main Card */}

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    rounded-[32px]
                    overflow-hidden
                    shadow-2xl
                ">

                    {/* Left Image */}

                    <div className="relative h-full">

                        <div className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/60
                            to-transparent
                            z-10
                        "></div>

                        <Image
                            src={CM}
                            alt="Chief Minister"
                            className="
                                w-full
                                h-full
                                object-cover
                            "
                            width={"60%"}
                            height={"auto"}
                        />

                        <div className="
                            absolute
                            bottom-10
                            left-10
                            z-20
                        ">

                            <h3 className="
                                text-white
                                text-4xl
                                font-black
                                mb-2
                            ">
                                Thalapathy Vijay
                            </h3>

                            <p className="
                                text-yellow-400
                                text-lg
                                font-semibold
                            ">
                                Chief Minister of Tamil Nadu
                            </p>

                        </div>

                    </div>

                    {/* Right Content */}

                    <div className="p-10">

                        {/* Quote */}

                        <div className="
                            bg-white/10
                            border
                            border-white/10
                            rounded-2xl
                            p-6
                            mb-8
                        ">

                            <p className="
                                text-white/90
                                text-xl
                                italic
                                leading-relaxed
                            ">
                                “Transparency and accountability are
                                the foundations of a people-first government.”
                            </p>

                        </div>

                        {/* Stats */}

                        <div className="
                            grid
                            grid-cols-2
                            gap-5
                            mb-10
                        ">

                            {[
                                {
                                    title: "Total Seats won",
                                    value: "108"
                                },
                                {
                                    title: "Promises Count",
                                    value: "68"
                                },
                                {
                                    title: "Assembly Sessions Attended",
                                    value: "2"
                                }
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white/10
                                        border
                                        border-white/10
                                        rounded-2xl
                                        p-6
                                    "
                                >

                                    <h4 className="
                                        text-yellow-400
                                        text-3xl
                                        font-black
                                        mb-2
                                    ">
                                        {item.value}
                                    </h4>

                                    <p className="
                                        text-white/70
                                        text-sm
                                    ">
                                        {item.title}
                                    </p>

                                </div>

                            ))}

                        </div>

                        {/* Description */}

                        <div className="mb-10">

                            <h4 className="
                                text-white
                                text-2xl
                                font-bold
                                mb-4
                            ">
                                Governance Overview
                            </h4>

                            <p className="
                                text-white/70
                                leading-relaxed
                                text-lg
                            ">
                                The Governance Tracker monitors policy
                                implementation, public welfare projects,
                                education reforms, infrastructure growth,
                                employment initiatives, and administrative
                                transparency under the current government.
                            </p>

                        </div>

                        {/* Buttons */}
                    </div>

                </div>

            </div>

        </section>
    );
}