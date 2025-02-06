"use client";

import { usePathname } from "next/navigation";
import { Home, LayoutDashboard, ShoppingCart, Package, Users, Star, List, ClipboardList, LogOut } from "lucide-react";
import Link from "next/link";

interface MenuItem {
    name: string;
    link: string;
    icon: JSX.Element;
}

export default function Sidebar() {
    const menuList: MenuItem[] = [
        { name: "Home", link: "/", icon: <Home size={20} /> },
        { name: "Dashboard", link: "/admin", icon: <LayoutDashboard size={20} /> },
        { name: "Products", link: "/admin/products", icon: <ShoppingCart size={20} /> },
        { name: "Brands", link: "/admin/brands", icon: <Package size={20} /> },
        { name: "Customers", link: "/admin/customers", icon: <Users size={20} /> },
        { name: "Reviews", link: "/admin/reviews", icon: <Star size={20} /> },
        { name: "Categories", link: "/app/categories", icon: <List size={20} /> },
        { name: "Orders", link: "/admin/orders", icon: <ClipboardList size={20} /> }
    ];

    return (
        <section className="bg-white border-r px-8 py-8 h-screen flex flex-col justify-between">
            {/* Hekto Heading Centered */}
            <div className="flex justify-center">
                <h1 className="text-[#0D0E43] font-josefin font-bold text-[24px] sm:text-[34px] leading-[34px]">
                    Hekto
                </h1>
            </div>

            {/* Menu Links (Left Aligned) */}
            <ul className="flex flex-col gap-4">
                {menuList.map((item, key) => (
                    <Tab item={item} key={key} />
                ))}
            </ul>

            {/* Logout Button at Bottom */}
            <div className="mt-auto">
                <button className="flex items-center gap-3 px-4 py-2 rounded-xl font-josefin transition-all duration-300 ease-in-out 
                    bg-red-400 text-white hover:bg-red-600 hover:shadow-lg">
                    <LogOut size={20} /> Logout
                </button>
            </div>
        </section>
    );
}

// ✅ Tab Component with Type
function Tab({ item }: { item: MenuItem }) {
    const pathname = usePathname();
    const isSelected = pathname === item.link;

    return (
        <Link href={item.link}>
            <li className={`flex items-center gap-3 px-4 py-2 rounded-xl font-josefin transition-all duration-300 ease-in-out
                ${isSelected ? "bg-violet-400 text-white" : "bg-white text-black hover:bg-gray-100"}
            `}>
                {item.icon} {item.name}
            </li>
        </Link>
    );
}
