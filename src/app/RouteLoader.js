"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function RouteLoader({ children }) {

    const pathname = usePathname();

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {

        setLoading(true);

        const timer =
            setTimeout(() => {

                setLoading(false);

            }, 1500);

        return () =>
            clearTimeout(timer);

    }, [pathname]);

    if (loading) {

        return <Loading />;

    }

    return children;

}