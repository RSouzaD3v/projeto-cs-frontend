"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Gerar Site", href: "/generate" },
  { label: "Sites", href: "/sites" },
  { label: "Documentos", href: "/documentos" },
  { label: "Configurações", href: "/configuracoes" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r min-h-screen flex flex-col">
      <div className="px-6 py-4 border-b font-bold text-xl text-blue-600">
        Site Builder
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-4 py-2 rounded-md transition",
                isActive
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t text-sm text-gray-500">
        © {new Date().getFullYear()}  
      </div>
    </aside>
  );
}
