"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Zap, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, COMPANY_PHONE, COMPANY_EMAIL } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#0A2540] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-white font-bold text-lg">
              Nexa<span className="text-cyan-400">Tech</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-5 space-y-1 overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const activeClass = "flex items-center px-4 py-3 rounded-xl text-cyan-400 bg-white/10 font-medium";
            const inactiveClass = "flex items-center px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-medium transition-colors";
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={pathname === link.href ? activeClass : inactiveClass}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-5 border-t border-white/10 space-y-3">
          <a href={"tel:" + COMPANY_PHONE} className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors">
            <Phone className="w-4 h-4 text-cyan-400" />
            {COMPANY_PHONE}
          </a>
          <a href={"mailto:" + COMPANY_EMAIL} className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors">
            <Mail className="w-4 h-4 text-cyan-400" />
            {COMPANY_EMAIL}
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition-colors mt-4"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
