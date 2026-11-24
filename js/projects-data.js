/* ==========================================================================
   devi's mart — data project
   Semua konten diambil dari frame Figma masing-masing project.
   Struktur:
     id, name, category, aisle, product{default,hover}
     theme   → warna kanopi & aksen halaman project
     hero    → visual + intro
     facts   → label "Nutrition Facts"
     blocks  → urutan section halaman (why, concepts, figures, feature, kit,
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
      alt: "Logo baru Bens Radio 106.2 FM",
      tall: true,
      badge: "NEW",
      intro: "rebranded Bens Radio 106.2 <span class=\"keep-case\">FM</span> as a vibrant, culturally rooted broadcast experience, celebrating Betawi heritage and Benyamin Sueb's iconic comedic spirit for modern audiences and older loyal generations.",
    },
    facts: {
      title: "brand facts", serving: "1 radio station", madeIn: "2026", per: "amount per brand",
      rows: [["betawi charm", "1000%"], ["warmth", "400%"], ["humour", "670%"], ["joy", "3000%"]],
      ingredients: "benyamin’s joyful grin, warm betawi wit, vibrant orange",
      tools: "figma, illustrator, procreate",
    },
    blocks: [
      { type: "why", paragraphs: [
        "the old logo portrayed benyamin sueb with a stern, fierce expression, making the station feel intimidating and dated rather than welcoming.",
        "designed primarily for 25–35-year-old listeners. bridging loyal older generations with a younger crowd who want a station that feels like a warm, humorous daily companion.",
      ], highlight: "reimagining benyamin sueb’s iconic persona from stern to joyful and approachable, uniting heritage with modern playfulness." },
      { type: "figures", title: "how",
        lede: "shaped BENS into a dynamic soundwave while tucking Benyamin’s signature smile and mustache into the letter B.",
        items: [
          { img: IMG("bens-radio", "process-sketch.png"), caption: "initial sketches, forming the wordmark as a soundwave frequency" },
          { img: IMG("bens-radio", "process-moustache.png"), caption: "integrating benyamin’s moustache into the letter B" },
          { img: IMG("bens-radio", "process-colors.png"), caption: "color explorations" },
          { img: IMG("bens-radio", "logo.png"), caption: "final chosen logo!" },
        ] },
      { type: "kit", title: "what", logo: IMG("bens-radio", "logo.png"),
        swatches: [
          { name: "Primary", hex: "#FF8A18" }, { name: "Secondary", hex: "#3E2410" },
          { name: "Accent", hex: "#FFF6ED" }, { name: "Neutral", hex: "#FFD4A9" },
        ],
        font: { head: "'Friend Bestie', var(--font-rounded)", headWeight: 400, body: "'Funnel Display', var(--font-inter)",
          caption: "<b>Friend Bestie</b> for headlines, <b>Funnel Display</b> for everything else." } },
      { type: "gallery", title: "in use", cols: 1, items: [
        { img: IMG("bens-radio", "inuse-van.jpg"), alt: "Livery mobil siaran Bens Radio" },
        { img: IMG("bens-radio", "inuse-mugs.jpg"), alt: "Mug merchandise Bens Radio dalam empat warna" },
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
      alt: "Logo baru BXSea",
      intro: "reimagined BXSea as a playful, family-friendly underwater escape. inviting visitors to dive into diverse marine ecosystems through interactive exhibits.",
    },
    facts: {
      title: "brand facts", serving: "1 aquarium", madeIn: "2025", per: "amount per brand",
      rows: [["ocean wonders", "100%"], ["marine", "20g"], ["warm waves", "25g"], ["BLUE", "1000g"]],
      ingredients: "playful curves, friendly marine silhouettes, vibrant ocean blues, and interactive storytelling.",
      tools: "figma, illustrator",
    },
    blocks: [
      { type: "why", paragraphs: [
        "the previous logo relied on overly intricate illustrations and rigid typography that lost legibility at small scales and felt visually dated.",
        "built for families, kids, and curious visitors. bridging the gap between educational wonder and a warm, approachable leisure destination.",
      ], highlight: "simplifying complex marine illustrations into a bold, playful wordmark that moves like water." },
      { type: "concepts", title: "behind the shapes",
        lede: "created an integrated wordmark where marine silhouettes live directly inside the letterforms, creating a cleaner, scalable mark for the logo.",
        items: [
          { title: "the “B” & the tail fin", img: IMG("bxsea", "concept-b.png"),
            text: "the “B” incorporates a whale tail fin, turning the initial into a standalone icon that echoes the original marine theme in a cleaner form" },
          { title: "rounded aquatic shapes", img: IMG("bxsea", "concept-sa.png"),
            text: "soft, rounded letterforms with integrated fish in “s” and “a” replace the old sharp sans-serif, giving the brand a warmer, family-friendly personality." },
        ] },
      { type: "kit", title: "what", logo: IMG("bxsea", "logo.png"),
        swatches: [
          { name: "Coastal Blue", hex: "#5581C3" }, { name: "Seafoam Mist", hex: "#D4E4F4" },
          { name: "Whale Navy", hex: "#174289" }, { name: "Pebble Dark", hex: "#B3B3B3", fill: "#3b3b3b" },
        ],
        font: { head: "var(--font-rounded)", headWeight: 700, body: "var(--font-inter)",
          caption: "<b>SF Pro Rounded</b> for headlines, <b>Inter</b> for everything else." } },
      { type: "website", title: "website",
        lede: "the rebrand comes alive online: tickets, 20 underwater journeys, daily shows and visitor info, all in BXSea’s new playful look. scroll around the live preview, or open it in a new tab.",
        url: "https://slvtdevi.github.io/BXSea_Website/", button: "visit website ↗", frameTitle: "Pratinjau website BXSea" },
      { type: "gallery", title: "in use", cols: 1, items: [
        { img: IMG("bxsea", "inuse-web.png"), alt: "Landing page dan layar UI website BXSea" },
        { img: IMG("bxsea", "inuse-merch.jpg"), alt: "Merchandise BXSea: botol, tote bag, kaos, mug, notebook" },
        { img: IMG("bxsea", "inuse-stationery.jpg"), alt: "Stationery BXSea dan poster Otterly Fun Day" },
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
      alt: "Poster kemasan lip tint KULA",
      tall: true,
      intro: "reimagined KULA’s packaging to reflect its mission of beauty with impact. blending gentle, everyday lip care with a commitment to giving back to local communities.",
    },
    facts: {
      title: "product facts", serving: "1 lip tint line (3 shades)", madeIn: "2026", per: "amount per serving",
      rows: [["orchid petals", "100g"], ["beauty", "98g"], ["impact", "67%"], ["gentleness", "200%"]],
      ingredients: "delicate orchid illustrations, lace bows, tropical care, and a commitment to giving back.",
      tools: "figma, illustrator",
    },
    blocks: [
      { type: "why", paragraphs: [
        "envisioned for mindful Gen Z beauty lovers (18–25) who value compassion and purpose alongside daily lip care. bridging the gap between nourishing tropical formulas and meaningful social impact.",
      ], highlight: "elevating KULA’s \"beauty with impact\" ethos through delicate indonesian orchid motifs and keepsake-worthy packaging." },
      { type: "feature", title: "the concept", img: IMG("kula", "orchid.png"), heading: "delicate and enduring",
        html: "here, i used the indonesian orchids because KULA believes in <b>beauty that is both delicate and enduring</b>. like the orchid, they often grow in the wild, clinging to trees and thriving in humidity. they are delicate but incredibly tough." },
      { type: "gallery", title: "in use", cols: 3, items: [
        { img: IMG("kula", "inuse-1.png"), alt: "Kemasan KULA varian hijau dengan pita renda" },
        { img: IMG("kula", "inuse-2.png"), alt: "Kemasan KULA varian pink dengan pita renda" },
        { img: IMG("kula", "inuse-3.png"), alt: "Kemasan KULA varian kuning dengan pita renda" },
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
      alt: "Logo Na Willa",
      intro: "we often get so caught up in chasing the finish line that we forget how to enjoy the walk. <i>Na Willa</i> reminds us that the world is filled with quiet, everyday magic we’ve learned to overlook. The items inside this box aren’t meant to be kept untouched, they’re meant to be stained with your imagination. don’t just watch the film; use it as a lens to rediscover the wonder in your own life.",
    },
    facts: {
      title: "product facts", serving: "1 interactive PR kit", madeIn: "2026", per: "amount per serving",
      rows: [["whimsy", "100g"], ["butterflies", "4"], ["nostalgia", "2"], ["everyday magic", "5"]],
      ingredients: "hand-drawn frames, butterflies, 12 shades of imagination, and an unhurried afternoon.",
      tools: "procreate, illustrator",
    },
    blocks: [
      { type: "why", paragraphs: [
        "to reawaken childlike curiosity and observation, reminding young adults that magic lives in the overlooked details of everyday life.",
        "to inspire people to slow down, embrace the creative process, and see the world as an open playground for imagination.",
      ], highlight: "turning a film premiere into a warm keepsake that invites young adults to slow down, notice the little things, and capture who they are right now." },
      { type: "panel", title: "the concept", img: IMG("na-willa", "dielines.png"), alt: "Dieline kotak, amplop, kartu prompt, dan kemasan pensil warna Na Willa",
        notes: [
          "<b>letters to future me</b> as dedicated space to document who you are today. the kit includes writing paper, custom petal-folded envelopes with rounded flaps, and faux wax-seal stickers to lock your thoughts away for your future self.",
          "<b>sketching:</b> a mini pocket sketchbook paired with 12 coloured pencils, encouraging messy, unfiltered doodles over perfection.",
          "<b>colour-coded prompt cards</b> for whenever you don't know where to start. the red cards spark reflection for your future-self letters, while cream cards offer playful visual nudges to fill your sketchbook.",
        ] },
      { type: "gallery", title: "in use", cols: 2, card: true, items: [
        { img: IMG("na-willa", "inuse-box.png"), alt: "Kotak PR kit Na Willa tertutup" },
        { img: IMG("na-willa", "inuse-open.png"), alt: "Isi PR kit Na Willa: surat, amplop, sketchbook, pensil warna" },
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
      alt: "Logo BNCC — Bina Nusantara Computer Club",
      intro: "reimagined bncc’s instagram visual identity to unify four distinct regional branches into one cohesive digital home.",
    },
    facts: {
      title: "club facts", serving: "1 club", madeIn: "2025", per: "amount per serving",
      rows: [["puzzle synergy", "3000%"], ["connected regions", "4"], ["creative sparks", "200g"], ["united club", "1"]],
      ingredients: "interlocking puzzle pieces, sky-blue gradients, Rethink Sans typography, and regional unity.",
      tools: "figma, illustrator",
    },
    blocks: [
      { type: "why", paragraphs: [
        "bncc operates across four different regions—each with its own instagram presence and distinct local character resulting in a fragmented visual identity rather than one unified organization",
        "built around the metaphor of interlocking puzzle pieces, where every region brings its own unique personality to the table while snapping together to complete a single, cohesive club",
      ], highlight: "unifying four regional chapters through modular puzzle-piece layouts that celebrate individual character within one connected identity" },
      { type: "feature", title: "behind the shapes", small: true,
        lede: "created an integrated wordmark where marine silhouettes live directly inside the letterforms, creating a cleaner, scalable mark for the logo.",
        img: IMG("bncc", "puzzles.png"), heading: "Interlocking puzzle pieces",
        html: "the identity introduces <b>interlocking puzzle-piece</b> elements as content containers.<br>a visual metaphor representing how each regional branches interlink and complete each other &lt;3" },
      { type: "kit", title: "what", specimen: "Rethink Sans",
        swatches: [
          { name: "Green Blue", hex: "#105EA9", fill: "#4489d4" }, { name: "Lapis Lazuli", hex: "#3465A9", fill: "#75b3f1" },
          { name: "Steel Blue", hex: "#3775AF", fill: "#b5daff" }, { name: "Bubbles", hex: "#E6F3FF" },
        ] },
      { type: "gallery", cols: 1, card: true, head: { title: "Template suite", note: "Light & dark variations" }, items: [
        { img: IMG("bncc", "templates.png"), alt: "Template feed Instagram BNCC versi light dan dark" },
      ] },
      { type: "gallery", title: "in use", cols: 1, card: true, items: [
        { img: IMG("bncc", "inuse-phones.png"), alt: "Profil dan post Instagram BNCC di layar iPhone", narrow: true },
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
      alt: "Logo ARTOSPATE",
      intro: "curated international personal shopping (<i>jastip</i>) service sourcing coveted finds from the us, uk, china, japan, south korea, singapore, and beyond. designed their feed and story layouts, product catalogs, and engaging short-form reels",
    },
    facts: {
      title: "shop facts", serving: "1 curated retail shop", madeIn: "2026", per: "amount per serving",
      rows: [["sourced countries", "1"], ["curated finds", "100%"], ["feed & story designs", "100g"], ["applications", "57g"]],
      ingredients: "global personal shopping, trend-driven curation, and scroll-stopping reels",
      tools: "canva, premiere pro",
    },
    blocks: [
      { type: "gallery", title: "social content", cols: 1, card: true, items: [
        { img: IMG("artospate", "posts.png"), alt: "Enam desain post Instagram ARTOSPATE" },
      ] },
      { type: "insights", title: "an organic post highlight", badge: "verified insights",
        lede: "one of the campaign posts achieved massive organic traction and engagement entirely without paid promotion. below is the concrete breakdown of its performance along with the direct link to the post:",
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
          title: "view original post on instagram",
          text: "click to view the original content and live engagement",
          cta: "view post ↗",
        } },
      { type: "gallery", title: "in use", cols: 1, card: true, items: [
        { img: IMG("artospate", "inuse.png"), alt: "Post ARTOSPATE di feed Instagram dan iPhone" },
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
      intro: "a collection of digital compositing works that blend photography with imaginative storytelling. exploring visual manipulation through masking, lighting, perspective, and color grading to transform ordinary scenes into surreal worlds and bring creative concepts to life.",
    },
    facts: {
      title: "work facts", serving: "2 composited works", madeIn: "2025", per: "amount per serving",
      rows: [["imagination", "1000%"], ["blended layers", "200+"], ["surrealism", "300%"], ["culture", "150g"]],
      ingredients: "multi-layered photo manipulation, atmospheric light rays, perspective-matched reflections, cultural storytelling,",
      tools: "adobe photoshop",
    },
    blocks: [
      { type: "works", title: "what", cols: 2, items: [
        { img: IMG("digital-compositing", "work-01.png"), alt: "Work 01 — stasiun kereta bawah laut",
          html: "<b>work 01 (underwater world)</b> transforms an ordinary train station into a surreal underwater fantasy, using cyan grading, light rays, and marine elements to create realistic depth, featuring a sea turtle, coral reefs, and an imagined mermaid version of myself." },
        { img: IMG("digital-compositing", "work-02.png"), alt: "Work 02 — poster live action Lonely Castle in the Mirror",
          html: "<b>work 02 (live action poster)</b> reimagines mizuki tsujimura’s <i>lonely castle in the mirror</i> as a live-action poster starring myself, incorporating indonesian cultural elements. through perspective matching, shadow integration, and reflection compositing, the main character wears traditional batik, while a Barong mask replaces the original wolf mask." },
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
      intro: "a curated collection of personal and experimental illustrations translating intangible emotions, sensory memories, and quiet comfort into visual for spanning painterly storytelling, geometric abstraction, and nostalgic pop-culture crossovers.",
    },
    facts: {
      title: "work facts", serving: "illustrated work", madeIn: "2024-2025", per: "amount per serving",
      rows: [["intangible feelings", "1000%"], ["heart", "1000%"], ["art style", "impressionist"], ["brushstrokes", "150g"]],
      ingredients: "visual metaphors, textured digital brushwork, sensory geometry, and cross-generational nostalgia",
      tools: "procreate",
    },
    blocks: [
      { type: "works", title: "what", cols: 3, center: true, items: [
        { img: IMG("illustrations", "vulnerability.png"), alt: "Ilustrasi payung di tengah hujan", color: "#514f7f",
          html: "<b>vulnerability</b> instead of shielding myself from discomfort, i release my umbrella in the rain, choosing to feel every drop fully and honestly." },
        { img: IMG("illustrations", "trust.png"), alt: "Ilustrasi mengapung dengan pelampung di laut", color: "#002850",
          html: "<b>trust</b> floating in a vast, uncertain ocean, held up only by a delicate bubble buoy, surrendering my weight to something gentle and trusting it will keep me safe." },
        { img: IMG("illustrations", "belonging.png"), alt: "Ilustrasi kepingan puzzle dan pita bercahaya", color: "#403876",
          html: "<b>sense of belonging</b> when vulnerability meets trust, the willingness to be seen and the courage to let go come together. guiding me home to a quiet sense of belonging." },
      ] },
      { type: "works", cols: 2, center: true, narrow: true, items: [
        { img: IMG("illustrations", "pie-susu.png"), alt: "Komposisi geometris pie susu",
          html: "<b>sensory translation (pie susu):</b> a structured geometric composition translating the intangible experience of enjoying a traditional indonesian <i>pie susu</i> into visual rhythm" },
        { img: IMG("illustrations", "line-friends.png"), alt: "Brown dan Cony di jembatan lukisan water lilies Monet",
          html: "<b>line friends x monet:</b><br>a cross-generational dialogue merging the light-drenched impressionism of claude monet’s water lilies with the bold minimalism of brown and cony." },
      ] },
    ],
  },
];
