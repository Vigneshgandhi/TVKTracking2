"use client";

import { useEffect, useState } from "react";
import SchemeCard from "../../components/Dashboard/SchemeCard";
export default function SchemesPage() {

    const [schemes, setSchemes] = useState([]);

    const [loading, setLoading] = useState(true);

    const categoryCounts = schemes.reduce((counts, scheme) => {
        const type = scheme.category || "Unknown";
        counts[type] = (counts[type] || 0) + 1;
        return counts;
    }, {});
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/schemes/${id}`, {
            method: "DELETE",
            credentials: "include"
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    console.log("Scheme deleted successfully");
                }
            });
    };
    useEffect(() => {

        fetch(
            "http://localhost:5000/api/schemes"
        )
            .then((res) => res.json())
            .then((data) => {

                if (data.success) {

                    setSchemes(data.data);

                }

                setLoading(false);

            });

    }, []);

    if (loading) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

                <h1 className="text-white text-3xl font-bold">
                    Loading Schemes...
                </h1>

            </section>

        );

    }

    return (

        <section className="min-h-screen bg-[#0d0d0d] px-8 py-16">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <p className="text-yellow-400 uppercase tracking-[0.35em] mb-4">

                        Government Welfare

                    </p>

                    <h1 className="text-white text-6xl font-black mb-6">

                        Government Schemes

                    </h1>

                    <p className="text-white/70 max-w-3xl mx-auto">

                        Explore welfare initiatives,
                        development programs, social
                        empowerment projects, and
                        public benefit schemes.

                    </p>

                </div>

                <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(categoryCounts).map(([type, count]) => (
                        <div
                            key={type}
                            className="rounded-4xl border border-white/10 bg-white/5 p-6 text-center"
                        >
                            <h3 className="text-yellow-400 font-bold mb-2">{type}</h3>
                            <p className="text-white text-3xl font-black">{count}</p>
                            <p className="text-white/60 text-sm">schemes</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {

                        schemes.map((scheme) => (

                            <SchemeCard
                                key={scheme._id}
                                scheme={scheme}
                                handleDelete={(e) => {handleDelete(scheme._id);e.preventDefault();}}
                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}