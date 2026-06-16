
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
    ArrowLeft,
    Save,
    Building2
} from "lucide-react";

export default function EditAssemblyPage() {

    const { id } = useParams();

    const router = useRouter();

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [assembly, setAssembly] =
        useState({

            title: "",

            sessionNumber: "",

            assemblyDate: "",

            category: "Question Hour",

            summary: "",

            fullContent: "",

            YoutubeLink: "",

            ministersInvolved: "",

            outcome: "",

            status: "Completed"

        });

    useEffect(() => {

        fetchAssembly();

    }, [id]);

    const fetchAssembly =
        async () => {

            try {

                const response =
                    await fetch(

                        `http://localhost:5000/api/assembly/${id}`

                    );

                const data =
                    await response.json();

                if (data.success) {

                    setAssembly({

                        title:
                            data.data.title || "",

                        sessionNumber:
                            data.data.sessionNumber || "",

                        assemblyDate:
                            data.data.assemblyDate
                                ? data.data.assemblyDate
                                      .split("T")[0]
                                : "",

                        category:
                            data.data.category || "Question Hour",

                        summary:
                            data.data.summary || "",

                        fullContent:
                            data.data.fullContent || "",

                        YoutubeLink:
                            data.data.YoutubeLink || "",

                        ministersInvolved:
                            data.data.ministersInvolved
                                ?.join(", ") || "",

                        outcome:
                            data.data.outcome || "",

                        status:
                            data.data.status || "Completed"

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

        setAssembly({

            ...assembly,

            [e.target.name]:
                e.target.value

        });

    };

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            try {

                setSaving(true);

                const payload = {

                    ...assembly,

                    ministersInvolved:

                        assembly.ministersInvolved
                            .split(",")

                            .map(
                                item =>
                                    item.trim()
                            )

                            .filter(Boolean)

                };

                const response =
                    await fetch(

                        `http://localhost:5000/api/assembly/${id}`,

                        {

                            method: "PUT",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    payload
                                )

                        }

                    );

                const data =
                    await response.json();

                if (data.success) {

                    alert(
                        "Assembly Session Updated Successfully"
                    );

                    router.push(
                        "/Dashboard/Assembly"
                    );

                }

            }
            catch (error) {

                console.log(error);

                alert(
                    "Failed To Update Assembly Session"
                );

            }
            finally {

                setSaving(false);

            }

        };

    if (loading) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

                <h1 className="text-white text-4xl font-black">

                    Loading Assembly Session...

                </h1>

            </section>

        );

    }

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="mb-10">

                    <button
                        onClick={() =>
                            router.back()
                        }
                        className="flex items-center gap-2 text-yellow-400 mb-6"
                    >

                        <ArrowLeft size={18} />

                        Back To Assembly

                    </button>

                    <div className="flex items-center gap-4">

                        <Building2
                            className="text-yellow-400"
                            size={42}
                        />

                        <div>

                            <h1 className="text-white text-5xl font-black">

                                Edit Assembly Session

                            </h1>

                            <p className="text-white/60 mt-2">

                                Modify Assembly proceedings,
                                discussions, resolutions and
                                session information.

                            </p>

                        </div>

                    </div>

                </div>

                <form
                    onSubmit={
                        handleSubmit
                    }
                    className="grid lg:grid-cols-3 gap-8"
                >

                    {/* Left Content */}

                    <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[32px] p-8">

                        <div className="space-y-6">

                            <div>

                                <label className="text-white block mb-2">

                                    Session Title

                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={
                                        assembly.title
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                            </div>

                            <div>

                                <label className="text-white block mb-2">

                                    Session Summary

                                </label>

                                <textarea
                                    rows="5"
                                    name="summary"
                                    value={
                                        assembly.summary
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                            </div>

                            <div>

                                <label className="text-white block mb-2">

                                    Full Assembly Content

                                </label>

                                <textarea
                                    rows="18"
                                    name="fullContent"
                                    value={
                                        assembly.fullContent
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                            </div>

                        </div>

                    </div>

                    {/* Right Panel */}

                    <div className="space-y-8">

                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

                            <h2 className="text-white text-2xl font-bold mb-6">

                                Session Details

                            </h2>

                            <div className="space-y-5">

                                <input
                                    type="text"
                                    placeholder="Session Number"
                                    name="sessionNumber"
                                    value={
                                        assembly.sessionNumber
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                                <input
                                    type="date"
                                    name="assemblyDate"
                                    value={
                                        assembly.assemblyDate
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                                <select
                                    name="category"
                                    value={
                                        assembly.category
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                >

                                    <option>
                                        Question Hour
                                    </option>

                                    <option>
                                        Bill Discussion
                                    </option>

                                    <option>
                                        Budget Session
                                    </option>

                                    <option>
                                        Minister Statement
                                    </option>

                                    <option>
                                        Resolution
                                    </option>

                                    <option>
                                        Inaugural Session
                                    </option>

                                    <option>
                                        Special Session
                                    </option>

                                </select>

                                <input
                                    type="url"
                                    placeholder="YouTube Session Link"
                                    name="YoutubeLink"
                                    value={
                                        assembly.YoutubeLink
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                                <input
                                    type="text"
                                    placeholder="Ministers Involved (comma separated)"
                                    name="ministersInvolved"
                                    value={
                                        assembly.ministersInvolved
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                                <textarea
                                    rows="4"
                                    placeholder="Outcome"
                                    name="outcome"
                                    value={
                                        assembly.outcome
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                                <select
                                    name="status"
                                    value={
                                        assembly.status
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                >

                                    <option>
                                        Scheduled
                                    </option>

                                    <option>
                                        Completed
                                    </option>

                                    <option>
                                        Adjourned
                                    </option>

                                </select>

                            </div>

                        </div>

                        <button
                            type="submit"
                            disabled={
                                saving
                            }
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3"
                        >

                            <Save size={20} />

                            {

                                saving

                                    ? "Updating Session..."

                                    : "Update Assembly Session"

                            }

                        </button>

                    </div>

                </form>

            </div>

        </section>

    );

}
