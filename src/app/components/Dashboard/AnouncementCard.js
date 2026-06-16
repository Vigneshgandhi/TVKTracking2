"use client";

import { useState } from "react";

export default function AnnouncementCard({

    announcement

}) {

    const [expanded,
        setExpanded] = useState(false);

    const priorityColor = {

        Urgent:
            "bg-red-600 text-white",

        Important:
            "bg-yellow-400 text-black",

        Normal:
            "bg-blue-600 text-white"

    };

    return (

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

            <div className="flex flex-wrap gap-3 mb-6">

                <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${priorityColor[
                        announcement.priority
                    ]}`}
                >

                    {announcement.priority}

                </span>

                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">

                    {announcement.type}

                </span>

                <span className="text-white/50 text-sm flex items-center">

                    {

                        new Date(
                            announcement.createdAt
                        ).toLocaleDateString()

                    }

                </span>

            </div>

            <h2 className="text-white text-3xl font-black mb-4">

                {announcement.title}

            </h2>

            <p className="text-white/80 leading-relaxed">

                {

                    expanded

                        ? announcement.content

                        : announcement.content
                            .substring(0, 250) +
                          (announcement.content
                                .length > 250
                                ? "..."
                                : "")

                }

            </p>

            {

                announcement.content.length >
                    250 && (

                    <button
                        onClick={() =>
                            setExpanded(
                                !expanded
                            )
                        }
                        className="mt-6 text-yellow-400 font-bold"
                    >

                        {

                            expanded

                                ? "Show Less"

                                : "Read Full Announcement"

                        }

                    </button>

                )

            }

        </div>

    );

}