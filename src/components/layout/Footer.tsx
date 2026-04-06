import Link from "next/link";
import { FOOTER_COLUMNS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#" className="text-xl font-bold text-neutral-900">
              {SITE_NAME}
            </a>
            <p className="mt-3 text-sm text-neutral-500">
              見積・請求・入金管理を
              <br />
              これひとつで。
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-bold text-neutral-900">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-sm text-neutral-500 transition-colors hover:text-neutral-700"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-500 transition-colors hover:text-neutral-700"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
