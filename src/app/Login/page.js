"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    ShieldCheck,
    Landmark,
    Users,
    FileText,
    TrendingUp,
    Lock,
    Mail
} from "lucide-react";

export default function AdminLoginPage() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [stats, setStats] = useState({

    ministers: 0,

    schemes: 0,

    reports: 0,

    transparency: 100

    });
    const [statsLoading, setStatsLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const fetchStats = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/stats");
            if (!response.ok) {
                console.error("/api/stats HTTP error", response.status);
                return;
            }

            const data = await response.json();
            console.log("/api/stats ->", data);

            if (data && data.success && data.data) {
                setStats(data.data);
            } else if (data && data.ministers !== undefined) {
                setStats({
                    ministers: data.ministers || 0,
                    schemes: data.schemes || 0,
                    reports: data.reports || 0,
                    transparency: data.transparency || 100
                });
            }

        } catch (err) {
            console.error("Failed to fetch stats:", err);
        }
    };

    useEffect(() => {
        let mounted = true;
        let intervalId;

        const fetchStatsSafe = async () => {
            if (!mounted) return;
            await fetchStats();
            if (mounted) setStatsLoading(false);
        };

        fetchStatsSafe();
        intervalId = setInterval(fetchStatsSafe, 10000);

        return () => {
            mounted = false;
            if (intervalId) clearInterval(intervalId);
        };
    }, []);
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);
            setError("");

            const response = await fetch(
                "http://localhost:5000/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (data.success) {

                sessionStorage.setItem("adminToken", data.token);
                sessionStorage.setItem("adminEmail", data.admin.email);
                sessionStorage.setItem("adminid", data.admin.id);

                router.push("/Dashboard");

            } else {

                setError(data.message);

            }

        } catch (error) {

            setError("Unable to connect to server.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="min-h-screen flex bg-black overflow-hidden">

            {/* LEFT PANEL */}

            <div className="hidden lg:flex relative w-[65%] flex-col justify-between p-16 overflow-hidden">

                {/* Background Glow */}

                <div className="absolute inset-0">

                    <div className="absolute top-10 left-10 w-100 h-100 rounded-full bg-yellow-500/10 blur-[150px] animate-pulse"></div>

                    <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-red-500/10 blur-[180px] animate-pulse"></div>

                </div>

                {/* Hero */}

                <div className="relative z-10">

                    <div className="flex items-center gap-4 mb-10">

                        <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center">

                            <Landmark size={32} className="text-black" />

                        </div>

                        <div>

                            <h1 className="text-white text-3xl font-black">
                                TVK Governance
                            </h1>

                            <p className="text-yellow-300 tracking-widest text-sm">
                                ADMINISTRATION PORTAL
                            </p>

                        </div>

                    </div>

                    <h2 className="text-white text-7xl font-black leading-tight mb-8">

                        Governance
                        <br />

                        Transparency
                        <br />

                        Dashboard

                    </h2>

                    <p className="text-yellow-300 text-xl max-w-2xl leading-relaxed">

                        Monitor government performance,
                        manage schemes, publish official
                        announcements, track manifesto implementation,
                        and ensure transparent governance.

                    </p>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-6 mt-12">

                    <div className="bg-white rounded-3xl p-6 shadow-lg">

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">

                                <Users size={24} className="text-[#5c0000]" />

                            </div>

                            <h3 className="text-4xl font-black text-[#5c0000]">

                                {statsLoading ? "..." : stats.ministers}

                            </h3>

                        </div>

                        <p className="text-gray-600 mt-2">Ministers</p>

                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-lg">

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">

                                <FileText size={22} className="text-[#5c0000]" />

                            </div>

                            <h3 className="text-4xl font-black text-[#5c0000]">

                                {statsLoading ? "..." : stats.schemes}

                            </h3>

                        </div>

                        <p className="text-gray-600 mt-2">Government Schemes</p>

                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-lg">

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">

                                <FileText size={22} className="text-[#5c0000]" />

                            </div>

                            <h3 className="text-4xl font-black text-[#5c0000]">

                                {statsLoading ? "..." : stats.reports}

                            </h3>

                        </div>

                        <p className="text-gray-600 mt-2">Reports Generated</p>

                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-lg">

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">

                                <ShieldCheck size={22} className="text-[#5c0000]" />

                            </div>

                            <h3 className="text-4xl font-black text-[#5c0000]">

                                {stats.transparency}%

                            </h3>

                        </div>

                        <p className="text-gray-600 mt-2">Transparency Index</p>

                    </div>

                </div>
            </div>
            {/* RIGHT PANEL */}

            <div className="w-full lg:w-[35%] flex items-center justify-center px-8 py-10">

                <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">

                    <div className="text-center mb-10">

                        <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto mb-6">

                            <ShieldCheck
                                size={46}
                                className="text-black"
                            />

                        </div>

                        <h1 className="text-white text-5xl font-black mb-4">
                            Welcome
                        </h1>

                        <p className="text-white/70 leading-relaxed">

                            Access the Governance
                            Management System.

                        </p>

                    </div>

                    {error && (

                        <div className="bg-red-500/20 border border-red-300/20 text-white rounded-2xl px-5 py-4 mb-6">
                            {error}
                        </div>

                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div className="relative">

                            <Mail
                                className="absolute left-4 top-4 text-white/50"
                                size={20}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Administrator Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-yellow-400"
                                required
                            />

                        </div>

                        <div className="relative">

                            <Lock
                                className="absolute left-4 top-4 text-white/50"
                                size={20}
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-yellow-400"
                                required
                            />

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">

                            <p className="text-yellow-300 font-semibold mb-2">
                                Governance Mission
                            </p>

                            <p className="text-white/70 text-sm leading-relaxed">
                                Ensuring transparency,
                                accountability, and efficient
                                public administration through
                                digital governance.
                            </p>

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-black py-4 rounded-2xl hover:scale-[1.02] transition-all shadow-xl"
                        >

                            {loading
                                ? "Authenticating..."
                                : "Access Dashboard"}

                        </button>

                    </form>

                    <div className="mt-8 text-center">

                        <p className="text-white/40 text-sm">

                            Authorized Personnel Only

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}