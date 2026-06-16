import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#590202]">
      
      {/* Main Footer Content */}
      <div className="border-t-4 border-[#BF0404]">
        <div className="max-w-7xl mx-auto px-8 py-16">
          
          {/* Top Grid Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-4xl font-black text-[#590202]">TVK</h2>
                <p className="text-sm tracking-widest font-semibold text-[#BF0404]">GOVERNANCE TRACKER</p>
              </div>
              <p className="text-[#590202]/70 font-medium leading-relaxed">
                Transparent governance monitoring for Tamil Nadu's public initiatives and development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#BF0404] font-black text-lg mb-5 uppercase tracking-wide">
                Explore
              </h3>
              <nav aria-label="Quick links" className="flex flex-col gap-3">
                {[
                  { title: "Home", path: "/" },
                  { title: "Manifesto", path: "/Manifesto" },
                  { title: "Ministers", path: "/Ministers" },
                  { title: "News & Updates", path: "/News" }
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    className="text-[#590202] hover:text-[#BF0404] font-semibold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#F2B807] rounded-full group-hover:w-2 transition-all" />
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Government Services */}
            <div>
              <h3 className="text-[#BF0404] font-black text-lg mb-5 uppercase tracking-wide">
                Services
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { title: "Schemes", path: "/Schemes" },
                  { title: "Assembly", path: "/Assembly" },
                  { title: "About TVK", path: "/about" },
                  { title: "Dashboard", path: "/Dashboard" }
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    className="text-[#590202] hover:text-[#BF0404] font-semibold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#F2B807] rounded-full group-hover:w-2 transition-all" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-[#BF0404] font-black text-lg mb-5 uppercase tracking-wide">
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <Mail size={18} className="text-[#BF0404] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-[#590202]/60 uppercase">Email</p>
                    <a href="mailto:support@tvkgovernance.in" className="text-[#590202] font-semibold hover:text-[#BF0404] transition-colors">
                      support@tvkgovernance.in
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <MapPin size={18} className="text-[#BF0404] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-[#590202]/60 uppercase">Location</p>
                    <p className="text-[#590202] font-semibold">Kovilpatti, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-[#BF0404]/20 pt-8" />

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#590202] text-white py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <p className="text-sm font-semibold text-center md:text-left">
              © 2026 TVK Governance Tracker. All Rights Reserved.
            </p>

            {/* Bottom Links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-6">
              {[
                { title: "Privacy Policy", path: "/privacy" },
                { title: "Accessibility", path: "/accessibility" }
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="text-white hover:text-[#F2B807] text-sm font-medium transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

          </div>
        </div>
      </div>

    </footer>
  );
}
