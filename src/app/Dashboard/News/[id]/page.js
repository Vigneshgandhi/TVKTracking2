"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function NewsDetailsPage() {

    const { id } = useParams();

    const router = useRouter();

    const [news, setNews] = useState(null);

    useEffect(() => {

        fetch(
            `http://localhost:5000/api/news/${id}`
        )
            .then((res) => res.json())
            .then((data) => {

                if (data.success) {

                    setNews(data.data);

                }

            });

    }, [id]);

    if (!news) {

        return (

            <section className="min-h-screen bg-[#0d0d0d] flex justify-center items-center">

                <h1 className="text-white">
                    Loading...
                </h1>

            </section>

        );

    }

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            <button
                onClick={() =>
                    router.back()
                }
                className="text-yellow-400 flex gap-2 items-center mb-10"
            >

                <ArrowLeft size={18} />

                Back

            </button>

            <div className="max-w-5xl mx-auto">

                <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="w-full rounded-[32px] mb-10"
                />

                <div className="flex gap-4 mb-6">

                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">

                        {news.category}

                    </span>

                    <span className="text-white/60">

                        {
                            new Date(
                                news.createdAt
                            ).toLocaleDateString()
                        }

                    </span>

                </div>

                <h1 className="text-white text-6xl font-black mb-8">

                    {news.title}

                </h1>

                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

                    <p className="text-white/80 leading-loose text-lg whitespace-pre-wrap">

                        {news.article}

                    </p>

                </div>

                <div className="mt-8">

                    <a
                        href={news.youtubeLink}
                        target="_blank"
                        className="bg-red-600 text-white px-8 py-4 rounded-2xl inline-block"
                    >

                        Watch Original News

                    </a>

                </div>

            </div>

        </section>

    );

}