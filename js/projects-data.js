/* ==========================================================================
   devi's mart — data project
   Semua konten diambil dari frame Figma masing-masing project.
   Struktur:
     id, name, category, aisle, product{default,hover}
     theme    → warna kanopi & aksen halaman project
     hero     → visual + intro
     facts    → label "Nutrition Facts" (madeBy opsional, default "devi")
     overview → kartu konteks untuk recruiter: jenis project, klien, brief,
                kontribusi (role), tim (opsional). Tools diambil dari facts.tools.
     blocks   → urutan section halaman (why, concepts, figures, feature, kit,
                gallery, works, panel)
   ========================================================================== */

const IMG = (id, file) => `assets/projects/${id}/${file}`;
const PRODUCT = (id) => ({
  default: `assets/products/${id}-default.png`,
  hover: `assets/products/${id}-hover.png`,
});

const THEMES = {
  blue:  { bg: "#eef6fd", awning: "#a9d3f2", accent: "#1f3a6b", text: "#1f3a6b", highlight: "#3e7fc1", pill: "#1f3a6b", tagBg: "#d4e6f6", tagMeta: "#8fb0d3", tagName: "#4169a5" },
  sage:  { bg: "#eef3ec", awning: "#8c9a86", accent: "#8c9a86", text: "#8c9a86", highlight: "#8c9a86", pill: "#8c9a86", tagBg: "#d3dece", tagMeta: "#adbaa7", tagName: "#8c9a86" },
};

window.AISLES = [
  { key: "branding",  label: "branding",  count: null },
  { key: "packaging", label: "packaging", count: null },
  { key: "social",    label: "social",    count: null },
  { key: "snacks",    label: "snacks",    count: "others" },
];

window.PROJECTS = [
  /* ------------------------------------------------------------------ */
  {
    id: "bens-radio",
    name: "Bens Radio 106.2FM",
    category: "Rebranding",
    aisle: "branding",
    product: PRODUCT("bens-radio"),
    theme: { bg: "#fff6ed", awning: "#ff8a18", accent: "#3e2410", text: "#3e2410", highlight: "#ff8a18", pill: "#ff8a18", tagBg: "#fbe3c8", tagMeta: "#c9a883", tagName: "#8c602f" },
    hero: {
      layout: "reverse",
      img: IMG("bens-radio", "logo.png"),
      alt: "Bens Radio 106.2 FM new logo",
      tall: true,
      badge: "NEW",
      intro: "a rebrand of Bens Radio 106.2 <span class=\"keep-case\">FM</span> that turns the station into a warm, playful broadcast brand rooted in Betawi culture and Benyamin Sueb’s comedic spirit, built to win over younger listeners without losing its loyal older audience.",
    },
    facts: {
      title: "brand facts", serving: "1 radio station", madeIn: "2026", per: "amount per brand",
      rows: [["betawi charm", "1000%"], ["warmth", "400%"], ["humor", "670%"], ["joy", "3000%"]],
      ingredients: "benyamin’s joyful grin, warm betawi wit, and vibrant orange",
      tools: "figma, illustrator, procreate",
    },
    overview: {
      type: "academic project",
      brief: "rebrand Bens Radio 106.2 FM, a station built on Betawi heritage, so it feels welcoming to listeners aged 25–35 while keeping its longtime audience.",
      role: [
        "brand direction and target audience definition",
        "logo concept, sketches, and final wordmark",
        "color palette and typography",
        "brand applications: broadcast van livery and merchandise mockups",
      ],
    },
    blocks: [
      { type: "why", paragraphs: [
        "the old logo showed benyamin sueb with a stern, fierce expression, which made the station feel intimidating and dated instead of welcoming.",
        "the new identity is aimed at listeners aged 25–35. it bridges longtime fans and younger audiences who want a station that feels like a warm, funny daily companion.",
      ], highlight: "reimagining benyamin sueb’s iconic persona from stern to joyful and approachable, pairing heritage with modern playfulness." },
      { type: "figures", title: "how",
        lede: "shaped the BENS wordmark into a soundwave and tucked Benyamin’s signature smile and mustache into the letter B.",
        items: [
          { img: IMG("bens-radio", "process-sketch.png"), caption: "early sketches: shaping the wordmark like a sound frequency" },
          { img: IMG("bens-radio", "process-moustache.png"), caption: "working benyamin’s mustache into the letter B" },
          { img: IMG("bens-radio", "process-colors.png"), caption: "color explorations" },
          { img: IMG("bens-radio", "logo.png"), caption: "the final logo!" },
        ] },
      { type: "kit", title: "what", logo: IMG("bens-radio", "logo.png"),
        swatches: [
          { name: "Primary", hex: "#FF8A18" }, { name: "Secondary", hex: "#3E2410" },
          { name: "Accent", hex: "#FFF6ED" }, { name: "Neutral", hex: "#FFD4A9" },
        ],
        font: { head: "'Friend Bestie', var(--font-rounded)", headWeight: 400, body: "'Funnel Display', var(--font-inter)",
          caption: "<b>Friend Bestie</b> for headlines, <b>Funnel Display</b> for everything else." } },
      { type: "gallery", title: "in use", cols: 1, items: [
        { img: IMG("bens-radio", "inuse-van.jpg"), alt: "Bens Radio broadcast van livery" },
        { img: IMG("bens-radio", "inuse-mugs.jpg"), alt: "Bens Radio merchandise mugs in four colors" },
      ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "bxsea",
    name: "BXSea",
    category: "Rebranding",
    aisle: "branding",
    product: PRODUCT("bxsea"),
    theme: THEMES.blue,
    hero: {
      img: IMG("bxsea", "logo.png"),
      alt: "New BXSea logo",
      intro: "a rebrand of BXSea that turns the aquarium into a playful, family-friendly underwater escape, inviting visitors to explore diverse marine ecosystems through interactive exhibits.",
    },
    facts: {
      title: "brand facts", serving: "1 aquarium", madeIn: "2025", per: "amount per brand",
      rows: [["ocean wonders", "100%"], ["marine", "20g"], ["warm waves", "25g"], ["BLUE", "1000g"]],
      ingredients: "playful curves, friendly marine silhouettes, vibrant ocean blues, and interactive storytelling.",
      tools: "figma, illustrator",
    },
    overview: {
      type: "academic project",
      brief: "rebrand BXSea, an aquarium with an overly detailed, dated logo, into a friendly identity that works at every size and speaks to families.",
      role: [
        "logo and wordmark design",
        "color palette and typography",
        "website UI design: tickets, exhibits, daily shows, and visitor info",
        "merchandise and stationery mockups",
      ],
    },
    blocks: [
      { type: "why", paragraphs: [
        "the previous logo relied on intricate illustrations and rigid typography. it lost legibility at small sizes and felt visually dated.",
        "the new identity is designed for families, kids, and curious visitors, balancing educational wonder with a warm, easygoing day out.",
      ], highlight: "simplifying complex marine illustrations into a bold, playful wordmark that moves like water." },
      { type: "concepts", title: "behind the shapes",
        lede: "marine silhouettes are built directly into the letterforms, creating a distinctive, scalable wordmark that captures the flow of water and the diversity of marine life.",
        items: [
          { title: "the “B” & the tail fin", img: IMG("bxsea", "concept-b.png"),
            text: "the “B” hides a whale’s tail fin, turning the initial into a standalone icon that keeps the original marine theme in a cleaner form." },
          { title: "rounded aquatic shapes", img: IMG("bxsea", "concept-sa.png"),
            text: "soft, rounded letterforms with fish tucked into the “s” and “a” replace the old sharp sans-serif, giving the brand a warmer, family-friendly personality." },
        ] },
      { type: "kit", title: "what", logo: IMG("bxsea", "logo.png"),
        swatches: [
          { name: "Coastal Blue", hex: "#5581C3" }, { name: "Seafoam Mist", hex: "#D4E4F4" },
          { name: "Whale Navy", hex: "#174289" }, { name: "Pebble Dark", hex: "#B3B3B3", fill: "#3b3b3b" },
        ],
        font: { head: "var(--font-rounded)", headWeight: 700, body: "var(--font-inter)",
          caption: "<b>SF Pro Rounded</b> for headlines, <b>Inter</b> for everything else." } },
      { type: "website", title: "website",
        lede: "the rebrand comes to life online: tickets, 20 underwater journeys, daily shows, and visitor info, all in BXSea’s new playful look. scroll through the live preview or open it in a new tab.",
        url: "https://slvtdevi.github.io/BXSea_Website/", button: "visit website ↗", frameTitle: "BXSea website preview" },
      { type: "gallery", title: "in use", cols: 1, items: [
        { img: IMG("bxsea", "inuse-web.png"), alt: "BXSea website landing page and UI screens" },
        { img: IMG("bxsea", "inuse-merch.jpg"), alt: "BXSea merchandise: bottle, tote bag, t-shirt, mug, and notebook" },
        { img: IMG("bxsea", "inuse-stationery.jpg"), alt: "BXSea stationery and Otterly Fun Day poster" },
      ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "kula",
    name: "KULA",
    category: "Packaging",
    aisle: "packaging",
    product: PRODUCT("kula"),
    theme: { bg: "#fff5fa", awning: "#f1b6cd", accent: "#c97998", text: "#c97998", highlight: "#c97998", pill: "#c97998", tagBg: "#f6d3e0", tagMeta: "#dba5bb", tagName: "#a8577a" },
    hero: {
      img: IMG("kula", "hero.png"),
      alt: "KULA lip tint packaging poster",
      tall: true,
      intro: "a packaging redesign for KULA’s lip tint line that brings its “beauty with impact” philosophy to the shelf, pairing gentle everyday lip care with a commitment to supporting local communities.",
    },
    facts: {
      title: "product facts", serving: "1 lip tint line (3 shades)", madeIn: "2026", per: "amount per serving",
      rows: [["orchid petals", "100g"], ["beauty", "98g"], ["impact", "67%"], ["gentleness", "200%"]],
      ingredients: "delicate orchid illustrations, lace bows, tropical care, and a commitment to giving back.",
      tools: "figma, illustrator",
    },
    overview: {
      type: "academic project",
      brief: "redesign the packaging for KULA’s three-shade lip tint line so it reflects the brand’s “beauty with impact” mission and feels worth keeping.",
      role: [
        "packaging concept and visual direction",
        "orchid motif illustrations",
        "packaging design for all three shades",
        "product mockups",
      ],
    },
    blocks: [
      { type: "why", paragraphs: [
        "designed for mindful gen z beauty lovers (18–25) who care about compassion and purpose as much as daily lip care, connecting nourishing tropical formulas with real social impact.",
      ], highlight: "expressing KULA’s “beauty with impact” ethos through delicate indonesian orchid motifs and keepsake-worthy packaging." },
      { type: "feature", title: "the concept", img: IMG("kula", "orchid.png"), heading: "delicate and enduring",
        html: "i chose the indonesian orchid because KULA believes in <b>beauty that is both delicate and enduring</b>. orchids often grow in the wild, clinging to trees and thriving in humidity. they look delicate, but they’re incredibly tough." },
      { type: "gallery", title: "in use", cols: 3, items: [
        { img: IMG("kula", "inuse-1.png"), alt: "Green KULA packaging with a lace bow" },
        { img: IMG("kula", "inuse-2.png"), alt: "Pink KULA packaging with a lace bow" },
        { img: IMG("kula", "inuse-3.png"), alt: "Yellow KULA packaging with a lace bow" },
      ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "na-willa",
    name: "Na Willa",
    category: "Packaging",
    aisle: "packaging",
    product: PRODUCT("na-willa"),
    theme: { bg: "#fff6ee", awning: "#a9262d", accent: "#8c2224", text: "#8c2224", highlight: "#8c2224", pill: "#8c2224", tagBg: "#f5e1d6", tagMeta: "#c9a08c", tagName: "#8c602f" },
    hero: {
      img: IMG("na-willa", "logo.png"),
      alt: "Na Willa logo",
      intro: "an interactive PR kit for the premiere of the film <i>Na Willa</i>.<br><br>we often get so caught up chasing the finish line that we forget to enjoy the walk. <i>Na Willa</i> reminds us that the world is full of quiet, everyday magic we’ve learned to overlook. the items in this box aren’t meant to stay untouched; they’re meant to be stained with your imagination. don’t just watch the film. use it as a lens to rediscover the wonder in your own life.",
    },
    facts: {
      title: "product facts", serving: "1 interactive PR kit", madeIn: "2026", per: "amount per serving",
      rows: [["whimsy", "100g"], ["butterflies", "4"], ["nostalgia", "2"], ["everyday magic", "5"]],
      ingredients: "hand-drawn frames, butterflies, 12 shades of imagination, and an unhurried afternoon.",
      tools: "procreate, illustrator",
    },
    overview: {
      type: "academic project",
      brief: "design a PR kit for the Na Willa film premiere that carries the film’s message beyond the screen and into the recipient’s everyday life.",
      role: [
        "kit concept and contents",
        "hand-drawn illustrations",
        "dielines for the box, envelopes, prompt cards, and pencil packaging",
        "mockups of the finished kit",
      ],
    },
    blocks: [
      { type: "why", paragraphs: [
        "to reawaken childlike curiosity, reminding young adults that magic lives in the overlooked details of everyday life.",
        "to encourage people to slow down, enjoy the creative process, and see the world as an open playground for imagination.",
      ], highlight: "turning a film premiere into a warm keepsake that invites young adults to slow down, notice the little things, and capture who they are right now." },
      { type: "panel", title: "the concept", img: IMG("na-willa", "dielines.png"), alt: "Na Willa dielines for the box, envelopes, prompt cards, and colored pencil packaging",
        notes: [
          "<b>letters to future me:</b> a space to document who you are today. the kit includes writing paper, custom petal-fold envelopes with rounded flaps, and faux wax-seal stickers to seal your thoughts away for your future self.",
          "<b>sketching:</b> a mini pocket sketchbook and 12 colored pencils that encourage messy, unfiltered doodles over perfection.",
          "<b>color-coded prompt cards</b> for when you don’t know where to start. red cards prompt reflection for your future-self letters, while cream cards offer playful drawing ideas for your sketchbook.",
        ] },
      { type: "gallery", title: "in use", cols: 2, card: true, items: [
        { img: IMG("na-willa", "inuse-box.png"), alt: "Closed Na Willa PR kit box" },
        { img: IMG("na-willa", "inuse-open.png"), alt: "Open Na Willa PR kit: letters, envelopes, sketchbook, and colored pencils" },
      ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "bncc",
    name: "BNCC",
    category: "Instagram system",
    aisle: "social",
    product: PRODUCT("bncc"),
    theme: { bg: "#eef6fd", awning: "#a9d3f2", accent: "#2f6db3", text: "#3e7fc1", highlight: "#2f6db3", pill: "#3e7fc1", tagBg: "#d4e6f6", tagMeta: "#8fb0d3", tagName: "#3e7fc1" },
    hero: {
      img: IMG("bncc", "logo.png"),
      alt: "BNCC (Bina Nusantara Computer Club) logo",
      intro: "a unified instagram visual identity for BNCC (Bina Nusantara Computer Club), bringing four regional branches together in one cohesive digital home.",
    },
    facts: {
      title: "club facts", serving: "1 club", madeIn: "2025", per: "amount per serving",
      rows: [["puzzle synergy", "3000%"], ["connected regions", "4"], ["creative sparks", "200g"], ["united club", "1"]],
      ingredients: "interlocking puzzle pieces, sky-blue gradients, Rethink Sans typography, and regional unity.",
      tools: "figma, illustrator",
      madeBy: "devi + the bncc PR team",
    },
    overview: {
      type: "organization project",
      client: "Bina Nusantara Computer Club (BNCC)",
      brief: "unify the instagram accounts of BNCC’s four regional branches under one recognizable visual identity, while letting each region keep its own character.",
      role: [
        "led the visual system as a PR staff member",
        "developed the interlocking puzzle-piece concept",
        "defined the color palette and typography",
        "designed the light and dark template suite",
        "guided the PR team in producing posts with the new templates",
      ],
      team: "i led the concept and system design; the PR team produced day-to-day content using it.",
    },
    blocks: [
      { type: "why", paragraphs: [
        "bncc runs across four regions, each with its own instagram account and local identity. the result was a fragmented feed that didn’t read as one organization.",
        "the system is built around interlocking puzzle pieces: each region keeps its own personality while snapping together into one complete club.",
      ], highlight: "unifying four regional chapters through modular puzzle-piece layouts that celebrate each region’s character within one connected identity." },
      { type: "feature", title: "behind the shapes", small: true,
        lede: "a modular visual system inspired by interlocking puzzle pieces, representing how four regional branches come together as one community.",
        img: IMG("bncc", "puzzles.png"), heading: "Interlocking puzzle pieces",
        html: "the identity uses <b>interlocking puzzle pieces</b> as content containers,<br>a visual metaphor for how the regional branches connect and complete each other &lt;3" },
      { type: "kit", title: "what", specimen: "Rethink Sans",
        swatches: [
          { name: "Green Blue", hex: "#105EA9", fill: "#4489d4" }, { name: "Lapis Lazuli", hex: "#3465A9", fill: "#75b3f1" },
          { name: "Steel Blue", hex: "#3775AF", fill: "#b5daff" }, { name: "Bubbles", hex: "#E6F3FF" },
        ] },
      { type: "gallery", cols: 1, card: true, head: { title: "Template suite", note: "Light & dark variations" }, items: [
        { img: IMG("bncc", "templates.png"), alt: "BNCC instagram feed templates in light and dark versions" },
      ] },
      { type: "gallery", title: "in use", cols: 1, card: true, items: [
        { img: IMG("bncc", "inuse-phones.png"), alt: "BNCC instagram profile and posts on iPhone screens", narrow: true },
      ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "artospate",
    name: "ARTOSPATE",
    category: "Social media",
    aisle: "social",
    product: PRODUCT("artospate"),
    theme: { bg: "#f1f1f1", awning: "#797979", accent: "#6b6b6b", text: "#797979", highlight: "#6b6b6b", pill: "#797979", tagBg: "#e0e0e0", tagMeta: "#a9a9a9", tagName: "#6b6b6b" },
    hero: {
      img: IMG("artospate", "logo.png"),
      alt: "ARTOSPATE logo",
      intro: "freelance social media content for ARTOSPATE, an international personal shopping service that sources curated finds from the US, UK, China, Japan, South Korea, Singapore, and beyond.",
    },
    facts: {
      title: "shop facts", serving: "1 personal shopping service", madeIn: "2026", per: "amount per serving",
      rows: [["sourced countries", "6+"], ["curated finds", "100%"], ["feed & story designs", "100g"], ["applications", "57g"]],
      ingredients: "global personal shopping, trend-driven curation, and scroll-stopping reels",
      tools: "canva, premiere pro",
    },
    overview: {
      type: "client project · freelance",
      client: "ARTOSPATE",
      brief: "keep ARTOSPATE’s instagram fresh and on-trend, showcasing curated finds from overseas in a way that stops the scroll and grows its audience.",
      role: [
        "designed instagram feed posts and stories",
        "edited short-form reels",
        "created a post that reached 431k+ views organically, with no paid promotion",
      ],
    },
    blocks: [
      { type: "gallery", title: "social content", cols: 1, card: true, items: [
        { img: IMG("artospate", "posts.png"), alt: "Six ARTOSPATE instagram post designs" },
      ] },
      { type: "insights", title: "an organic performance highlight", badge: "verified insights",
        lede: "one of the posts i created reached a huge audience organically, with no paid promotion. here’s how it performed, plus a link to the original post:",
        stats: [
          { label: "views", value: "431,595", rows: [["from home", "413,288"], ["from profile", "3,048"], ["from other", "107"], ["non-followers", "97.7%"]] },
          { label: "interactions", value: "42,750", rows: [["accounts engaged", "37,046"], ["non-followers", "99.5%"]] },
          { label: "profile & growth", value: "5,232", rows: [["profile visits", "4,345"], ["link taps", "786"], ["new follows", "101"]] },
        ],
        breakdown: [["likes", "28,469"], ["shares", "11,120"], ["saves", "1,111"], ["comments", "36"]],
        post: {
          // TODO: ganti dengan link post Instagram aslinya (owala x marvel spider-man)
          url: "https://www.instagram.com/artospateid/",
          thumb: IMG("artospate", "post-thumb.jpg"),
          title: "view the original post on instagram",
          text: "see the original content and its live engagement",
          cta: "view post ↗",
        } },
      { type: "gallery", title: "in use", cols: 1, card: true, items: [
        { img: IMG("artospate", "inuse.png"), alt: "ARTOSPATE posts in the instagram feed on an iPhone" },
      ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "digital-compositing",
    name: "Digital compositing",
    category: "Imaging",
    aisle: "snacks",
    product: PRODUCT("digital-compositing"),
    theme: THEMES.sage,
    hero: {
      title: "Digital  Compositing",
      intro: "a collection of digital composites that blend photography with imaginative storytelling. through masking, lighting, perspective, and color grading, ordinary scenes become surreal worlds.",
    },
    facts: {
      title: "work facts", serving: "2 composited works", madeIn: "2025", per: "amount per serving",
      rows: [["imagination", "1000%"], ["blended layers", "200+"], ["surrealism", "300%"], ["culture", "150g"]],
      ingredients: "multi-layered photo manipulation, atmospheric light rays, perspective-matched reflections, and cultural storytelling.",
      tools: "adobe photoshop",
    },
    overview: {
      type: "academic project",
      brief: "create photo composites that transform real-world scenes into believable, surreal stories.",
      role: [
        "concept and storytelling for both pieces",
        "posed as the main subject in both composites",
        "masking, lighting, and perspective matching",
        "color grading and final retouching",
      ],
    },
    blocks: [
      { type: "works", title: "what", cols: 2, items: [
        { img: IMG("digital-compositing", "work-01.png"), alt: "Work 01: an underwater train station",
          html: "<b>work 01 (underwater world)</b> turns an ordinary train station into a surreal underwater fantasy. cyan grading, light rays, and marine elements create realistic depth, with a sea turtle, coral reefs, and an imagined version of myself as a mermaid." },
        { img: IMG("digital-compositing", "work-02.png"), alt: "Work 02: a live-action poster for Lonely Castle in the Mirror",
          html: "<b>work 02 (live-action poster)</b> reimagines mizuki tsujimura’s <i>lonely castle in the mirror</i> as a live-action poster starring myself, with indonesian cultural elements. using perspective matching, shadow integration, and reflection compositing, the main character wears batik, and a barong mask replaces the original wolf mask." },
      ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "illustrations",
    name: "Illustrations",
    category: "Artworks",
    aisle: "snacks",
    product: PRODUCT("illustrations"),
    theme: THEMES.sage,
    hero: {
      title: "Illustrations!",
      intro: "a collection of expressive, experimental illustrations that turn intangible emotions, sensory memories, and moments of quiet comfort into visual stories, ranging from painterly storytelling to geometric abstraction and nostalgic pop-culture crossovers.",
    },
    facts: {
      title: "work facts", serving: "5 illustrations", madeIn: "2024–2025", per: "amount per serving",
      rows: [["intangible feelings", "1000%"], ["heart", "1000%"], ["art style", "impressionist"], ["brushstrokes", "150g"]],
      ingredients: "visual metaphors, textured digital brushwork, sensory geometry, and cross-generational nostalgia",
      tools: "procreate",
    },
    overview: {
      type: "academic project",
      brief: "translate abstract feelings and sensory experiences into illustrations that people can feel, not just look at.",
      role: [
        "concept and visual metaphors for each piece",
        "illustration and digital painting",
      ],
    },
    blocks: [
      { type: "works", title: "what", cols: 3, center: true, items: [
        { img: IMG("illustrations", "vulnerability.png"), alt: "Illustration of an umbrella in the rain", color: "#514f7f",
          html: "<b>vulnerability:</b> instead of shielding myself from discomfort, i let go of my umbrella in the rain, choosing to feel every drop fully and honestly." },
        { img: IMG("illustrations", "trust.png"), alt: "Illustration of floating on a bubble buoy at sea", color: "#002850",
          html: "<b>trust:</b> floating in a vast, uncertain ocean, held up only by a delicate bubble buoy, i surrender my weight to something gentle and trust it to keep me safe." },
        { img: IMG("illustrations", "belonging.png"), alt: "Illustration of puzzle pieces and a glowing ribbon", color: "#403876",
          html: "<b>sense of belonging:</b> when vulnerability meets trust, the willingness to be seen and the courage to let go come together, guiding me home to a quiet sense of belonging." },
      ] },
      { type: "works", cols: 2, center: true, narrow: true, items: [
        { img: IMG("illustrations", "pie-susu.png"), alt: "Geometric composition inspired by pie susu",
          html: "<b>sensory translation (pie susu):</b> a structured geometric composition that translates the experience of eating a traditional indonesian <i>pie susu</i> into visual rhythm." },
        { img: IMG("illustrations", "line-friends.png"), alt: "Brown and Cony on the bridge from Monet’s water lilies painting",
          html: "<b>line friends x monet:</b><br>a cross-generational mashup that merges the light-filled impressionism of claude monet’s water lilies with the bold minimalism of brown and cony." },
      ] },
    ],
  },
];
