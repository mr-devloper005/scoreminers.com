import { Image as ImageIcon, Mail, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

const lanes = [
  { icon: ImageIcon, title: 'Creator collaborations', body: 'Discuss gallery launches, creator features, and visual campaigns.' },
  { icon: Sparkles, title: 'Licensing and use', body: 'Reach out about usage rights, commercial requests, and visual partnerships.' },
  { icon: Mail, title: 'Media kits', body: 'Request creator decks, editorial support, or visual feature placement.' },
]

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Contact {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-foreground">Reach the team about images, profiles, and visual publishing.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              Share what you are trying to publish or fix. We focus on gallery and profile workflows.
            </p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-[1.6rem] border border-border bg-card p-5 shadow-sm">
                  <lane.icon className="h-5 w-5 text-foreground" />
                  <h2 className="mt-3 text-xl font-semibold text-foreground">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Send a message</h2>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground" placeholder="Your name" />
              <input className="h-12 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground" placeholder="What do you need help with?" />
              <textarea className="min-h-[180px] rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground" placeholder="Share the full context so we can respond with the right next step." />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Send message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
