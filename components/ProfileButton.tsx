'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import { Icon } from 'lucide-react';

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function ProfileButton() {
  const profiles = [
    {
      name: "+90 541 201 90 97",
      url: "https://wa.me/905412019097",
      icon: "bi:whatsapp",
      description: "/abdulkadiriba",
    },
    {
      name: "Github",
      url: "https://github.com/abdulkadiriba",
      icon: "radix-icons:github-logo",
      description: "/abdulkadiriba",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdulkadiriba/",
      icon: "mdi:linkedin",
      description: "/abdulkadiriba",
    },
    {
      name: "waynedev",
      url: "",
      icon: "ic:baseline-discord",
      description: "waynedev",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/abdulkadir.iba/",
      icon: "bi:instagram",
      description: "/abdulkadiriba",
    },
  ];

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://discord.com/api/webhooks/1171087359975096473/-7_yM5526PopCdWD6uk-Wv7StP39NaoYDyzKLDnr_xkJq6kaSHT99ijmf69fPLhZ5gy6",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: "Bildirim!" }),
        }
      );
    }
    fetchPosts()
  }, [])
 
 
  return (
<DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Button variant="outline">Open</Button>

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
    <DropdownMenuItem>

    </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>
  )
}