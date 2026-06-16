"use client";

import { useState } from "react";
import { Save, Upload, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddSchemePage() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [scheme, setScheme] = useState({

        name: "",
        shortDescription: "",
        fullDescription: "",
        category: "",
        budget: "",
        beneficiaries: "",
        launchDate: "",
        status: "Upcoming"

    });

    const handleChange = (e) => {

        setScheme({

            ...scheme,
            [e.target.name]: e.target.value

        });

    };

    const handleImageChange = (e) => {

        const file = e.target.files?.[0];

        if (!file) {

            setImage(null);
            setPreview("");
            return;

        }

        const reader = new FileReader();

        reader.onloadend = () => {

            const imageData = reader.result;

            setImage(imageData);
            setPreview(imageData);

        };

        reader.readAsDataURL(file);

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);
            setMessage("");

            const response = await fetch(
                "http://localhost:5000/api/schemes",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...scheme,
                        image: image || ""
                    })
                }
            );
            const data = await response.json();
            if (data.success) {
                setMessage("Scheme Published Successfully");
                window.location.reload();
            }
            else {

                setMessage(data.message);
            }
        }
        catch (error) {
            console.log(error);
            setMessage("Failed to Publish Scheme");
        }
        finally {

            setLoading(false);

        }

    };

    return (

        <section className="min-h-screen bg-[#0d0d0d] p-10">

            {/* Header */}

            <div className="flex items-center justify-between mb-10">

                <div>

                    <button
                        onClick={() => router.push("/Dashboard")}
                        className="flex items-center gap-2 text-yellow-400 mb-4"
                    >
                        <ArrowLeft size={18} />
                        Dashboard
                    </button>

                    <h1 className="text-white text-5xl font-black">
                        Add Government Scheme
                    </h1>

                    <p className="text-white/60 mt-3">
                        Create and publish new welfare schemes.
                    </p>

                </div>

            </div>

            {message && (

                <div className="mb-8 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 px-5 py-4 text-yellow-200">
                    {message}
                </div>

            )}

            <form
                onSubmit={handleSubmit}
                className="grid lg:grid-cols-3 gap-8"
            >

                {/* Left */}

                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-4xl p-8">

                    <div className="space-y-6">

                        <div>

                            <label className="text-white mb-2 block">
                                Scheme Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={scheme.name}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                        </div>

                        <div>

                            <label className="text-white mb-2 block">
                                Short Description
                            </label>

                            <textarea
                                rows="3"
                                name="shortDescription"
                                value={scheme.shortDescription}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                        </div>

                        <div>

                            <label className="text-white mb-2 block">
                                Full Description
                            </label>

                            <textarea
                                rows="10"
                                name="fullDescription"
                                value={scheme.fullDescription}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="space-y-8">

                    <div className="bg-white/5 border border-white/10 rounded-4xl p-8">

                        <h2 className="text-white text-2xl font-bold mb-6">
                            Scheme Details
                        </h2>

                        <div className="space-y-5">

                            <input
                                type="text"
                                placeholder="Category"
                                name="category"
                                value={scheme.category}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <input
                                type="text"
                                placeholder="Budget Allocation"
                                name="budget"
                                value={scheme.budget}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <input
                                type="text"
                                placeholder="Beneficiaries"
                                name="beneficiaries"
                                value={scheme.beneficiaries}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <input
                                type="date"
                                name="launchDate"
                                value={scheme.launchDate}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <select
                                name="status"
                                value={scheme.status}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            >
                                <option>Upcoming</option>
                                <option>Active</option>
                                <option>Completed</option>
                                <option>Not Completed</option>
                                <option>partial</option>
                            </select>

                        </div>

                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-4xl p-8">

                        <h2 className="text-white text-2xl font-bold mb-6">
                            Scheme Banner
                        </h2>

                        <label className="cursor-pointer border-2 border-dashed border-white/20 rounded-3xl p-12 flex flex-col items-center justify-center">

                            <Upload
                                size={40}
                                className="text-yellow-400 mb-4"
                            />

                            <p className="text-white/70">
                                Upload Scheme Banner
                            </p>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />

                        </label>

                        {preview && (

                            <img
                                src={preview}
                                alt="Scheme banner preview"
                                className="mt-6 h-40 w-full rounded-2xl object-cover"
                            />

                        )}

                    </div>

                    {/* Submit */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3"
                    >

                        <Save size={20} />

                        {loading ? "Publishing..." : "Publish Scheme"}

                    </button>

                </div>

            </form>

        </section>

    );

}
