export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  heroImage?: string;
}

export interface Portfolio {
  id: string;
  title: string;
  image: string;
  category: string;
  year: number;
}

export interface InstagramEvent {
  id: string;
  title: string;
  image: string;
  category: string;
}

export const business = {
  name: "Aerollerz Media & Entertainment",
  shortName: "Aerollerz",
  domain: "https://aerollerz.com",
  tagline: "Creating Memorable Events Since 2002",
  description: "Chennai-based event management company producing world-class corporate events, award ceremonies, live entertainment, and brand activations.",
  founded: 2002,
  founder: "Sudhakar Arumugam",
  founderPhoto: "/founder/sudhakar.jpg",
  founderBio: "With over 24 years of experience in event management and live entertainment, Sudhakar Arumugam has established Aerollerz as a trusted partner for transforming corporate visions into unforgettable experiences. His passion for excellence and meticulous attention to detail ensures every event exceeds expectations.",
  phone: "+91 9840 999 888",
  phoneDisplay: "+91 9840 999 888",
  email: "hello@aerollerz.com",
  whatsapp: "+919840999888",
  instagram: "@aerollerz",
  address: {
    line1: "123 Entertainment Plaza, Nungambakkam",
    line2: "Chennai, Tamil Nadu 600034, India",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600034",
    country: "India",
  },
  rating: {
    value: 4.9,
    count: 287,
  },
};

export const services: Service[] = [
  {
    id: "corporate-events",
    title: "Corporate Events",
    slug: "corporate-events",
    shortDescription: "Professional event management for conferences, meetings, and corporate gatherings",
    fullDescription: "From intimate corporate lunches to large-scale conferences, we manage every aspect of your corporate event with precision and professionalism. Our team ensures flawless execution, impeccable logistics, and memorable experiences.",
    features: ["End-to-end event planning", "Venue coordination", "Audio/visual production", "Catering coordination", "Staff management", "Post-event reporting"],
    heroImage: "/media/service-images/corporate-events.jpg",
  },
  {
    id: "conferences-seminars",
    title: "Conferences & Seminars",
    slug: "conferences-seminars",
    shortDescription: "World-class conference production with state-of-the-art facilities",
    fullDescription: "We specialize in producing high-impact conferences and seminars with professional audio-visual production, expert speaker management, and seamless attendee experiences.",
    features: ["Speaker coordination", "Technical setup", "Live streaming", "Registration management", "Breakout sessions", "Networking facilitation"],
    heroImage: "/media/service-images/conferences-seminars.jpg",
  },
  {
    id: "product-launches",
    title: "Product Launches",
    slug: "product-launches",
    shortDescription: "Creating buzz with impactful product launches and brand reveals",
    fullDescription: "Make a splash with a product launch that captures attention and generates excitement. We design immersive experiences that showcase your product and engage your audience.",
    features: ["Concept development", "Staging design", "Media coordination", "Influencer management", "Live demonstrations", "Press coverage"],
    heroImage: "/media/service-images/product-launches.jpg",
  },
  {
    id: "award-ceremonies",
    title: "Award Ceremonies",
    slug: "award-ceremonies",
    shortDescription: "Prestigious award ceremonies celebrating excellence and achievement",
    fullDescription: "From industry awards to corporate recognition events, we create elegant and memorable award ceremonies that honor achievement and inspire audiences.",
    features: ["Ceremony design", "Stage production", "Lighting design", "Audio production", "Video tributes", "Guest management"],
    heroImage: "/media/service-images/award-ceremonies.jpg",
  },
  {
    id: "brand-activations",
    title: "Brand Activations",
    slug: "brand-activations",
    shortDescription: "Experiential marketing activations that connect with your audience",
    fullDescription: "Create meaningful brand experiences that engage customers and build lasting relationships. Our brand activations combine creativity, technology, and storytelling.",
    features: ["Concept development", "Experiential design", "Interactive installations", "Social media integration", "Influencer partnerships", "ROI measurement"],
    heroImage: "/media/service-images/brand-activations.jpg",
  },
  {
    id: "weddings-celebrations",
    title: "Weddings & Celebrations",
    slug: "weddings-celebrations",
    shortDescription: "Personalized wedding and celebration planning for your special moments",
    fullDescription: "Make your wedding day unforgettable with our comprehensive planning services. From intimate gatherings to grand celebrations, we bring your vision to life.",
    features: ["Venue selection", "Vendor coordination", "Day-of management", "Decoration design", "Entertainment booking", "Photography coordination"],
    heroImage: "/media/service-images/weddings-celebrations.jpg",
  },
  {
    id: "live-entertainment",
    title: "Live Entertainment",
    slug: "live-entertainment",
    shortDescription: "Premium entertainment acts and live performances for any occasion",
    fullDescription: "Elevate your event with world-class entertainment. We provide musicians, dancers, comedians, and performers to create unforgettable moments.",
    features: ["Artist booking", "Performance coordination", "Technical support", "Stage management", "Crowd engagement", "Sound engineering"],
    heroImage: "/media/service-images/live-entertainment.jpg",
  },
  {
    id: "concert-production",
    title: "Concert Production",
    slug: "concert-production",
    shortDescription: "Professional concert production with state-of-the-art sound and lighting",
    fullDescription: "From intimate acoustic sets to large-scale concert events, we handle all technical and logistical aspects of live music production.",
    features: ["Artist management", "Sound engineering", "Lighting design", "Stage setup", "Crowd management", "Technical coordination"],
    heroImage: "/media/service-images/concert-production.jpg",
  },
  {
    id: "festival-organization",
    title: "Festival Organization",
    slug: "festival-organization",
    shortDescription: "Large-scale festival planning and execution",
    fullDescription: "Create memorable festival experiences with our comprehensive planning and production services. We manage every detail from permits to final execution.",
    features: ["Vendor management", "Stage design", "Sound systems", "Artist coordination", "Safety management", "Crowd control"],
    heroImage: "/media/service-images/festival-organization.jpg",
  },
  {
    id: "trade-shows-exhibitions",
    title: "Trade Shows & Exhibitions",
    slug: "trade-shows-exhibitions",
    shortDescription: "Professional trade show and exhibition management",
    fullDescription: "Maximize your presence at trade shows with our booth design, staffing, and logistics expertise.",
    features: ["Booth design", "Setup coordination", "Staffing", "Lead capture", "Logistics", "Breakdown management"],
    heroImage: "/media/service-images/trade-shows-exhibitions.jpg",
  },
  {
    id: "private-parties",
    title: "Private Parties",
    slug: "private-parties",
    shortDescription: "Customized private event planning and execution",
    fullDescription: "Host the perfect private gathering with our personalized planning and attention to detail.",
    features: ["Venue coordination", "Menu planning", "Entertainment", "Decoration", "Guest management", "Timeline coordination"],
    heroImage: "/media/service-images/private-parties.jpg",
  },
  {
    id: "corporate-dinners",
    title: "Corporate Dinners",
    slug: "corporate-dinners",
    shortDescription: "Elegant corporate dining experiences",
    fullDescription: "Create lasting impressions with sophisticated corporate dinners. We handle venue, catering, entertainment, and ambiance.",
    features: ["Venue selection", "Menu curation", "Table setup", "Entertainment", "Service staff", "Atmosphere design"],
    heroImage: "/media/service-images/corporate-dinners.jpg",
  },
  {
    id: "gala-events",
    title: "Gala Events",
    slug: "gala-events",
    shortDescription: "Luxurious gala event production",
    fullDescription: "Host a prestigious gala event with our expertise in high-end event production and luxury experiences.",
    features: ["Concept design", "Luxury catering", "Entertainment lineup", "Decoration design", "VIP management", "Photography services"],
    heroImage: "/media/service-images/gala-events.jpg",
  },
  {
    id: "cultural-events",
    title: "Cultural Events",
    slug: "cultural-events",
    shortDescription: "Celebrating culture through immersive event experiences",
    fullDescription: "Showcase cultural traditions with authentic, respectfully-produced cultural events.",
    features: ["Artist coordination", "Cultural research", "Authentic staging", "Traditional performances", "Educational components", "Community engagement"],
    heroImage: "/media/service-images/cultural-events.jpg",
  },
  {
    id: "music-festivals",
    title: "Music Festivals",
    slug: "music-festivals",
    shortDescription: "Large-scale music festival production",
    fullDescription: "From intimate music festivals to multi-day celebrations, we produce world-class musical events.",
    features: ["Artist booking", "Multi-stage coordination", "Sound engineering", "Lighting design", "Venue management", "Attendee experience"],
    heroImage: "/media/service-images/music-festivals.jpg",
  },
  {
    id: "sports-events",
    title: "Sports Events",
    slug: "sports-events",
    shortDescription: "Professional sports event management and production",
    fullDescription: "Organize and execute sports events with professional coordination and technical expertise.",
    features: ["Venue coordination", "Equipment management", "Spectator services", "Athlete coordination", "Timing systems", "Results management"],
    heroImage: "/media/service-images/sports-events.jpg",
  },
  {
    id: "charity-fundraisers",
    title: "Charity Fundraisers",
    slug: "charity-fundraisers",
    shortDescription: "Impactful charity fundraising events",
    fullDescription: "Support your cause with professionally produced charity events that maximize engagement and donations.",
    features: ["Concept development", "Sponsorship coordination", "Donor management", "Entertainment", "Auction coordination", "Impact reporting"],
    heroImage: "/media/service-images/charity-fundraisers.jpg",
  },
  {
    id: "fashion-shows",
    title: "Fashion Shows",
    slug: "fashion-shows",
    shortDescription: "Professional fashion show production",
    fullDescription: "Showcase fashion collections with stylish, high-impact fashion show production.",
    features: ["Runway design", "Lighting design", "Model coordination", "Music curation", "Styling coordination", "Media coverage"],
    heroImage: "/media/service-images/fashion-shows.jpg",
  },
  {
    id: "art-exhibitions",
    title: "Art Exhibitions",
    slug: "art-exhibitions",
    shortDescription: "Curated art exhibition events",
    fullDescription: "Celebrate artistic vision with professionally produced art exhibition events.",
    features: ["Space design", "Artwork display", "Lighting design", "Artist coordination", "Opening reception", "Promotion"],
    heroImage: "/media/service-images/art-exhibitions.jpg",
  },
  {
    id: "film-screenings",
    title: "Film Screenings",
    slug: "film-screenings",
    shortDescription: "Professional film screening and premiere events",
    fullDescription: "Premiere films and host screening events with professional technical setup and audience experience.",
    features: ["Projection setup", "Sound systems", "VIP management", "Red carpet coordination", "Media coordination", "Post-screening events"],
    heroImage: "/media/service-images/film-screenings.jpg",
  },
  {
    id: "theater-productions",
    title: "Theater Productions",
    slug: "theater-productions",
    shortDescription: "Professional theater production management",
    fullDescription: "Produce theatrical performances with technical excellence and audience engagement.",
    features: ["Stage design", "Lighting design", "Sound engineering", "Performer coordination", "Set construction", "Audience management"],
    heroImage: "/media/service-images/theater-productions.jpg",
  },
  {
    id: "educational-seminars",
    title: "Educational Seminars",
    slug: "educational-seminars",
    shortDescription: "Professional educational seminar production",
    fullDescription: "Facilitate learning experiences with expertly produced educational seminars.",
    features: ["Curriculum coordination", "Speaker arrangement", "Learning materials", "Interactive sessions", "Attendee engagement", "Certification"],
    heroImage: "/media/service-images/educational-seminars.jpg",
  },
  {
    id: "religious-events",
    title: "Religious Events",
    slug: "religious-events",
    shortDescription: "Respectful religious event coordination",
    fullDescription: "Celebrate faith traditions with culturally sensitive and professionally coordinated religious events.",
    features: ["Venue coordination", "Ceremonial planning", "Community management", "Catering services", "Audio-visual support", "Accessibility services"],
    heroImage: "/media/service-images/religious-events.jpg",
  },
  {
    id: "corporate-retreats",
    title: "Corporate Retreats",
    slug: "corporate-retreats",
    shortDescription: "Team-building corporate retreat experiences",
    fullDescription: "Strengthen team bonds with professionally organized corporate retreat experiences.",
    features: ["Destination selection", "Activity planning", "Accommodation coordination", "Team building", "Entertainment", "Logistics management"],
    heroImage: "/media/service-images/corporate-retreats.jpg",
  },
  {
    id: "product-demonstrations",
    title: "Product Demonstrations",
    slug: "product-demonstrations",
    shortDescription: "Impactful product demonstration events",
    fullDescription: "Showcase products effectively with professionally coordinated demonstration events.",
    features: ["Demo setup", "Technical support", "Audience management", "Sales coordination", "Documentation", "Follow-up coordination"],
    heroImage: "/media/service-images/product-demonstrations.jpg",
  },
  {
    id: "seminar-series",
    title: "Seminar Series",
    slug: "seminar-series",
    shortDescription: "Ongoing seminar series management",
    fullDescription: "Organize and execute ongoing seminar series with consistent quality and engagement.",
    features: ["Series planning", "Speaker coordination", "Venue management", "Promotion", "Attendee management", "Content archiving"],
    heroImage: "/media/service-images/seminar-series.jpg",
  },
  {
    id: "experiential-activations",
    title: "Experiential Activations",
    slug: "experiential-activations",
    shortDescription: "Immersive experiential brand activations",
    fullDescription: "Create transformative brand experiences with innovative experiential activations.",
    features: ["Experience design", "Interactive technology", "Installation creation", "Engagement metrics", "Social amplification", "Feedback collection"],
    heroImage: "/media/service-images/experiential-activations.jpg",
  },
  {
    id: "virtual-events",
    title: "Virtual Events",
    slug: "virtual-events",
    shortDescription: "Professional virtual and hybrid event production",
    fullDescription: "Deliver engaging virtual and hybrid events with professional streaming and production quality.",
    features: ["Platform setup", "Technical production", "Live streaming", "Attendee engagement", "Recording services", "Interactive features"],
    heroImage: "/media/service-images/virtual-events.jpg",
  },
  {
    id: "outdoor-events",
    title: "Outdoor Events",
    slug: "outdoor-events",
    shortDescription: "Large-scale outdoor event management",
    fullDescription: "Produce outdoor events with professional logistics, weather management, and safety protocols.",
    features: ["Site management", "Weather contingency", "Crowd control", "Sound systems", "Lighting design", "Safety coordination"],
    heroImage: "/media/service-images/outdoor-events.jpg",
  },
];

export const portfolio: Portfolio[] = [
  {
    id: "pfc-conference",
    title: "PFC Corporate Conference 2024",
    image: "/media/portfolio/pfc-conference.jpg",
    category: "Corporate Events",
    year: 2024,
  },
  {
    id: "award-ceremony",
    title: "Industry Excellence Awards 2024",
    image: "/media/portfolio/award-ceremony.jpg",
    category: "Award Ceremonies",
    year: 2024,
  },
  {
    id: "cultural-night",
    title: "Cultural Extravaganza 2024",
    image: "/media/portfolio/cultural-night.jpg",
    category: "Cultural Events",
    year: 2024,
  },
  {
    id: "product-launch",
    title: "Tech Product Launch 2024",
    image: "/media/portfolio/product-launch.jpg",
    category: "Product Launches",
    year: 2024,
  },
  {
    id: "gala-evening",
    title: "Charity Gala Evening 2024",
    image: "/media/portfolio/gala-evening.jpg",
    category: "Gala Events",
    year: 2024,
  },
  {
    id: "music-concert",
    title: "Live Music Concert 2024",
    image: "/media/portfolio/music-concert.jpg",
    category: "Concert Production",
    year: 2024,
  },
  {
    id: "exhibition-opening",
    title: "Art Exhibition Opening 2024",
    image: "/media/portfolio/exhibition-opening.jpg",
    category: "Art Exhibitions",
    year: 2024,
  },
  {
    id: "brand-activation",
    title: "Brand Activation Campaign 2024",
    image: "/media/portfolio/brand-activation.jpg",
    category: "Brand Activations",
    year: 2024,
  },
  {
    id: "corporate-dinner",
    title: "Executive Corporate Dinner 2024",
    image: "/media/portfolio/corporate-dinner.jpg",
    category: "Corporate Dinners",
    year: 2024,
  },
  {
    id: "festival-production",
    title: "Music Festival Production 2024",
    image: "/media/portfolio/festival-production.jpg",
    category: "Music Festivals",
    year: 2024,
  },
  {
    id: "trade-show",
    title: "Industry Trade Show 2024",
    image: "/media/portfolio/trade-show.jpg",
    category: "Trade Shows & Exhibitions",
    year: 2024,
  },
];

export const instagramEvents = [
  {
    id: "cultural-01",
    title: "Diwali Celebration Night",
    image: "/instagram-events/cultural-01.jpg",
    category: "Cultural Events",
  },
  {
    id: "corporate-01",
    title: "Corporate Team Building",
    image: "/instagram-events/corporate-01.jpg",
    category: "Corporate Events",
  },
  {
    id: "award-01",
    title: "Excellence Awards Ceremony",
    image: "/instagram-events/award-01.jpg",
    category: "Awards",
  },
  {
    id: "stage-01",
    title: "Stage Production Spectacle",
    image: "/instagram-events/stage-01.jpg",
    category: "Stage Production",
  },
  {
    id: "gala-01",
    title: "Elegant Gala Evening",
    image: "/instagram-events/gala-01.jpg",
    category: "Gala Events",
  },
  {
    id: "festival-01",
    title: "Festival Celebration",
    image: "/instagram-events/festival-01.jpg",
    category: "Festivals",
  },
  {
    id: "concert-01",
    title: "Live Concert Experience",
    image: "/instagram-events/concert-01.jpg",
    category: "Live Entertainment",
  },
  {
    id: "launch-01",
    title: "Product Launch Event",
    image: "/instagram-events/launch-01.jpg",
    category: "Product Launches",
  },
  {
    id: "concert-02",
    title: "Musical Performance Night",
    image: "/instagram-events/concert-02.jpg",
    category: "Live Entertainment",
  },
];

export const reels = [
  {
    id: "pfc-conference",
    title: "PFC Corporate Conference",
    url: "/media/pfc-conference.mp4",
    thumbnail: "/media/pfc-conference-thumb.jpg",
  },
  {
    id: "produced-excellence",
    title: "Produced With Excellence",
    url: "/media/produced-with-excellence.mp4",
    thumbnail: "/media/excellence-thumb.jpg",
  },
  {
    id: "highlight-reel",
    title: "Event Highlights Reel",
    url: "/media/highlight-reel.mp4",
    thumbnail: "/media/highlights-thumb.jpg",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How far in advance should I book my event?",
    answer: "We recommend booking 3-6 months in advance for larger events. However, we can accommodate rush bookings based on availability. The earlier you book, the better we can tailor your event.",
  },
  {
    id: 2,
    question: "What services are included in the event management package?",
    answer: "Our comprehensive packages include venue coordination, vendor management, event design, technical production, timeline coordination, and day-of management. Specific inclusions depend on your chosen package.",
  },
  {
    id: 3,
    question: "Can you handle events of any size?",
    answer: "Yes, we handle events from intimate 50-person gatherings to large-scale productions with 5,000+ attendees. Our team has the expertise and resources to manage events of any scale.",
  },
  {
    id: 4,
    question: "Do you provide audio-visual production services?",
    answer: "Absolutely. We provide complete AV production including sound systems, lighting design, projection, video production, and live streaming capabilities.",
  },
  {
    id: 5,
    question: "What is your approach to budget management?",
    answer: "We work with you to establish a clear budget and provide transparent cost breakdowns. We find creative solutions to maximize value while maintaining quality standards.",
  },
  {
    id: 6,
    question: "Can you help with virtual or hybrid events?",
    answer: "Yes, we have extensive experience producing virtual and hybrid events with professional streaming, interactive features, and technical support.",
  },
  {
    id: 7,
    question: "What if unforeseen circumstances arise during the event?",
    answer: "Our experienced team is trained to handle unexpected situations. We have contingency plans for common scenarios and are prepared to adapt quickly.",
  },
  {
    id: 8,
    question: "Do you provide post-event services?",
    answer: "Yes, we provide photography, videography, editing services, and post-event reports to help you relive and measure the success of your event.",
  },
];

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export const brands: Brand[] = [
  { id: 1, name: "Asian Paints", logo: "/logos/01-asian-paints.png" },
  { id: 2, name: "Hindustan Unilever", logo: "/logos/02-hul.png" },
  { id: 3, name: "Rotary International", logo: "/logos/03-rotary.png" },
  { id: 4, name: "Sterling", logo: "/logos/04-sterling.png" },
  { id: 5, name: "Eaton", logo: "/logos/05-eaton.png" },
  { id: 6, name: "Rallis India", logo: "/logos/06-rallis.png" },
  { id: 7, name: "IMRF", logo: "/logos/07-imrf.png" },
  { id: 8, name: "Apollo Hospitals", logo: "/logos/08-apollo.png" },
  { id: 9, name: "Murugappa", logo: "/logos/09-murugappa.png" },
  { id: 10, name: "Shibaura Machine", logo: "/logos/10-shibaura.png" },
  { id: 11, name: "Royal Sundaram", logo: "/logos/11-royal-sundaram.png" },
  { id: 12, name: "Samsung", logo: "/logos/12-samsung.png" },
  { id: 13, name: "HDFC Bank", logo: "/logos/13-hdfc.png" },
  { id: 14, name: "Hyundai Mobis", logo: "/logos/14-hyundai-mobis.png" },
  { id: 15, name: "Hero", logo: "/logos/15-hero.png" },
  { id: 16, name: "Hyundai", logo: "/logos/16-hyundai.png" },
];
