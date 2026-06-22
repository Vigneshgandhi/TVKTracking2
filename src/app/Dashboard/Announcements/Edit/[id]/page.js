"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Bell } from "lucide-react";

export default function EditAnnouncementPage() {

    const { id } = useParams();

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [announcement, setAnnouncement] = useState({

        title: "",
        content: "",
        type: "Government Order",
        priority: "Normal"

    });

    useEffect(() => {

        fetch(
            `https://tvk-tracking-backend-git-main-vigneshanonymous-projects.vercel.app/api/announcements/${id}`
        )
            .then((res) => res.json())
            .then((data) => {

                if (data.success) {

                    setAnnouncement(data.data);

                }

            });

    }, [id]);

    const handleChange = (e) => {

        setAnnouncement({

            ...announcement,

            [e.target.name]: e.target.value

        });

    };

    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await fetch(

                `http://localhost:5000/api/announcements/${id}`,

                {

                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({

                        title: announcement.title,
                        content: announcement.content,
                        type: announcement.type,
                        priority: announcement.priority

                    })

                }

            );

            const data = await response.json();

            if (data.success) {

                alert(
                    "Announcement Updated Successfully"
                );

                router.push(
                    "/Dashboard/Announcements"
                );

            }

        } catch (error) {

            console.log(error);

            alert(
                "Failed to update announcement"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="max-w-5xl mx-auto">

                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-yellow-400 mb-8"
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

                                Edit Announcement

                            </h1>

                            <p className="text-white/60 mt-2">

                                Modify an existing
                                government announcement.

                            </p>

                        </div>

                    </div>

                    <form
                        onSubmit={handleUpdate}
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
                            placeholder="Announcement Content"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3"
                        >

                            <Save size={18} />

                            {

                                loading
                                    ? "Updating..."
                                    : "Update Announcement"

                            }

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}
