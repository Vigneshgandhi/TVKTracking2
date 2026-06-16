"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SchemeCard({ scheme, handleDelete }) {
    const router = useRouter();
    const [expanded, setExpanded] = useState(false);
    return (

        <div className="bg-white/5 border border-white/10 rounded-4xl overflow-hidden backdrop-blur-xl">

            {/* Banner */}
            {scheme.image == null ? (
                <img
                    src={null}
                    width={1600}
                    alt={scheme.name}
                    className="w-full h-70 object-cover"
                />
            ) : (
                <img
                    width={1600}
                    src={scheme.image}
                    itemProp={scheme.image}
                    alt={scheme.name}
                    className="w-full h-70 object-cover"
                />
            )}

            <div className="p-8">

                {/* Status */}

                <div className="flex justify-between items-center mb-6">

                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">

                        {scheme.category}

                    </span>

                    <span
                        className={`px-4 py-2 rounded-full text-sm font-bold ${
                            scheme.status === "Active"
                                ? "bg-green-500 text-white"
                                : scheme.status === "Upcoming"
                                ? "bg-orange-500 text-white"
                                : "bg-blue-500 text-white"
                        }`}
                    >

                        {scheme.status}

                    </span>

                </div>

                {/* Name */}

                <h2 className="text-white text-4xl font-black mb-4">

                    {scheme.name}

                </h2>

                {/* Short Desc */}

                <p className="text-white/70 mb-8 text-justify leading-normal">

                    {scheme.shortDescription}

                </p>

                {/* Details */}

                <div className="space-y-4 mb-8">

                    <div>

                        <h3 className="text-yellow-400 font-bold">

                            Beneficiaries

                        </h3>

                        <p className="text-white/80 text-justify leading-normal">

                            {scheme.beneficiaries}

                        </p>

                    </div>

                    <div>

                        <h3 className="text-yellow-400 font-bold">

                            Budget Allocation

                        </h3>

                        <p className="text-white/80 leading-normal">

                            ₹ {Number(
                                scheme.budget
                            ).toLocaleString("en-IN")}

                        </p>

                    </div>

                </div>

                {/* Full Description */}

                {

                    expanded && (

                        <div className="mb-8">

                            <h3 className="text-yellow-400 font-bold mb-4">

                                Full Description

                            </h3>

                            <p className="text-white/80 text-justify leading-normal">

                                {scheme.fullDescription}

                            </p>

                        </div>

                    )

                }

                {/* AI Warning */}

                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 mb-6">

                    <h4 className="text-red-400 font-bold mb-2">

                        Disclaimer

                    </h4>

                    <p className="text-white/70 text-sm text-justify leading-normal">

                        The full description displayed for this
                        scheme may have been generated or
                        enhanced using Artificial Intelligence
                        for presentation purposes. Users are
                        advised to refer to official government
                        notifications, orders, and announcements
                        for authoritative information. Any
                        inaccuracies are unintentional and
                        should not be attributed to the TVK
                        Government, Tamilaga Vettri Kazhagam,
                        or any government department.

                    </p>

                </div>

                {/* Button */}

                <div className="flex gap-4">

                    <button
                        onClick={() =>
                            setExpanded(!expanded)
                        }
                        className="flex-1 bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-black py-4 rounded-2xl"
                    >

                        {

                            expanded
                                ? "Show Less"
                                : "Read Full Details"

                        }

                    </button>

                    <button
                        onClick={() =>
                            router.push(
                                `/Dashboard/Schemes/Edit/${scheme._id}`
                            )
                        }
                        className="px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all"
                    >

                        Edit

                    </button>
                    <button
                        onClick={() =>
                            handleDelete(
                                scheme._id
                            )
                        }
                        className="px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all"
                    >

                        Delete
                    </button>
                </div>
            </div>

        </div>

    );

}