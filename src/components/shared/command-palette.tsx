'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { useToast } from '@/components/ui/use-toast'
import { Plus, Settings, User, Image as ImageIcon } from 'lucide-react'

const quickLinks = [
  { label: 'Go to Images', href: '/images', icon: ImageIcon },
  { label: 'Go to Profiles', href: '/profile', icon: User },
  { label: 'Go to Settings', href: '/settings', icon: Settings },
]

const createActions = [
  { label: 'Create Image', href: '/create/image', icon: Plus },
  { label: 'Create Profile', href: '/create/profile', icon: Plus },
]

export function CommandPalette() {
  const router = useRouter()
  const { toast } = useToast()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen} title="Command Palette" description="Search for a command to run...">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {quickLinks.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() => {
                router.push(item.href)
                setOpen(false)
              }}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Create">
          {createActions.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() => {
                router.push(item.href)
                setOpen(false)
              }}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Quick">
          <CommandItem
            onSelect={() => {
              toast({ title: 'Gallery', description: 'Opening the image gallery.' })
              router.push('/images')
              setOpen(false)
            }}
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Open gallery
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
