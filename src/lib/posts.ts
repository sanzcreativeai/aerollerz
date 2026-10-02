export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMins: number;
  category: string;
  cover: string;
  intro: string;
  sections: { h: string; body: string }[];
  faq?: { q: string; a: string }[];
  internalLinks: { label: string; href: string }[];
};

export const posts: Post[] = [
  {
    slug: "wedding-decoration-cost-chennai",
    title: "How Much Does Wedding Decoration Cost in Chennai? (2026 Guide)",
    description: "A transparent breakdown of what wedding decoration actually costs in Chennai — mandap, stage, floral, lighting — across budget bands.",
    date: "2026-01-15",
    readMins: 8,
    category: "Pricing Guide",
    cover: "/portfolio/portfolio-03.jpg",
    intro: "Chennai wedding decoration costs typically range from ₹80,000 for minimal setups to ₹25 lakh for luxury productions. Most mid-range Chennai weddings land between ₹2-6 lakh for full décor across functions. Here's the honest breakdown of where the money actually goes.",
    sections: [
      { h: "The ₹1-2 lakh band — focused décor, single function", body: "This covers one function (muhurtham OR engagement OR reception) with a straightforward mandap or stage, basic floral, standard lighting. Expect a 10x6 ft stage, a floral backdrop with roses and chrysanthemums, uplighting on the back wall, entry arch with foliage. Setup time: 4-6 hours. Suitable for 150-250 guest intimate functions." },
      { h: "The ₹3-6 lakh band — most Chennai weddings land here", body: "Full décor for one major function with upgraded florals (orchids, lilies, mixed roses), designer stage backdrop, LED or chandelier lighting, custom entry pathway, head table styling, sweetheart lounge. This is the sweet spot for most Chennai weddings — significantly nicer than basic without reaching luxury pricing." },
      { h: "The ₹8-15 lakh band — premium décor, multiple functions", body: "This covers engagement + muhurtham + reception with coordinated design language, premium florals including some imported stems, custom-built stage sections, programmed lighting rig, chandelier installations, full venue styling. Suitable for 400+ guest weddings at premium venues." },
      { h: "The ₹20 lakh+ band — luxury productions", body: "Bespoke mandap, imported florals (hydrangea, peony, orchid walls), chandelier and crystal installations, custom projection mapping, theatre-grade lighting rig, five-star venue coordination. This is the ITC Grand Chola / Leela Palace tier." },
      { h: "What drives the number", body: "Guest count affects floral volume and seating décor. Venue size determines lighting rig needs. Floral choice is the single biggest variable — imported florals multiply the cost 3-5x. Custom stage builds add ₹50,000-5 lakh depending on complexity. Setup time, dismantle, overnight charges, transport all factor in." },
      { h: "Red flags to watch for", body: "Quotes that don't itemise. Décor companies that quote 'all-inclusive' without breaking down mandap vs stage vs floral vs lighting. Last-minute 'additional' charges on event day. Hidden transport, overtime or dismantle fees. Always ask for a line-item quote." },
    ],
    faq: [
      { q: "Can I negotiate wedding décor pricing?", a: "Floral and labour costs are relatively fixed. Where you can negotiate: design complexity, number of functions bundled, timing (off-season gets better rates), and payment terms." },
      { q: "Does the venue affect the cost?", a: "Yes significantly. Five-star hotel décor adds 20-40% over kalyana mandapam décor due to venue restrictions, overnight access charges, and higher spec expectations." },
    ],
    internalLinks: [
      { label: "Wedding Decoration Services in Chennai", href: "/wedding-decoration-chennai" },
      { label: "Luxury Wedding Decorators", href: "/luxury-wedding-decoration-chennai" },
      { label: "Wedding Planning Services", href: "/wedding-planning-chennai" },
    ],
  },
  {
    slug: "best-wedding-venues-chennai",
    title: "The Best Wedding Venues in Chennai by Budget",
    description: "Chennai's best wedding venues organised by budget band — hotels, kalyana mandapams, resorts and outdoor venues we've worked at.",
    date: "2026-01-22",
    readMins: 10,
    category: "Venue Guide",
    cover: "/portfolio/portfolio-06.jpg",
    intro: "After 24 years setting up weddings across every major Chennai venue, here are the ones that consistently deliver — organised by budget band, with the specifics only decorators know (where the loading dock is, how late setup can run, which halls have cross-ventilation).",
    sections: [
      { h: "Luxury five-star venues (₹8 lakh+ venue hire)", body: "ITC Grand Chola — the Chennai gold standard, massive ballrooms, flawless service. Leela Palace — classic luxury, strong F&B team. Taj Coromandel — refined, central, strong for traditional South Indian weddings. Hyatt Regency — modern, excellent AV infrastructure. Hilton Chennai — contemporary, strong lighting support." },
      { h: "Premium hotels (₹3-7 lakh venue hire)", body: "Feathers Hotel — reliable, central, newer facility. Novotel Chennai Chamiers — good for mid-size weddings. GRT Grand Chennai — strong Tamil wedding infrastructure. Crowne Plaza Chennai Adyar Park — reliable premium tier. Radisson Blu Chennai — flexible banquet space." },
      { h: "Resort and destination venues (around Chennai)", body: "Ocean Spray Resort (ECR) — beachfront luxury, we've produced here (see our case study). The Westin Chennai Velachery — resort feel in city limits. Fisherman's Cove — the Chennai classic for destination feels without travel." },
      { h: "Kalyana mandapams — traditional South Indian weddings", body: "Sri Mayilai Thiyagaraja Vidwath Samajam — classical choice. Raghavendra Kalyana Mandapam — reliable, good family facility. Jayalakshmi Thirumana Mandapam — traditional T. Nagar venue. Each mandapam has its own décor rules — ask the venue about restrictions before finalising décor." },
      { h: "Outdoor and unique venues", body: "Our farm venues on OMR, ECR beachfront venues, select heritage bungalows in Mylapore. These need weather contingencies and more intense infrastructure planning but deliver a memorable guest experience." },
      { h: "The things nobody tells you", body: "Check loading dock access before signing. Confirm overnight setup rules. Ask about generator access if the main power fails. Verify dismantle hours — some venues charge heavily for post-event cleanup overruns. Confirm whether décor restrictions exist (open flame, pyro, nail-into-wall limits)." },
    ],
    internalLinks: [
      { label: "Wedding Planning in Chennai", href: "/wedding-planning-chennai" },
      { label: "Wedding Decoration", href: "/wedding-decoration-chennai" },
      { label: "Luxury Wedding Decoration", href: "/luxury-wedding-decoration-chennai" },
    ],
  },
  {
    slug: "corporate-event-planning-checklist",
    title: "Corporate Event Planning Checklist (90 Days to Showtime)",
    description: "A 90-day corporate event planning checklist used by Aerollerz for client events — from objective to post-event reporting.",
    date: "2026-01-29",
    readMins: 12,
    category: "Checklist",
    cover: "/portfolio/portfolio-14.jpg",
    intro: "This is the actual 90-day checklist we run for corporate clients, from product launches to annual conferences. Download the PDF version at the end — email-gated so we know who's building events in Chennai.",
    sections: [
      { h: "Day -90: Objective + brief", body: "Define the event objective in one sentence. Lock the business outcome you're measuring (lead gen, product awareness, team recognition). Set a budget range with a 15% contingency. Identify key stakeholders and sign-off authorities. Draft the attendee profile and target count." },
      { h: "Day -75: Venue + dates", body: "Shortlist 3 venues with site visits. Negotiate rate card, F&B minimums, overtime charges, parking. Confirm date (verify no clashes with major Chennai events). Secure deposit and contract." },
      { h: "Day -60: Vendor shortlist", body: "Event management partner (Aerollerz handles the rest from here). Keynote speakers if applicable. Catering spec. Entertainment programming. Photography and videography teams. Give-aways and hamper vendors." },
      { h: "Day -45: Content + creative", body: "Keynote scripts drafted. Stage design mocks approved. Backdrop and signage artwork locked. Delegate kit contents finalised. Social and press collateral drafted. Invite collateral sent." },
      { h: "Day -30: Logistics lock", body: "Final guest list to venue. Dietary requirements collated. Transport and hospitality coordinated. Final run-of-show document (ROS) circulated. Vendor payments scheduled. Insurance and permits confirmed." },
      { h: "Day -14: Rehearsals + review", body: "Full ROS walkthrough with stakeholders. Tech check at venue. Backup plans for weather, power, late arrivals. Staff briefing with ops team. Media briefing kit finalised." },
      { h: "Day -1: Setup", body: "Venue setup begins (timing depends on event scale — most need overnight access). AV and lighting rigged and tested. Signage installed. VIP routes walked through. Catering kitchen confirmed. Security briefed." },
      { h: "Event day: Showtime", body: "Showcaller runs the ROS. Dedicated producer on-floor. Backup equipment on standby. Media coordinator managing press. Hospitality team on all VIP zones. Post-event feedback forms distributed." },
      { h: "Day +1 to +7: Debrief + reporting", body: "Full event recap document. Attendee feedback summary. Photo and video deliverables. Media coverage report. Expense reconciliation. Lessons learned for the next event." },
    ],
    internalLinks: [
      { label: "Corporate Event Management", href: "/corporate-event-management-chennai" },
      { label: "Conference Management", href: "/corporate-event-management-chennai" },
      { label: "CIO Association Case Study", href: "/portfolio/cio-association-corporate-performance" },
    ],
  },
];

// Additional posts (concise versions — expand as content calendar rolls out)
const additional: Post[] = [
  {
    slug: "chennai-wedding-trends-2026",
    title: "2026 Chennai Wedding Trends — What Decorators Are Seeing",
    description: "What 2026 Chennai weddings look like — the colour palettes, florals, stages and formats families are actually asking for.",
    date: "2026-02-05", readMins: 7, category: "Trends", cover: "/portfolio/portfolio-10.jpg",
    intro: "Based on 40+ Chennai weddings we've planned or quoted on in the last 90 days, here's what families are asking for in 2026 — and what's quietly on the way out.",
    sections: [
      { h: "The look: muted luxury", body: "Big saturated reds and golds are giving way to muted palettes — champagne, blush, dusty rose, sage. Guests still read it as premium, but photos age better and venues look less dated." },
      { h: "Floral: imported stems, used sparingly", body: "Hydrangea walls and single-stem orchid clusters are in. The all-rose mandap is out. Families are willing to spend on fewer, higher-impact floral moments." },
      { h: "Stage: designed for Instagram, not just the back-of-hall viewer", body: "Stages are being designed with the phone photo in mind — tighter frames, less background noise, better rim lighting on the couple." },
      { h: "Entry experiences", body: "The entry pathway is getting more attention than ever — guests judge the wedding in the first 10 seconds. Expect to spend 10-15% of décor budget here in 2026." },
      { h: "Formats: shorter, denser", body: "Three-day weddings are becoming two. The pre-wedding sangeet + mehendi are compressed into one evening with multiple zones. Families value guest energy over duration." },
    ],
    internalLinks: [
      { label: "Wedding Decoration", href: "/wedding-decoration-chennai" },
      { label: "Luxury Wedding Decoration", href: "/luxury-wedding-decoration-chennai" },
      { label: "Wedding Planning", href: "/wedding-planning-chennai" },
    ],
  },
  {
    slug: "wedding-decoration-ideas-chennai",
    title: "30 Wedding Decoration Ideas for Chennai Couples",
    description: "30 wedding decoration ideas we've actually set up in Chennai — from traditional muhurtham to modern receptions.",
    date: "2026-02-12", readMins: 9, category: "Ideas", cover: "/portfolio/portfolio-03.jpg",
    intro: "A curated list of 30 wedding décor ideas that have actually photographed well at Chennai weddings — not Pinterest fantasy. Each is annotated with budget tier and venue fit.",
    sections: [
      { h: "Mandap ideas (10)", body: "Classical brass + marigold mandap. Modern white and gold with orchid canopy. Fusion mandap with four-pillar + draped florals. Minimal mandap with greenery wall. Themed mandap (temple-inspired, palace-inspired, garden). Floating mandap with suspended florals. LED mandap with programmed backdrop. Open-air mandap under drape. Compact mandap for intimate ceremonies. Statement mandap with chandelier centerpiece." },
      { h: "Stage and backdrop ideas (10)", body: "Floral backdrop wall. Chandelier and foliage stage. Projection-mapped backdrop. Multi-level stage. Round reception stage. Entry-staircase stage. LED video wall stage. Draped curtain stage. Hanging element stage. Minimalist light-and-shadow stage." },
      { h: "Entry and ambient ideas (10)", body: "Floral entry arch. Draped welcome pathway. Lit tunnel entry. Suspended ribbon entry. Photo-wall entry. Candle-lit pathway. Living wall entry. Mirror backdrop entry. Themed entry (traditional door, palace door). Minimalist welcome frame." },
    ],
    internalLinks: [
      { label: "Wedding Decoration", href: "/wedding-decoration-chennai" },
      { label: "Engagement Decoration", href: "/engagement-decoration-chennai" },
      { label: "Reception Decoration", href: "/reception-decoration-chennai" },
    ],
  },
  {
    slug: "engagement-decoration-ideas",
    title: "Engagement Decoration Ideas — Stage, Backdrop, Entry",
    description: "Engagement décor ideas across stages, backdrops and entry zones — budget-tiered for Chennai venues.",
    date: "2026-02-19", readMins: 6, category: "Ideas", cover: "/portfolio/portfolio-10.jpg",
    intro: "An engagement is the first impression. Guests judge the entire wedding on it. Here are 12 engagement décor ideas we've set up across Chennai venues, each annotated with budget and photographer-friendliness.",
    sections: [
      { h: "Stage design directions", body: "Classical brass + traditional. Modern white + gold. Fusion brass + modern florals. Minimalist with single statement floral. Themed (garden, palace, temple)." },
      { h: "Backdrop ideas", body: "Floral wall. Draped curtain with lights. Hanging element installation. Mirror backdrop. Projection-mapped." },
      { h: "Entry zone", body: "Floral arch. Lit pathway. Welcome frame. Photo wall. Themed entry gate." },
    ],
    internalLinks: [
      { label: "Engagement Decoration", href: "/engagement-decoration-chennai" },
      { label: "Wedding Decoration", href: "/wedding-decoration-chennai" },
    ],
  },
  {
    slug: "reception-decoration-ideas",
    title: "Reception Decoration Ideas — Stage, Light, Floral",
    description: "Chennai reception décor ideas across stage, lighting and floral — plus the venue-flow details that matter.",
    date: "2026-02-26", readMins: 7, category: "Ideas", cover: "/portfolio/portfolio-03.jpg",
    intro: "A reception is a performance. Here are 15 reception décor ideas and the venue-flow decisions that make or break the night.",
    sections: [
      { h: "Stage ideas", body: "Classical floral stage. Modern draped stage. Multi-level reception stage. Round-in-the-middle stage. LED-wall stage." },
      { h: "Lighting design", body: "Warm uplight. Chandelier installations. Fairy-light canopy. Projection ambient. Programmed moving lights." },
      { h: "Guest table styling", body: "Low floral centerpieces. Tall statement vases. Candle clusters. Themed centerpieces. Minimalist." },
    ],
    internalLinks: [
      { label: "Reception Decoration", href: "/reception-decoration-chennai" },
      { label: "Wedding Decoration", href: "/wedding-decoration-chennai" },
    ],
  },
  {
    slug: "south-indian-wedding-rituals-guide",
    title: "South Indian Wedding Rituals — A Decorator's Guide",
    description: "The main South Indian wedding rituals explained from a decorator's view — what each one needs on-stage and in-venue.",
    date: "2026-03-05", readMins: 10, category: "Culture", cover: "/instagram-events/event-12.jpg",
    intro: "After 24 years of Chennai weddings, here's what each major South Indian wedding ritual actually needs from a décor and logistics perspective — the oil lamp placements, the plantain-leaf arrangements, the muhurtham-moment staging.",
    sections: [
      { h: "Nichayathartham (engagement)", body: "The engagement ceremony — stage with brass elements, floral backdrop, seating for the exchange of thalis. The décor needs to let photographers get both sides of the family in frame." },
      { h: "Pandal Kaal Muhurtham", body: "The venue blessing. Decorators arrive early for the ceremony to be performed in a cleared, blessed space." },
      { h: "Nalangu", body: "The pre-wedding bride-and-groom playful ceremony. Needs an intimate seating zone, lighter décor, kolam work." },
      { h: "Kashi Yatra", body: "The groom's playful 'walk to Kashi' moment. Needs an entry setup with simple props." },
      { h: "Muhurtham", body: "The central wedding moment. Needs the main mandap, the brass vessels, the agni (sacred fire) safely enclosed, floral drops, and precisely timed lighting." },
      { h: "Reception", body: "The celebration — biggest décor spend, biggest guest count. Multiple photo zones, lounge seating for elders, stage for the couple." },
    ],
    internalLinks: [
      { label: "Wedding Planning", href: "/wedding-planning-chennai" },
      { label: "Wedding Decoration", href: "/wedding-decoration-chennai" },
    ],
  },
  {
    slug: "muhurtham-stage-decoration-ideas",
    title: "Muhurtham Stage Decoration — Tradition Meets Modern",
    description: "Muhurtham stage décor ideas blending traditional Tamil elements with modern staging for Chennai weddings.",
    date: "2026-03-12", readMins: 6, category: "Ideas", cover: "/instagram-events/event-12.jpg",
    intro: "The muhurtham moment is the one photo every family keeps. Here's how we design muhurtham stages that honour tradition but photograph like a 2026 wedding.",
    sections: [
      { h: "Traditional elements that stay", body: "Brass vessels. Mango leaves. Banana trunk pillars. Marigold strings. Kolam flooring. These are non-negotiable for most Chennai Tamil weddings." },
      { h: "Modern elements that lift the stage", body: "Diffused warm uplight (not harsh ceiling light). Floral drops in muted palettes. Clean stage edges. Depth of field through layered backdrops. Draped florals framing the mandap." },
      { h: "What to avoid", body: "Harsh white LED. Competing colour palettes. Over-decorated floor (photographer can't track couple movement). Flashing lights (ruin photos)." },
    ],
    internalLinks: [
      { label: "Wedding Decoration", href: "/wedding-decoration-chennai" },
      { label: "Wedding Planning", href: "/wedding-planning-chennai" },
    ],
  },
  {
    slug: "haldi-decoration-ideas",
    title: "Haldi Function Decoration Ideas (Yellow Themes That Work)",
    description: "Haldi function décor ideas that actually photograph well — yellow themes done right.",
    date: "2026-03-19", readMins: 5, category: "Ideas", cover: "/portfolio/portfolio-11.jpg",
    intro: "Yellow is the easiest colour to get wrong. Here are haldi décor ideas that photograph beautifully — not neon-tacky.",
    sections: [
      { h: "Palette done right", body: "Mustard yellow + cream + sage green. Marigold + white + ochre. Lemon + dusty gold + sage. All better than fluorescent yellow + bright orange." },
      { h: "Setups that work", body: "Haldi seat under floral canopy. Low lounge seating with marigold floor. Open-air haldi with draped yellow fabric. Haldi photo zone with yellow floral wall." },
      { h: "Logistics", body: "Flooring protection (haldi stains anything it touches). Guest attire warnings. Backup clothing for the couple. Easy-wash fabric choices for décor." },
    ],
    internalLinks: [
      { label: "Wedding Decoration", href: "/wedding-decoration-chennai" },
      { label: "Wedding Planning", href: "/wedding-planning-chennai" },
    ],
  },
  {
    slug: "wedding-planner-cost-chennai",
    title: "Wedding Planner Cost in Chennai (Transparent Breakdown)",
    description: "What Chennai wedding planners actually charge, how pricing is structured, and what to expect at each tier.",
    date: "2026-03-26", readMins: 8, category: "Pricing", cover: "/portfolio/portfolio-06.jpg",
    intro: "Chennai wedding planner fees typically range from ₹1-15 lakh depending on service tier. Here's the honest breakdown of pricing structures and what each tier includes.",
    sections: [
      { h: "Day-of coordination (₹50,000 - ₹1.5 lakh)", body: "You've planned the wedding. The planner shows up for the final 2 days to run the show. Suitable for families who've handled the planning themselves and want a professional to run event-day." },
      { h: "Partial planning (₹1.5 - 4 lakh)", body: "Planner handles specific workstreams — venue + décor, OR vendor coordination + run-of-show. Family stays involved in design and vendor selection." },
      { h: "Full-service planning (₹4 - 15 lakh)", body: "End-to-end planning from concept to post-event. Includes design direction, vendor sourcing, budget management, timeline, run-of-show, event-day team. Most Chennai mid-to-luxury weddings fit here." },
      { h: "Luxury production (₹15 lakh+)", body: "Dedicated producer, designer, and ops team allocated for 6-12 months. Weekly reviews. Custom builds. International-standard execution. For weddings in the ₹1 crore+ total budget range." },
    ],
    internalLinks: [
      { label: "Wedding Planning", href: "/wedding-planning-chennai" },
      { label: "Luxury Wedding Decoration", href: "/luxury-wedding-decoration-chennai" },
    ],
  },
  {
    slug: "event-lighting-ideas-guide",
    title: "Event Lighting Ideas — Uplight, Spot, Festoon, Pyro",
    description: "An event lighting guide for Chennai events — uplight, spot, festoon, LED and pyro techniques we use.",
    date: "2026-04-02", readMins: 7, category: "Technical", cover: "/portfolio/portfolio-14.jpg",
    intro: "Lighting is the single most underestimated event spend. Here's how we design event lighting across weddings, corporate events and launches.",
    sections: [
      { h: "Uplighting", body: "The baseline. Warm uplight on walls transforms a bare banquet hall into a premium venue. Programmed colour can match brand or wedding palette. Budget: ₹25,000-1 lakh depending on venue size." },
      { h: "Spot and key lights", body: "Essential for stage. One key light on the couple/speaker. Fill lights to kill shadows. Rim light to separate from background. Critical for photo and video quality." },
      { h: "Festoon and fairy lights", body: "Ambient and romantic. Best for outdoor venues, pathway and lounge zones. Low cost, high visual impact." },
      { h: "LED walls", body: "Programmable backdrops for stage. Can run brand video, event name, animated patterns. Budget: ₹50,000-5 lakh depending on panel size." },
      { h: "Pyro and sparklers", body: "Reveal moments. Use sparingly — one big moment lands better than three mediocre ones. Needs venue clearance for indoor use." },
    ],
    internalLinks: [
      { label: "Event Decoration", href: "/event-decoration-chennai" },
      { label: "Product Launch Event Management", href: "/product-launch-management-chennai" },
      { label: "Corporate Event Management", href: "/corporate-event-management-chennai" },
    ],
  },
];
posts.push(...additional);
