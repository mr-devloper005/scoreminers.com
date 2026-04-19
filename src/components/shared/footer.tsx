import Link from 'next/link'
import { FileText, Building2, LayoutGrid, Tag, Image as ImageIcon, User } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { FOOTER_OVERRIDE_ENABLED, FooterOverride } from '@/overrides/footer'
import { filterTasksForUiSurface } from '@/components/shared/ui-surface-tasks'

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

function getFooterPlatformLinks() {
  return filterTasksForUiSurface(SITE_CONFIG.tasks).map((task) => ({
    name: task.label,
    href: task.route,
    icon: taskIcons[task.key] || LayoutGrid,
  }))
}

const footerLegal = [
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
]

export function Footer() {
  if (FOOTER_OVERRIDE_ENABLED) {
    return <FooterOverride />
  }

  const { recipe } = getFactoryState()
  const surfaceTasks = filterTasksForUiSurface(SITE_CONFIG.tasks)
  const footerPlatformLinks = getFooterPlatformLinks()

  if (recipe.footer === 'minimal-footer') {
    return (
      <footer className="border-t border-border bg-background text-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold">{SITE_CONFIG.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{SITE_CONFIG.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {surfaceTasks.map((task) => (
              <Link key={task.key} href={task.route} className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-muted/50">
                {task.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  if (recipe.footer === 'dense-footer' || recipe.footer === 'editorial-footer') {
    return (
      <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] text-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <div className="h-11 w-11 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                  <img src="/favicon.png?v=20260415" alt={`${SITE_CONFIG.name} logo`} width="44" height="44" className="h-full w-full object-contain" />
                </div>
                <div>
                  <span className="block text-lg font-semibold">{SITE_CONFIG.name}</span>
                  <span className="text-xs uppercase tracking-[0.22em] text-slate-500">{siteContent.footer.tagline}</span>
                </div>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">{SITE_CONFIG.description}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Surfaces</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {footerPlatformLinks.map((item: any) => (
                  <li key={item.name}><Link href={item.href} className="flex items-center gap-2 hover:text-slate-950">{item.icon ? <item.icon className="h-4 w-4" /> : null}{item.name}</Link></li>
                ))}
              </ul>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Legal</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {footerLegal.map((item) => (
                  <li key={item.name}><Link href={item.href} className="hover:text-slate-950">{item.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                <img src="/favicon.png?v=20260415" alt={`${SITE_CONFIG.name} logo`} width="44" height="44" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="block text-lg font-semibold">{SITE_CONFIG.name}</span>
                <span className="text-xs uppercase tracking-[0.22em] text-slate-500">{siteContent.footer.tagline}</span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">{SITE_CONFIG.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Surfaces</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {footerPlatformLinks.map((item: any) => (
                <li key={item.name}><Link href={item.href} className="flex items-center gap-2 hover:text-slate-950">{item.icon ? <item.icon className="h-4 w-4" /> : null}{item.name}</Link></li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Legal</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {footerLegal.map((item) => (
                <li key={item.name}><Link href={item.href} className="hover:text-slate-950">{item.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</div>
      </div>
    </footer>
  )
}
