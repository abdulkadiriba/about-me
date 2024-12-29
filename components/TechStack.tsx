"use client"

import React from "react"
import Link from "next/link"
import { technologies } from "@/data/technologies"
import { motion } from "framer-motion"

import { Icons } from "./Icons"
import { TechCard } from "./TechCard"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export const TechStack = () => {
  return (
    <Card className="h-full glow:border-primary glow:bg-primary/10 overflow-hidden">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Technologies
          </motion.h2>
        </CardTitle>
        <CardDescription>
          <Link target="_blank" href="https://github.com/abdulkadiriba">
            Click to view my github profile
          </Link>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
