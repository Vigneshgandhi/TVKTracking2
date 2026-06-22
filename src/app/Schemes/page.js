"use client";


import { useEffect, useState } from "react";
import {
    Eye,
    Pencil,
    Trash2,
    Search,
    Plus
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function SchemesPage() {

    const router = useRouter();

    const [schemes, setSchemes] = useState([]);
    const [filteredSchemes, setFilteredSchemes] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchSchemes = async () => {

        try {

            const response = await fetch(
                "https://tvk-tracking-backend-git-main-vigneshanonymous-projects.vercel.app/api/schemes",
                {
                    credentials: "include"
                }
            );

            const data = await response.json();

            if (data.success) {

                setSchemes(data.data);
                setFilteredSchemes(data.data);

            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchSchemes();

    }, []);

    useEffect(() => {

        const filtered =
            schemes.filter((scheme) =>
                scheme.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
            );

        setFilteredSchemes(filtered);

    }, [search, schemes]);

    const deleteScheme = async (id) => {

        const confirmDelete =
            window.confirm(
                "Delete this scheme?"
            );

        if (!confirmDelete)
            return;

        try {

            const response =
                await fetch(

                    `https://tvk-tracking-backend-git-main-vigneshanonymous-projects.vercel.app/api/schemes/${id}`,

                    {
                        method: "DELETE",
                        credentials: "include"
                    }

                );

            const data =
                await response.json();

            if (data.success) {

                fetchSchemes();

            }

        } catch (error) {

            console.log(error);

        }

    };

    if (loading) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

                <h1 className="text-white text-3xl font-black">

                    Loading Schemes...

                </h1>

            </section>

        );

    }

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="flex justify-between items-center mb-10">

                <div>

                    <p className="text-yellow-400 uppercase tracking-[0.35em] mb-2">

                        Scheme Management

                    </p>

                    <h1 className="text-white text-5xl font-black">

                        Government Schemes

                    </h1>

                </div>

                <button
                    onClick={() =>
                        router.push(
                            "/Dashboard/AddScheme"
                        )
                    }
                    className="bg-yellow-400 text-black px-6 py-4 rounded-2xl font-bold flex items-center gap-2"
                >

                    <Plus size={18} />

                    Add Scheme

                </button>

            </div>

            <div className="relative mb-10">

                <Search
                    className="absolute left-5 top-4 text-white/40"
                />

                <input
                    type="text"
                    placeholder="Search Schemes..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 p-4 text-white"
                />

            </div>

            <div className="grid lg:grid-cols-2 gap-8">

                {

                    filteredSchemes.map(
                        (scheme) => (

                            <div
                                key={scheme._id}
                                className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden"
                            >

                                {

                                    scheme.image && (

                                        <img
                                            src={`${decodeURIComponent(scheme.image)}`}
                                            alt={scheme.name}
                                            className="w-full h-[260px] object-cover"
                                        />

                                    )

                                }

                                <div className="p-8">

                                    <div className="flex justify-between items-center mb-5">

                                        <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">

                                            {
                                                scheme.category
                                            }

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

                                            {
                                                scheme.status
                                            }

                                        </span>

                                    </div>

                                    <h2 className="text-white text-3xl font-black mb-4">

                                        {scheme.name}

                                    </h2>

                                    <p className="text-white/70 line-clamp-3 mb-6">

                                        {
                                            scheme.shortDescription
                                        }

                                    </p>

                                    <div className="space-y-3 mb-8">

                                        <p className="text-white/80">

                                            <span className="text-yellow-400 font-bold">

                                                Budget:

                                            </span>

                                            {" "}
                                            ₹

                                            {
                                                Number(
                                                    scheme.budget
                                                ).toLocaleString(
                                                    "en-IN"
                                                )
                                            }

                                        </p>

                                        <p className="text-white/80">

                                            <span className="text-yellow-400 font-bold">

                                                Beneficiaries:

                                            </span>

                                            {" "}
                                            {
                                                scheme.beneficiaries
                                            }

                                        </p>

                                    </div>

                                    <div className="flex gap-3">

                                        <button
                                            onClick={() =>
                                                router.push(
                                                    `/Schemes/${scheme._id}`
                                                )
                                            }
                                            className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                                        >

                                            <Eye size={18} />

                                            View

                                        </button>
                                        
                                    </div>

                                </div>

                            </div>

                        )
                    )

                }

            </div>

        </section>

    );

}
