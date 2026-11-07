import { useEffect, useState, useRef, Component } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ArrowRight, Cloud, ShieldCheck, Server, RefreshCw, HardDrive, Headphones, Building2, Zap, Lock, Globe2, Globe, Search, CheckCircle2, Menu, X, ChevronDown, Users, BookOpen, BriefcaseBusiness, CircleHelp, FileText, Layers, BarChart, User as UserIcon } from 'lucide-react';
import { HeroMain } from './components/HeroMain';
import { AnnouncementBar } from './components/AnnouncementBar';
import FooterSection5 from './components/ui/footer-section-5';
import FAQSection from './components/ui/faqsection';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { SignOut } from './pages/SignOut';
import { Profile } from './pages/Profile';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { detailedServices } from './data/servicesData';
import ExploreToolsSection from './components/ExploreToolsSection';
import FinalCtaBanner from './components/ui/final-cta-banner';
import AstroudShowcaseBanner from './components/AstroudShowcaseBanner';

const services=[['Cloud Infrastructure','Resilient, scalable cloud foundations built around your business.',Cloud],['Cloud Migration','Move critical workloads with confidence and zero guesswork.',RefreshCw],['Microsoft 365','Secure collaboration that keeps distributed teams moving.',Globe2],['Managed Hosting','Fast, monitored infrastructure without the operational drag.',Server],['Backup & Recovery','Recovery-ready data protection that is tested, not assumed.',HardDrive],['24/7 Support','Real engineers, proactive monitoring, and rapid response.',Headphones]];
const benefits=['Enterprise-grade security','Predictable monthly costs','A dedicated cloud team','Continuous optimization','Built for compliant growth','Human support, always','Clear technology roadmaps','Vendor-neutral guidance'];
const problems=[['Downtime',Zap],['Security gaps',Lock],['Unpredictable spend',Building2],['Slow delivery',RefreshCw],['Data risk',HardDrive],['Tool sprawl',Globe2]];
const articles=['The cloud migration readiness checklist','Ransomware recovery: the first 24 hours','How to choose the right cloud operating model','A practical guide to Microsoft 365 security','FinOps for growing mid-market teams','Why observability is a business advantage','Building a resilient hybrid cloud'];
const articleSlug=(title)=>title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const serviceSlug=(name)=>name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const solutionSlug=(name)=>name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const solutions=[
  ['Cost Optimization','Rising infrastructure costs','Make cloud spend visible, accountable, and directly connected to the value it creates.','A visible, optimized cloud operating model',Zap],
  ['Cloud Modernization','Risky legacy workloads','Modernize critical systems in controlled phases, reducing risk without putting daily operations on hold.','A staged modernization roadmap',RefreshCw],
  ['Secure Collaboration','Distributed teams','Give people a secure, simple way to work together from anywhere without creating data blind spots.','Secure work-from-anywhere collaboration',Globe2],
  ['Cyber Resilience','Growing cyber risk','Build protection that prevents, detects, and recovers from the incidents that matter most.','Layered security and tested recovery',ShieldCheck],
  ['Delivery Acceleration','Slow digital delivery','Create reliable platforms and delivery practices that help teams release better work faster.','Automated, scalable platforms',Server]
];
function Logo(){return <Link className="brand" to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><img src="/logo.png" alt="Astroud Logo" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />ASTROUD</Link>}
function Button({to='/book-consultation',children,ghost=false}){return <Link className={`btn ${ghost?'ghost':'primary'}`} to={to}>{children}<ArrowRight size={16}/></Link>}
const productMenu=[['Cloud Infrastructure','A secure, scalable foundation for growth','/services/cloud-infrastructure',Cloud],['Cloud Migration','Move workloads without the guesswork','/services/cloud-migration',RefreshCw],['Microsoft 365','Secure collaboration for modern teams','/services/microsoft-365',Globe2],['Managed Hosting','Fast, monitored infrastructure','/services/managed-hosting',Server],['Backup & Recovery','Recover-ready protection for your data','/services/backup-recovery',HardDrive],['24/7 Support','Always-on support from real engineers','/services/24-7-support',Headphones]];
const companyMenu=[['About Astroud','Our approach, values, and story','/about',Users],['Case Studies','Customer outcomes and stories','/case-studies',BriefcaseBusiness],['Resources','Practical guides and cloud insight','/resources',BookOpen]];
const solutionsMenu=[
  ['Cost Optimization','Control cloud spend','/solutions/cost-optimization',Zap],
  ['Cloud Modernization','Modernize legacy systems','/solutions/cloud-modernization',RefreshCw],
  ['Secure Collaboration','Work securely from anywhere','/solutions/secure-collaboration',Globe2],
  ['Cyber Resilience','Prevent, detect, and recover','/solutions/cyber-resilience',ShieldCheck],
  ['Delivery Acceleration','Help teams ship faster','/solutions/delivery-acceleration',Server]
];
const industriesMenu=[['Manufacturing','Reliable operations for connected production','/industries',Building2],['Textile','Secure systems built for fast-moving supply chains','/industries',Layers],['Healthcare','Protect data while enabling better care','/industries',ShieldCheck],['Hospitality','Always-on systems for exceptional guest experiences','/industries',Globe2],['Retail','Scalable operations for every sales channel','/industries',Zap],['Professional Services','Secure collaboration for client-focused teams','/industries',Users]];
const resourcesMenu=[['Migration readiness checklist','A practical way to prepare for cloud migration','/resources/the-cloud-migration-readiness-checklist',FileText],['Ransomware recovery','The first 24 hours after an incident','/resources/ransomware-recovery-the-first-24-hours',ShieldCheck],['Cloud operating models','How to choose an approach that fits','/resources/how-to-choose-the-right-cloud-operating-model',Cloud],['Microsoft 365 security','The practical protection guide','/resources/a-practical-guide-to-microsoft-365-security',Lock],['FinOps for growth','Bring clarity to cloud spending','/resources/finops-for-growing-mid-market-teams',BarChart],['Observability','Why visibility is a business advantage','/resources/why-observability-is-a-business-advantage',Globe2]];
const searchCatalog = [
  ...productMenu.map(([title, desc, to]) => ({ title, desc, to, category: 'Products' })),
  ...solutionsMenu.map(([title, desc, to]) => ({ title, desc, to, category: 'Solutions' })),
  ...resourcesMenu.map(([title, desc, to]) => ({ title, desc, to, category: 'Resources' })),
  { title: 'Cloud Infrastructure', desc: 'AWS & Azure enterprise infrastructure', to: '/services/cloud-infrastructure', category: 'Products' },
  { title: 'Pricing & Plans', desc: 'Explore all tier pricing and calculate monthly costs', to: '/pricing', category: 'Pricing' },
  { title: 'Book Consultation', desc: 'Schedule a free cloud architecture consultation', to: '/book-consultation', category: 'Support' },
  { title: 'About Astroud', desc: 'Our mission, team, and enterprise cloud story', to: '/about', category: 'Company' }
];

function MenuItem({item, onClick}){
  const [title, description, to, Icon] = item;
  return (
    <Link to={to} onClick={onClick} className="aws-mega-item">
      <span className="aws-mega-item-icon">{Icon ? <Icon size={16}/> : null}</span>
      <span className="aws-mega-item-text">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
    </Link>
  );
}

function NavMega({name, menuKey, items, open, setOpen, close, alignRight=false, onHover, onLeave, viewAllLink, viewAllText}){
  const isMenuOpen = open === menuKey;
  return (
    <div className="aws-nav-dropdown" onMouseEnter={() => onHover(menuKey)} onMouseLeave={onLeave}>
      <button 
        className={'aws-nav-btn ' + (isMenuOpen ? 'active' : '')} 
        onClick={() => setOpen(isMenuOpen ? null : menuKey)}
      >
        <span>{name}</span>
        <ChevronDown size={14} className="aws-chevron" />
      </button>
      {isMenuOpen && (
        <div className={`aws-mega-panel ${alignRight ? 'align-right' : ''}`}>
          <div className="aws-mega-header">
            <span>{name}</span>
            {viewAllLink && <Link to={viewAllLink} onClick={close}>{viewAllText || 'View all →'}</Link>}
          </div>
          <div className="aws-mega-grid">
            {items.map(item => <MenuItem item={item} key={item[0]} onClick={close}/>)}
          </div>
        </div>
      )}
    </div>
  );
}

function Navbar(){
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const [topDropdown, setTopDropdown] = useState(null);
  const [selectedLang, setSelectedLang] = useState('English');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const timerRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setMenu(null);
      setTopDropdown(null);
      setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const close = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(false);
    setMenu(null);
    setTopDropdown(null);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleHover = (menuKey) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMenu(menuKey);
  };

  const handleLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setMenu(null);
    }, 180);
  };

  const filteredResults = searchQuery.trim() === '' ? [] : searchCatalog.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="aws-header">
      {/* TIER 1: DARK TOP UTILITY BAR (#161e2d) */}
      <div className="aws-top-bar">
        <div className="aws-top-inner">
          <div className="aws-top-left">
            <span className="aws-top-tag">Astroud Cloud Architecture & Managed Services</span>
          </div>

          <div className="aws-top-right">
            {/* Language Dropdown */}
            <div 
              className="aws-top-dropdown"
              onMouseEnter={() => setTopDropdown('lang')}
              onMouseLeave={() => setTopDropdown(null)}
            >
              <button className="aws-top-item" onClick={() => setTopDropdown(topDropdown === 'lang' ? null : 'lang')}>
                <Globe size={14} />
                <span>{selectedLang}</span>
                <ChevronDown size={12} />
              </button>
              {topDropdown === 'lang' && (
                <div className="aws-top-menu">
                  {['English', 'Deutsch', 'Español', 'Français', '日本語', 'हिन्दी'].map(lang => (
                    <button 
                      key={lang} 
                      className={selectedLang === lang ? 'active' : ''} 
                      onClick={() => { setSelectedLang(lang); setTopDropdown(null); }}
                    >
                      <span>{lang}</span>
                      {selectedLang === lang && <span>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact us */}
            <Link to="/contact" className="aws-top-item" onClick={close}>Contact us</Link>

            {/* Profile Avatar Icon */}
            <Link to={user ? "/profile" : "/signin"} className="aws-profile-circle" title="Account Profile" onClick={close}>
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <UserIcon size={14} />
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* TIER 2: WHITE MAIN NAVIGATION BAR (#ffffff) */}
      <div className="aws-main-bar">
        <div className="aws-main-inner" onMouseLeave={handleLeave}>
          {/* Left section: Logo + Nav links */}
          <div className="aws-left-group">
            <Link to="/" className="aws-brand-link" onClick={close}>
              <img src="/logo.png" alt="Astroud" className="aws-brand-img" />
              <span className="aws-brand-name">astroud</span>
            </Link>

            <nav className="aws-nav-items">
              <NavMega 
                name="Products" 
                menuKey="products" 
                items={productMenu} 
                open={menu} 
                setOpen={setMenu} 
                close={close} 
                onHover={handleHover} 
                onLeave={handleLeave} 
                viewAllLink="/services" 
                viewAllText="View all products →"
              />

              <NavMega 
                name="Solutions" 
                menuKey="solutions" 
                items={solutionsMenu} 
                open={menu} 
                setOpen={setMenu} 
                close={close} 
                onHover={handleHover} 
                onLeave={handleLeave} 
                viewAllLink="/solutions" 
                viewAllText="View all solutions →"
              />

              <NavLink to="/pricing" className="aws-nav-link" onClick={close} onMouseEnter={close}>
                Pricing
              </NavLink>

              <NavMega 
                name="Resources" 
                menuKey="resources" 
                items={resourcesMenu} 
                open={menu} 
                setOpen={setMenu} 
                close={close} 
                alignRight 
                onHover={handleHover} 
                onLeave={handleLeave} 
                viewAllLink="/resources" 
                viewAllText="View all resources →"
              />
            </nav>
          </div>

          {/* Right section: Search + Sign In + Create Account */}
          <div className="aws-right-group" onMouseEnter={close}>
            {/* Search */}
            <div className="aws-search-wrap" ref={searchRef}>
              {searchOpen ? (
                <div className="aws-search-expanded">
                  <Search size={15} color="#545b64" />
                  <input
                    className="aws-search-input"
                    type="text"
                    placeholder="Search products, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button className="aws-search-close-btn" onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
                    <X size={14} />
                  </button>
                  {searchQuery && (
                    <div className="aws-search-results-panel">
                      {filteredResults.length > 0 ? (
                        filteredResults.map((r, i) => (
                          <Link 
                            key={i} 
                            to={r.to} 
                            className="aws-search-result-row" 
                            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                          >
                            <strong>{r.title}</strong>
                            <small>{r.desc}</small>
                          </Link>
                        ))
                      ) : (
                        <div className="aws-search-empty">No matching products or topics found</div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <button className="aws-search-btn" onClick={() => setSearchOpen(true)}>
                  <Search size={16} />
                  <span>Search</span>
                </button>
              )}
            </div>

            {/* Create account button */}
            <Link to="/signup" className="aws-create-btn" onClick={close}>
              Create account
            </Link>

            {/* Mobile menu toggle */}
            <button className="aws-mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="aws-mobile-drawer">
          <span className="aws-mobile-section-title">Products</span>
          {productMenu.map(item => <MenuItem item={item} key={item[0]} onClick={close} />)}

          <span className="aws-mobile-section-title">Solutions</span>
          {solutionsMenu.map(item => <MenuItem item={item} key={item[0]} onClick={close} />)}

          <span className="aws-mobile-section-title">Pricing</span>
          <Link className="aws-mobile-link" to="/pricing" onClick={close}>Pricing & Plans</Link>

          <span className="aws-mobile-section-title">Resources</span>
          {resourcesMenu.map(item => <MenuItem item={item} key={item[0]} onClick={close} />)}

          <div className="aws-mobile-actions">
            {user ? (
              <Link className="aws-create-btn" to="/profile" onClick={close} style={{ textAlign: 'center' }}>
                Open Console ({user.name.split(' ')[0]})
              </Link>
            ) : (
              <Link className="aws-create-btn" to="/signup" onClick={close} style={{ textAlign: 'center' }}>
                Create account
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
function Footer() {
  return <FooterSection5 />;
}
function Section({eyebrow,title,lead,children,soft=false}){return <section className={'section '+(soft?'soft':'')} style={soft?{background:'var(--soft)'}:{}}><div className="shell"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{lead&&<p className="lead">{lead}</p>}{children}</div></section>}
function Card({children,extra=''}){return <article className={'card '+extra}>{children}</article>}
function Hero({eyebrow='Astroud cloud platform',title,copy,children}){return <header className="page-hero"><div className="shell"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{copy}</p>{children}</div></header>}
function Home(){return <><HeroMain/><AstroudShowcaseBanner /><ExploreToolsSection /><FAQSection /><CTA/></>}function ServiceGrid(){return <div className="grid cards">{services.map(([title,desc,Icon])=><Card key={title}><div className="icon"><Icon/></div><h3>{title}</h3><p>{desc}</p><Link to="/services" style={{color:'var(--accent)',fontWeight:700}}>Learn more →</Link></Card>)}</div>}
function PricingCards(){let tiers=[['Starter','For businesses that just need to stop hoping their server holds up.','₹15k',['Backup included as standard','Infrastructure monitoring','Monthly health report','Business-hours support']],['Professional','For businesses ready to modernize. Everything in Starter, plus Microsoft 365 management and active cost optimization.','₹30k',['Everything in Starter','Microsoft 365 management','Active cost optimization','Priority support']],['Enterprise','For businesses that need a strategic partner, not just a vendor.','₹50k+',['Everything in Professional','Architecture consulting','Dedicated point of contact','24/7 priority support']]];return <div className="pricing-cards">{tiers.map(([name,summary,price,features],i)=><article key={name} className={'pricing-card '+(i===1?'is-popular':'')}><div className="pricing-card-top">{i===1&&<span className="popular-badge">Most picked</span>}<h3>{name}</h3><p>{summary}</p></div><div className="pricing-price">{price}<small>/ month</small></div><Link className={'pricing-button '+(i===1?'primary':'')} to="/book-consultation">{i===1?'Choose Professional':'Request a quote'} {i===1&&<ArrowRight size={16}/>}</Link><div className="pricing-divider"/><ul className="pricing-features">{features.map(feature=><li key={feature}><CheckCircle2 size={16}/>{feature}</li>)}</ul></article>)}</div>}
function CTA(){return <FinalCtaBanner />;}
function Services(){return <><Hero title="Cloud expertise, wherever your next step is." copy="Strategic and hands-on services for infrastructure that supports your whole business."/>{services.map(([name,desc,Icon],i)=><Section key={name} soft={i%2===0} eyebrow={`0${i+1} / Service`} title={name} lead={desc}><div className="split"><div><h3>What you get</h3><ul className="checklist"><li>Senior technical discovery</li><li>Practical delivery roadmap</li><li>Transparent implementation</li><li>Measurable operational outcomes</li></ul></div><Card><div className="icon"><Icon/></div><h3>Designed around your operation</h3><p>We assess the current environment, set priorities, and build the capability to keep progressing long after launch.</p><Button>Discuss this service</Button></Card></div></Section>)}<CTA/></>}
function Solutions(){return <><Hero title="Turn technology constraints into strategic momentum." copy="Solutions that connect infrastructure decisions to the outcomes your leaders care about."/><Section eyebrow="Problem → possibility" title="Move from complexity to control."><div className="grid cards">{solutions.map(([name,challenge,,outcome,Icon])=><Card key={name}><div className="icon"><Icon/></div><span className="tag">Challenge</span><h3>{challenge}</h3><div style={{color:'var(--blue)',fontSize:22}}>↓</div><span className="tag">Astroud solution</span><p><strong>{outcome}</strong></p><Link to={`/solutions/${solutionSlug(name)}`} style={{color:'var(--blue)',fontWeight:700}}>Explore solution →</Link></Card>)}</div></Section><CTA/></>}
function SolutionDetail(){const {solutionSlug:slug}=useParams();const solution=solutions.find(([name])=>solutionSlug(name)===slug);if(!solution)return <Solutions/>;const [name,challenge,description,outcome,Icon]=solution;return <><Hero eyebrow="Astroud solutions" title={name} copy={description}><div className="actions"><Button>Discuss this solution</Button><Button ghost to="/solutions">All solutions</Button></div></Hero><Section eyebrow="The challenge" title={challenge} lead="This is a business problem before it is a technology problem. We turn it into a clear, manageable programme of work."><div className="split"><div><div className="icon"><Icon size={24}/></div><h3>What changes</h3><p className="lead">{outcome}. We combine the right architecture, delivery discipline, and operational support so improvement is measurable and sustainable.</p><ul className="checklist"><li>Priorities tied to your business outcomes</li><li>Risks surfaced early and actively reduced</li><li>A practical plan your teams can adopt</li><li>Clear measures of progress and value</li></ul></div><Card><span className="tag">Expected outcome</span><h3>Confidence to move faster</h3><p>Replace uncertain, reactive decisions with a solution that makes your environment safer, clearer, and easier to operate.</p><Button>Talk to an expert</Button></Card></div></Section><Section soft eyebrow="Our approach" title="A solution designed around your context."><div className="timeline">{['Understand the business impact','Assess people, processes, and technology','Design the target operating model','Deliver in focused, low-risk phases','Measure results and continuously improve'].map((step,i)=><div className="step" key={step}><span className="tag">Step {i+1}</span><h3>{step}</h3><p>We keep the work grounded in the outcomes that matter, with clear communication throughout.</p></div>)}</div></Section><CTA/></>}
function Industries(){let list=['Manufacturing','Textile','Healthcare','Hospitality','Retail','Professional services'];return <><Hero title="Industry context. Cloud confidence." copy="We translate complicated cloud choices into technology that fits the way your sector actually works."/><Section eyebrow="Built for your world" title="Solutions that meet you where you are."><div className="grid cards">{list.map(x=><Card key={x}><div className="icon"><Building2/></div><h3>{x}</h3><p><strong>Challenge:</strong> protect critical operations while modernizing at a pace your teams can absorb.</p><p><strong>Recommended:</strong> secure cloud, resilient backup, managed support.</p><span className="tag">Reliable growth</span></Card>)}</div></Section><CTA/></>}
function Pricing(){return <><section className="pricing-hero"><div className="shell"><div className="eyebrow">Managed cloud</div><h1>Simple monthly plans.<br/><span>No lock-in.</span></h1><p>Every plan includes backup as a baseline, never a paid add-on. Pick a tier, or start with a one-time project and add ongoing support later.</p><PricingCards/><p className="pricing-note">Need a one-off audit, migration, or setup instead of ongoing support? Those are priced separately on a fixed-fee basis, confirmed after a free discovery call — ask us for a quote.</p><p className="pricing-trust">No long-term contracts. Cancel or change plans anytime. Fixed prices confirmed in writing before any work begins.</p></div></section><Section soft eyebrow="Flexible engagement" title="Not every cloud project fits a box."><div className="grid cards">{[['Project','A defined outcome, fixed scope, clear delivery plan.'],['Retainer','Ongoing expert capability aligned to your roadmap.'],['Support','Responsive operational cover for critical systems.']].map(([a,b])=><Card key={a}><h3>{a}</h3><p>{b}</p><Button>Talk through options</Button></Card>)}</div></Section><CTA/></>}
function CaseStudies(){return <><Hero eyebrow="Case studies" title="Big outcomes are taking shape." copy="We’re assembling the stories behind the organizations moving with more confidence in the cloud."/><Section title="Coming soon."><div className="notice"><h2>Be first to see the results.</h2><p className="lead center">Join the Astroud field notes for practical cloud insights and new case studies.</p><div className="actions" style={{justifyContent:'center'}}><input aria-label="Email address" placeholder="Work email address" style={{padding:'12px',borderRadius:8,border:'1px solid var(--line)'}}/><Button>Keep me posted</Button></div></div></Section><CTA/></>}
function About(){return <><Hero eyebrow="About Astroud" title="Infrastructure with intent." copy="We believe the best technology work is deeply human: it starts by understanding what teams need to do their best work."/><Section eyebrow="Our story" title="Built by people who know the cost of complexity."><div className="split"><div className="visual" style={{ backgroundImage: 'url(/images/metallic_data_core.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 380, position: 'relative', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: 22, boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)' }}><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', padding: 24 }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 20, background: 'rgba(5,5,5,0.75)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em' }}><img src="/logo.png" style={{ height: 14 }} /> METALLIC DATA CORE</span></div></div><div><p className="lead">Astroud was founded to make enterprise-grade cloud capability feel clear, accountable, and usable for growing businesses.</p><p>We combine considered architecture with hands-on operations, so your cloud becomes a platform for progress rather than another source of uncertainty.</p></div></div></Section><Section soft eyebrow="Our compass" title="A practical mission, a long view."><div className="grid cards">{[['Mission','Help ambitious teams make technology a durable advantage.'],['Vision','A world where every business can operate with enterprise confidence.'],['Values','Clarity, ownership, curiosity, and care in every decision.']].map(([a,b])=><Card key={a}><h3>{a}</h3><p>{b}</p></Card>)}</div></Section><Section eyebrow="The road ahead" title="Grow capability. Earn trust. Create leverage."><div className="timeline">{['Build exceptional delivery teams','Deepen our cloud partnerships','Bring operational excellence to more sectors','Help customers create their next chapter'].map((x,i)=><div className="step" key={x}><span className="tag">Phase {i+1}</span><h3>{x}</h3></div>)}</div></Section><CTA/></>}
function Resources(){return <><Hero eyebrow="Resources" title="Clear thinking for a more capable cloud." copy="Practical guides for leaders and technical teams making high-stakes infrastructure decisions."/><Section title="Field notes, guides & playbooks."><div className="grid cards">{articles.map((a,i)=><Card key={a}><span className="tag">{i%2?'Security':'Cloud strategy'}</span><h3>{a}</h3><p>Useful perspective, without the jargon. Built for your next decision.</p><Link to={`/resources/${articleSlug(a)}`} style={{color:'var(--blue)',fontWeight:700}}>Read article →</Link></Card>)}</div></Section><CTA/></>}
function Article(){const {articleSlug:slug}=useParams();const title=articles.find(article=>articleSlug(article)===slug);if(!title)return <Resources/>;const category=articles.indexOf(title)%2?'Security':'Cloud strategy';return <><Hero eyebrow={category} title={title} copy="A practical Astroud field guide for making a stronger, safer, and more scalable technology decision."/><article className="section"><div className="shell article"><p className="article-intro">Cloud decisions have lasting consequences. This guide gives you a useful way to frame the work, involve the right people, and take the next step with confidence.</p><h2>Start with the outcome.</h2><p>Good infrastructure work starts by being specific about what has to improve. That could be protecting customer data, reducing operational friction, helping teams collaborate, or creating room for growth. Technology is the means; the business outcome is the measure.</p><h2>Assess the reality, not the diagram.</h2><p>Map the systems people rely on, the dependencies that create risk, and the practical constraints around time, budget, and capability. Speak to the teams doing the day-to-day work. Their experience will uncover issues that are easy to miss in a planning meeting.</p><h2>Build the plan in manageable steps.</h2><p>Prioritize the changes that reduce the most risk or create the clearest value first. Set ownership, milestones, and a way to validate progress. A staged plan makes it possible to move decisively without creating unnecessary disruption.</p><div className="article-callout"><h3>Need a second perspective?</h3><p>Our cloud specialists can help you translate this guide into a practical roadmap for your environment.</p><Button>Book a consultation</Button></div><h2>Keep improving after launch.</h2><p>The strongest cloud environments are actively operated. Review performance, cost, security signals, and feedback from users regularly. Treat the initial delivery as the start of a capability, not the end of a project.</p><Link to="/resources" className="btn ghost">← All resources</Link></div></article><CTA/></>}
const Input=({label,type='text',full=false,placeholder,name,required})=><label className={'field '+(full?'full':'')}>{label}<input type={type} name={name} required={required} placeholder={placeholder||label}/></label>;
function Contact(){return <><Hero eyebrow="Contact" title="Let’s make your next cloud decision easier." copy="Start with the context. We’ll bring the questions, experience, and a clear point of view."/><Section title="Tell us a little about your world."><div className="split"><form className="form-grid" onSubmit={e=>e.preventDefault()}><Input label="First name"/><Input label="Last name"/><Input label="Work email" type="email"/><Input label="Phone number"/><Input label="Company"/><label className="field">Company size<select><option>Choose a range</option><option>1–50</option><option>51–250</option><option>250+</option></select></label><Input label="Role"/><Input label="Website"/><label className="field full">Primary interest<select><option>Choose a service</option>{services.map(x=><option key={x[0]}>{x[0]}</option>)}</select></label><label className="field full">What are you working on?<textarea rows="5" placeholder="A little context helps us prepare."/></label><label className="field full"><input type="checkbox"/> I’d like to receive useful cloud insights.</label><div className="field full"><button className="btn primary">Send enquiry <ArrowRight size={16}/></button></div></form><div><div className="visual" style={{ backgroundImage: 'url(/images/metallic_shield_node.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 320, position: 'relative', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: 22, boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)' }}><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', padding: 20 }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 20, background: 'rgba(5,5,5,0.75)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em' }}><img src="/logo.png" style={{ height: 14 }} /> SECURE VAULT NODE</span></div></div><h3 style={{marginTop:25}}>Astroud, India — serving globally</h3><p>hello@astroud.com<br/>Mon–Fri, 9am–6pm IST</p></div></div></Section></>}
function Booking() {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState('10:00');

  return (
    <>
      <Hero eyebrow="Book a consultation" title="A focused first conversation." copy="Choose a time and tell us what you'd like to improve. There's no hard sell—just a useful starting point."/>
      <Section title="Pick a time that works.">
        <div className="split">
          <Card>
            <span className="tag">September 2026</span>
            <div className="date-grid" style={{marginTop:18}}>
              {Array.from({length:28},(_,i)=> (
                <button 
                  key={i} 
                  type="button" 
                  className={selectedDate === i + 1 ? 'active' : ''}
                  onClick={() => setSelectedDate(i + 1)}
                >
                  {i+1}
                </button>
              ))}
            </div>
            <h3 style={{marginTop:28}}>Available times (IST)</h3>
            <div className="time-grid">
              {['10:00','11:30','14:00','15:30','17:00','18:30'].map(t=> (
                <button 
                  type="button" 
                  key={t}
                  className={selectedTime === t ? 'active' : ''}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </Card>
          <form className="form-grid" onSubmit={e=> {
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const type = formData.get('meetingType');
            const context = formData.get('context');

            const message = `New Consultation Booking!\n\nName: ${name}\nEmail: ${email}\nMeeting Type: ${type}\nGoals: ${context}\n\nDate: September ${selectedDate}, 2026\nTime: ${selectedTime} IST`;
            
            // Send to WhatsApp
            window.open(`https://wa.me/917907860525?text=${encodeURIComponent(message)}`, '_blank');
            
            // Send via Email
            window.location.href = `mailto:astroudtech@gmail.com?subject=New Consultation Booking - ${name}&body=${encodeURIComponent(message)}`;
          }}>
            <Input label="Your name" name="name" required />
            <Input label="Work email" type="email" name="email" required />
            <label className="field full">
              Meeting type
              <select name="meetingType">
                <option>Cloud strategy consultation</option>
                <option>Migration discussion</option>
                <option>Managed services review</option>
              </select>
            </label>
            <label className="field full">
              What would make this conversation valuable?
              <textarea name="context" rows="5" placeholder="Your project goals, challenges, or questions"/>
            </label>
            <div className="field full">
              <button className="btn primary" type="submit">Confirm consultation <CheckCircle2 size={16}/></button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function MainLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/signout' || location.pathname === '/logout';

  return (
    <>
      <ScrollTop />
      {!isAuthPage && <AnnouncementBar />}
      {!isAuthPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:solutionSlug" element={<SolutionDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:articleSlug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<Booking />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/logout" element={<SignOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught navigation/rendering error:", error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locationKey !== this.props.locationKey && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '100px 20px', textAlign: 'center', color: '#0F172A', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Unable to render page section</h2>
          <p style={{ color: '#475569', marginBottom: 20 }}>An error occurred while loading this view.</p>
          {this.state.error && (
            <div style={{ margin: '0 auto 24px', maxWidth: 500, background: '#FEF2F2', padding: 14, borderRadius: 8, textAlign: 'left', fontSize: 13, color: '#DC2626', border: '1px solid #FECACA', overflow: 'auto' }}>
              <strong>Error Details:</strong> {this.state.error.toString()}
            </div>
          )}
          <button onClick={() => { this.setState({ hasError: false, error: null }); }} className="btn primary">
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function ErrorBoundaryWithLocation({ children }) {
  const location = useLocation();
  return <ErrorBoundary locationKey={location.pathname + location.search}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <AuthProvider>
      <ErrorBoundaryWithLocation>
        <MainLayout />
      </ErrorBoundaryWithLocation>
    </AuthProvider>
  );
}
function ServiceGridLinks(){return <div className="grid cards">{services.map(([title,desc,Icon])=><Card key={title}><div className="icon"><Icon/></div><h3>{title}</h3><p>{desc}</p><Link to={`/services/${serviceSlug(title)}`} style={{color:'var(--blue)',fontWeight:700}}>Learn more →</Link></Card>)}</div>}
function ServicesIndex(){return <><Hero title="Cloud expertise, wherever your next step is." copy="Explore our six focused cloud services, each designed to improve resilience, security, and day-to-day performance."/><Section eyebrow="Our services" title="Choose the capability you need."><ServiceGridLinks/></Section><CTA/></>}

function ServiceDetail(){
  const {serviceSlug:slug} = useParams();
  const service = detailedServices.find(s => s.slug === slug);
  if(!service) return <ServicesIndex/>;
  
  const Icon = service.icon;
  
  return (
    <>
      <Hero eyebrow="Astroud services" title={service.heroHeadline} copy={service.heroSubhead}>
        <div className="actions" style={{ marginBottom: 40 }}>
          <Button>Book a Discovery Call</Button>
          <Button ghost to="/services">All services</Button>
        </div>
        
        {/* Universal Trust Strip */}
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', borderTop: '1px solid #E2E8F0', paddingTop: '20px', marginTop: '20px' }}>
          <span style={{ fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="#2563EB"/> Client-owned cloud accounts</span>
          <span style={{ fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="#2563EB"/> Scoped IAM/RBAC access</span>
          <span style={{ fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="#2563EB"/> Honest, right-sized recommendations</span>
        </div>
      </Hero>
      
      <Section eyebrow="Overview" title={`Built around your actual operation.`}>
        <div className="split">
          <div>
            <div className="icon"><Icon size={24}/></div>
            <h3>Why it matters</h3>
            <p className="lead">{service.overview}</p>
          </div>
          <Card>
            <span className="tag">Honest Guidance</span>
            <h3>When you don't need this</h3>
            <p style={{ lineHeight: 1.6 }}>{service.notForYou}</p>
          </Card>
        </div>
      </Section>
      
      <Section soft eyebrow="What's Included" title="Everything you need, nothing you don't.">
        <div className="grid cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {service.included.map((item, i) => (
            <Card key={i}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 0, display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> {item}</h3>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section eyebrow="FAQ" title="Common questions.">
        <div className="faq" style={{ maxWidth: 800, margin: '0 auto' }}>
          {service.faq.map((f, i) => (
            <details key={i}>
              <summary style={{ fontSize: '1.2rem', padding: '10px 0' }}>{f.q}</summary>
              <p style={{ padding: '10px 0 20px', color: 'var(--text-secondary)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      
      <Section soft eyebrow="Pricing" title="Transparent costs.">
        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <p className="lead" style={{ margin: '0 auto 24px' }}>{service.pricing}</p>
          <Button to="/pricing">View full pricing plans</Button>
        </div>
      </Section>
      
      <CTA />
    </>
  );
}
export default App;

