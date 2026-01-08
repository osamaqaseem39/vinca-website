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
    <div className="border-b border-gray-200">
      <div className="max-w-full mx-auto px-6 py-2">
        <nav className="text-xs font-light tracking-wide">
          {items.map((item, index) => (
            <span key={index}>
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < items.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}

