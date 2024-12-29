"use client"

import React from "react"
import { Glow, GlowCapture } from "@codaworks/react-glow"
import GitHubCalendar from "react-github-calendar"

import { GithubCommit } from "@/components/GithubCommit"
import Hero from "@/components/Hero"
import { Projects } from "@/components/Projects/Projects"
import { TechStack } from "@/components/TechStack"

function App() {
  return (
    <GlowCapture>
      <Glow>
        <div className="px-4 max-w-6xl mx-auto">
          <Hero />

          <div className="grid md:grid-cols-2 gap-10">
            <GithubCommit />
            <TechStack />
          </div>

          <Projects />
        </div>
      </Glow>
    </GlowCapture>
  )
}

export default App
