"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function AdminLogoutButton() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleLogout() {
    setIsSubmitting(true)

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      })
      router.refresh()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Button disabled={isSubmitting} onClick={handleLogout} type="button" variant="outline">
      {isSubmitting ? "ログアウト中..." : "ログアウト"}
    </Button>
  )
}