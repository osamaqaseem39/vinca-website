'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="border-b border-black bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="text-xs tracking-widest uppercase">
          {items.map((item, index) => (
            <span key={index}>
              {item.href ? (
                <Link href={item.href} className="hover:opacity-60 transition-opacity">
                  {item.label}
                </Link>
              ) : (
                <span className="text-black/60">{item.label}</span>
              )}
              {index < items.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
