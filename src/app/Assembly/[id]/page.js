"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
    ArrowLeft,
    Pencil,
    Building2,
    Calendar,
    Users,
    PlayCircle
} from "lucide-react";

export default function AssemblyViewPage() {

    const { id } = useParams();

    const router = useRouter();

    const [assembly, setAssembly] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchAssembly();

    }, [id]);

    const fetchAssembly =
        async () => {

            try {

                const response =
                    await fetch(

                        `http://localhost:5000/api/assembly/${id}`

                    );

                const data =
                    await response.json();

                if (data.success) {

                    setAssembly(
                        data.data
                    );

                }

            }
            catch (error) {

                console.log(error);

            }
            finally {

                setLoading(false);

            }

        };

    if (loading) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

                <h1 className="text-white text-4xl font-black">

                    Loading Assembly Session...

                </h1>

            </section>

        );

    }

    if (!assembly) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

                <h1 className="text-white text-4xl font-black">

                    Assembly Session Not Found

                </h1>

            </section>

        );

    }

    return (

        <section className="min-h-screen bg-[#0d0d0d] text-white">

            <div className="max-w-7xl mx-auto px-8 py-12">

                {/* Header */}

                <div className="flex justify-between items-start mb-10">

                    <div>

                        <button
                            onClick={() =>
                                router.back()
                            }
                            className="flex items-center gap-2 text-yellow-400 mb-6"
                        >

                            <ArrowLeft size={18} />

                            Back

                        </button>

                        <div className="flex items-center gap-4">

                            <Building2
                                size={42}
                                className="text-yellow-400"
                            />

                            <div>

                                <h1 className="text-5xl font-black">

                                    {assembly.title}

                                </h1>

                                <p className="text-white/60 mt-2">

                                    Assembly Session #
                                    {assembly.sessionNumber}

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Information Grid */}

                <div className="grid md:grid-cols-4 gap-6 mb-10">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                        <Calendar className="mb-4 text-yellow-400" />

                        <p className="text-white/50 mb-2">

                            Assembly Date

                        </p>

                        <h3 className="font-bold">

                            {

                                new Date(
                                    assembly.assemblyDate
                                ).toLocaleDateString(
                                    "en-IN"
                                )

                            }

                        </h3>

                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                        <p className="text-white/50 mb-2">

                            Category

                        </p>

                        <h3 className="font-bold">

                            {assembly.category}

                        </h3>

                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                        <p className="text-white/50 mb-2">

                            Status

                        </p>

                        <h3 className="font-bold">

                            {assembly.status}

                        </h3>

                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                        <p className="text-white/50 mb-2">

                            Session Number

                        </p>

                        <h3 className="font-bold">

                            {assembly.sessionNumber}

                        </h3>

                    </div>

                </div>

                {/* Summary */}

                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-8">

                    <h2 className="text-yellow-400 text-3xl font-black mb-6">

                        Summary

                    </h2>

                    <p className="text-white/80 leading-loose">

                        {assembly.summary}

                    </p>

                </div>

                {/* Full Content */}

                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-8">

                    <h2 className="text-yellow-400 text-3xl font-black mb-6">

                        Full Proceedings

                    </h2>

                    <p className="text-white/80 whitespace-pre-line leading-loose">

                        {assembly.fullContent}

                    </p>

                </div>

                {/* Ministers */}

                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-8">

                    <div className="flex items-center gap-3 mb-6">

                        <Users className="text-yellow-400" />

                        <h2 className="text-yellow-400 text-3xl font-black">

                            Ministers Involved

                        </h2>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {

                            assembly.ministersInvolved?.map(

                                (minister, index) => (

                                    <span
                                        key={index}
                                        className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold"
                                    >

                                        {minister}

                                    </span>

                                )

                            )

                        }

                    </div>

                </div>

                {/* Outcome */}

                {

                    assembly.outcome && (

                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-8">

                            <h2 className="text-yellow-400 text-3xl font-black mb-6">

                                Outcome

                            </h2>

                            <p className="text-white/80 leading-loose">

                                {assembly.outcome}

                            </p>

                        </div>

                    )

                }

                {/* YouTube Link */}

                {

                    assembly.YoutubeLink && (

                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

                            <h2 className="text-yellow-400 text-3xl font-black mb-6">

                                Session Recording

                            </h2>

                            <a
                                href={assembly.YoutubeLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 bg-red-600 px-6 py-4 rounded-2xl font-bold"
                            >

                                <PlayCircle />

                                Watch Session

                            </a>

                        </div>

                    )

                }

            </div>

        </section>

    );

}
