import Link from "next/link"
import { BookImage, Cpu, Home, LayoutGrid } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/Icons"
import { ThemeToggle } from "@/components/Layout/ThemeToggle"
import { MainNav } from "@/components/Navbar/MainNav"

export function SiteHeader() {
  const navigation = [
    { name: "Home", url: "/", icon: Home },
    { name: "Projects", url: "/projects", icon: LayoutGrid },
    { name: "Skills", url: "/skills", icon: Cpu },
    { name: "Gallery", url: "/gallery", icon: BookImage },
  ]
  return (
    <header className="bg-gradient-to-b from-background to-transparent sticky top-0 z-40 w-full ">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div></div>
        <div className="border border-zinc-700 rounded-3xl px-4 py-1 flex bg-background/40 backdrop-blur-md">
          {navigation.map((nav, index) => (
            <div
              key={index}
              className="flex items-center border rounded-2xl px-3 py-1 border-transparent hover:border-zinc-600 text-sm cursor-pointer gap-2 duration-200 hover:bg-zinc-400/10"
            >
              <nav.icon className="size-4" />
              {nav.name}
            </div>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
