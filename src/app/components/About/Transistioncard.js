import Image from "next/image";
import TransImage from "../../../../public/TransistionImageAbout.png";
import InformationAbout from "./InformationAbout";
import JanaNayaganIssuePage from "./JanaNayaganissue";

export default function TransitionCard() {

    return (

        <section className="
            w-full
            py-[10%]
            bg-black
        ">

            <div className="
                w-[80%]
                mx-auto
                flex
                flex-col
                items-center
                justify-center
            ">

                {/* Main Banner */}

                <div className="
                    w-full
                    h-full
                    overflow-hidden
                    rounded-[36px]
                    border-[1px] 
                    border-solid 
                    border-white
                    shadow-2xl
                ">

                    <Image
                        src={TransImage}
                        alt="Actor to Politician Transition"
                        priority
                        className="
                            w-full
                            h-[620px]
                            object-cover
                        "
                    />
                </div>

                {/* Summary Section */}

                <InformationAbout/>
                <JanaNayaganIssuePage/>
                
            </div>

        </section>
    );
}