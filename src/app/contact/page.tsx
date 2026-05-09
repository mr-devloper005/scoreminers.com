import { Image as ImageIcon, Mail, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

const lanes = [
  {
    icon: ImageIcon,
    title: 'Creator collaborations',
    body: 'Plan gallery launches, creator spotlights, and campaigns that need structured visual storytelling.',
  },
  {
    icon: Sparkles,
    title: 'Licensing and commercial use',
    body: 'Ask about usage rights, partnership terms, attribution requirements, and branded content workflows.',
  },
  {
    icon: Mail,
    title: 'Editorial and media requests',
    body: 'Request media kits, feature opportunities, interviews, or publishing support across product sections.',
  },
]

const responseGuidelines = [
  'Include your objective, deadline, and target audience so we can route your request faster.',
  'If reporting an issue, share page URL, device/browser, and steps to reproduce.',
  'For partnership requests, include budget range and desired deliverables.',
]

const contactEmails = (process.env.NEXT_PUBLIC_CONTACT_EMAILS || '')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)

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
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-foreground">Talk to our team about publishing, partnerships, and platform support.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              We review every request with context in mind. Share your goals and constraints, and we will reply with
              practical next steps that fit your workflow.
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
            {contactEmails.length ? (
              <div className="mt-8 rounded-[1.6rem] border border-border bg-card p-5 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground">Email the team</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  For most requests, you can expect an initial response within 1-2 business days.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {contactEmails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 rounded-[1.6rem] border border-border bg-card p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">How to get a faster response</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                {responseGuidelines.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Send a message</h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Tell us what you are trying to achieve, what is blocking you, and what a successful outcome looks like.
            </p>
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
