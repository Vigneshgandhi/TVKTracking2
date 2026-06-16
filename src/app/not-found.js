import Link from "next/link";

export default function NotFound() {

    return (

        <section className="min-h-screen bg-white flex items-center justify-center px-6">

            <div className="max-w-4xl text-center">

                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#F2B807]/20 mb-10">

                    <span className="text-[#BF0404] text-7xl font-black">
                        404
                    </span>

                </div>

                <h1 className="text-[#590202] text-6xl md:text-7xl font-black mb-6">

                    Page Not Found

                </h1>

                <p className="text-[#F27405] text-xl leading-relaxed max-w-2xl mx-auto mb-10">

                    The page you are looking for may have been moved,
                    removed, renamed, or is temporarily unavailable.
                    Please use the navigation options below to continue
                    exploring the TVK Governance Portal.

                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">

                    <Link
                        href="/"
                        className="
                            bg-[#F2B807]
                            hover:bg-[#F29F05]
                            text-black
                            font-bold
                            px-8
                            py-4
                            rounded-2xl
                            transition-all
                        "
                    >
                        Return Home
                    </Link>

                    <Link
                        href="/Schemes"
                        className="
                            bg-[#BF0404]
                            hover:bg-[#590202]
                            text-white
                            font-bold
                            px-8
                            py-4
                            rounded-2xl
                            transition-all
                        "
                    >
                        View Schemes
                    </Link>

                    <Link
                        href="/Assembly"
                        className="
                            border-2
                            border-[#BF0404]
                            text-[#BF0404]
                            hover:bg-[#BF0404]
                            hover:text-white
                            font-bold
                            px-8
                            py-4
                            rounded-2xl
                            transition-all
                        "
                    >
                        Assembly Sessions
                    </Link>

                </div>

                <div className="bg-[#FFF7E0] border border-[#F2B807] rounded-[32px] p-8 max-w-3xl mx-auto">

                    <h2 className="text-[#590202] text-2xl font-black mb-4">

                        Governance Transparency Portal

                    </h2>

                    <p className="text-[#590202] leading-relaxed">

                        Track government schemes, assembly proceedings,
                        ministers, public announcements, governance
                        reports, manifesto commitments, and public
                        development initiatives through the official
                        TVK Governance Tracking Platform.

                    </p>

                </div>

            </div>

        </section>

    );

}