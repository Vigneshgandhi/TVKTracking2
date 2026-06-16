import Link from "next/link";
import banner from "../../../../public/Banner1-main.png";
import Image from "next/image";

export default function Main() {

    return (

        <section className="
            min-h-screen
            px-8
            pt-32
            pb-2
            bg-black
        ">

            <div className="
                max-w-7xl
                mx-auto
                grid
                lg:grid-cols-2
                gap-14
                items-center
            ">

                {/* Left Content */}

                <div>

                    <div className="
                        inline-block
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/30
                        bg-white/10
                        backdrop-blur-md
                        text-white
                        text-sm
                        mb-6
                    ">
                        TVK Governance Tracker
                    </div>

                    <h1 className="
                        text-5xl
                        md:text-7xl
                        font-black
                        text-white
                        leading-tight
                        mb-6
                    ">
                        Transparent
                        <br />
                        Government
                    </h1>

                    <p className="
                        text-white/75
                        text-lg
                        leading-relaxed
                        mb-10
                        max-w-xl
                    ">
                        Monitor manifesto promises, track governance
                        performance, analyze minister activities,
                        and follow real-time political accountability
                        across Tamil Nadu.
                    </p>

                    <div className="flex gap-5">

                        <Link className="
                            bg-yellow-400
                            hover:bg-yellow-300
                            text-black
                            font-bold
                            px-7
                            py-3
                            rounded-2xl
                            transition-all
                        " href="/Manifesto">
                            Explore Manifesto
                        </Link>

                        <Link className="
                            border
                            border-white/30
                            bg-white/10
                            backdrop-blur-md
                            text-white
                            px-7
                            py-3
                            rounded-2xl
                            hover:bg-white/20
                            transition-all
                        " href="/Schemes">
                            Explore Schemes
                        </Link>

                    </div>

                </div>

                {/* Right Banner Image */}

                <div className="relative">

                    <div className="
                        absolute
                        inset-0
                        bg-yellow-500/20
                        blur-3xl
                        rounded-full
                    "></div>

                    <Image
                        width={"60%"}
                        height={"40%"}
                        src={banner}
                        loading="eager"
                        loadpriority={"true"}
                        alt="TVK Transparent Government Banner"
                        className="
                            relative
                            z-10
                            rounded-3xl
                            border
                            border-white/20
                            shadow-2xl
                            w-full
                            object-cover
                        "
                    />

                </div>

            </div>

        </section>
    );
}