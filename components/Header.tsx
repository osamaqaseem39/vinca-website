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

  // Fetch parent categories on mount
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

  // Load child categories for a parent
  const loadChildCategories = async (parentId: string) => {
    if (selectedParentId === parentId && childCategories.length > 0) {
      return; // Already loaded
    }
    try {
      const children = await fetchCategoriesByParent(parentId);
      setSelectedParentId(parentId);
      setChildCategories(children);
    } catch (error) {
      console.error('Failed to load child categories:', error);
    }
  };

  // Determine selected parent based on current pathname
  useEffect(() => {
    const findMatchingCategory = async () => {
      if (parentCategories.length === 0) return;
      
      // First, check if pathname matches a parent category
      for (const category of parentCategories) {
        const categoryPath = `/categories/${category.slug}`;
        if (pathname === categoryPath || pathname.startsWith(`${categoryPath}/`)) {
          await loadChildCategories(category._id);
          return;
        }
      }
      
      // If pathname matches a child category that's currently loaded, keep parent selected
      const matchingChild = childCategories.find(child => {
        const childPath = `/categories/${child.slug}`;
        return pathname === childPath || pathname.startsWith(`${childPath}/`);
      });
      
      if (matchingChild) {
        // Keep current selection
        return;
      }
      
      // If we're on a category page but no match, try to find parent by checking all categories
      if (pathname.startsWith('/categories/')) {
        // Fetch all categories to find which parent the current slug belongs to
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
      
      // If no match found and we're not on a category page, clear selection
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
    <header className="w-full bg-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-black sticky top-0 bg-white z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Left Side - Main Categories (Parent Categories from Backend) */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs font-light tracking-wide">
              {parentCategories.length > 0 ? (
                parentCategories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug}`}
                    className="uppercase hover:opacity-70 transition-opacity"
                    onMouseEnter={() => loadChildCategories(category._id)}
                  >
                    {category.name.toUpperCase()}
                  </Link>
                ))
              ) : (
                // Fallback loading state
                <span className="uppercase text-gray-400">Loading...</span>
              )}
            </nav>

            {/* Center - Logo */}
            <Link 
              href="/" 
              className="text-xl lg:text-2xl font-bold tracking-wider uppercase absolute left-1/2 -translate-x-1/2 hover:opacity-70 transition-opacity"
            >
              VINCA
            </Link>

            {/* Right Side - Utilities */}
            <div className="flex items-center space-x-4 lg:space-x-6 text-xs font-light tracking-wide ml-auto">
              <Link 
                href="/client-services"
                className="hidden lg:block uppercase hover:opacity-70 transition-opacity"
              >
                CLIENT SERVICES
              </Link>
              <Link 
                href="/login"
                className="hidden lg:block uppercase hover:opacity-70 transition-opacity"
              >
                LOGIN
              </Link>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:opacity-70 transition-opacity p-1" 
                aria-label="Search"
                title="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link
                href="/wishlist"
                className="hover:opacity-70 transition-opacity p-1"
                aria-label="Wishlist"
                title="Wishlist"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </Link>
              <Link 
                href="/cart"
                className="hover:opacity-70 transition-opacity relative p-1" 
                aria-label="Shopping Bag"
                title="Shopping Bag"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden uppercase hover:opacity-70 transition-opacity"
                aria-label="Menu"
              >
                MENU
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar (Child Categories) */}
      {childCategories.length > 0 && (
        <div className="border-b border-black">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center overflow-x-auto space-x-4 lg:space-x-6 py-2 text-xs font-light tracking-wide">
              <Link 
                href="/products" 
                className={`uppercase whitespace-nowrap hover:opacity-70 transition-opacity px-2 py-1 ${isActive('/products') ? 'border border-black' : ''}`}
              >
                VIEW ALL
              </Link>
              {childCategories.map((category) => (
                <Link
                  key={category._id}
                  href={`/categories/${category.slug}`}
                  className={`uppercase whitespace-nowrap hover:opacity-70 transition-opacity px-2 py-1 ${isActive(`/categories/${category.slug}`) ? 'border border-black' : ''}`}
                >
                  {category.name.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search Bar (when search is open) */}
      {isSearchOpen && (
        <div className="border-b border-black bg-white">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <form className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-10 border border-black text-sm font-light bg-white focus:outline-none focus:ring-1 focus:ring-black"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:opacity-70 transition-opacity"
                aria-label="Submit search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-b border-black bg-white">
          <nav className="px-4 sm:px-6 py-6 space-y-4 text-xs font-light tracking-wide">
            {parentCategories.length > 0 ? (
              <>
                {parentCategories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug}`}
                    className="block uppercase py-2 hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name.toUpperCase()}
                  </Link>
                ))}
                <Link 
                  href="/client-services" 
                  className="block uppercase py-2 hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CLIENT SERVICES
                </Link>
                <Link 
                  href="/login" 
                  className="block uppercase py-2 hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOGIN
                </Link>
              </>
            ) : (
              <span className="uppercase text-gray-400">Loading...</span>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}



