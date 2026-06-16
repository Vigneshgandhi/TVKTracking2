"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    Bell,
    Pencil
} from "lucide-react";

export default function AnnouncementViewPage() {

    const { id } = useParams();

    const router = useRouter();

    const [announcement,
        setAnnouncement] = useState(null);

    const priorityColor = {

        Urgent:
            "bg-red-600 text-white",

        Important:
            "bg-yellow-400 text-black",

        Normal:
            "bg-blue-600 text-white"

    };

    useEffect(() => {

        fetch(
            `http://localhost:5000/api/announcements/${id}`
        )
            .then((res) => res.json())
            .then((data) => {

                if (data.success) {

                    setAnnouncement(
                        data.data
                    );

                }

            });

    }, [id]);

    if (!announcement) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">

                <h1 className="text-white text-3xl font-bold">
                    Loading Announcement...
                </h1>

            </section>

        );

    }

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="max-w-5xl mx-auto">

                {/* Top Actions */}

                <div className="flex justify-between items-center mb-10">

                    <button
                        onClick={() =>
                            router.back()
                        }
                        className="flex items-center gap-2 text-yellow-400"
                    >

                        <ArrowLeft size={18} />

                        Back

                    </button>

                    <button
                        onClick={() =>
                            router.push(
                                `/Dashboard/Announcements/Edit/${announcement._id}`
                            )
                        }
                        className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold flex items-center gap-2"
                    >

                        <Pencil size={18} />

                        Edit

                    </button>

                </div>

                {/* Announcement Card */}

                <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">

                    <div className="flex items-center gap-4 mb-8">

                        <Bell
                            size={42}
                            className="text-yellow-400"
                        />

                        <div>

                            <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm">

                                Government Announcement

                            </p>

                            <h1 className="text-white text-5xl font-black mt-2">

                                {announcement.title}

                            </h1>

                        </div>

                    </div>

                    {/* Meta */}

                    <div className="flex flex-wrap gap-4 mb-10">

                        <span
                            className={`px-4 py-2 rounded-full text-sm font-bold ${priorityColor[
                                announcement.priority
                            ]}`}
                        >

                            {
                                announcement.priority
                            }

                        </span>

                        <span className="bg-white/10 text-white px-4 py-2 rounded-full">

                            {
                                announcement.type
                            }

                        </span>

                        <span className="bg-white/10 text-white px-4 py-2 rounded-full">

                            Published:
                            {" "}
                            {

                                new Date(
                                    announcement.createdAt
                                ).toLocaleDateString(
                                    "en-IN"
                                )

                            }

                        </span>

                    </div>

                    {/* Content */}

                    <div className="bg-black/20 border border-white/10 rounded-[32px] p-8">

                        <p className="text-white/90 text-lg leading-loose whitespace-pre-wrap">

                            {
                                announcement.content
                            }

                        </p>

                    </div>

                    {/* Footer */}

                    <div className="mt-8 pt-8 border-t border-white/10">

                        <p className="text-white/50">

                            Published By:
                            {" "}
                            {
                                announcement.publishedBy ||
                                "Administrator"
                            }

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}