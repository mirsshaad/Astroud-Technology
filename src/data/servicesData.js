import { Cloud, RefreshCw, Globe2, Server, HardDrive, Headphones } from 'lucide-react';

export const detailedServices = [
  {
    name: 'Cloud Infrastructure',
    slug: 'cloud-infrastructure',
    icon: Cloud,
    heroHeadline: "Cloud infrastructure, sized to what you actually run — not what's easiest to sell.",
    heroSubhead: "Architecture, provisioning, and ongoing management on AWS or Azure, built around your real workload.",
    overview: "Most SMBs get sold cloud infrastructure based on what a reseller earns the most margin on, not what the business needs. Astroud designs and provisions cloud environments matched to actual usage patterns — compute, storage, and networking sized correctly from day one, with room to scale when you actually need it, not before.",
    included: [
      "VPC/network design and security group configuration",
      "IAM/RBAC setup with scoped access — you own the account, we operate inside it with defined permissions",
      "Compute provisioning (EC2/VM) sized to real usage, not peak-case guesswork",
      "Cost monitoring dashboard and a monthly optimization review",
      "Infrastructure-as-code (Terraform) so every change is version-controlled and repeatable",
      "Documentation of the full architecture, handed to you — not locked in our heads"
    ],
    howItWorks: [
      { year: "Discovery", content: "Understand current setup, pain points, and growth plans" },
      { year: "Proposal", content: "A right-sized design with honest cost estimate (corrected for real usage, not a vendor sales estimate)" },
      { year: "Provisioning", content: "Infrastructure built via Terraform, reviewed with you before go-live" },
      { year: "Handover", content: "You retain account ownership; ongoing management continues under Managed Cloud Support if needed" }
    ],
    notForYou: "If you're running a single website or a handful of low-traffic internal tools, a full cloud architecture is overkill — shared hosting or a single small VM is often the honest, cheaper answer. We'll tell you if that's your situation.",
    faq: [
      { q: "Do you take ownership of our AWS/Azure account?", a: "No. You own the account. We operate inside it with scoped IAM/RBAC access that you control and can revoke at any time." },
      { q: "What if we already have infrastructure but it feels oversized/undersized?", a: "That's a common starting point — we run a right-sizing audit first, often before recommending any new build." },
      { q: "Which cloud — AWS or Azure?", a: "Depends on your existing tools (e.g. heavy Microsoft 365 use often favors Azure), team familiarity, and cost. We recommend based on your situation, not a fixed preference." }
    ],
    pricing: "Monthly retainer = corrected cloud cost estimate + 15–25% buffer + flat management fee. Initial architecture/setup quoted separately as a one-time project based on scope."
  },
  {
    name: 'Cloud Migration',
    slug: 'cloud-migration',
    icon: RefreshCw,
    heroHeadline: "Move to the cloud without breaking what already works.",
    heroSubhead: "Migration planning and execution for on-premise servers, applications, and business data — done during off-hours, with a rollback plan.",
    overview: "Migration is where most SMB cloud projects go wrong — rushed timelines, no tested rollback, and surprise downtime during business hours. Astroud plans migrations around your actual risk tolerance, with two clearly explained options where applicable, so you choose the path that fits your business rather than the one that's easiest for us to deliver.",
    included: [
      "Pre-migration discovery and risk assessment of current systems",
      "A migration plan presenting real options with honest pros/cons for each",
      "Execution scheduled during off-hours to avoid disrupting daily operations",
      "Post-migration validation — confirming data integrity and application function",
      "A documented rollback plan in case anything needs to be reversed"
    ],
    howItWorks: [
      { year: "Assessment", content: "Inventory current systems, identify what actually needs to move" },
      { year: "Options", content: "Presenting paths (e.g. backup-only vs. full migration) with cost and risk tradeoffs explained plainly" },
      { year: "Execution", content: "Migration run off-hours with monitoring throughout" },
      { year: "Validation", content: "You confirm systems work correctly before the engagement closes" }
    ],
    notForYou: "If your current on-premise setup is stable, low-risk, and not causing operational pain — no hardware-failure anxiety, no remote-access need — full migration may be premature. Often the right first step is fixing backup and security, not migrating.",
    faq: [
      { q: "Will this cause downtime?", a: "Execution is scheduled off-hours specifically to avoid business disruption. Any unavoidable downtime is communicated and agreed in advance." },
      { q: "What happens to our existing software licenses after migration?", a: "Some licenses can require re-authorization on new VMs — this is identified and planned for during discovery, not discovered mid-migration." },
      { q: "Can we migrate just part of our systems?", a: "Yes — migration is scoped per system; you don't have to move everything at once." }
    ],
    pricing: "One-time project fee based on scope and complexity, calculated as labor-days — separate from any ongoing retainer. Quoted after the discovery and risk-assessment phase."
  },
  {
    name: 'Microsoft 365 Solutions',
    slug: 'microsoft-365',
    icon: Globe2,
    heroHeadline: "Microsoft 365, set up properly and secured from day one.",
    heroSubhead: "Tenant setup, identity security, and ongoing management for email and collaboration tools.",
    overview: "Most SMB Microsoft 365 tenants are set up quickly and never revisited — shared logins, no MFA, no conditional access. Astroud sets up tenants correctly from the start, with security baked in, and manages ongoing user lifecycle so access stays clean as your team grows or changes.",
    included: [
      "Tenant setup and configuration",
      "Security baseline: multi-factor authentication (MFA), conditional access policies, role-based permissions",
      "Mailbox migration from legacy email systems with minimal disruption",
      "Ongoing license management and user provisioning/deprovisioning as your team changes"
    ],
    howItWorks: [
      { year: "Review", content: "Audit existing email/collaboration setup and security gaps" },
      { year: "Hardening", content: "New tenant build, or security baseline applied to an existing one" },
      { year: "Migration", content: "Mailboxes and data moved with validation (if applicable)" },
      { year: "Management", content: "User changes, license adjustments, and security monitoring as part of the retainer" }
    ],
    notForYou: "If you're a very small team (under roughly 5 people) on a single shared inbox with no compliance requirements, a lighter email solution may be sufficient until you grow into needing formal identity management.",
    faq: [
      { q: "Do we need a full Microsoft 365 license for every setup?", a: "No — license tier is matched to what your team actually uses (email-only vs. full Office apps vs. advanced security add-ons)." },
      { q: "What happens when an employee leaves?", a: "Deprovisioning (access removal, mailbox handling, license reassignment) is handled as part of the ongoing retainer." },
      { q: "Can you migrate us from Google Workspace or another provider?", a: "Yes — mailbox and data migration is scoped during discovery regardless of your current provider." }
    ],
    pricing: "Per-user Microsoft licensing (pass-through, no markup) + a flat monthly management retainer."
  },
  {
    name: 'Website Hosting & Deployment',
    slug: 'website-hosting',
    icon: Server,
    heroHeadline: "Hosting and deployment that matches your site's actual complexity.",
    heroSubhead: "From simple brochure sites to applications with backend services — hosted, deployed, and maintained properly.",
    overview: "Not every business website needs a full cloud deployment pipeline. Astroud hosts and maintains sites matched to their actual complexity — simple, optimized hosting for simple sites; proper CI/CD and cloud infrastructure for sites and applications that genuinely need it.",
    included: [
      "Hosting setup (matched to actual need — not the most expensive option by default)",
      "Deployment pipeline (CI/CD) for safe, repeatable updates where applicable",
      "SSL, domain, and DNS management",
      "Uptime monitoring and basic performance optimization"
    ],
    howItWorks: [
      { year: "Assessment", content: "Understand update frequency, traffic, and complexity" },
      { year: "Recommendation", content: "Hosting choice matched to actual need, explained plainly" },
      { year: "Deployment", content: "Hosting, SSL, DNS, and pipeline configured" },
      { year: "Monitoring", content: "Uptime and performance tracked under the management retainer" }
    ],
    notForYou: "A static informational site with infrequent updates may not need a full CI/CD pipeline — sometimes a simple managed hosting plan is the honest, cheaper answer, and we'll say so rather than upsell a pipeline you don't need.",
    faq: [
      { q: "Do you build the website too, or just host it?", a: "Hosting and deployment is the core service here; website design/build can be scoped separately if needed." },
      { q: "What if our current host is causing problems?", a: "We assess the current setup first — sometimes the fix is hosting migration, sometimes it's just configuration." },
      { q: "Can you handle e-commerce or application sites?", a: "Yes — hosting and pipeline complexity scales to match, including backend services where the site requires them." }
    ],
    pricing: "Flat monthly hosting/management fee, scoped to site complexity — simple sites cost less than application-grade deployments, by design."
  },
  {
    name: 'Backup & Disaster Recovery',
    slug: 'backup-recovery',
    icon: HardDrive,
    heroHeadline: "Backups that are actually verified to work — not just scheduled to run.",
    heroSubhead: "Automated, tested backup and disaster recovery for your critical business data.",
    overview: "The most common backup failure isn't a missing backup job — it's a backup job that's been silently failing for months while everyone assumed it worked. Astroud builds backup systems with alerting and monthly test restores, so you know your data is actually recoverable, not just scheduled.",
    included: [
      "Automated off-hours sync to AWS S3 or Azure Blob storage, in-region",
      "30-day version history, protecting against ransomware and accidental deletion",
      "Failure alerting — so a broken backup job is caught immediately",
      "Monthly test restores confirming backups are genuinely recoverable",
      "Access control hardening — individual logins and role-based permissions"
    ],
    howItWorks: [
      { year: "Assessment", content: "Identify what data is critical and current backup gaps" },
      { year: "Design", content: "Backup targets, retention policy, and alerting configured" },
      { year: "Implementation", content: "Automated sync and access controls deployed" },
      { year: "Verification", content: "Monthly test restores and alerting included in the retainer" }
    ],
    notForYou: "If you already have a verified, tested backup system with alerting and version history in place, you likely just need an audit rather than an entirely new system — we'll tell you if what you have is already sound.",
    faq: [
      { q: "How do we know the backups actually work?", a: "Monthly test restores are part of the service. You get a report confirming recoverability, not just a 'job completed' log." },
      { q: "What's the retention period?", a: "30-day version history by default; longer retention available if your compliance or business needs require it." },
      { q: "Does this cover ransomware specifically?", a: "Version history and access hardening directly reduce ransomware risk, though this service isn't a replacement for endpoint security." }
    ],
    pricing: "Monthly retainer based on data volume and retention requirements."
  },
  {
    name: 'Managed Cloud Support',
    slug: 'managed-support',
    icon: Headphones,
    heroHeadline: "Ongoing cloud support that doesn't become a second job for you.",
    heroSubhead: "Proactive monitoring, patching, and monthly reviews — so your infrastructure stays healthy without you having to watch it.",
    overview: "This is the recurring relationship behind everything else Astroud does — proactive monitoring, cost/security review, and priority support, so cloud infrastructure keeps running correctly without demanding your attention. It's also the service most prone to being oversold industry-wide, so we scope it carefully and flag clearly when it's not the right fit yet.",
    included: [
      "Proactive monitoring and alerting across your cloud environment",
      "Monthly cost and security review",
      "Priority support response for incidents",
      "Scoped IAM/RBAC access throughout — you retain full account ownership and visibility at all times"
    ],
    howItWorks: [
      { year: "Review", content: "Understand what's already running and where the risk/cost issues are" },
      { year: "Setup", content: "Alerting and dashboards configured for your environment" },
      { year: "Cycle", content: "Cost and security findings reported monthly, with clear recommendations" },
      { year: "Response", content: "Priority handling when something breaks, under agreed response times" }
    ],
    notForYou: "If your infrastructure is simple and stable with no compliance pressure, ad-hoc support (pay-as-needed) may be more honest than a recurring retainer. If you don't need ongoing management, we'll say so.",
    faq: [
      { q: "What's the difference between this and Cloud Infrastructure?", a: "Cloud Infrastructure is the build; Managed Cloud Support is the ongoing care of what's already built (monitoring, patching, review, incident response)." },
      { q: "What response times can we expect for incidents?", a: "Defined per engagement based on your business's operating hours and criticality — agreed upfront, not vague." },
      { q: "Can we start with ad-hoc support and move to a retainer later?", a: "Yes — many clients start there and move to a retainer once ongoing management clearly pays for itself." }
    ],
    pricing: "This is the core recurring retainer — priced per environment complexity, and the primary compounding relationship in Astroud's business model (as opposed to one-time project work)."
  }
];
