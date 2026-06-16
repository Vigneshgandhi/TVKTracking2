import Image from "next/image";
import AboutBanner from "../../../../public/TransistionImageAbout.png";

export default function InformationAbout() {

    const welfareActivities = [
        "Educational Assistance",
        "Blood Donation Camps",
        "Flood Relief Activities",
        "Welfare Programs",
        "Student Recognition Events",
        "Public Service Campaigns"
    ];

    const partyFocus = [
        "Transparent Governance",
        "Anti-Corruption Administration",
        "Youth Participation",
        "Social Justice",
        "Administrative Accountability",
        "Education & Employment Reforms"
    ];

    const ideology = [
        "Secular",
        "Development-Focused",
        "Democratic",
        "People-Centric",
        "Social Justice Oriented"
    ];

    const challenges = [
        "Political Inexperience Criticism",
        "Organizational Expansion Challenges",
        "Media Pressure and Public Scrutiny",
        "Competition Against Established Parties",
        "Election and Alliance Pressure"
    ];

    const growthFactors = [
        "Grassroots Expansion",
        "Youth Mobilization",
        "Digital Campaigning",
        "District-Level Meetings",
        "Public Welfare Activities",
        "Direct Public Outreach"
    ];

    return (

        <section className="
            w-full
            bg-none
            text-white
            pt-[5%]
            pb-[8%]
        ">

            <div className="
                w-[80%]
                mx-auto
            ">
                

                {/* Header */}

                <div className="
                    text-center
                    mb-24
                ">

                    <p className="
                        uppercase
                        tracking-[0.4em]
                        text-yellow-100
                        text-sm
                        font-semibold
                        mb-5
                    ">
                        About Tamilaga Vettri Kazhagam
                    </p>

                    <h1 className="
                        text-5xl
                        md:text-7xl
                        font-black
                        leading-tight
                        mb-8
                    ">
                        From Public Influence
                        <br />
                        To Political Leadership
                    </h1>

                    <p className="
                        text-white/90
                        text-lg
                        md:text-xl
                        leading-relaxed
                        max-w-5xl
                        mx-auto
                    ">
                        Tamilaga Vettri Kazhagam (TVK) was officially founded
                        by Vijay on 2 February 2024 with the vision of
                        building a transparent, accountable, and
                        development-oriented government for Tamil Nadu.
                    </p>

                </div>

                {/* Formation Section */}

                <div className="
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    rounded-[36px]
                    p-12
                    mb-16
                ">

                    <h2 className="
                        text-4xl
                        font-black
                        mb-8
                    ">
                        Formation of TVK
                    </h2>

                    <p className="
                        text-white/85
                        text-lg
                        leading-relaxed
                        mb-6
                    ">
                        Tamilaga Vettri Kazhagam was officially launched
                        on 2 February 2024, marking Vijay’s formal
                        entry into active politics after years of
                        public speculation regarding his political ambitions.
                    </p>

                    <p className="
                        text-white/80
                        text-lg
                        leading-relaxed
                        mb-10
                    ">
                        The foundation of TVK emerged gradually through
                        Vijay Makkal Iyakkam, a welfare-based public
                        movement that operated across Tamil Nadu conducting
                        several social service initiatives.
                    </p>

                    <div className="
                        grid
                        md:grid-cols-3
                        gap-5
                    ">

                        {welfareActivities.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    bg-white/10
                                    border
                                    border-white/20
                                    rounded-2xl
                                    p-5
                                    text-center
                                    font-medium
                                "
                            >
                                {item}
                            </div>

                        ))}

                    </div>

                </div>

                {/* Why TVK Was Formed */}

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-10
                    mb-16
                ">

                    <div className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-[36px]
                        p-10
                    ">

                        <h2 className="
                            text-4xl
                            font-black
                            mb-6
                        ">
                            Why TVK Was Formed
                        </h2>

                        <p className="
                            text-white/85
                            leading-relaxed
                            text-lg
                            mb-6
                        ">
                            TVK positioned itself as an alternative
                            to the long-standing political dominance
                            in Tamil Nadu politics and aimed to
                            establish transparent governance,
                            accountability, and efficient administration.
                        </p>

                        <ul className="
                            space-y-4
                            text-white/80
                            text-lg
                        ">

                            <li>• Declining trust in traditional politics</li>
                            <li>• Corruption concerns in governance</li>
                            <li>• Limited youth political participation</li>
                            <li>• Need for welfare modernization</li>
                            <li>• Demand for transparent administration</li>

                        </ul>

                    </div>

                    <div className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-[36px]
                        p-10
                    ">

                        <h2 className="
                            text-4xl
                            font-black
                            mb-6
                        ">
                            Party Focus
                        </h2>

                        <div className="
                            grid
                            grid-cols-2
                            gap-4
                        ">

                            {partyFocus.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white/10
                                        border
                                        border-white/20
                                        rounded-2xl
                                        p-5
                                        text-center
                                    "
                                >
                                    {item}
                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Ideology */}

                <div className="
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    rounded-[36px]
                    p-12
                    mb-16
                ">

                    <h2 className="
                        text-4xl
                        font-black
                        mb-10
                    ">
                        Ideological Position
                    </h2>

                    <div className="
                        flex
                        flex-wrap
                        gap-5
                        mb-10
                    ">

                        {ideology.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    px-6
                                    py-4
                                    rounded-full
                                    bg-yellow-400
                                    text-black
                                    font-bold
                                "
                            >
                                {item}
                            </div>

                        ))}

                    </div>

                    <p className="
                        text-white/85
                        text-lg
                        leading-relaxed
                    ">
                        TVK publicly referenced leaders such as
                        Periyar, Ambedkar, Kamaraj, and Abdul Kalam
                        as major inspirations behind its governance
                        and social justice philosophy.
                    </p>

                </div>

                {/* Challenges & Growth */}

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-10
                    mb-16
                ">

                    <div className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-[36px]
                        p-10
                    ">

                        <h2 className="
                            text-4xl
                            font-black
                            mb-8
                        ">
                            Problems Faced
                        </h2>

                        <div className="
                            flex
                            flex-col
                            gap-5
                        ">

                            {challenges.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white/10
                                        border
                                        border-white/20
                                        rounded-2xl
                                        p-5
                                    "
                                >
                                    {item}
                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-[36px]
                        p-10
                    ">

                        <h2 className="
                            text-4xl
                            font-black
                            mb-8
                        ">
                            How TVK Built Support
                        </h2>

                        <div className="
                            flex
                            flex-col
                            gap-5
                        ">

                            {growthFactors.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white/10
                                        border
                                        border-white/20
                                        rounded-2xl
                                        p-5
                                    "
                                >
                                    {item}
                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Victory Section */}

                <div className="
                    bg-black/20
                    backdrop-blur-xl
                    border
                    border-white/20
                    rounded-[40px]
                    p-14
                    text-center
                ">

                    <p className="
                        uppercase
                        tracking-[0.35em]
                        text-yellow-300
                        text-sm
                        mb-5
                    ">
                        2026 Election Victory
                    </p>

                    <h2 className="
                        text-5xl
                        md:text-6xl
                        font-black
                        leading-tight
                        mb-8
                    ">
                        A New Political Era
                    </h2>

                    <p className="
                        text-white/90
                        text-lg
                        md:text-xl
                        leading-relaxed
                        max-w-5xl
                        mx-auto
                    ">
                        Following the 2026 Tamil Nadu Assembly Election,
                        TVK emerged as a major political force promoting
                        transparent governance, digital administration,
                        infrastructure modernization, youth employment,
                        education reforms, and corruption-free governance.
                        Vijay was sworn in as Chief Minister of Tamil Nadu
                        on 10 May 2026.
                    </p>

                </div>

            </div>
            {/* Historic First Election Victory */}

<div className="
    mt-16
    bg-black
    rounded-[40px]
    border
    border-white/20
    shadow-2xl
    overflow-hidden
">

    <div className="
        grid
        lg:grid-cols-2
        gap-10
        items-center
        p-14
    ">

        {/* Left Content */}

        <div>

            <p className="
                uppercase
                tracking-[0.35em]
                text-yellow-100
                text-sm
                mb-5
                font-semibold
            ">
                Historic Political Achievement
            </p>

            <h2 className="
                text-5xl
                md:text-6xl
                font-black
                leading-tight
                mb-8
                text-white
            ">
                Massive Victory
                <br />
                In The First Election
            </h2>

            <p className="
                text-white/90
                text-lg
                leading-relaxed
                mb-8
            ">
                TVK achieved one of the most remarkable political
                breakthroughs in Tamil Nadu politics by emerging
                victorious in its very first Assembly election.
                The party rapidly transformed from a newly formed
                political movement into a major governing force
                through youth mobilization, grassroots outreach,
                and public demand for political change.
            </p>

            <p className="
                text-white/85
                text-lg
                leading-relaxed
            ">
                Political analysts described the result as a
                historic shift in Tamil Nadu’s political landscape,
                with TVK securing one of the highest vote shares
                ever achieved by a first-time political party
                in the state’s electoral history.
            </p>

        </div>

        {/* Right Statistics */}

        <div className="
            grid
            grid-cols-2
            gap-6
        ">

            {[
                {
                    value: "2026",
                    label: "First Election Year"
                },
                {
                    value: "34.92 Vote Share %",
                    label: "Election Victory"
                },
                {
                    value: "1.72cr Votes",
                    label: "Public Mandate"
                },
                {
                    value: "Youth Wave + women",
                    label: "Mass Support"
                }
            ].map((item, index) => (

                <div
                    key={index}
                    className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-[28px]
                        p-8
                        text-center
                    "
                >

                    <h3 className="
                        text-yellow-300
                        text-3xl
                        font-black
                        mb-3
                    ">
                        {item.value}
                    </h3>

                    <p className="
                        text-white/85
                        text-lg
                    ">
                        {item.label}
                    </p>

                </div>

            ))}

        </div>
        </div>

            {/* Bottom Highlight */}

            <div className="
                border-t
                border-white/10
                bg-black/20
                px-14
                py-8
                text-center
            ">

                <p className="
                    text-white
                    text-2xl
                    md:text-3xl
                    font-bold
                    leading-relaxed
                ">
                    “From a newly formed movement to forming the government —
                    TVK’s first election became a defining political moment
                    in Tamil Nadu history.”
                </p>

            </div>

        </div>                    
        </section>
    );
}