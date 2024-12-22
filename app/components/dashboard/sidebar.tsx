"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Ambulance, ClipboardList, FileText, Home } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    label: "Private Pay",
    icon: FileText,
    href: "/dashboard/quote/private-pay",
  },
  {
    label: "Facility Pay",
    icon: ClipboardList,
    href: "/dashboard/quote/facility-pay",
  },
  {
    label: "Insurance Pay",
    icon: FileText,
    href: "/dashboard/quote/insurance-pay",
  },
  {
    label: "Special Pay",
    icon: Ambulance,
    href: "/dashboard/quote/special-pay",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white w-64">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Trust Medical</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}