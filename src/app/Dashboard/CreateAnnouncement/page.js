"use client";

import { useState } from "react";
import { ArrowLeft, Bell, Send } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateAnnouncementPage() {

    const router = useRouter();

    const [announcement, setAnnouncement] = useState({

        title: "",
        content: "",
        type: "Government Order",
        priority: "Normal"

    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setAnnouncement({

            ...announcement,

            [e.target.name]:
                e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await fetch(

                "http://localhost:5000/api/announcements",

                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify(
                        announcement
                    )

                }

            );

            const data =
                await response.json();

            if (data.success) {

                alert(
                    "Announcement Published"
                );

                router.push(
                    "/Dashboard/Announcements"
                );

            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="max-w-5xl mx-auto">

                <button
                    onClick={() =>
                        router.back()
                    }
                    className="text-yellow-400 flex gap-2 items-center mb-8"
                >

                    <ArrowLeft size={18} />

                    Back

                </button>

                <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

                    <div className="flex items-center gap-4 mb-10">

                        <Bell
                            size={40}
                            className="text-yellow-400"
                        />

                        <div>

                            <h1 className="text-white text-5xl font-black">
                                Create Announcement
                            </h1>

                            <p className="text-white/60 mt-2">
                                Publish official
                                government notices
                                and alerts.
                            </p>

                        </div>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <input
                            type="text"
                            name="title"
                            value={announcement.title}
                            onChange={handleChange}
                            placeholder="Announcement Title"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <select
                            name="type"
                            value={announcement.type}
                            onChange={handleChange}
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        >

                            <option>
                                Government Order
                            </option>

                            <option>
                                Public Notice
                            </option>

                            <option>
                                CM Announcement
                            </option>

                            <option>
                                Emergency Alert
                            </option>

                            <option>
                                Recruitment Notice
                            </option>

                            <option>
                                Policy Circular
                            </option>

                        </select>

                        <select
                            name="priority"
                            value={announcement.priority}
                            onChange={handleChange}
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        >

                            <option>
                                Normal
                            </option>

                            <option>
                                Important
                            </option>

                            <option>
                                Urgent
                            </option>

                        </select>

                        <textarea
                            rows="12"
                            name="content"
                            value={announcement.content}
                            onChange={handleChange}
                            placeholder="Official Announcement Content..."
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-5">

                            <p className="text-yellow-300 text-sm">

                                Published announcements
                                become immediately visible
                                on the public portal.

                            </p>

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3"
                        >

                            <Send size={18} />

                            {

                                loading
                                    ? "Publishing..."
                                    : "Publish Announcement"

                            }

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}