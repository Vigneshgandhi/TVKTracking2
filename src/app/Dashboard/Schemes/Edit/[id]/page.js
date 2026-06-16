"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Upload } from "lucide-react";

export default function EditSchemePage() {

const { id } = useParams();

const router = useRouter();

const [loading, setLoading] = useState(false);

const [preview, setPreview] = useState("");

const [image, setImage] = useState(null);

const [scheme, setScheme] = useState({

    name: "",
    shortDescription: "",
    fullDescription: "",
    category: "",
    // image: "",
    budget: "",
    beneficiaries: "",
    status: ""

});

useEffect(() => {

    fetch(
        `http://localhost:5000/api/schemes/${id}`
    )
    .then((res) => res.json())
    .then((data) => {

        if (data.success) {

            setScheme({

                name: data.data.name,
                shortDescription: data.data.shortDescription,
                fullDescription: data.data.fullDescription,
                category: data.data.category,
                budget: data.data.budget,
                image: data.data.image,
                beneficiaries: data.data.beneficiaries,
                status: data.data.status

            });

            if (data.data.image) {
                setPreview(
                    `${data.data.image}`
                );
            }

        }

    });

}, [id]);

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

        const response = await fetch(

            `http://localhost:5000/api/schemes/${id}`,

            {

                method: "PUT",

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

        const data =
            await response.json();

        console.log(data);

        if (data.success) {

            alert(
                "Scheme Updated Successfully"
            );

            router.push(
                "/Dashboard/Schemes"
            );

        }
        else {

            throw new Error(
                data.message
            );

        }

    }
    catch (error) {

        console.error(error);

        alert(
            error.message ||
            "Failed To Update Scheme"
        );

    }
    finally {

        setLoading(false);

    }

};

return (

    <section className="min-h-screen bg-[#0d0d0d] p-10">

        <div className="max-w-7xl mx-auto">

            <button
                onClick={() =>
                    router.back()
                }
                className="flex items-center gap-2 text-yellow-400 mb-8"
            >

                <ArrowLeft size={18} />

                Back

            </button>

            <div className="mb-10">

                <h1 className="text-white text-5xl font-black">

                    Edit Scheme

                </h1>

                <p className="text-white/60 mt-3">

                    Update government scheme information.

                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="grid lg:grid-cols-3 gap-8"
            >

                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[32px] p-8">

                    <div className="space-y-6">

                        <input
                            type="text"
                            name="name"
                            value={scheme.name}
                            onChange={handleChange}
                            placeholder="Scheme Name"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <textarea
                            rows="3"
                            name="shortDescription"
                            value={scheme.shortDescription}
                            onChange={handleChange}
                            placeholder="Short Description"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                        <textarea
                            rows="10"
                            name="fullDescription"
                            value={scheme.fullDescription}
                            onChange={handleChange}
                            placeholder="Full Description"
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                        />

                    </div>

                </div>

                <div className="space-y-8">

                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

                        <h2 className="text-white text-2xl font-bold mb-6">

                            Scheme Details

                        </h2>

                        <div className="space-y-5">

                            <input
                                type="text"
                                name="category"
                                value={scheme.category}
                                onChange={handleChange}
                                placeholder="Category"
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <input
                                type="text"
                                name="budget"
                                value={scheme.budget}
                                onChange={handleChange}
                                placeholder="Budget"
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <input
                                type="text"
                                name="beneficiaries"
                                value={scheme.beneficiaries}
                                onChange={handleChange}
                                placeholder="Beneficiaries"
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            />

                            <select
                                name="status"
                                value={scheme.status}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white"
                            >

                                <option>
                                    Upcoming
                                </option>

                                <option>
                                    Active
                                </option>

                                <option>
                                    Completed
                                </option>

                            </select>

                        </div>

                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

                        <h2 className="text-white text-2xl font-bold mb-6">

                            Banner Image

                        </h2>

                        <label className="cursor-pointer border-2 border-dashed border-white/20 rounded-3xl p-6 flex flex-col items-center justify-center">

                            {

                                preview ?

                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-full h-48 object-cover rounded-2xl"
                                    />

                                :

                                    <Upload
                                        size={40}
                                        className="text-yellow-400"
                                    />

                            }

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />

                        </label>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3"
                    >

                        <Save size={18} />

                        {

                            loading
                                ? "Updating..."
                                : "Update Scheme"

                        }

                    </button>

                </div>

            </form>

        </div>

    </section>

);


}
