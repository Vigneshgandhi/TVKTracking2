"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";

export default function EditNewsPage() {

    const { id } = useParams();

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [news, setNews] = useState({

        title: "",
        article: "",
        youtubeLink: "",
        category: "",
        tags: ""

    });

    useEffect(() => {

        fetch(
            `http://localhost:5000/api/news/${id}`
        )
            .then((res) => res.json())
            .then((data) => {

                if (data.success) {

                    setNews({

                        title: data.data.title,

                        article: data.data.article,

                        youtubeLink:
                            data.data.youtubeLink,

                        category:
                            data.data.category,

                        tags:
                            data.data.tags?.join(", ")

                    });

                }

            });

    }, [id]);

    const handleChange = (e) => {

        setNews({

            ...news,

            [e.target.name]:
                e.target.value

        });

    };

    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await fetch(

                `http://localhost:5000/api/news/${id}`,

                {

                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({

                        ...news,

                        tags:
                            news.tags
                                .split(",")
                                .map(
                                    tag =>
                                        tag.trim()
                                )

                    })

                }

            );

            const data =
                await response.json();

            if (data.success) {

                alert(
                    "News Updated Successfully"
                );

                router.push(
                    "/Dashboard/News"
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

            <button
                onClick={() =>
                    router.back()
                }
                className="text-yellow-400 flex items-center gap-2 mb-8"
            >

                <ArrowLeft size={18} />

                Back

            </button>

            <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[32px] p-10">

                <h1 className="text-white text-5xl font-black mb-10">

                    Edit News

                </h1>

                <form
                    onSubmit={handleUpdate}
                    className="space-y-6"
                >

                    <input
                        type="text"
                        name="title"
                        value={news.title}
                        onChange={handleChange}
                        placeholder="News Title"
                        className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                    />

                    <input
                        type="text"
                        name="youtubeLink"
                        value={news.youtubeLink}
                        onChange={handleChange}
                        placeholder="YouTube Link"
                        className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                    />

                    <input
                        type="text"
                        name="category"
                        value={news.category}
                        onChange={handleChange}
                        placeholder="Category"
                        className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                    />

                    <input
                        type="text"
                        name="tags"
                        value={news.tags}
                        onChange={handleChange}
                        placeholder="Tags"
                        className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                    />

                    <textarea
                        rows="12"
                        name="article"
                        value={news.article}
                        onChange={handleChange}
                        placeholder="Article"
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
                                : "Update News"

                        }

                    </button>

                </form>

            </div>

        </section>

    );

}