import './loading.css'
export default function Loading() {

    return (

        <section className="min-h-screen bg-white flex items-center justify-center overflow-hidden">

            <div className="text-center">

                {/* Logo Circle */}

                <div className="mx-auto mb-12 w-32 h-32 rounded-full bg-gradient-to-br from-[#F2B807] via-[#F27405] to-[#BF0404] flex items-center justify-center animate-pulse">

                    <span className="text-white text-5xl font-black">

                        TVK

                    </span>

                </div>

                {/* Animated Text */}

                <div className="h-20 overflow-hidden">

                    <div className="animate-[slideWords_8s_infinite]">

                        <h2 className="text-[#590202] text-4xl font-black h-20 flex items-center justify-center">

                            Track Our Government

                        </h2>

                        <h2 className="text-[#590202] text-4xl font-black h-20 flex items-center justify-center">

                            Track Every Scheme

                        </h2>

                        <h2 className="text-[#590202] text-4xl font-black h-20 flex items-center justify-center">

                            Measure Public Satisfaction

                        </h2>

                        <h2 className="text-[#590202] text-4xl font-black h-20 flex items-center justify-center">

                            Monitor Assembly Performance

                        </h2>

                        <h2 className="text-[#590202] text-4xl font-black h-20 flex items-center justify-center">

                            Transparent Governance For All

                        </h2>

                        <h2 className="text-[#590202] text-4xl font-black h-20 flex items-center justify-center">

                            Track Our Government

                        </h2>

                    </div>

                </div>

                <p className="text-[#F27405] mt-8 text-lg">

                    Governance • Transparency • Accountability

                </p>

                {/* Loading Bar */}

                <div className="mt-12 w-80 mx-auto h-3 bg-[#F2B807]/20 rounded-full overflow-hidden">

                    <div className="h-full bg-gradient-to-r from-[#F2B807] via-[#F27405] to-[#BF0404] animate-[loadingBar_2s_linear_infinite]" />

                </div>

            </div>

        </section>

    );

}
