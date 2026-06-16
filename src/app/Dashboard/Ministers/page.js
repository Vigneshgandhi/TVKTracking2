"use client";

import {
    Users,
    Plus,
    Search,
    Pencil,
    Trash2
} from "lucide-react";

import { useEffect, useState } from "react";

export default function MinistersDashboardPage() {

    const [ministers, setMinisters] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchMinisters() {

            try {

                const response = await fetch(
                    "http://localhost:5000/api/ministers",
                    {
                        credentials: "include"
                    }
                );

                const data = await response.json();

                setMinisters(data.data || []);

            }
            catch (error) {

                console.log(error);

            }
            finally {

                setLoading(false);

            }

        }

        fetchMinisters();

    }, []);

    return (

        <section className="min-h-screen bg-gradient-to-br from-[#2b0000] via-[#5c0000] to-[#7a0000] p-8 overflow-hidden">

            {/* Header */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

                <div>

                    <p className="uppercase tracking-[0.35em] text-yellow-300 text-sm mb-4 font-semibold">
                        TVK Governance Dashboard
                    </p>

                    <h1 className="text-white text-5xl md:text-6xl font-black leading-tight">
                        Ministers Management
                    </h1>

                </div>

                

            </div>

            {/* Top Bar */}

            <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mb-10">

                {/* Search */}

                <div className="relative w-full lg:max-w-md">

                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50" />

                    <input
                        type="text"
                        placeholder="Search ministers..."
                        className="w-full bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl pl-14 pr-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-yellow-300 transition-all"
                    />

                </div>

                {/* Total */}

                <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl px-6 py-4 text-white font-medium">

                    Total Ministers:
                    <span className="ml-2 text-yellow-300 font-black">
                        {ministers.length}
                    </span>

                </div>

            </div>

            {/* Ministers Grid */}

            {loading ? (

                <div className="text-center text-white text-2xl font-bold py-20">
                    Loading Ministers...
                </div>

            ) : (

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {ministers.map((minister) => (

                        <div
                            key={minister._id}
                            className="relative overflow-hidden bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl hover:scale-[1.02] transition-all"
                        >

                            {/* Glow */}

                            <div className="absolute top-[-50px] right-[-50px] w-[180px] h-[180px] bg-yellow-400/10 blur-3xl rounded-full"></div>

                            {/* Header */}

                            <div className="relative z-10 flex items-start justify-between mb-8">

                                <div>

                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black text-3xl font-black mb-5 shadow-xl">

                                        {minister.name?.charAt(0)}

                                    </div>

                                    <h2 className="text-white text-3xl font-black leading-tight mb-3">
                                        {minister.name}
                                    </h2>

                                    <p className="text-yellow-300 font-semibold text-lg">
                                        {minister.portfolio}
                                    </p>

                                </div>

                                <Users className="text-white/20" size={42} />

                            </div>

                            {/* Department */}

                            <div className="relative z-10 mb-8">

                                <p className="uppercase tracking-wider text-white/50 text-sm mb-3">
                                    Department
                                </p>

                                <p className="text-white/85 leading-relaxed">
                                    {minister.department}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </section>

    );
}