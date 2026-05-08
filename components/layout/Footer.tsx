import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Briefcase as Linkedin, MessageCircle as Twitter, Code2 as Github, Globe as Facebook } from 'lucide-react';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS, NAV_LINKS } from "@/lib/constants";

const serviceLinks = [
  { label: "Cloud Solutions", href: "/services#cloud" },
  { label: "Cybersecurity", href: "/services#cybersecurity" },
  { label: "Networking", href: "/services#networking" },
  { label: "Managed IT", href: "/services#managed-it" },
  { label: "Software Development", href: "/services#software-dev" },
  { label: "IT Consulting", href: "/services#it-consulting" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-bold text-xl">
                Nexa<span className="text-cyan-400">Tech</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Empowering businesses through innovative technology solutions. Your trusted IT partner for cloud, security, and digital transformation.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={"mailto:" + COMPANY_EMAIL} className="flex items-start gap-3 text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <a href={"tel:" + COMPANY_PHONE} className="flex items-start gap-3 text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                  {COMPANY_PHONE}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                  {COMPANY_ADDRESS}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-sm transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-white/40 hover:text-white/70 text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
