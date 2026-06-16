"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
    Search,
    FileBarChart2,
    Eye,
    Pencil,
    Trash2,
    Plus
} from "lucide-react";

export default function ReportsPage() {

    const router = useRouter();

    const [reports, setReports] =
        useState([]);

    const [filteredReports,
        setFilteredReports] =
        useState([]);

    const [search,
        setSearch] =
        useState("");

    const [loading,
        setLoading] =
        useState(true);

    useEffect(() => {

        fetchReports();

    }, []);

    useEffect(() => {

        const filtered =
            reports.filter(

                report =>

                    report.title
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )

            );

        setFilteredReports(
            filtered
        );

    }, [search, reports]);

    const fetchReports =
        async () => {

            try {

                const response =
                    await fetch(

                        "http://localhost:5000/api/reports"

                    );

                const data =
                    await response.json();

                if (data.success) {

                    setReports(
                        data.data
                    );

                    setFilteredReports(
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

    const deleteReport =
        async (id) => {

            if (
                !window.confirm(
                    "Delete Report?"
                )
            ) return;

            try {

                await fetch(

                    `http://localhost:5000/api/reports/${id}`,

                    {

                        method:
                            "DELETE"

                    }

                );

                fetchReports();

            }
            catch (error) {

                console.log(error);

            }

        };

    if (loading) {

        return (

            <section className="min-h-screen bg-black flex items-center justify-center">

                <h1 className="text-white text-4xl font-black">

                    Loading Reports...

                </h1>

            </section>

        );

    }

    return (

        <section className="min-h-screen bg-black text-white p-10">

            <div className="flex justify-between items-center mb-10">

                <div>

                    <p className="uppercase tracking-[0.35em] text-white/40 mb-3">

                        Intelligence & Analysis

                    </p>

                    <h1 className="text-6xl font-black">

                        Reports

                    </h1>

                </div>

                <button
                    onClick={() =>
                        router.push(
                            "/Dashboard/CreateReport"
                        )
                    }
                    className="bg-white text-black px-6 py-4 rounded-2xl font-bold flex items-center gap-3"
                >

                    <Plus />

                    Create Report

                </button>

            </div>

            <div className="relative mb-10">

                <Search
                    className="absolute left-5 top-4 text-white/40"
                />

                <input
                    type="text"
                    placeholder="Search Reports..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="w-full bg-white/5 border border-white/20 rounded-2xl pl-14 py-4 text-white"
                />

            </div>

            <div className="grid lg:grid-cols-2 gap-8">

                {

                    filteredReports.map(
                        (report) => (

                            <div
                                key={report._id}
                                className="border border-white/20 rounded-[32px] p-8 bg-white/[0.02]"
                            >

                                <div className="flex items-center gap-4 mb-6">

                                    <FileBarChart2
                                        size={28}
                                    />

                                    <h2 className="text-3xl font-black">

                                        {
                                            report.title
                                        }

                                    </h2>

                                </div>

                                <p className="text-white/70 mb-8 line-clamp-5">

                                    {
                                        report.summary
                                    }

                                </p>

                                <div className="flex gap-3">

                                    <button
                                        onClick={() =>
                                            router.push(
                                                `/Reports/${report._id}`
                                            )
                                        }
                                        className="flex-1 bg-white text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                                    >

                                        <Eye />

                                        View

                                    </button>

                                    <button
                                        onClick={() =>
                                            router.push(
                                                `/Dashboard/Reports/Edit/${report._id}`
                                            )
                                        }
                                        className="flex-1 border border-white text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                                    >

                                        <Pencil />

                                        Edit

                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteReport(
                                                report._id
                                            )
                                        }
                                        className="px-5 border border-red-500 text-red-500 rounded-xl"
                                    >

                                        <Trash2 />

                                    </button>

                                </div>

                            </div>

                        )
                    )

                }

            </div>

        </section>

    );

}
