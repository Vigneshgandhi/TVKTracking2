import Link from "next/link";

export default function SwearingInCeremonyCard() {

    return (

        <section className="py-20 bg-black">

            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-black rounded-[40px] overflow-hidden shadow-2xl border border-b-4 border-white/20">

                    <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-16">

                        <div>

                            <span className="bg-[#F2B807] text-black font-bold px-5 py-2 rounded-full inline-block mb-6">
                                Historic Event
                            </span>

                            <h2 className="text-white text-5xl font-black mb-6">
                                Chief Minister Swearing-In Ceremony
                            </h2>

                            <p className="text-white/90 text-xl leading-relaxed mb-8">
                                On <strong>10 May 2026</strong>, the newly
                                elected TVK Government formally assumes
                                office through the official swearing-in
                                ceremony held at Chennai. The event marks
                                the beginning of a new administration
                                committed to transparent governance,
                                development, welfare, and public service.
                            </p>

                            <div className="flex flex-wrap gap-4">

                                <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4">

                                    <p className="text-white/60 text-sm">
                                        Date
                                    </p>

                                    <h3 className="text-white text-2xl font-black">
                                        10 May 2026
                                    </h3>

                                </div>

                                <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4">

                                    <p className="text-white/60 text-sm">
                                        Location
                                    </p>

                                    <h3 className="text-white text-2xl font-black">
                                        Chennai
                                    </h3>

                                </div>

                                <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4">

                                    <p className="text-white/60 text-sm">
                                        Event
                                    </p>

                                    <h3 className="text-white text-2xl font-black">
                                        Oath Ceremony
                                    </h3>

                                </div>

                            </div>

                        </div>

                        <div>

                            <div className="bg-white rounded-[32px] p-10">

                                <h3 className="text-[#590202] text-3xl font-black mb-8">
                                    Ceremony Highlights
                                </h3>

                                <div className="space-y-5">

                                    <div className="flex gap-4">

                                        <div className="w-3 h-3 rounded-full bg-[#F2B807] mt-2" />

                                        <p className="text-[#590202] font-medium">
                                            Chief Minister takes oath of office.
                                        </p>

                                    </div>

                                    <div className="flex gap-4">

                                        <div className="w-3 h-3 rounded-full bg-[#F2B807] mt-2" />

                                        <p className="text-[#590202] font-medium">
                                            Council of Ministers sworn in.
                                        </p>

                                    </div>

                                    <div className="flex gap-4">

                                        <div className="w-3 h-3 rounded-full bg-[#F2B807] mt-2" />

                                        <p className="text-[#590202] font-medium">
                                            Governance priorities announced.
                                        </p>

                                    </div>

                                    <div className="flex gap-4">

                                        <div className="w-3 h-3 rounded-full bg-[#F2B807] mt-2" />

                                        <p className="text-[#590202] font-medium">
                                            Beginning of the 2026–2031 administration.
                                        </p>

                                    </div>

                                </div>

                                <div className="mt-8 p-6 bg-[#FFF7E0] rounded-2xl mb-10">

                                    <p className="text-[#590202] font-semibold text-lg">
                                        "A new chapter of governance begins with
                                        a commitment to transparency, development,
                                        and public welfare."
                                    </p>

                                </div>
                                <Link className="bg-yellow-600 text-white p-5 mt-10 rounded-lg font-medium font-sans" href="https://www.youtube.com/watch?v=Ek6nykUWypc">
                                    Watch the ceremony
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}