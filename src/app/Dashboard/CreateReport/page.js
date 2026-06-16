"use client";

import { useState } from "react";
import { FileText, ArrowLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateReportPage() {

    const router = useRouter();

    const [report, setReport] = useState({

        title: "",
        reportType: "Monthly",
        period: "",
        department: "",
        achievements: "",
        newsReferences: "",
        publicFeedback: "",
        challenges: "",
        performanceScore: "",
        recommendations: ""

    });

    const [loading, setLoading] =
        useState(false);

    const handleChange = (e) => {

        setReport({

            ...report,

            [e.target.name]:
                e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response =
                await fetch(

                    "http://localhost:5000/api/reports",

                    {

                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        credentials:
                            "include",

                        body:
                            JSON.stringify({

                                ...report,

                                newsReferences:
                                    report.newsReferences
                                        .split("\n")

                            })

                    }

                );

            const data =
                await response.json();

            if (data.success) {

                alert(
                    "Report Created Successfully"
                );

                router.push(
                    "/Dashboard/Reports"
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

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="max-w-6xl mx-auto">

                <button
                    onClick={() =>
                        router.back()
                    }
                    className="flex items-center gap-2 text-yellow-400 mb-8"
                >

                    <ArrowLeft size={18} />

                    Back

                </button>

                <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">

                    <div className="flex items-center gap-4 mb-10">

                        <FileText
                            size={40}
                            className="text-yellow-400"
                        />

                        <div>

                            <h1 className="text-white text-5xl font-black">

                                Create Report

                            </h1>

                            <p className="text-white/60">

                                Generate governance
                                performance reports.

                            </p>

                        </div>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <input
                            type="text"
                            name="title"
                            value={report.title}
                            onChange={handleChange}
                            placeholder="Report Title"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <div className="grid md:grid-cols-3 gap-5">

                            <select
                                name="reportType"
                                value={report.reportType}
                                onChange={handleChange}
                                className="bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            >

                                <option>
                                    Monthly
                                </option>

                                <option>
                                    Quarterly
                                </option>

                                <option>
                                    Annual
                                </option>

                                <option>
                                    Special
                                </option>

                            </select>

                            <input
                                type="text"
                                name="period"
                                value={report.period}
                                onChange={handleChange}
                                placeholder="May 2026"
                                className="bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <input
                                type="text"
                                name="department"
                                value={report.department}
                                onChange={handleChange}
                                placeholder="Department"
                                className="bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                        </div>

                        <textarea
                            rows="5"
                            name="achievements"
                            value={report.achievements}
                            onChange={handleChange}
                            placeholder="Major Achievements"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <textarea
                            rows="5"
                            name="newsReferences"
                            value={report.newsReferences}
                            onChange={handleChange}
                            placeholder="News Links (one per line)"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <textarea
                            rows="5"
                            name="publicFeedback"
                            value={report.publicFeedback}
                            onChange={handleChange}
                            placeholder="Public Feedback / Citizen Comments"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <textarea
                            rows="5"
                            name="challenges"
                            value={report.challenges}
                            onChange={handleChange}
                            placeholder="Challenges Faced"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <input
                            type="number"
                            min="0"
                            max="100"
                            name="performanceScore"
                            value={report.performanceScore}
                            onChange={handleChange}
                            placeholder="Performance Score (0-100)"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <textarea
                            rows="5"
                            name="recommendations"
                            value={report.recommendations}
                            onChange={handleChange}
                            placeholder="Recommendations"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-5">

                            <p className="text-yellow-300 text-sm">

                                Reports should be based on verified news,
                                official records, work completion status,
                                and public feedback data.

                            </p>

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3"
                        >

                            <Save size={18} />

                            {

                                loading
                                    ? "Generating..."
                                    : "Create Report"

                            }

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}