"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import React from "react";
import Navbar from "@/app/components/Navbar";
export default function SchemeDetailsPage() {

    const { id } = useParams();

    const [scheme, setScheme] = useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchScheme =
            async () => {

                try {

                    const response =
                        await fetch(

                            `https://tvk-tracking-backend-git-main-vigneshanonymous-projects.vercel.app/api/schemes/${id}`

                        );

                    const data =
                        await response.json();

                    if (data.success) {

                        setScheme(
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

        fetchScheme();

    }, [id]);

    if (loading) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

                <h1 className="text-white text-4xl font-black">

                    Loading Scheme...

                </h1>

            </section>

        );

    }

    if (!scheme) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

                <h1 className="text-white text-4xl font-black">

                    Scheme Not Found

                </h1>

            </section>

        );

    }

    return (
        <React.Fragment>
        <Navbar />
        <section className="min-h-screen bg-[#0d0d0d]">
            
                <div className="bg-red-500/10 border border-white rounded-4xl p-8 mt-30 ml-10 mr-10 mb-10">

                    <h3 className="text-red-400 text-xl font-bold mb-3">

                        Disclaimer

                    </h3>

                    <p className="text-white/70 leading-relaxed">

                        Information displayed on this page is sourced directly
                        from the official scheme database. Citizens are advised
                        to refer to government notifications, government orders,
                        and official announcements for legally authoritative
                        details regarding eligibility, implementation, and
                        benefits.

                    </p>

                </div>
            {/* Hero */}

            <div className="relative h-[500px] overflow-hidden ml-30 mr-30 rounded-2xl">

                <img
                    src={scheme.image}
                    alt={scheme.name}
                    className="w-full h-full object-fill blur-xs"
                />

                <div className="absolute inset-0 bg-black/60 flex items-end">

                    <div className="max-w-7xl mx-auto px-8 pb-16 w-full">

                        <span className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold">

                            {scheme.category}

                        </span>

                        <h1 className="text-white text-6xl font-black mt-6">

                            {scheme.name}

                        </h1>

                        <p className="text-white/80 text-xl mt-4 max-w-4xl">

                            {scheme.shortDescription}

                        </p>

                    </div>

                </div>

            </div>

            <div className="max-w-7xl mx-auto px-8 py-16">

                {/* Stats */}

                <div className="grid md:grid-cols-3 gap-8 mb-16">

                    <div className="bg-white/5 border border-white/10 rounded-4xl p-8">

                        <h3 className="text-yellow-400 text-lg font-bold mb-3">

                            Budget Allocation

                        </h3>

                        <p className="text-white text-4xl font-black">

                            ₹ {Number(
                                scheme.budget
                            ).toLocaleString(
                                "en-IN"
                            )}

                        </p>

                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-4xl p-8">

                        <h3 className="text-yellow-400 text-lg font-bold mb-3">

                            Beneficiaries

                        </h3>

                        <p className="text-white text-xl leading-relaxed">

                            {
                                scheme.beneficiaries
                            }

                        </p>

                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-4xl p-8">

                        <h3 className="text-yellow-400 text-lg font-bold mb-3">

                            Status

                        </h3>

                        <p className="text-white text-3xl font-black">

                            {
                                scheme.status
                            }

                        </p>

                    </div>

                </div>

                {/* About */}

                <div className="bg-white/5 border border-white/10 rounded-4xl p-10 mb-10">

                    <h2 className="text-yellow-400 text-4xl font-black mb-6">

                        About The Scheme

                    </h2>

                    <p className="text-white/80 text-lg leading-loose text-justify">

                        {
                            scheme.shortDescription
                        }

                    </p>

                </div>

                {/* Full Description */}

                <div className="bg-white/5 border border-white/10 rounded-4xl p-10 mb-10">

                    <h2 className="text-yellow-400 text-4xl font-black mb-6">

                        Full Description

                    </h2>

                    <p className="text-white/80 text-lg leading-loose whitespace-pre-line text-justify">

                        {
                            scheme.fullDescription
                        }

                    </p>

                </div>

                {/* Key Information */}

                <div className="bg-white/5 border border-white/10 rounded-4xl p-10">

                    <h2 className="text-yellow-400 text-4xl font-black mb-8">

                        Key Information

                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div>

                            <h3 className="text-yellow-400 font-bold mb-2">

                                Scheme Category

                            </h3>

                            <p className="text-white">

                                {
                                    scheme.category
                                }

                            </p>

                        </div>

                        <div>

                            <h3 className="text-yellow-400 font-bold mb-2">

                                Current Status

                            </h3>

                            <p className="text-white">

                                {
                                    scheme.status
                                }

                            </p>

                        </div>

                        <div>

                            <h3 className="text-yellow-400 font-bold mb-2">

                                Beneficiaries

                            </h3>

                            <p className="text-white">

                                {
                                    scheme.beneficiaries
                                }

                            </p>

                        </div>

                        <div>

                            <h3 className="text-yellow-400 font-bold mb-2">

                                Budget

                            </h3>

                            <p className="text-white">

                                ₹ {Number(
                                    scheme.budget
                                ).toLocaleString(
                                    "en-IN"
                                )}

                            </p>

                        </div>

                    </div>

                </div>

                {/* Disclaimer */}


            </div>

        </section>
        </React.Fragment>
    );

}
