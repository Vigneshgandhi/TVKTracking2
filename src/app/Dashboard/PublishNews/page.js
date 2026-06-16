"use client";

import { useState } from "react";
import { ArrowLeft, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PublishNewsPage() {

    const router = useRouter();

    const [news, setNews] = useState({

        title: "",
        article: "",
        youtubeLink: "",
        category: "",
        tags: ""

    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setNews({

            ...news,
            [e.target.name]: e.target.value

        });

    };

    const getYoutubeThumbnail = (url) => {

        const match = url.match(
            /(?:v=|youtu\.be\/)([^&]+)/i
        );

        if (!match) return "";

        return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await fetch(

                "http://localhost:5000/api/news",

                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({

                        ...news,

                        thumbnail:
                            getYoutubeThumbnail(
                                news.youtubeLink
                            )

                    })

                }

            );

            const data =
                await response.json();

            if (data.success) {

                alert(
                    "News Published Successfully"
                );

                setNews({

                    title: "",
                    article: "",
                    youtubeLink: "",
                    category: "",
                    tags: ""

                });

            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <div className="max-w-6xl mx-auto">

                <button
                    onClick={() =>
                        router.push("/Dashboard")
                    }
                    className="text-yellow-400 flex items-center gap-2 mb-8"
                >
                    <ArrowLeft size={18} />
                    Dashboard
                </button>

                <div className="mb-10">

                    <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm mb-4">
                        News Management
                    </p>

                    <h1 className="text-white text-5xl font-black">
                        Publish News
                    </h1>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid lg:grid-cols-3 gap-8"
                >

                    <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[32px] p-8">

                        <div className="space-y-6">

                            <input
                                type="text"
                                placeholder="News Title"
                                name="title"
                                value={news.title}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <textarea
                                rows="12"
                                placeholder="Write Short Article..."
                                name="article"
                                value={news.article}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                        </div>

                    </div>

                    <div className="space-y-8">

                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

                            <h2 className="text-white text-2xl font-bold mb-6">
                                News Details
                            </h2>

                            <div className="space-y-5">

                                <div className="relative">

                                    {/* <Youtube
                                        className="absolute left-4 top-4 text-red-500"
                                    /> */}

                                    <input
                                        type="text"
                                        placeholder="YouTube Link"
                                        name="youtubeLink"
                                        value={news.youtubeLink}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-2xl pl-12 p-4 text-white"
                                    />

                                </div>

                                <input
                                    type="text"
                                    placeholder="Category"
                                    name="category"
                                    value={news.category}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                                <input
                                    type="text"
                                    placeholder="Tags (comma separated)"
                                    name="tags"
                                    value={news.tags}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                                />

                            </div>

                        </div>

                        {

                            news.youtubeLink && (

                                <div className="bg-white/5 border border-white/10 rounded-[32px] p-5">

                                    <img
                                        src={getYoutubeThumbnail(
                                            news.youtubeLink
                                        )}
                                        alt="Thumbnail"
                                        className="w-full rounded-2xl"
                                    />

                                </div>

                            )

                        }

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3"
                        >

                            <Newspaper size={20} />

                            {

                                loading
                                    ? "Publishing..."
                                    : "Publish News"

                            }

                        </button>

                    </div>

                </form>

            </div>

        </section>

    );

}