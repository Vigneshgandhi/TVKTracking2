import Link from "next/link";
// import {useRouter} from 'next/navigation'

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-8 py-5">
            <nav className="bg-black/50 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(255,255,255,0.15)] rounded-3xl px-8 py-2.5 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-red-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        TVK
                    </div>
                    <div>
                        <h6 className="text-white text-lg font-bold tracking-wide">Governance Tracker</h6>
                        <p className="text-white/60 text-xs">Transparency • Accountability • Progress</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-3">
                    {["Home", "Dashboard", "Manifesto", "Ministers", "Schemes", "Assembly", "About"].map((item, index) => {
                        const href = item === "Home" ? "/" : `/${item}`;
                        return (
                            <Link
                                key={index}
                                href={href}
                                className="text-white/80 hover:text-white px-5 py-2.5 rounded-xl border border-transparent hover:border-white/30 hover:bg-white/10 transition-all duration-300 font-medium"
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <Link className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-5 py-2.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg" href="/Reports">
                        Report
                    </Link>
                </div>
            </nav>
        </header>
    );
}
