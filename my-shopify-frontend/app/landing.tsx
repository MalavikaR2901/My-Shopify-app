import { useRouter } from "next/navigation";

import { BarChart3, BellRing, LineChart, Sparkles } from "lucide-react";

function NavLink({ href, label, testId }: { href: string; label: string; testId: string }) {
  const router = useRouter();

  const isHash = href.startsWith("/");

  return (
    <button
      type="button"
      className="text-sm font-medium text-gray-700 hover:text-gray-900"
      onClick={() => {
        if (isHash) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        router.push(href);
      }}
      data-testid={testId}
    >
      {label}
    </button>
  );
}

function Navbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          className="font-display text-base font-semibold tracking-tight text-gray-900"
          onClick={() => router.push("/")}
          data-testid="link-logo"
        >
          StockSense AI
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#features" label="Features" testId="link-features" />
          <NavLink href="#pricing" label="Pricing" testId="link-pricing" />
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 md:inline-flex"
            onClick={() => router.push("/login")}
            data-testid="button-login-nav"
          >
            Login
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            onClick={() => router.push("/login")}
            data-testid="button-login-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const router = useRouter();

  return (
    <section className="container-page grid items-center gap-10 py-12 md:grid-cols-2 md:py-18">
      <div className="space-y-5">
        <div
          className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700"
          data-testid="badge-hero"
        >
          <Sparkles className="h-4 w-4" aria-hidden />
          Built for Shopify inventory workflows
        </div>

        <h1
          className="font-display text-balance text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl"
          data-testid="text-hero-title"
        >
          Smart Inventory Management for Shopify Stores
        </h1>
        <p className="text-balance text-base leading-relaxed text-gray-700" data-testid="text-hero-description">
          Track products, catch low stock early, and stay ahead with simple stats—without the clutter.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            onClick={() => router.push("/login")}
            data-testid="button-get-started-hero"
          >
            Get Started
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
            onClick={() => {
              const el = document.querySelector("#features");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            data-testid="button-view-features"
          >
            View Features
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="card overflow-hidden" data-testid="card-dashboard-preview">
          <div className="border-b bg-gray-50 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              </div>
              <div className="text-xs font-semibold text-gray-500">Dashboard Preview</div>
            </div>
          </div>
          <div className="space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border bg-white p-4">
                <div className="text-xs font-semibold text-gray-500">Total Products</div>
                <div className="mt-2 text-2xl font-semibold text-gray-900">128</div>
              </div>
              <div className="rounded-xl border bg-white p-4">
                <div className="text-xs font-semibold text-gray-500">Low Stock</div>
                <div className="mt-2 text-2xl font-semibold text-gray-900">9</div>
              </div>
              <div className="rounded-xl border bg-white p-4">
                <div className="text-xs font-semibold text-gray-500">Weekly Sales</div>
                <div className="mt-2 text-2xl font-semibold text-gray-900">$4,320</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-900">Products</div>
                <div className="text-xs font-medium text-gray-500">Last 7 days</div>
              </div>
              <div className="mt-3 space-y-2">
                {["Classic Tee", "Canvas Tote", "Sport Cap"].map((name, idx) => (
                  <div key={name} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                    <div className="text-sm font-medium text-gray-700">{name}</div>
                    <div className="text-xs font-semibold text-gray-500">#{idx + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  testId,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description: string;
  testId: string;
}) {
  return (
    <div className="card p-6" data-testid={testId}>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white" data-testid={`${testId}-icon`}>
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900" data-testid={`${testId}-title`}>
            {title}
          </div>
          <div className="mt-1 text-sm leading-relaxed text-gray-700" data-testid={`${testId}-description`}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="border-t bg-white" data-testid="section-features">
      <div className="container-page py-12 md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-gray-900" data-testid="text-features-title">
            Everything you need to stay in stock
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700" data-testid="text-features-subtitle">
            Clear signals, simple actions, and a dashboard that helps you move fast.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={BellRing}
            title="Low stock alerts"
            description="Spot items running low before they cost you sales."
            testId="card-feature-low-stock"
          />
          <FeatureCard
            icon={Sparkles}
            title="Restock suggestions"
            description="Quick guidance on what to reorder based on momentum."
            testId="card-feature-restock"
          />
          <FeatureCard
            icon={LineChart}
            title="Sales tracking"
            description="See weekly sales at a glance—no spreadsheets."
            testId="card-feature-sales"
          />
          <FeatureCard
            icon={BarChart3}
            title="Analytics dashboard"
            description="A clean overview for products, stock, and performance."
            testId="card-feature-analytics"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  emphasis,
  testId,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  emphasis?: boolean;
  testId: string;
}) {
  const router = useRouter();

  return (
    <div className={`card p-6 ${emphasis ? "border-gray-900" : ""}`} data-testid={testId}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-gray-900" data-testid={`${testId}-name`}>
            {name}
          </div>
          <div className="mt-2 text-3xl font-semibold tracking-tight text-gray-900" data-testid={`${testId}-price`}>
            {price}
          </div>
          <div className="mt-2 text-sm text-gray-700" data-testid={`${testId}-description`}>
            {description}
          </div>
        </div>
        {emphasis ? (
          <div className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white" data-testid={`${testId}-badge`}>
            Popular
          </div>
        ) : null}
      </div>

      <ul className="mt-5 space-y-2 text-sm text-gray-700" data-testid={`${testId}-features`}>
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm ${
          emphasis ? "bg-gray-900 text-white hover:bg-gray-800" : "border bg-white text-gray-900 hover:bg-gray-50"
        }`}
        onClick={() => router.push("/login")}
        data-testid={`${testId}-button`}
      >
        Choose {name}
      </button>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-t bg-white" data-testid="section-pricing">
      <div className="container-page py-12 md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-gray-900" data-testid="text-pricing-title">
            Simple pricing, no surprises
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700" data-testid="text-pricing-subtitle">
            Start free, upgrade when you want deeper insights.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <PricingCard
            name="Free"
            price="$0"
            description="A clean dashboard for small catalogs."
            features={["Product list", "Low stock status", "Basic weekly sales"]}
            testId="card-pricing-free"
          />
          <PricingCard
            name="Pro"
            price="$19/mo"
            description="More visibility for growing stores."
            features={["Restock suggestions", "Trend tracking", "Advanced analytics overview"]}
            emphasis
            testId="card-pricing-pro"
          />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const router = useRouter();

  return (
    <section className="border-t bg-white" data-testid="section-cta">
      <div className="container-page py-12 md:py-16">
        <div className="card p-8 text-center md:p-10" data-testid="card-cta">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-gray-900" data-testid="text-cta-title">
            Ready to get ahead of low stock?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-700" data-testid="text-cta-description">
            Log in to explore the dashboard and start managing inventory with clarity.
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
              onClick={() => router.push("/login")}
              data-testid="button-cta-login"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>

      <footer className="border-t bg-white" data-testid="footer">
        <div className="container-page py-8">
          <div className="flex flex-col items-start justify-between gap-2 text-sm text-gray-600 md:flex-row">
            <div data-testid="text-footer-brand">© {new Date().getFullYear()} StockSense AI</div>
            <div data-testid="text-footer-note">Minimal inventory helper UI prototype</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
