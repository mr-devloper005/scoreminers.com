"use client"

import Link from "next/link"
import { Bell, Image as ImageIcon, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { useAuth } from "@/lib/auth-context"

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Welcome back, {user?.name || "User"}. Manage your gallery and profile presence.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/images"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/50"
          >
            <ImageIcon className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Images</p>
              <p className="text-sm text-muted-foreground">Browse the gallery</p>
            </div>
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/50"
          >
            <User className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Profiles</p>
              <p className="text-sm text-muted-foreground">Discover creators</p>
            </div>
          </Link>
          <Link
            href="/create/image"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/50"
          >
            <ImageIcon className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Share an image</p>
              <p className="text-sm text-muted-foreground">Open create flow</p>
            </div>
          </Link>
          <Link
            href="/create/profile"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/50"
          >
            <User className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Create profile</p>
              <p className="text-sm text-muted-foreground">Open create flow</p>
            </div>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/notifications">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
