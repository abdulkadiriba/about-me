"use client"

import Link from "next/link"
import { profiles } from "@/data/profiles"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ProfileButton() {
  // useEffect(() => {
  //     fetch(
  //       "https://discord.com/api/webhooks/1171087359975096473/-7_yM5526PopCdWD6uk-Wv7StP39NaoYDyzKLDnr_xkJq6kaSHT99ijmf69fPLhZ5gy6",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ content: "Bildirim!" }),
  //       }
  //     );

  // }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Contact</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {profiles.map((item, index) => (
          <Link href={item.url} key={item.name} passHref>
            <DropdownMenuLabel>
              {/* <Icon className="mr-2 w-3 h-3" iconNode={item.icon}  /> */}

              {item.name}
            </DropdownMenuLabel>
          </Link>
        ))}
        <DropdownMenuItem></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
