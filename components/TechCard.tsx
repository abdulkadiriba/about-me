"use client"

import React from "react"
import type { Technology } from "@/data/technologies"
import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface TechCardProps {
  tech: Technology
  index: number
}

export const TechCard = ({ tech, index }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="rounded overflow-hidden flex items-center  bg-zinc-800 shadow-lg gap-2 p-1 border border-zinc-600 cursor-pointer"
    >
      <img src={tech.icon} alt={tech.name} className="size-4" />
      <span className="text-xs">{tech.name}</span>
    </motion.div>
  )
}
