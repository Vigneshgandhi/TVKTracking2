"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
    ArrowLeft,
    Pencil,
    Calendar,
    FileBarChart2
} from "lucide-react";

export default function ReportViewPage() {

    const { id } = useParams();

    const router = useRouter();

    const [report, setReport] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchReport();

    }, [id]);

    const fetchReport =
        async () => {

            try {

                const response =
                    await fetch(

                        `http://localhost:5000/api/reports/${id}`

                    );

                const data =
                    await response.json();

                if (data.success) {

                    setReport(
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

            <section className="min-h-screen bg-black flex items-center justify-center">

                <h1 className="text-white text-4xl font-black">

                    Loading Report...

                </h1>

            </section>

        );

    }

    if (!report) {

        return (

            <section className="min-h-screen bg-black flex items-center justify-center">

                <h1 className="text-white text-4xl font-black">

                    Report Not Found

                </h1>

            </section>

        );

    }

    return (

        <section className="min-h-screen bg-black text-white">

            {/* Header */}

            <div className="border-b border-white/10">

                <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">

                    <button
                        onClick={() =>
                            router.back()
                        }
                        className="flex items-center gap-3 text-white/70 hover:text-white"
                    >

                        <ArrowLeft />

                        Back

                    </button>

                    

                </div>

            </div>

            {/* Content */}

            <div className="max-w-5xl mx-auto px-8 py-16">

                <div className="flex items-center gap-4 mb-6">

                    <FileBarChart2
                        size={40}
                    />

                    <div>

                        <p className="uppercase tracking-[0.3em] text-white/40 text-sm">

                            Internal Analysis

                        </p>

                        <h1 className="text-6xl font-black">

                            {report.title}

                        </h1>

                    </div>

                </div>

                <div className="flex items-center gap-3 text-white/50 mb-12">

                    <Calendar
                        size={18}
                    />

                    {

                        new Date(

                            report.createdAt

                        ).toLocaleDateString(
                            "en-IN"
                        )

                    }

                </div>

                {/* Summary */}

                <div className="border border-white/10 bg-white/[0.02] rounded-[32px] p-8 mb-10">

                    <h2 className="text-3xl font-black mb-6">

                        Achievements of TVK

                    </h2>

                    <p className="text-white/80 leading-loose text-lg">

                        {report.achievements}

                    </p>

                </div>

                {/* Main Report */}

                <div className="border border-white/10 bg-white/[0.02] rounded-[32px] p-10 mb-10">

                    <h2 className="text-3xl font-black mb-8">
                        Challenges
                    </h2>

                    <div className="text-white/80 text-lg leading-loose whitespace-pre-line">
                        {report.challenges}
                    </div>
                </div>

                {/* Metrics */}

                {

                    report.performanceScore && (

                        <div className="border border-white/10 bg-white/[0.02] rounded-[32px] p-10">

                            <h2 className="text-3xl font-black mb-8">

                                Performance Metrics

                            </h2>

                            <div className="grid md:grid-cols-3 gap-6">

                                
                                            <div
                                                key={report.id}
                                                className="border border-white/10 rounded-2xl p-6"
                                            >

                                                <h3 className="text-white/60 mb-3">

                                                    Performance Score

                                                </h3>

                                                <p className="text-4xl font-black">

                                                    {
                                                        report.performanceScore
                                                    }

                                                </p>

                                            </div>

                                        

                                    

                            </div>

                        </div>

                    )

                }

                {/* Footer */}

                <div className="mt-12 border-t border-white/10 pt-8">

                    <p className="text-white/40 text-sm">

                        This report is intended for
                        administrative review and
                        governance performance
                        evaluation. Information
                        presented is based on available
                        data sources and may be updated
                        as new information becomes
                        available.

                    </p>

                </div>

            </div>

        </section>

    );

}
