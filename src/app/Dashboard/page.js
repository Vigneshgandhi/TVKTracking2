"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";

export default function AdminDashboard() {

const router = useRouter();

const [loading, setLoading] = useState(true);

const [stats, setStats] = useState({

    ministers: 0,
    schemes: 0,
    news: 0,
    announcements: 0

});

const [recentActivities,
    setRecentActivities] = useState([]);

useEffect(() => {

    const adminId =
        sessionStorage.getItem(
            "adminid"
        );

    if (!adminId) {

        router.replace("/Login");

        return;

    }

    fetchDashboardData();

}, []);

const fetchDashboardData =
    async () => {

        try {

            const [

                ministersRes,

                schemesRes,

                newsRes,

                announcementsRes

            ] = await Promise.all([

                fetch(
                    "http://localhost:5000/api/ministers"
                ),

                fetch(
                    "http://localhost:5000/api/schemes"
                ),

                fetch(
                    "http://localhost:5000/api/news"
                ),

                fetch(
                    "http://localhost:5000/api/announcements"
                )

            ]);

            const ministers =
                await ministersRes.json();

            const schemes =
                await schemesRes.json();

            const news =
                await newsRes.json();

            const announcements =
                await announcementsRes.json();

            setStats({

                ministers:
                    ministers.count ||
                    ministers.data?.length ||
                    0,

                schemes:
                    schemes.count ||
                    schemes.data?.length ||
                    0,

                news:
                    news.count ||
                    news.data?.length ||
                    0,

                announcements:
                    announcements.count ||
                    announcements.data?.length ||
                    0

            });

            const activities = [];

            news.data
                ?.slice(0, 3)
                .forEach((item) => {

                    activities.push({

                        title:
                            item.title,

                        type:
                            "News"

                    });

                });

            schemes.data
                ?.slice(0, 3)
                .forEach((item) => {

                    activities.push({

                        title:
                            item.name,

                        type:
                            "Scheme"

                    });

                });

            announcements.data
                ?.slice(0, 3)
                .forEach((item) => {

                    activities.push({

                        title:
                            item.title,

                        type:
                            "Announcement"

                    });

                });

            setRecentActivities(
                activities
            );

        }
        catch (error) {

            console.log(error);

        }
        finally {

            setLoading(false);

        }

    };

const dashboardCards = [

    {
        title:
            "Total Ministers",

        value:
            stats.ministers,

        color:
            "from-yellow-400 to-yellow-600"
    },

    {
        title:
            "Government Schemes",

        value:
            stats.schemes,

        color:
            "from-red-400 to-red-600"
    },

    {
        title:
            "News Articles",

        value:
            stats.news,

        color:
            "from-orange-400 to-orange-600"
    },

    {
        title:
            "Announcements",

        value:
            stats.announcements,

        color:
            "from-pink-400 to-pink-600"
    }

];

if (loading) {

    return (

        <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d]">

            <h1 className="text-white text-3xl font-black">

                Loading Dashboard...

            </h1>

        </section>

    );

}

return (
    <div className="min-h-screen flex flex-col xl:flex-row bg-[#0d0d0d]">

        <DashboardSidebar />

        <main className="flex-1 p-6 xl:p-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">

                <div>

                    <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm mb-3">

                        TVK Governance System

                    </p>

                    <h1 className="text-white text-5xl font-black">

                        Admin Dashboard

                    </h1>

                </div>

                <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl">

                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black text-xl font-black">

                        A

                    </div>

                    <div>

                        <h2 className="text-white font-bold text-lg">

                            Admin

                        </h2>

                        <p className="text-white/60 text-sm">

                            Governance Manager

                        </p>

                    </div>

                </div>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

                {

                    dashboardCards.map(
                        (
                            card,
                            index
                        ) => (

                            <div
                                key={index}
                                className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl"
                            >

                                <div
                                    className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${card.color}`}
                                />

                                <div className="relative z-10">

                                    <p className="text-white/70 mb-4">

                                        {
                                            card.title
                                        }

                                    </p>

                                    <h2 className="text-white text-6xl font-black">

                                        {
                                            card.value
                                        }

                                    </h2>

                                </div>

                            </div>

                        )
                    )

                }

            </div>

            <div className="grid xl:grid-cols-3 gap-8">

                <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-4xl p-8 backdrop-blur-2xl">

                    <h2 className="text-white text-3xl font-black mb-8">

                        Recent Activities

                    </h2>

                    <div className="flex flex-col gap-5">

                        {

                            recentActivities.map(
                                (
                                    activity,
                                    index
                                ) => (

                                    <div
                                        key={index}
                                        className="flex items-center justify-between bg-black/20 border border-white/10 rounded-2xl px-6 py-5"
                                    >

                                        <div className="flex items-center gap-4">

                                            <div className="w-4 h-4 rounded-full bg-yellow-400" />

                                            <p className="text-white">

                                                {

                                                    activity.type

                                                }

                                                :

                                                {

                                                    activity.title

                                                }

                                            </p>

                                        </div>

                                        <span className="text-white/50 text-sm">

                                            Latest

                                        </span>

                                    </div>

                                )
                            )

                        }

                    </div>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-4xl p-8 backdrop-blur-2xl">

                    <h2 className="text-white text-3xl font-black mb-8">

                        Quick Actions

                    </h2>

                    <div className="flex flex-col gap-5">

                        <button
                            onClick={() =>
                                router.push(
                                    "/Dashboard/PublishNews"
                                )
                            }
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-2xl"
                        >

                            Publish News

                        </button>

                        <button
                            onClick={() =>
                                router.push(
                                    "/Dashboard/AddScheme"
                                )
                            }
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-2xl"
                        >

                            Add Scheme

                        </button>

                        <button
                            onClick={() =>
                                router.push(
                                    "/Dashboard/CreateAnnouncement"
                                )
                            }
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-2xl"
                        >

                            Create Announcement

                        </button>

                        <button
                            onClick={() =>
                                router.push(
                                    "/Dashboard/CreateReport"
                                )
                            }
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-2xl"
                        >

                            Create Report

                        </button>

                    </div>

                </div>

            </div>

        </main>

    </div>
);

}
