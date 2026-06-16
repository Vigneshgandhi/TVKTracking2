
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
    ArrowLeft,
    Save,
    FileBarChart2
} from "lucide-react";

export default function EditReportPage() {

    const { id } = useParams();

    const router = useRouter();

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [report, setReport] =
        useState({

            title: "",

            summary: "",

            content: ""

        });

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

                    setReport({

                        title:
                            data.data.title || "",

                        summary:
                            data.data.summary || "",

                        content:
                            data.data.content || ""

                    });

                }

            }
            catch (error) {

                console.log(error);

            }
            finally {

                setLoading(false);

            }

        };

    const handleChange = (e) => {

        setReport({

            ...report,

            [e.target.name]:
                e.target.value

        });

    };

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            try {

                setSaving(true);

                const response =
                    await fetch(

                        `http://localhost:5000/api/reports/${id}`,

                        {

                            method: "PUT",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    report
                                )

                        }

                    );

                const data =
                    await response.json();

                if (data.success) {

                    alert(
                        "Report Updated Successfully"
                    );

                    router.push(
                        `/Dashboard/Reports/${id}`
                    );

                }

            }
            catch (error) {

                console.log(error);

                alert(
                    "Failed To Update Report"
                );

            }
            finally {

                setSaving(false);

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

    return (

        <section className="min-h-screen bg-black text-white">

            <div className="border-b border-white/10">

                <div className="max-w-6xl mx-auto px-8 py-8 flex justify-between items-center">

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

            <div className="max-w-6xl mx-auto px-8 py-12">

                <div className="flex items-center gap-4 mb-10">

                    <FileBarChart2
                        size={40}
                    />

                    <div>

                        <p className="uppercase tracking-[0.3em] text-white/40 text-sm">

                            Intelligence & Analysis

                        </p>

                        <h1 className="text-5xl font-black">

                            Edit Report

                        </h1>

                    </div>

                </div>

                <form
                    onSubmit={
                        handleSubmit
                    }
                    className="space-y-8"
                >

                    <div className="border border-white/10 rounded-[32px] p-8 bg-white/[0.02]">

                        <label className="block text-white/60 mb-3">

                            Report Title

                        </label>

                        <input
                            type="text"
                            name="title"
                            value={
                                report.title
                            }
                            onChange={
                                handleChange
                            }
                            className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white outline-none"
                        />

                    </div>

                    <div className="border border-white/10 rounded-[32px] p-8 bg-white/[0.02]">

                        <label className="block text-white/60 mb-3">

                            Executive Summary

                        </label>

                        <textarea
                            rows="6"
                            name="summary"
                            value={
                                report.summary
                            }
                            onChange={
                                handleChange
                            }
                            className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white outline-none resize-none"
                        />

                    </div>

                    <div className="border border-white/10 rounded-[32px] p-8 bg-white/[0.02]">

                        <label className="block text-white/60 mb-3">

                            Detailed Analysis

                        </label>

                        <textarea
                            rows="20"
                            name="content"
                            value={
                                report.content
                            }
                            onChange={
                                handleChange
                            }
                            className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white outline-none resize-none"
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={
                            saving
                        }
                        className="bg-white text-black px-8 py-4 rounded-2xl font-black flex items-center gap-3"
                    >

                        <Save />

                        {

                            saving

                                ? "Saving..."

                                : "Update Report"

                        }

                    </button>

                </form>

            </div>

        </section>

    );

}

