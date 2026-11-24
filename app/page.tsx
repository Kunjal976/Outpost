
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  ArrowRight,
  Bot,
  Check,
  Compass,
  FileText,
  Layers,
  LayoutGrid,
  MapPin,
  MessageSquareText,
  Network,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { landingData, SurfaceFeature } from "./_data/landing";
import { CanvasMock, DocsMock, TeamBoardMock } from "./_components/SurfaceMocks";
import { PricingTable } from "@clerk/nextjs";

const PRICING_TAB =
  "rounded-full px-5 py-1.5 data-active:bg-primary data-active:text-primary-foreground dark:data-active:bg-primary dark:data-active:text-primary-foreground";

const trustIcons = {
  Network,
  Bot,
  Layers,
  FileText,
};

const surfaceIcons = {
  Layers,
  FileText,
  LayoutGrid,
  Workflow,
};

const stepIcons = {
  MessageSquareText,
  Bot,
  Users2:Users,
};

function renderSurfaceMock(mockType: SurfaceFeature["mockType"]) {
  switch (mockType) {
    case "canvas":
      return <CanvasMock />;
    case "docs":
      return <DocsMock />;
    case "teamboard":
      return <TeamBoardMock />;
    default:
      return null;
  }
}

export default function Home() {
  const {
    hero,
    audienceStrip,
    trustItems,
    featuresSection,
    howItWorks,
    pricing,
    ctaBanner,
    footer,
  } = landingData;

  return (
    <main className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <section className="relative topo-bg overflow-hidden border-b border-border/40 py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-mono text-muted-foreground shadow-xs">
            <span className="text-primary text-[10px] leading-none" aria-hidden="true">
              {hero.eyebrow.marker}
            </span>
            <span className="font-semibold text-foreground tracking-wider uppercase text-[11px]">
              {hero.eyebrow.text}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl max-w-4xl text-balance">
            {hero.headline.prefix}
            <span className="text-primary">
              {hero.headline.highlight}
            </span>
            {hero.headline.suffix}
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-7 text-base font-semibold shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.text}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base font-medium bg-background/80 backdrop-blur-xs transition-transform hover:-translate-y-0.5">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.text}
              </Link>
            </Button>
          </div>

          {/* Video Preview */}
          <div className="survey-frame scroll-tilt relative mx-auto mt-14 w-full max-w-5xl rounded-2xl border border-border/70 bg-card/70 p-2 shadow-2xl backdrop-blur-md sm:p-3">
            <div className="relative overflow-hidden rounded-xl border border-border/50 bg-neutral-950 aspect-video shadow-inner">

              <div className="flex h-9 items-center justify-between border-b border-white/10 bg-neutral-900/90 px-4">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-500/80" />
                  <span className="size-2.5 rounded-full bg-yellow-500/80" />
                  <span className="size-2.5 rounded-full bg-green-500/80" />
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                  <Compass className="size-3 text-primary" />
                  <span>{hero.video.headerUrl}</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{hero.video.agentBadge}</span>
                </div>
              </div>

              <video
                autoPlay
                muted
                loop
                playsInline
                poster={hero.video.poster}
                className="h-full w-full object-cover"
              >
                <source src={hero.video.webm} type="video/webm" />
                <source src={hero.video.mp4} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Strip */}
      <section className="border-b border-border/40 bg-muted/30 py-4 sm:py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            {audienceStrip.label}
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {audienceStrip.audiences.map((audience, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full border border-border/60 bg-background/90 px-3.5 py-1 text-xs font-medium text-foreground shadow-2xs hover:border-primary/40 transition-colors"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-b border-border/40 bg-muted/15 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Engineered for high-velocity software teams
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-14 text-sm font-mono text-muted-foreground/80">
            {trustItems.map((item, idx) => {
              const IconComponent = trustIcons[item.icon];

              return (
                <div key={idx} className="flex items-center gap-2">
                  <IconComponent className="size-4 text-primary" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary font-medium">
              <Sparkles className="size-3.5" />
              <span>{featuresSection.badge}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground text-balance">
              {featuresSection.heading}
            </h2>

            <p className="mt-4 text-muted-foreground text-lg text-balance leading-relaxed">
              {featuresSection.subtitle}
            </p>
          </div>

          <div className="mt-20 sm:mt-24 space-y-24 sm:space-y-32">
            {featuresSection.surfaces.map((surface, index) => {
              const IconComponent = surfaceIcons[surface.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={surface.id}
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary font-semibold">
                      <IconComponent className="size-3.5" />
                      <span>{surface.tag}</span>
                    </div>

                    <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
                      {surface.title}
                    </h3>

                    <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {surface.description}
                    </p>

                    <div className="mt-6 sm:mt-8 space-y-4">
                      {surface.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <Check className="size-3.5" />
                          </div>

                          <div>
                            <span className="font-semibold text-sm text-foreground">
                              {bullet.title}
                            </span>

                            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                              {bullet.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    {renderSurfaceMock(surface.mockType)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="relative border-t border-border/40 bg-muted/15 py-24 sm:py-32 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary font-medium">
              <MapPin className="size-3.5" />
              <span>{howItWorks.badge}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              {howItWorks.heading}
            </h2>

            <p className="mt-4 text-muted-foreground text-lg">
              {howItWorks.subtitle}
            </p>

            <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground/80 tracking-wider">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span>{howItWorks.trailInfo}</span>
            </div>
          </div>

          <div className="relative mx-auto mt-20 max-w-5xl">
            <div
              className="absolute top-1/2 left-[15%] right-[15%] -translate-y-12 hidden md:block border-t-2 border-dashed border-primary/35 -z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {howItWorks.steps.map((step, idx) => {
                const IconComponent = stepIcons[step.icon];

                return (
                  <div
                    key={idx}
                    className="relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-7 shadow-sm hover:border-primary/50 transition-all hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-border/40">
                        <div className="flex items-center gap-2">
                          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-mono font-bold text-xs border border-primary/25 shadow-xs">
                            {step.stepNumber}
                          </div>

                          <span className="font-mono text-xs font-semibold tracking-wider text-primary">
                            {step.waypointCode}
                          </span>
                        </div>

                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                          {step.waypointTag}
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-2.5">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-primary">
                          <IconComponent className="size-4" />
                        </div>

                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <ul className="mt-6 pt-4 border-t border-border/40 space-y-2 text-xs font-mono text-muted-foreground">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <span className="text-primary text-[10px]">◆</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t border-border/40 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary font-medium">
              <Zap className="size-3.5" />
              <span>{pricing.badge}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              {pricing.heading}
            </h2>

            <p className="mt-4 text-muted-foreground text-lg">
              {pricing.subtitle}
            </p>
          </div>

          <Tabs
            defaultValue="user"
            className="mx-auto max-w-5xl items-center gap-10"
          >
            <TabsList className="h-auto rounded-full border border-white/10 bg-white/3 p-1">
              <TabsTrigger value="user" className={PRICING_TAB}>
                Personal
              </TabsTrigger>

              <TabsTrigger value="organization" className={PRICING_TAB}>
                Team
              </TabsTrigger>
            </TabsList>

            <TabsContent value="user">
              <div>Personal Pricing</div>
            </TabsContent>

            <TabsContent value="organization">
              <div>Team Pricing</div>
            </TabsContent>
          </Tabs>

          {/* Early Access Pricing Placeholder */}
          <div className="mt-16 text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl sm:text-6xl font-extrabold text-foreground">
                {pricing.placeholder.priceTag}
              </span>

              <span className="text-muted-foreground font-mono text-sm">
                during early access
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-foreground">
              {pricing.placeholder.title}
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground leading-relaxed">
              {pricing.placeholder.description}
            </p>

            <div className="mx-auto mt-8 max-w-lg rounded-xl border border-border/60 bg-muted/20 p-5 text-left">
              <ul className="space-y-3 text-sm text-foreground">
                {pricing.placeholder.perks.map((perk, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2.5">
                    <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="size-3" />
                    </div>

                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
              >
                <Link href={pricing.placeholder.cta.href}>
                  {pricing.placeholder.cta.text}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <p className="font-mono text-xs text-muted-foreground">
                {pricing.placeholder.footnote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-border/40 topo-bg py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mx-auto max-w-2xl">

            <div className="inline-block mb-6">
              <Image
                src={ctaBanner.mascotImage}
                alt="Outpost Mascot"
                width={84}
                height={84}
                className="mx-auto h-20 w-auto object-contain drop-shadow-xl"
              />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground text-balance">
              {ctaBanner.heading}
            </h2>

            <p className="mt-4 text-lg text-muted-foreground text-balance leading-relaxed">
              {ctaBanner.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
              >
                <Link href={ctaBanner.cta.href}>
                  {ctaBanner.cta.text}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={footer.logoDark}
              alt="Outpost"
              width={120}
              height={60}
              className="h-7 w-auto object-contain"
            />

            <span className="font-mono text-xs text-muted-foreground">
              {footer.attribution}
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {footer.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
