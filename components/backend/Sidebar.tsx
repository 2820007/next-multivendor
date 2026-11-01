
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  Package,
  Users,
  Store,
  ShoppingBag,
  Settings,
  Sprout,
  UserCog,
  Globe,
  ChevronDown,
  
  Tags,
  SlidersHorizontal,
  Image,
  Boxes,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Catalogue",
    icon: Package,
    children: [
      {
        name: "Products",
        href: "/dashboard/catalogue/products",
        icon: Boxes,
      },
      {
        name: "Categories",
        href: "/dashboard/catalogue/categories",
        icon: Tags,
      },
      {
        name: "Attributes",
        href: "/dashboard/catalogue/attributes",
        icon: SlidersHorizontal,
      },
      {
        name: "Banners",
        href: "/dashboard/catalogue/banners",
        icon: Image,
      },
    ],
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    name: "Markets",
    href: "/dashboard/markets",
    icon: Store,
  },
  {
    name: "Farmers",
    href: "/dashboard/farmers",
    icon: Sprout,
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    name: "Staff",
    href: "/dashboard/staff",
    icon: UserCog,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  const [catalogueOpen, setCatalogueOpen] = useState(
    pathname.startsWith("/dashboard/catalogue")
  );

  return (
   <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white">
            G
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              GreenMart
            </h1>
            <p className="text-xs text-slate-500">Management Portal</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>

        {navigation.map((item) => {
          const Icon = item.icon;

          // Catalogue dropdown
          if ("children" in item && item.children) {
            const isCatalogueActive = pathname.startsWith(
              "/dashboard/catalogue"
            );

            return (
              <div key={item.name}>
                <button
                  type="button"
                  onClick={() => setCatalogueOpen((prev) => !prev)}
                  aria-expanded={catalogueOpen}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isCatalogueActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.8} />

                  <span className="flex-1 text-left">{item.name}</span>
               
                  

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      catalogueOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {catalogueOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-3">
                    {item.children.map((child) => {
                      const ChildIcon = child.icon;
                      const isActive = pathname === child.href;

                      return (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                            isActive
                              ? "bg-emerald-50 font-medium text-emerald-700"
                              : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"

                          }`}
                        >
                          <ChildIcon  size={17} strokeWidth={1.8} />
                          <span>{child.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href!}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-100 p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
        >
          <Globe size={19} strokeWidth={1.8} />
          <span>Online Store</span>
        </Link>

        <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-700">
            A
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-800">
              Admin
            </p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
