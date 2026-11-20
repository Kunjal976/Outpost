export interface HeroData {
  eyebrow: {
    marker: string;
    text: string;
  };
  headline: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  video: {
    webm: string;
    mp4: string;
    poster: string;
    headerUrl: string;
    agentBadge: string;
  };
}

export interface AudienceData {
  label: string;
  audiences: string[];
}

export interface SurfaceBullet {
  title: string;
  detail: string;
}

export interface SurfaceFeature {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: "Layers" | "FileText" | "LayoutGrid" | "Workflow";
  bullets: SurfaceBullet[];
  mockType: "canvas" | "docs" | "teamboard";
}

export interface FeaturesSectionData {
  badge: string;
  heading: string;
  subtitle: string;
  surfaces: SurfaceFeature[];
}

export interface TrustItem {
  icon: "Network" | "Bot" | "Layers" | "FileText";
  label: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  waypointCode: string;
  waypointTag: string;
  title: string;
  description: string;
  details: string[];
  icon: "MessageSquareText" | "Bot" | "Users2";
}

export interface HowItWorksData {
  badge: string;
  heading: string;
  subtitle: string;
  trailInfo: string;
  steps: HowItWorksStep[];
}

export interface PricingPlaceholderData {
  statusBadge: string;
  priceTag: string;
  title: string;
  description: string;
  perks: string[];
  cta: {
    text: string;
    href: string;
  };
  footnote: string;
}

export interface PricingData {
  badge: string;
  heading: string;
  subtitle: string;
  placeholder: PricingPlaceholderData;
}

export interface CtaBannerData {
  mascotImage: string;
  heading: string;
  subtitle: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  logoDark: string;
  attribution: string;
  links: FooterLink[];
}

export interface LandingData {
  hero: HeroData;
  audienceStrip: AudienceData;
  trustItems: TrustItem[];
  featuresSection: FeaturesSectionData;
  howItWorks: HowItWorksData;
  pricing: PricingData;
  ctaBanner: CtaBannerData;
  footer: FooterData;
}

export const landingData: LandingData = {
  hero: {
    eyebrow: {
      marker: "◆",
      text: "Early access",
    },
    headline: {
      prefix: "An ",
      highlight: "outpost",
      suffix: " for whatever you're building",
    },
    subtitle:
      "The intelligent collaborative workspace for modern builders. Design architecture diagrams, draft structured technical specifications, and brainstorm with autonomous AI agents in real time.",
    primaryCta: {
      text: "Start building free",
      href: "/sign-up",
    },
    secondaryCta: {
      text: "See how it works",
      href: "#how-it-works",
    },
    video: {
      webm: "/social/videos/hero.webm",
      mp4: "/social/videos/hero.mp4",
      poster: "/social/videos/hero-poster.jpg",
      headerUrl: "outpost.app/workspace/architecture-canvas",
      agentBadge: "Agent active",
    },
  },

  audienceStrip: {
    label: "Who it's for:",
    audiences: [
      "product teams",
      "founders",
      "solo builders",
      "agencies",
      "consultants",
    ],
  },

  trustItems: [
    { icon: "Network", label: "Multiplayer CRDT Sync" },
    { icon: "Bot", label: "Autonomous Agents" },
    { icon: "Layers", label: "Live Architecture Diagrams" },
    { icon: "FileText", label: "Structured Tech Specs" },
  ],

  featuresSection: {
    badge: "Surfaces",
    heading: "One agent, one workspace, your whole team",
    subtitle:
      "Three seamlessly connected creative surfaces united by autonomous agent intelligence, live multiplayer presence, and bi-directional document synchronization.",
    surfaces: [
      {
        id: "canvas",
        title: "Canvas",
        tag: "Infinite Visual Whiteboard",
        description:
          "An infinite whiteboard where the agent draws flowcharts, ERDs, architecture diagrams, and org charts shape by shape and edits them in place when you ask.",
        icon: "Layers",
        bullets: [
          {
            title: "Shape-by-shape generation",
            detail:
              "Generate flowcharts, cloud topologies, and entity diagrams with automatic semantic layout and edge routing.",
          },
          {
            title: "In-place agent editing",
            detail:
              "Ask the agent to add failover branches, database replicas, or cache tiers without wiping or rearranging existing work.",
          },
          {
            title: "Mermaid & vector export",
            detail:
              "One-click sync to Mermaid code, high-resolution SVG diagrams, and production documentation repositories.",
          },
        ],
        mockType: "canvas",
      },
      {
        id: "docs",
        title: "Docs",
        tag: "Structured Block Editor",
        description:
          "A block editor where the agent turns a diagram into a written spec and rewrites or summarizes sections on command.",
        icon: "FileText",
        bullets: [
          {
            title: "Diagram-to-spec synthesis",
            detail:
              "Convert visual architecture into exhaustive PRDs, API endpoint contracts, and deployment blueprints instantly.",
          },
          {
            title: "Context-aware block editor",
            detail:
              "Slash commands and rich block primitives for database tables, code blocks, checklists, and interactive callouts.",
          },
          {
            title: "Section rewrite & summarize",
            detail:
              "Highlight any technical segment to rewrite with edge cases, adjust stakeholder tone, or condense into executive summaries.",
          },
        ],
        mockType: "docs",
      },
      {
        id: "teamboard",
        title: "TeamBoard",
        tag: "Multiplayer Org Workspaces",
        description:
          "A kanban board of every workspace in your org with live cursors so teammates can jump in together.",
        icon: "LayoutGrid",
        bullets: [
          {
            title: "All org workspaces in one board",
            detail:
              "Track active architecture initiatives, technical reviews, and engineering RFCs across your entire team.",
          },
          {
            title: "Live multiplayer presence",
            detail:
              "Watch teammate cursors move across the board with real-time status badges and instant workspace jump-in.",
          },
          {
            title: "Organization RBAC & sharing",
            detail:
              "Granular permission scopes via Clerk Organizations, allowing friction-free collaboration across teams and external partners.",
          },
        ],
        mockType: "teamboard",
      },
    ],
  },

  howItWorks: {
    badge: "Waypoints",
    heading: "How it works",
    subtitle:
      "A guided route from initial spark to verified system architecture.",
    trailInfo: "TRAIL ROUTE // 3 WAYPOINTS TO PRODUCTION",
    steps: [
      {
        stepNumber: "01",
        waypointCode: "WP-01",
        waypointTag: "STARTING ELEVATION",
        title: "Describe it",
        description:
          "Talk or type what you're building. Paste a rough user story, a list of services, API requirements, or speak your thoughts out loud.",
        details: [
          "Natural language & voice input",
          "Accepts rough bullet points or PRDs",
          "No diagramming skills required",
        ],
        icon: "MessageSquareText",
      },
      {
        stepNumber: "02",
        waypointCode: "WP-02",
        waypointTag: "AGENT SYNTHESIS",
        title: "Watch the agent draw",
        description:
          "The agent synthesizes your prompt into live flowchart shapes, relational ERDs, architecture diagrams, and linked technical specifications in real time.",
        details: [
          "Shape-by-shape visual drafting",
          "Automatic semantic connector routing",
          "Synchronized RFC markdown blocks",
        ],
        icon: "Bot",
      },
      {
        stepNumber: "03",
        waypointCode: "WP-03",
        waypointTag: "SUMMIT OUTPOST",
        title: "Keep iterating together",
        description:
          "Ask for modifications in place, invite teammates with live multiplayer cursors, and export clean code or diagrams when ready.",
        details: [
          "In-place agent revisions without redraws",
          "Live presence & cursors via Yjs CRDTs",
          "Export to Mermaid, SVG, and Prisma",
        ],
        icon: "Users2",
      },
    ],
  },

  pricing: {
    badge: "Pricing",
    heading: "Simple, transparent pricing",
    subtitle:
      "Outpost is currently in early preview. Everything is 100% free while we build alongside early teams.",
    placeholder: {
      statusBadge: "EARLY ACCESS PREVIEW",
      priceTag: "Free",
      title: "Full Access for Early Builders",
      description:
        "We are currently rolling out Outpost to select engineering teams, founders, and solo builders. During early preview, all surfaces—Canvas, Docs, TeamBoard, and autonomous AI agents—are completely free.",
      perks: [
        "Unlimited personal & organization workspaces",
        "Autonomous AI agent drafting & in-place editing",
        "Real-time multiplayer collaboration with live cursors",
        "Export to Mermaid diagrams, SVG assets, and Markdown",
        "Priority invitation to private enterprise self-hosting",
      ],
      cta: {
        text: "Claim free early access",
        href: "/sign-up",
      },
      footnote: "No credit card required · Free forever for beta workspaces",
    },
  },

  ctaBanner: {
    mascotImage: "/social/brand/mascot.png",
    heading: "Ready to construct your next outpost?",
    subtitle:
      "Start building collaborative diagrams and structured technical documents with autonomous AI agents.",
    cta: {
      text: "Start building free",
      href: "/sign-up",
    },
  },

  footer: {
    logoDark: "/social/brand/logo-navbar-dark.png",
    attribution: "made with love by Kunjal",
    links: [
      { label: "Product", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Sign in", href: "/sign-in" },
    ],
  },
};
