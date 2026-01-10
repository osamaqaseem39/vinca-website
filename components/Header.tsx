'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { fetchCategories, fetchCategoriesByParent } from '@/lib/api';
import { Category } from '@/types/category';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [parentCategories, setParentCategories] = useState<Category[]>([]);
  const [childCategories, setChildCategories] = useState<Category[]>([]);
  const [selectedParentId, setSelectedParentId] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const loadParentCategories = async () => {
      try {
        const categories = await fetchCategories(true);
        setParentCategories(categories);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };
    loadParentCategories();
  }, []);

  const loadChildCategories = async (parentId: string) => {
    if (selectedParentId === parentId && childCategories.length > 0) {
      return;
    }
    try {
      const children = await fetchCategoriesByParent(parentId);
      setSelectedParentId(parentId);
      setChildCategories(children);
    } catch (error) {
      console.error('Failed to load child categories:', error);
    }
  };

  useEffect(() => {
    const findMatchingCategory = async () => {
      if (parentCategories.length === 0) return;
      
      for (const category of parentCategories) {
        const categoryPath = `/categories/${category.slug}`;
        if (pathname === categoryPath || pathname.startsWith(`${categoryPath}/`)) {
          await loadChildCategories(category._id);
          return;
        }
      }
      
      const matchingChild = childCategories.find(child => {
        const childPath = `/categories/${child.slug}`;
        return pathname === childPath || pathname.startsWith(`${childPath}/`);
      });
      
      if (matchingChild) {
        return;
      }
      
      if (pathname.startsWith('/categories/')) {
        try {
          const allCategories = await fetchCategories(false);
          const pathSlug = pathname.split('/categories/')[1]?.split('/')[0];
          const matchingCategory = allCategories.find(cat => cat.slug === pathSlug);
          
          if (matchingCategory && matchingCategory.parent) {
            const parentId = typeof matchingCategory.parent === 'string' 
              ? matchingCategory.parent 
              : matchingCategory.parent._id;
            await loadChildCategories(parentId);
            return;
          }
        } catch (error) {
          console.error('Failed to fetch all categories:', error);
        }
      }
      
      if (!pathname.startsWith('/categories/')) {
        setSelectedParentId(null);
        setChildCategories([]);
      }
    };
    
    findMatchingCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, parentCategories]);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <header className="w-full bg-white border-b border-black">
      {/* Main Navigation Bar */}
      <div className="sticky top-0 bg-white z-50 border-b border-black">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Categories */}
            <nav className="hidden lg:flex items-center gap-6 text-xs tracking-widest uppercase">
              {parentCategories.length > 0 ? (
                parentCategories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug}`}
                    className="hover:opacity-60 transition-opacity"
                    onMouseEnter={() => loadChildCategories(category._id)}
                  >
                    {category.name}
                  </Link>
                ))
              ) : (
                <span className="text-black/40">Loading...</span>
              )}
            </nav>

            {/* Center - Logo */}
            <Link 
              href="/" 
              className="absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.2em] uppercase font-light hover:opacity-60 transition-opacity"
            >
              VINCA
            </Link>

            {/* Right Side - Actions */}
            <div className="flex items-center gap-4 lg:gap-6 text-xs tracking-widest uppercase ml-auto">
              <Link 
                href="/client-services"
                className="hidden lg:block hover:opacity-60 transition-opacity"
              >
                CLIENT SERVICES
              </Link>
              <Link 
                href="/login"
                className="hidden lg:block hover:opacity-60 transition-opacity"
              >
                LOGIN
              </Link>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:opacity-60 transition-opacity p-1" 
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link
                href="/wishlist"
                className="hover:opacity-60 transition-opacity p-1"
                aria-label="Wishlist"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </Link>
              <Link 
                href="/cart"
                className="hover:opacity-60 transition-opacity relative p-1" 
                aria-label="Cart"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden uppercase hover:opacity-60 transition-opacity"
                aria-label="Menu"
              >
                MENU
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Child Categories */}
      {childCategories.length > 0 && (
        <div className="border-b border-black bg-white">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center overflow-x-auto gap-6 py-3 text-xs tracking-widest uppercase">
              <Link 
                href="/products" 
                className={`whitespace-nowrap hover:opacity-60 transition-opacity ${isActive('/products') ? 'border-b border-black' : ''}`}
              >
                VIEW ALL
              </Link>
              {childCategories.map((category) => (
                <Link
                  key={category._id}
                  href={`/categories/${category.slug}`}
                  className={`whitespace-nowrap hover:opacity-60 transition-opacity ${isActive(`/categories/${category.slug}`) ? 'border-b border-black' : ''}`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-b border-black bg-white">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <form className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pr-10 border border-black text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black placeholder:text-black/40"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:opacity-60 transition-opacity"
                aria-label="Submit search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-b border-black bg-white">
          <nav className="px-4 sm:px-6 py-6 space-y-4 text-xs tracking-widest uppercase">
            {parentCategories.length > 0 ? (
              <>
                {parentCategories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug}`}
                    className="block py-2 hover:opacity-60 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  href="/client-services" 
                  className="block py-2 hover:opacity-60 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CLIENT SERVICES
                </Link>
                <Link 
                  href="/login" 
                  className="block py-2 hover:opacity-60 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOGIN
                </Link>
              </>
            ) : (
              <span className="text-black/40">Loading...</span>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
