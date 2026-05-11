import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";

const values = [
  {
    title: "Curated by people",
    description:
      "We prioritize human judgment over algorithmic noise so meaningful resources are easier to trust and reuse.",
  },
  {
    title: "Designed for focus",
    description:
      "Every surface is tuned for fast scanning, less clutter, and faster decisions when teams are under time pressure.",
  },
  {
    title: "Built to share",
    description:
      "From public collections to structured listings, shared context stays connected instead of getting buried in chat history.",
  },
];

const principles = [
  {
    title: "Make quality visible",
    description:
      "Strong content should be discoverable in seconds. We design ranking and category views to surface signal quickly.",
  },
  {
    title: "Keep context attached",
    description:
      "Articles, images, bookmarks, and listings should reinforce each other, not live in isolated silos.",
  },
  {
    title: "Support repeat discovery",
    description:
      "The platform is optimized for return visits so teams can continue where they left off with less friction.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a focused discovery platform for creators and teams who need trusted content, faster browsing, and better shared context.`}
      actions={
        <>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge variant="secondary">Our Story</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              A practical home for discovery, publishing, and trusted recommendations.
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} brings together image-led posts, editorial content, listings, and curated resources
              so communities can discover what matters, organize it clearly, and share it with confidence.
            </p>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {principles.map((item) => (
          <Card key={item.title} className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
