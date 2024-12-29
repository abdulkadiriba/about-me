import Link from "next/link"
import { Glow } from "@codaworks/react-glow"
import { motion } from "framer-motion"
import GitHubCalendar from "react-github-calendar"

import { Icons } from "./Icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export function GithubCommit() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const shownMonths = 6

    return contributions.filter((activity) => {
      const date = new Date(activity.date)
      const monthOfDay = date.getMonth()

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      )
    })
  }
  return (
    <Card className="h-full glow:border-primary glow:bg-primary/10 overflow-hidden">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <Icons.gitHub className="size-8" /> Github Profile
        </CardTitle>
        <CardDescription>
          <Link target="_blank" href="https://github.com/abdulkadiriba">
            Click to view my github profile
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <GitHubCalendar
          username="abdulkadiriba"
          transformData={selectLastHalfYear}
        />
      </CardContent>
    </Card>
  )
}
