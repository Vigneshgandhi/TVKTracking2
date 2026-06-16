"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {

    const router = useRouter();

    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {

        const token = sessionStorage.getItem("adminToken");

        const email = sessionStorage.getItem("adminEmail");

        if (!token || !email) {

            router.replace("/Login");

            return;

        }

        setAuthorized(true);

    }, [router]);

    if (!authorized) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">

                Verifying Access...

            </div>

        );

    }

    return children;

}