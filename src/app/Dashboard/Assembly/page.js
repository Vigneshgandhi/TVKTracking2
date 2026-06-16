"use client";

import { useEffect, useState } from "react";
import {
Search,
Plus,
Eye,
Pencil,
Trash2,
Building2
} from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function AssemblyPage() {
const router = useRouter();

const [assembly, setAssembly] = useState([]);

const [filteredAssembly,
    setFilteredAssembly] = useState([]);

const [search,
    setSearch] = useState("");

const [loading,
    setLoading] = useState(true);

const fetchAssembly = async () => {

    try {

        const response = await fetch(

            "http://localhost:5000/api/assembly",

            {
                credentials: "include"
            }

        );

        const data =
            await response.json();

        if (data.success) {

            setAssembly(
                data.data
            );

            setFilteredAssembly(
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

useEffect(() => {

    fetchAssembly();

}, []);

useEffect(() => {

    const filtered =
        assembly.filter((item) =>

            item.title
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                )

            ||

            item.category
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );

    setFilteredAssembly(
        filtered
    );

}, [search, assembly]);

const deleteSession = async (id) => {

    const confirmDelete =
        window.confirm(
            "Delete this assembly session?"
        );

    if (!confirmDelete)
        return;

    try {

        const response =
            await fetch(

                `http://localhost:5000/api/assembly/${id}`,

                {

                    method: "DELETE",

                    credentials:
                        "include"

                }

            );

        const data =
            await response.json();

        if (data.success) {

            fetchAssembly();

        }

    }
    catch (error) {

        console.log(error);

    }

};

if (loading) {

    return (

        <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

            <h1 className="text-white text-3xl font-black">

                Loading Assembly Sessions...

            </h1>

        </section>

    );

}

return (
    <>
    <Navbar />
    <section className="min-h-screen bg-[#0d0d0d] px-10 py-32">

        <div className="flex justify-between items-center mb-10">

            <div>

                <p className="text-yellow-400 uppercase tracking-[0.35em] mb-2">

                    Legislative Records

                </p>

                <h1 className="text-white text-5xl font-black">

                    Assembly Sessions

                </h1>

            </div>

            <button
                onClick={() =>
                    router.push(
                        "/Assembly/Create"
                    )
                }
                className="bg-yellow-400 text-black px-6 py-4 rounded-2xl font-bold flex items-center gap-2"
            >

                <Plus size={18} />

                Add Session

            </button>

        </div>

        <div className="relative mb-10">

            <Search
                className="absolute left-5 top-4 text-white/40"
            />

            <input
                type="text"
                placeholder="Search Assembly Sessions..."
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

                filteredAssembly.map(
                    (session) => (

                        <div
                            key={session._id}
                            className="bg-white/5 border border-white/10 rounded-[32px] p-8"
                        >

                            <div className="flex justify-between items-center mb-6">

                                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">

                                    {
                                        session.category
                                    }

                                </span>

                                <span
                                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                                        session.status === "Completed"
                                            ? "bg-green-600 text-white"
                                            : session.status === "Scheduled"
                                            ? "bg-blue-600 text-white"
                                            : "bg-red-600 text-white"
                                    }`}
                                >

                                    {
                                        session.status
                                    }

                                </span>

                            </div>

                            <div className="flex items-center gap-3 mb-4">

                                <Building2
                                    size={22}
                                    className="text-yellow-400"
                                />

                                <span className="text-white/60">

                                    {

                                        new Date(
                                            session.assemblyDate
                                        ).toLocaleDateString(
                                            "en-IN"
                                        )

                                    }

                                </span>

                            </div>

                            <h2 className="text-white text-3xl font-black mb-4">

                                {
                                    session.title
                                }

                            </h2>

                            <p className="text-white/70 mb-4">

                                Session No:
                                {" "}
                                {
                                    session.sessionNumber
                                }

                            </p>

                            <p className="text-white/80 line-clamp-4 mb-8">

                                {
                                    session.summary
                                }

                            </p>

                            <div className="flex gap-3">

                                <button
                                    onClick={() =>
                                        router.push(
                                            `/Dashboard/Assembly/${session._id}`
                                        )
                                    }
                                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                                >

                                    <Eye size={18} />

                                    View

                                </button>

                                <button
                                    onClick={() =>
                                        router.push(
                                            `/Dashboard/Assembly/Edit/${session._id}`
                                        )
                                    }
                                    className="flex-1 bg-yellow-500 text-black py-3 rounded-xl flex items-center justify-center gap-2"
                                >

                                    <Pencil size={18} />

                                    Edit

                                </button>

                                <button
                                    onClick={() =>
                                        deleteSession(
                                            session._id
                                        )
                                    }
                                    className="bg-red-600 text-white px-5 rounded-xl"
                                >

                                    <Trash2 size={18} />

                                </button>

                            </div>

                        </div>

                    )
                )

            }

        </div>

    </section>

    </>
);


}
