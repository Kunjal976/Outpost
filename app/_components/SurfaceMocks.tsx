import React from "react";
import {
  Bot,
  Check,
  ChevronRight,
  Database,
  FileCode,
  FileText,
  Filter,
  Globe,
  Layers,
  MousePointer2,
  MoveDown,
  Plus,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

/**
 * Static visual mock of the Canvas surface:
 * An infinite whiteboard where the agent draws flowcharts, ERDs, and architecture shape by shape.
 */
export function CanvasMock() {
  return (
    <div className="relative w-full rounded-2xl border border-border/80 bg-card shadow-xl overflow-hidden backdrop-blur-md">
      {/* Top Window Bar */}
      <div className="flex h-9 items-center justify-between border-b border-border/60 bg-muted/40 px-4">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1">
            <Layers className="size-3 text-primary" />
            canvas / auth-architecture.flow
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
          <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>Agent drawing shape 4 of 4</span>
        </div>
      </div>

      {/* Canvas Area with Dot Grid */}
      <div className="relative p-5 sm:p-6 min-h-[340px] flex flex-col justify-between bg-neutral-950/40 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Agent Prompt Callout / Floating Bar */}
        <div className="self-center flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs text-foreground shadow-xs mb-2">
          <Sparkles className="size-3.5 text-primary" />
          <span className="font-mono text-[11px]">Agent: &ldquo;Adding failover cache and MFA validator&rdquo;</span>
        </div>

        {/* Flowchart Diagram Nodes */}
        <div className="relative flex flex-col items-center gap-4 my-auto">
          {/* Node 1: Client Application */}
          <div className="w-56 rounded-lg border border-border/70 bg-card/90 px-3 py-2 shadow-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-foreground">
              <Globe className="size-3.5 text-primary" />
              <span>Client Application</span>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground mt-0.5">Next.js Web / Mobile App</p>
          </div>

          {/* Connector Down */}
          <div className="flex flex-col items-center -my-2 z-0">
            <div className="h-4 w-px bg-primary/60" />
            <span className="rounded bg-muted/80 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground border border-border/50">
              HTTPS / Bearer JWT
            </span>
            <div className="h-4 w-px bg-primary/60" />
            <MoveDown className="size-3 -mt-1 text-primary" />
          </div>

          {/* Node 2: API Gateway */}
          <div className="w-56 rounded-lg border border-primary/50 bg-primary/5 px-3 py-2 shadow-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-foreground">
              <span className="text-primary font-mono text-[11px]">◆</span>
              <span>API Gateway (Edge)</span>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground mt-0.5">Rate Limit &amp; Token Verify</p>
          </div>

          {/* Branch Connectors */}
          <div className="relative w-full max-w-sm flex items-center justify-center -my-1">
            <div className="w-1/2 h-px bg-primary/40" />
            <div className="size-1.5 rounded-full bg-primary" />
            <div className="w-1/2 h-px bg-primary/40" />
          </div>

          {/* Node 3 & Node 4 Branch */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {/* Branch Left: DB */}
            <div className="rounded-lg border border-border/70 bg-card/90 p-2.5 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Database className="size-3.5 text-muted-foreground" />
                <span>PostgreSQL DB</span>
              </div>
              <p className="font-mono text-[9px] text-muted-foreground mt-1">Users &amp; Org Workspaces</p>
              <div className="mt-2 inline-flex items-center gap-1 rounded bg-muted/50 px-1.5 py-0.5 font-mono text-[8px] text-muted-foreground">
                <Check className="size-2.5 text-emerald-500" />
                <span>synced</span>
              </div>
            </div>

            {/* Branch Right: Agent Shape Added */}
            <div className="relative rounded-lg border-2 border-primary bg-primary/10 p-2.5 text-left shadow-lg shadow-primary/10">
              <span className="absolute -top-2 right-2 rounded-full bg-primary px-1.5 py-0.2 font-mono text-[8px] font-bold uppercase text-primary-foreground">
                Added shape
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Bot className="size-3.5 text-primary" />
                <span>Redis MFA Cache</span>
              </div>
              <p className="font-mono text-[9px] text-muted-foreground mt-1">In-memory Session Revocation</p>
              <div className="mt-2 inline-flex items-center gap-1 rounded bg-primary/20 px-1.5 py-0.5 font-mono text-[8px] text-primary">
                <span>TTL: 900s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas Toolbar / Status Footer */}
        <div className="flex items-center justify-between border-t border-border/40 pt-3 mt-3 text-[10px] font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="rounded bg-muted/60 px-1.5 py-0.5">Zoom 100%</span>
            <span>Grid: Snap to Shape</span>
          </div>
          <span className="text-primary">4 Nodes · 3 Edges</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Static visual mock of the Docs surface:
 * A block editor where the agent turns diagrams into written specs and rewrites or summarizes sections.
 */
export function DocsMock() {
  return (
    <div className="relative w-full rounded-2xl border border-border/80 bg-card shadow-xl overflow-hidden backdrop-blur-md">
      {/* Top Window Bar */}
      <div className="flex h-9 items-center justify-between border-b border-border/60 bg-muted/40 px-4">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1">
            <FileText className="size-3 text-primary" />
            docs / system-spec-auth.md
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          <span>Bi-directional sync active</span>
        </div>
      </div>

      {/* Editor Body */}
      <div className="p-5 sm:p-6 space-y-3.5 text-xs text-foreground bg-background/50">
        {/* Document Title Block */}
        <div>
          <div className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
            SPECIFICATION RFC-042
          </div>
          <h4 className="mt-1.5 text-base sm:text-lg font-bold tracking-tight text-foreground">
            Authentication &amp; Session Invalidation Architecture
          </h4>
          <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
            Auto-generated from Canvas: <span className="underline">auth-architecture.flow</span>
          </p>
        </div>

        {/* Block: Callout block */}
        <div className="flex items-start gap-2.5 rounded-lg border border-border/70 bg-muted/30 p-2.5">
          <Sparkles className="size-4 text-primary shrink-0 mt-0.5" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Agent Note:</strong> Synchronized with latest diagram change. Added Section 2.3 for distributed Redis session invalidation.
          </p>
        </div>

        {/* Block: AI Highlight / Rewrite Section */}
        <div className="relative rounded-lg border-l-2 border-primary bg-primary/5 p-3 space-y-1.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-semibold text-primary uppercase tracking-wider">
              ✦ Section 2.3 · Agent Rewritten
            </span>
            <span className="rounded bg-primary/20 px-1.5 py-0.2 font-mono text-[9px] text-primary">
              Condensed
            </span>
          </div>
          <p className="text-[11px] text-foreground leading-relaxed">
            &ldquo;When an explicit sign-out or privilege alteration occurs, an invalidation event is dispatched to the in-memory Redis cache with an immediate 900s tombstone TTL, rejecting subsequent bearer evaluations at the edge gateway.&rdquo;
          </p>
        </div>

        {/* Block: API Endpoint Table Snippet */}
        <div className="rounded-md border border-border/60 bg-muted/20 p-2.5 font-mono text-[10px]">
          <div className="flex items-center justify-between text-muted-foreground pb-1 border-b border-border/40">
            <span>METHOD &amp; ENDPOINT</span>
            <span>STATUS</span>
          </div>
          <div className="flex items-center justify-between pt-1.5 text-foreground">
            <span className="text-emerald-500 font-semibold">POST /v1/auth/revoke</span>
            <span className="text-muted-foreground">200 OK</span>
          </div>
        </div>

        {/* Floating Quick-Actions Toolbar */}
        <div className="flex items-center justify-between pt-2 border-t border-border/40 font-mono text-[10px]">
          <span className="text-muted-foreground">428 words · Markdown</span>
          <div className="flex items-center gap-1.5">
            <button type="button" className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary hover:bg-primary/20 transition-colors">
              ✦ Rewrite
            </button>
            <button type="button" className="rounded border border-border/60 bg-card px-2 py-0.5 text-muted-foreground hover:text-foreground transition-colors">
              Summarize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Static visual mock of the TeamBoard surface:
 * A kanban board of every workspace in your org with live cursors so teammates can jump in together.
 */
export function TeamBoardMock() {
  return (
    <div className="relative w-full rounded-2xl border border-border/80 bg-card shadow-xl overflow-hidden backdrop-blur-md">
      {/* Top Window Bar */}
      <div className="flex h-9 items-center justify-between border-b border-border/60 bg-muted/40 px-4">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1">
            <Users className="size-3 text-primary" />
            teamboard / acme-org-workspaces
          </span>
        </div>
        {/* Presence Avatars */}
        <div className="flex items-center -space-x-1.5">
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-amber-500 text-[9px] font-bold text-white ring-1 ring-background">
            SL
          </span>
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white ring-1 ring-background">
            MR
          </span>
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-sky-500 text-[9px] font-bold text-white ring-1 ring-background">
            AK
          </span>
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-muted font-mono text-[8px] text-muted-foreground ring-1 ring-background">
            +3
          </span>
        </div>
      </div>

      {/* Kanban Board Container */}
      <div className="relative p-4 sm:p-5 min-h-[340px] bg-background/50 overflow-hidden">
        {/* Filter / Search Bar */}
        <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-border/50">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xs text-foreground">Acme Engineering</span>
            <span className="font-mono text-[10px] text-muted-foreground rounded bg-muted/60 px-1.5 py-0.5">
              6 Workspaces
            </span>
          </div>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-primary">
            <Plus className="size-3" />
            <span>New outpost</span>
          </span>
        </div>

        {/* 3 Kanban Columns */}
        <div className="grid grid-cols-3 gap-2.5 text-left">
          {/* Column 1: Brainstorm & Architecture */}
          <div className="rounded-lg bg-muted/30 p-2 border border-border/40 flex flex-col gap-2">
            <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground font-semibold px-1">
              <span>EXPLORING (2)</span>
            </div>
            
            {/* Card 1 */}
            <div className="rounded-md border border-border/70 bg-card p-2 shadow-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="rounded bg-primary/15 px-1 py-0.2 font-mono text-[8px] text-primary font-medium">
                  Canvas
                </span>
                <span className="size-1.5 rounded-full bg-emerald-400" />
              </div>
              <h5 className="font-medium text-[11px] text-foreground leading-snug">
                Event Broker Mesh
              </h5>
              <p className="font-mono text-[9px] text-muted-foreground">Kafka + Flink</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-md border border-border/70 bg-card p-2 shadow-xs space-y-1">
              <span className="rounded bg-sky-500/15 px-1 py-0.2 font-mono text-[8px] text-sky-400 font-medium">
                Docs
              </span>
              <h5 className="font-medium text-[11px] text-foreground leading-snug">
                SLA &amp; Audit Spec
              </h5>
              <p className="font-mono text-[9px] text-muted-foreground">SOC2 controls</p>
            </div>
          </div>

          {/* Column 2: In Review / Live Editing */}
          <div className="relative rounded-lg bg-muted/30 p-2 border border-primary/40 flex flex-col gap-2">
            <div className="flex items-center justify-between font-mono text-[10px] text-primary font-semibold px-1">
              <span>REVIEW (2)</span>
            </div>

            {/* Card 3 (Active) */}
            <div className="relative rounded-md border-2 border-primary bg-card p-2 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="rounded bg-primary/20 px-1 py-0.2 font-mono text-[8px] text-primary font-medium">
                  Canvas + Doc
                </span>
                <Bot className="size-3 text-primary animate-spin" />
              </div>
              <h5 className="font-medium text-[11px] text-foreground leading-snug">
                Auth &amp; MFA Outpost
              </h5>
              <p className="font-mono text-[9px] text-muted-foreground">PRD ready for sign-off</p>
            </div>

            {/* Card 4 */}
            <div className="rounded-md border border-border/70 bg-card p-2 shadow-xs space-y-1 opacity-70">
              <span className="rounded bg-muted px-1 py-0.2 font-mono text-[8px] text-muted-foreground font-medium">
                Canvas
              </span>
              <h5 className="font-medium text-[11px] text-foreground leading-snug">
                Billing Webhooks
              </h5>
            </div>
          </div>

          {/* Column 3: Landed / Production */}
          <div className="rounded-lg bg-muted/30 p-2 border border-border/40 flex flex-col gap-2">
            <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground font-semibold px-1">
              <span>DEPLOYED (2)</span>
            </div>

            {/* Card 5 */}
            <div className="rounded-md border border-border/70 bg-card p-2 shadow-xs space-y-1">
              <span className="rounded bg-emerald-500/15 px-1 py-0.2 font-mono text-[8px] text-emerald-400 font-medium">
                Verified
              </span>
              <h5 className="font-medium text-[11px] text-foreground leading-snug">
                Multi-region DB
              </h5>
              <p className="font-mono text-[9px] text-muted-foreground">Prisma v7 cluster</p>
            </div>
          </div>
        </div>

        {/* Live Cursor Overlays */}
        {/* Cursor 1: Sarah */}
        <div className="absolute top-[138px] left-[38%] pointer-events-none flex items-start gap-1 z-20">
          <MousePointer2 className="size-4 fill-amber-500 text-amber-500 -rotate-90 drop-shadow" />
          <span className="rounded-md bg-amber-500 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white shadow-md">
            Sarah L. (Staff Eng)
          </span>
        </div>

        {/* Cursor 2: Marcus */}
        <div className="absolute bottom-6 right-8 pointer-events-none flex items-start gap-1 z-20">
          <MousePointer2 className="size-4 fill-emerald-500 text-emerald-500 -rotate-90 drop-shadow" />
          <span className="rounded-md bg-emerald-500 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white shadow-md">
            Marcus (Architect)
          </span>
        </div>

        {/* Presence Footer Note */}
        <div className="flex items-center justify-between border-t border-border/40 pt-3 mt-4 text-[10px] font-mono text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <span>4 collaborators active right now</span>
          </div>
          <span>Yjs CRDT Realtime</span>
        </div>
      </div>
    </div>
  );
}
