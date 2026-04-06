"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href={isHome ? "#" : "/"} className="flex items-center gap-2">
          <Image
            src="/logo-icon.svg"
            alt={`${SITE_NAME} ロゴ`}
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-bold text-neutral-900">
            {SITE_NAME}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="primary" size="md" href="/apply">
            無料で試す
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="メニュー"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-neutral-700" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-700" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={isHome ? item.href : `/${item.href}`}
                className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-neutral-100 pt-4">
              <Button variant="primary" size="md" href="/apply" className="justify-center">
                無料で試す
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
