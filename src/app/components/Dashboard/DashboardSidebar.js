"use client";

import {
    LayoutDashboard,
    Users,
    Newspaper,
    FileText,
    Bell,
    Building2,
    FileBarChart2,
    LogOut,
    Megaphone
} from "lucide-react";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function DashboardSidebar() {

    const router = useRouter();

    const pathname = usePathname();

    const menuItems = [

        {
            title: "Dashboard",
            icon: LayoutDashboard,
            path: "/Dashboard"
        },

        {
            title: "Ministers",
            icon: Users,
            path: "/Dashboard/Ministers"
        },

        {
            title: "Schemes",
            icon: FileText,
            path: "/Dashboard/Schemes"
        },

        {
            title: "News",
            icon: Newspaper,
            path: "/Dashboard/News"
        },

        {
            title: "Announcements",
            icon: Bell,
            path: "/Dashboard/Announcements"
        },

        {
            title: "Assembly",
            icon: Building2,
            path: "/Dashboard/Assembly"
        },

        {
            title: "Reports",
            icon: FileBarChart2,
            path: "/Dashboard/Reports"
        },

        {
            title: "Publish News",
            icon: Megaphone,
            path: "/Dashboard/PublishNews"
        }

    ];

    const handleLogout = () => {

        sessionStorage.clear();

        router.replace("/Login");

    };

    return (

        <aside className="w-[290px] min-h-screen bg-black border-r border-white/10 shadow-2xl sticky top-0">

            <div className="h-full flex flex-col justify-between">

                <div>

                    {/* Logo */}

                    <div className="px-6 py-8 border-b border-white/10">

                        <h1 className="text-white text-4xl font-black">
                            TVK
                        </h1>

                        <p className="text-white/80 text-sm tracking-[0.35em]">
                            ADMIN PANEL
                        </p>

                    </div>

                    {/* Navigation */}

                    <nav className="p-4 flex flex-col gap-3">

                        {

                            menuItems.map((item) => {

                                const Icon =
                                    item.icon;

                                const active =
                                    pathname ===
                                    item.path;

                                return (

                                    <button
                                        key={item.title}
                                        onClick={() =>
                                            router.push(
                                                item.path
                                            )
                                        }
                                        className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all text-left ${
                                            active
                                                ? "bg-white text-[#590202] font-bold shadow-xl"
                                                : "text-white hover:bg-white/10"
                                        }`}
                                    >

                                        <Icon
                                            size={22}
                                        />

                                        <span>

                                            {
                                                item.title
                                            }

                                        </span>

                                    </button>

                                );

                            })

                        }

                    </nav>

                </div>

                {/* Logout */}

                <div className="p-4">

                    <button
                        onClick={
                            handleLogout
                        }
                        className="w-full flex items-center justify-center gap-3 bg-black/20 hover:bg-black/30 text-white py-4 rounded-2xl transition-all font-semibold"
                    >

                        <LogOut
                            size={20}
                        />

                        Logout

                    </button>

                </div>

            </div>

        </aside>

    );

}

