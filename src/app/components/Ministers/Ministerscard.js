// components/MinisterCards.jsx

"use client";

import { useEffect, useState } from "react";

export default function MinisterCards() {
    const [ministers, setMinisters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/ministers")
            .then((res) => res.json())
            .then((data) => {
                setMinisters(data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <section className="min-h-screen bg-black px-8 py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="uppercase tracking-[0.35em] text-yellow-100 text-sm font-semibold mb-5">
                        TVK Government
                    </p>
                    <h1 className="text-white text-5xl md:text-7xl font-black mb-8">
                        Ministers Cabinet
                    </h1>
                    <p className="text-white/85 text-lg max-w-4xl mx-auto leading-relaxed">
                        Explore the ministers, portfolios, and departments of the Tamil Nadu Government.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="text-center text-white text-2xl font-bold">
                        Loading Ministers...
                    </div>
                )}

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {!loading &&
                        ministers.map((minister) => (
                            <div
                                key={minister._id}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300"
                            >
                                {/* Top Badge */}
                                <div className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold mb-6">
                                    Minister
                                </div>

                                {/* Name */}
                                <h2 className="text-white text-3xl font-black leading-tight mb-5">
                                    {minister.name}
                                </h2>

                                {/* Portfolio */}
                                <div className="mb-5">
                                    <p className="text-yellow-200 uppercase text-sm tracking-wider mb-2">
                                        Portfolio
                                    </p>
                                    <h3 className="text-white text-xl font-bold">
                                        {minister.portfolio}
                                    </h3>
                                </div>

                                {/* Department */}
                                <div>
                                    <p className="text-yellow-200 uppercase text-sm tracking-wider mb-2">
                                        Department
                                    </p>
                                    <p className="text-white/80 leading-relaxed">
                                        {minister.department}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
