"use client";

import React, { useEffect, useState } from "react";
import { Eye, Pencil, Trash2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import NewsDisclaimer from "../components/News/Disclaimer";

export default function NewsPage() {

    const router = useRouter();

    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [search, setSearch] = useState("");

    const fetchNews = async () => {

        const response = await fetch(
            "http://localhost:5000/api/news"
        );

        const data = await response.json();

        if (data.success) {

            setNews(data.data);
            setFilteredNews(data.data);

        }

    };

    useEffect(() => {

        fetchNews();

    }, []);

    useEffect(() => {

        const filtered = news.filter((item) =>
            item.title
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

        setFilteredNews(filtered);

    }, [search, news]);

    const deleteNews = async (id) => {

        const confirmDelete =
            window.confirm(
                "Delete this news article?"
            );

        if (!confirmDelete) return;

        const response = await fetch(

            `http://localhost:5000/api/news/${id}`,

            {
                method: "DELETE",
                credentials: "include"
            }

        );

        const data = await response.json();

        if (data.success) {

            fetchNews();

        }

    };

    return (
        <React.Fragment>
        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="flex justify-between items-center mb-10">

                <div>

                    <p className="text-yellow-400 uppercase tracking-[0.3em] mb-2">
                        News Management
                    </p>

                    <h1 className="text-white text-5xl font-black">
                        News Articles
                    </h1>

                </div>

              

            </div>

            <div className="relative mb-8">

                <Search
                    className="absolute left-4 top-4 text-white/50"
                />

                <input
                    type="text"
                    placeholder="Search News..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 p-4 text-white"
                />

            </div>

            <NewsDisclaimer/>
            <div className="grid lg:grid-cols-2 gap-8">

                {

                    filteredNews.map((item) => (

                        <div
                            key={item._id}
                            className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden"
                        >

                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-[240px] object-cover"
                            />

                            <div className="p-6">

                                <div className="flex justify-between items-center mb-4">

                                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">

                                        {item.category}

                                    </span>

                                    <span className="text-white/50 text-sm">

                                        {
                                            new Date(
                                                item.createdAt
                                            ).toLocaleDateString()
                                        }

                                    </span>

                                </div>

                                <h2 className="text-white text-2xl font-black mb-4">

                                    {item.title}

                                </h2>

                                <p className="text-white/70 line-clamp-3 mb-6">

                                    {item.article}

                                </p>

                                <div className="flex gap-3">

                                    <button
                                        onClick={() =>
                                            router.push(
                                                `/News/${item._id}`
                                            )
                                        }
                                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex justify-center gap-2"
                                    >

                                        <Eye size={18} />

                                        Read

                                    </button>


                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>
        </React.Fragment>
    );

}