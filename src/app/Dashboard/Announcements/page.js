"use client";

import { useEffect, useState } from "react";
import {
    Bell,
    Pencil,
    Trash2,
    Eye,
    Plus
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AnnouncementsDashboard() {

    const router = useRouter();

    const [announcements,
        setAnnouncements] = useState([]);

    const fetchAnnouncements =
        async () => {

            const response =
                await fetch(
                    "http://localhost:5000/api/announcements"
                );

            const data =
                await response.json();

            if (data.success) {

                setAnnouncements(
                    data.data
                );

            }

        };

    useEffect(() => {

        fetchAnnouncements();

    }, []);

    const deleteAnnouncement =
        async (id) => {

            const confirmDelete =
                window.confirm(
                    "Delete this announcement?"
                );

            if (!confirmDelete)
                return;

            const response =
                await fetch(

                    `http://localhost:5000/api/announcements/${id}`,

                    {
                        method:
                            "DELETE",

                        credentials:
                            "include"
                    }

                );

            const data =
                await response.json();

            if (data.success) {

                fetchAnnouncements();

            }

        };

    const priorityColor = {

        Urgent:
            "bg-red-600 text-white",

        Important:
            "bg-yellow-400 text-black",

        Normal:
            "bg-blue-600 text-white"

    };

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="flex justify-between items-center mb-10">

                <div>

                    <p className="text-yellow-400 uppercase tracking-[0.35em] mb-2">
                        Administration
                    </p>

                    <h1 className="text-white text-5xl font-black">
                        Announcements
                    </h1>

                </div>

                <button
                    onClick={() =>
                        router.push(
                            "/Dashboard/Announcements/Create"
                        )
                    }
                    className="bg-yellow-400 text-black font-bold px-6 py-4 rounded-2xl flex items-center gap-2"
                >

                    <Plus size={18} />

                    Create

                </button>

            </div>

            <div className="grid lg:grid-cols-2 gap-8">

                {

                    announcements.map(
                        (
                            announcement
                        ) => (

                            <div
                                key={
                                    announcement._id
                                }
                                className="bg-white/5 border border-white/10 rounded-[32px] p-8"
                            >

                                <div className="flex justify-between items-center mb-6">

                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-bold ${priorityColor[
                                            announcement
                                                .priority
                                        ]}`}
                                    >

                                        {
                                            announcement.priority
                                        }

                                    </span>

                                    <span className="text-white/50 text-sm">

                                        {

                                            new Date(
                                                announcement.createdAt
                                            ).toLocaleDateString()

                                        }

                                    </span>

                                </div>

                                <h2 className="text-white text-3xl font-black mb-4">

                                    {
                                        announcement.title
                                    }

                                </h2>

                                <p className="text-white/60 mb-4">

                                    {
                                        announcement.type
                                    }

                                </p>

                                <p className="text-white/80 line-clamp-4 mb-8">

                                    {
                                        announcement.content
                                    }

                                </p>

                                <div className="flex gap-3">

                                    <button
                                        onClick={() =>
                                            router.push(
                                                `/Dashboard/Announcements/${announcement._id}`
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
                                                `/Dashboard/Announcements/Edit/${announcement._id}`
                                            )
                                        }
                                        className="flex-1 bg-yellow-500 text-black py-3 rounded-xl flex items-center justify-center gap-2"
                                    >

                                        <Pencil size={18} />

                                        Edit

                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteAnnouncement(
                                                announcement._id
                                            )
                                        }
                                        className="bg-red-600 text-white px-5 rounded-xl"
                                    >

                                        <Trash2
                                            size={18}
                                        />

                                    </button>

                                </div>

                            </div>

                        )
                    )

                }

            </div>

        </section>

    );

}