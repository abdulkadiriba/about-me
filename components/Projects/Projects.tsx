"use client"

import React from "react"
import { projects } from "@/data/projects"
import { Glow } from "@codaworks/react-glow"
import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "../ui/button"

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 9).map((project, index) => (
              <Glow key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow dark:border-secondary glow:border-yellow-700">
                  <img
                    src={project.image}
                    alt={project.url}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{project.url}</CardTitle>
                    <CardDescription className="dark:text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Glow>
            ))}
          </div>
          <div className=" bg-gradient-to-t from-black/90 via-black/80  to-transparent h-64 w-full absolute bottom-0  flex items-center justify-center">
            <Button variant="outline">Show All Projects</Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
