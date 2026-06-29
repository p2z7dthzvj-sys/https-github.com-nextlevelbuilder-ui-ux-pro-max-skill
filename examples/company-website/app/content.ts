// Central content source so copy lives in one place.

export const company = {
  name: "Northwind",
  tagline: "Operations, unified.",
  email: "hello@northwind.example",
};

export const features = [
  {
    title: "Real-time analytics",
    body: "Live dashboards with drill-down and comparison views so teams act on data, not hunches.",
    icon: "chart",
  },
  {
    title: "Workflow automation",
    body: "Replace manual handoffs with rules-based automations that run reliably at scale.",
    icon: "bolt",
  },
  {
    title: "Team collaboration",
    body: "Comments, approvals, and audit trails keep everyone aligned in a single source of truth.",
    icon: "users",
  },
  {
    title: "Enterprise security",
    body: "SSO, role-based access, and SOC 2 Type II controls baked in from day one.",
    icon: "shield",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/mo",
    blurb: "For small teams getting started.",
    features: ["Up to 3 users", "Core analytics", "Community support"],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    cadence: "/user/mo",
    blurb: "For scaling operations teams.",
    features: [
      "Unlimited users",
      "Automation engine",
      "Priority support",
      "Advanced dashboards",
    ],
    cta: "Start 14-day trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    blurb: "For organizations with advanced needs.",
    features: ["SSO & SAML", "Dedicated CSM", "SLA & audit logs", "Custom integrations"],
    cta: "Contact sales",
    popular: false,
  },
];

export const faqs = [
  {
    q: "How long does setup take?",
    a: "Most teams are live within a day. Import your data, invite your team, and connect integrations from the dashboard.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade, downgrade, or cancel anytime from billing settings. Changes are prorated automatically.",
  },
  {
    q: "Do you offer annual discounts?",
    a: "Annual billing saves 20% versus monthly. Reach out to sales for volume pricing on Enterprise.",
  },
  {
    q: "Is my data secure?",
    a: "We are SOC 2 Type II compliant, encrypt data in transit and at rest, and support SSO and role-based access control.",
  },
];
