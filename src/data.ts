export interface DesignItem {
  id: string;
  name: string;
  icon: string;
  whatItIs: string;
  howItWorks: string;
  aiPrompt: string;
  examples: string[];
  cssDemo: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  items: DesignItem[];
}

export const categories: Category[] = [
  {
    id: 'aesthetics',
    name: 'Design Aesthetics',
    icon: '✨',
    items: [
      {
        id: 'glassmorphism',
        name: 'Glassmorphism',
        icon: '🔮',
        whatItIs: 'Glassmorphism makes UI elements look like frosted glass—semi-transparent, blurred, with a subtle border. Imagine a glass panel sitting in front of a colorful, blurry background. The panel lets some of the background bleed through while remaining readable.',
        howItWorks: 'The magic happens with two CSS properties: backdrop-filter: blur() which blurs everything behind the element, and a background-color set to rgba() where alpha is a low value making it partially transparent. A thin white border at low opacity completes the glass look.',
        aiPrompt: 'Build a glassmorphism SaaS landing page. Use a vivid purple-to-blue gradient background (#667eea to #764ba2). Create 3 feature cards that look like frosted glass panels—each card should have background: rgba(255,255,255,0.15), a backdrop-filter blur of 12px, a white border at 30% opacity, and a subtle drop shadow.',
        examples: [
          'Halo Lab on Dribbble — Classic glassmorphism UI kit',
          'Apple iCloud.com — Subtle glass panels in login UI',
          'Glassmorphism.com — Interactive CSS generator'
        ],
        cssDemo: 'glassmorphism'
      },
      {
        id: 'neumorphism',
        name: 'Neumorphism',
        icon: '🎨',
        whatItIs: 'Neumorphism creates buttons and cards that look like they are physically pushed out of or pressed into the background surface. Everything is the SAME color—the background and the element share an identical color. The 3D illusion is created by a pair of shadows.',
        howItWorks: 'The trick is all in box-shadow. You apply two shadows simultaneously. The dark shadow simulates where light would NOT hit a raised surface. The light shadow simulates where light WOULD hit. The background and the element color MUST match exactly.',
        aiPrompt: 'Create a neumorphism music player dashboard on a #e0e5ec background. Build raised circular play/pause buttons using dual box-shadows: box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff. Add pressed state with inset shadows.',
        examples: [
          'Neumorphism.io — CSS generator',
          'UI8 Soft UI Kits',
          'Dribbble — Neumorphism UI'
        ],
        cssDemo: 'neumorphism'
      },
      {
        id: 'brutalism',
        name: 'Brutalism',
        icon: '⚡',
        whatItIs: 'Brutalist web design is intentionally raw, ugly-on-purpose, and anti-establishment. It embraces thick black borders, stark primary colors, system fonts, and asymmetric or tilted layouts.',
        howItWorks: 'No rounded corners. No gradients. No subtle shadows. Instead: solid 2-4px black borders, pure yellow or pure white backgrounds, rotated elements with transform: rotate, and monospace fonts.',
        aiPrompt: 'Build a brutalist portfolio website with a pure white background. Use bold black borders (3px solid #000) on every card. Typography should be black and oversized. Accent color is yellow (#FFE600). Add slight rotation on some image cards. Use a monospace font. No gradients, no dropshadows.',
        examples: [
          'Gumroad.com — The most famous modern brutalist website',
          'Figma Community Brutalism UI',
          'Hype4.academy'
        ],
        cssDemo: 'brutalism'
      },
      {
        id: 'minimalism',
        name: 'Minimalism',
        icon: '⚪',
        whatItIs: 'Minimalism is the philosophy that content is the design. Everything that doesn\'t serve the content is removed. Generous whitespace, a single typeface, a monochromatic color palette, and zero decoration.',
        howItWorks: 'Think of minimalism as removal. Large padding and margins, a single font used at multiple weights, near-black text on near-white background, and clear typography hierarchy. No icons, no illustrations, no gradients.',
        aiPrompt: 'Design a minimalist photography portfolio. Use #FAFAF9 (warm off-white) as background. Typography only: a single font family (Cormorant Garamond), hero headline at 72px weight 300. Color palette: near-black #111 for text, #888 for captions. No decorative elements. Let the whitespace be the design.',
        examples: [
          'Awwwards — Minimalist Category',
          'Linear.app',
          'Typewolf.com'
        ],
        cssDemo: 'minimalism'
      },
      {
        id: 'bento-grid',
        name: 'Bento Grid',
        icon: '📦',
        whatItIs: 'Inspired by a Japanese bento box—a grid of varied-size compartments, each showing a different feature. Think of it as a mosaic of cards, each with its own design.',
        howItWorks: 'CSS Grid is the foundation. Some cards span 2 columns, others are tall and span 2 rows. Cards have different visual treatments: dark, light, gradient, or images. The variety in size and color makes it feel premium.',
        aiPrompt: 'Build a bento grid feature section on a #0A0A0A background. Create a responsive CSS Grid with 3 columns. Include 6 cards of varying sizes: one large card spanning 2 columns, one tall card spanning 2 rows. Dark cards use #111111 background, round all cards with 16px border-radius.',
        examples: [
          'Apple Mac product pages',
          'Linear.app homepage',
          'Framer.com'
        ],
        cssDemo: 'bento-grid'
      },
      {
        id: 'dark-luxury',
        name: 'Dark Mode Luxury',
        icon: '🌙',
        whatItIs: 'Deep charcoal or near-black backgrounds to create a premium, sophisticated atmosphere. It\'s a deliberate aesthetic choice that uses darkness to make accent colors and product screenshots pop dramatically.',
        howItWorks: 'Background is near-black (#0A0A0A), NOT pure black. Cards use slightly lighter darks (#111111). A single accent color (often electric blue or soft purple) is used sparingly. Thin borders at low opacity separate sections softly.',
        aiPrompt: 'Build a dark luxury SaaS landing page. Background: #0D0D1A. Primary text: #F1F1EE. Accent color: electric blue #0066FF for buttons. Cards use #111827 background with a 1px border at rgba(255,255,255,0.08). Add a very subtle radial gradient glow in the background.',
        examples: [
          'Vercel.com',
          'Raycast.com',
          'Stripe.com dark sections'
        ],
        cssDemo: 'dark-mode'
      },
      {
        id: 'retro-y2k',
        name: 'Retro / Y2K',
        icon: '🕹️',
        whatItIs: 'Draws nostalgia from 90s and early 2000s internet—neon gradients, pixel art, bold typography, starfield backgrounds. Ironically, Gen Z designers have made this one of the hottest aesthetics.',
        howItWorks: 'Colors: hot pink (#FF00FF), cyan (#00FFFF), lime green. Pixel or display fonts. Star/sparkle decorations scattered. Bright gradients. Chrome/metallic text effects.',
        aiPrompt: 'Create a Y2K-inspired portfolio website on a #0A0A0A background. Color palette: hot pink #FF1493, electric cyan #00E5FF, neon lime #AAFF00. Add CSS sparkle decorations. Hero headline in chrome metallic gradient text.',
        examples: [
          'Brat Girl Studio',
          'Y2K Aesthetic on Dribbble',
          'Experimental category on Awwwards'
        ],
        cssDemo: 'retro-futurism'
      },
      {
        id: 'claymorphism',
        name: 'Claymorphism',
        icon: '🏺',
        whatItIs: 'Makes UI elements look inflated, puffy, and three-dimensional like clay. Buttons and cards appear to have physical volume, creating a playful, friendly feel.',
        howItWorks: 'Created with multiple box-shadows: a bottom shadow in a darker version of the element\'s color, and a larger soft glow around the whole element. Candy colors and high border-radius (24px+) on everything.',
        aiPrompt: 'Design a claymorphism task management app UI. Create 3D-looking cards using multi-layer box-shadows. Use candy colors: soft purple #6C63FF, coral #FF6B6B. All elements have border-radius: 20px minimum. Add pressed animation on buttons moving them down and reducing shadow.',
        examples: [
          'Cuberto Agency 3D UI Kits',
          'Notion marketing assets',
          'Dribbble Claymorphism tags'
        ],
        cssDemo: 'claymorphism'
      }
    ]
  },
  {
    id: 'scroll-animation',
    name: 'Scroll & Animation',
    icon: '🎭',
    items: [
      {
        id: 'parallax',
        name: 'Parallax Scrolling',
        icon: '🏔️',
        whatItIs: 'Creates an illusion of depth by making different layers of the page scroll at different speeds. The background moves slowly while foreground elements move at normal speed.',
        howItWorks: 'Uses CSS background-attachment: fixed or JavaScript tracking scroll distance to apply transform: translateY() at a fraction of the scroll speed to different layers (e.g. background moves at 20% speed, foreground at 100%).',
        aiPrompt: 'Build a parallax hero section with 3 layers. Background layer moves at 30% of scroll speed using translateY. Middle layer abstract blobs move at 60%. Foreground headline scrolls normally. Use RequestAnimationFrame to update transforms for smooth depth illusion.',
        examples: [
          'Firewatch Game Website',
          'Awwwards Parallax Sites',
          'Webflow Parallax Tutorials'
        ],
        cssDemo: 'parallax'
      },
      {
        id: 'scroll-triggered',
        name: 'Scroll-Triggered Animations',
        icon: '✨',
        whatItIs: 'Elements are hidden on load. As the user scrolls down and a section enters the viewport, the element animates into place—usually fading in and sliding up.',
        howItWorks: 'Uses IntersectionObserver to watch elements. When visible, adds a CSS class that changes opacity from 0 to 1 and translateY from 40px to 0. Elements are often staggered so they cascade beautifully.',
        aiPrompt: 'Build a page where every card animates on scroll. Default state: opacity: 0, transform: translateY(30px). Use IntersectionObserver to add a .visible class applying opacity: 1 and translateY(0) with ease curve. Stagger 3-column cards by 0.1s delay each.',
        examples: [
          'Stripe.com',
          'AOS (Animate On Scroll) Library',
          'GSAP ScrollTrigger'
        ],
        cssDemo: 'generic-card' // Placeholder
      },
      {
        id: 'horizontal-scroll',
        name: 'Horizontal Scroll Sections',
        icon: '↔️',
        whatItIs: 'While the page scrolls vertically, a specific section \'hijacks\' the scroll and moves content sideways. Feels like flipping through cards or reading a timeline.',
        howItWorks: 'The section is \'pinned\' in place while the user scrolls. The vertical scrolling distance controls horizontal movement via JavaScript libraries like GSAP ScrollTrigger\'s pin and horizontal scrub features.',
        aiPrompt: 'Create a horizontal scroll portfolio section pinned to the screen. Section contains 5 cards (80vw wide). As user vertically scrolls 500px, cards slide right-to-left. Use GSAP ScrollTrigger with pin: true and scrub: 1 for smooth movement.',
        examples: [
          'Active Theory Agency',
          'Locomotive Scroll Examples',
          'Webflow Horizontal Scroll'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'sticky-sections',
        name: 'Sticky Sections / Pinning',
        icon: '📌',
        whatItIs: 'An element stays fixed on the screen while the user scrolls, but ONLY within its parent section. Perfect for showing a product screenshot on the left while a feature list scrolls on the right.',
        howItWorks: 'Uses CSS position: sticky with top: 0. Keeps the element at the top of the viewport as long as its parent container is still in view.',
        aiPrompt: 'Design a sticky scroll layout: Left column (40%) has a phone mockup with position: sticky and top: 80px. Right column (60%) has 4 feature text blocks stacked. As user scrolls the features, the left mockup stays pinned and updates its image.',
        examples: [
          'Notion.so Features page',
          'Linear.app',
          'Lottiefiles.com'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'text-reveal',
        name: 'Text Reveal on Scroll',
        icon: '📝',
        whatItIs: 'Instead of heading appearing at once, individual words or characters animate in one by one as the user scrolls. The text seems to "write itself".',
        howItWorks: 'Text is split into multiple spans (one per word) using SplitType.js. CSS or GSAP animates them with a stagger delay. Often fading in from below a clipping mask.',
        aiPrompt: 'Create a hero with word-by-word text reveal. Split headline into spans. Start state: opacity: 0, translateY(20px). Fade to opacity: 1, translateY(0) with 0.08s stagger between each word. Use smooth cubic-bezier easing.',
        examples: [
          'Resn.co.nz',
          'SplitType.js demo',
          'Awwwards Typography'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'scroll-progress',
        name: 'Scroll Progress Indicator',
        icon: '📊',
        whatItIs: 'A thin bar at the very top of the page that fills left-to-right as the user reads down an article. Shows how far through the content they are.',
        howItWorks: 'A fixed absolute element at the top. Width or scaleX is calculated by (scrollY / (totalHeight - viewportHeight)) * 100 via a JavaScript scroll event listener.',
        aiPrompt: 'Add a reading progress bar. Fixed element at top, 3px height. Calculate progress via JS scroll listener (scrolled/total_scrollable). Update the element\'s transform: scaleX(progress) with transform-origin: left and a purple-to-pink gradient.',
        examples: [
          'Medium.com',
          'CSS Tricks articles',
          'Smashing Magazine'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'lenis-scroll',
        name: 'Smooth Scroll / Lenis',
        icon: '🧈',
        whatItIs: 'Replaces chunky native scrolling with a physics-based momentum system. The page decelerates smoothly like a heavy object coming to rest. Highly premium feel.',
        howItWorks: 'Lenis library intercepts scroll input, applies easing math, and translates the page via CSS transform natively 60 times a second using requestAnimationFrame.',
        aiPrompt: 'Add Lenis smooth scrolling. Import Lenis via CDN. Initialize with duration: 1.2, smooth: true. Run in a requestAnimationFrame loop to update lenis.raf(time). Tie it in with GSAP ScrollTrigger if used.',
        examples: [
          'Lenis by Studio Freight Demo',
          'Locomotive Scroll',
          'Awwwards sites'
        ],
        cssDemo: 'generic-card'
      }
    ]
  },
  {
    id: 'layouts',
    name: 'Layouts',
    icon: '📐',
    items: [
      {
        id: 'f-pattern',
        name: 'F-Pattern Layout',
        icon: '👀',
        whatItIs: 'Eye-tracking research shows people read in an F-shape: across the top, down the left edge, scanning briefly across again. Best for text-heavy pages to place key content naturally.',
        howItWorks: 'Put critical content in the top horizontal band. Then put important points down the left column. The right side is often ignored. Avoid centering large bodies of text.',
        aiPrompt: 'Design a long-form article following the F-pattern. Left column 68% for content (left-aligned), right column 28% for sticky table of contents. Use bold lead sentences and clear left-aligned headings. Place primary CTAs on the left side.',
        examples: [
          'Medium article layout',
          'Smashing Magazine',
          'Nielsen Norman Group'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'hero-feature-grid',
        name: 'Hero + Feature Grid',
        icon: '🧩',
        whatItIs: 'The standard SaaS layout. Bold hero section at top stating the value proposition, followed directly by a 3-column grid of feature cards explaining capabilities.',
        howItWorks: 'Hero: Full width, centered max 8-word bold H1, 1-line subtext, 1-2 CTAs. Feature grid below: CSS Grid with 3 columns, cards containing icon, title, short description.',
        aiPrompt: 'Build a SaaS landing page layout. Centered hero with dark background, H1 at 64px, CTA button. Below: logo bar. Then CSS feature grid: 3 equal columns, 6 total cards each with icon, title, and 2-sentence description.',
        examples: [
          'Vercel.com',
          'Tailwind UI Marketing',
          'Landingfolio.com'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'asymmetric-split',
        name: 'Asymmetric Split Layout',
        icon: '🌗',
        whatItIs: 'Unequal proportions like 60/40 or 70/30 division. One side is the dominant visual (image/video), the other is supporting content. Creates dynamic visual tension.',
        howItWorks: 'Uses CSS Grid taking e.g. grid-template-columns: 3fr 2fr. The larger column holds the main graphic, the smaller holds typography. They stack 100% on mobile.',
        aiPrompt: 'Create a split layout (60/40). Left (60%): full-height product screenshot. Right (40%): vertically centered content with overline tag, H2, and CTA. Add a second section below with layout reversed for visual rhythm.',
        examples: [
          'Notion features pages',
          'Lapa.ninja',
          'Dribbble Split Layout'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'masonry',
        name: 'Masonry Layout',
        icon: '🧱',
        whatItIs: 'Cards arranged in columns where element heights vary. It fills vertical space efficiently like bricks, creating a Pinterest-style mosaic.',
        howItWorks: 'Simple CSS uses `columns: 3` and `break-inside: avoid` to flow items into verticals without horizontal row gaps. Libraries like Masonry.js or CSS Grid features can also handle it.',
        aiPrompt: 'Build a photography gallery using masonry layout. CSS container with columns: 3 and column-gap: 12px. Images are display: inline-block, width: 100% with varying heights (portrait/landscape). Reduce to 2 columns on tablet, 1 on mobile.',
        examples: [
          'Pinterest.com',
          'Unsplash.com',
          'Masonry.js'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'full-page-scroll',
        name: 'Full-Page Scroll',
        icon: '🛗',
        whatItIs: 'Each section snaps to exactly 100vh. There is no partial scrolling—you are always viewing one focused screen at a time like a presentation.',
        howItWorks: 'Container uses `scroll-snap-type: y mandatory`. Each child uses `height: 100vh` and `scroll-snap-align: start`. Browser handles the snapping automatically.',
        aiPrompt: 'Build a 5-section full page scroll site. Container uses scroll-snap-type: y mandatory, overflow-y: scroll. Each section: height: 100vh, scroll-snap-align: start. Add fixed navigation dots on the right side.',
        examples: [
          'fullPage.js',
          'Webflow full page templates',
          'Sony campaign sites'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'sidebar-content',
        name: 'Sidebar + Content Layout',
        icon: '📑',
        whatItIs: 'A persistent navigation panel on the left side with a main working area on the right. Universal for web apps, dashboards, and portals.',
        howItWorks: 'Flexbox or Grid with 2 columns: a fixed-width sidebar (280px) and a flex-1 content area. Sidebar has position: sticky top: 0 and height: 100vh.',
        aiPrompt: 'Build a SaaS dashboard. Sidebar: 240px wide, dark background, sticky, 100vh high, containing navigation links with icons. Main content: flex-1 taking up remaining width, light background, containing header, stats cards, and data table.',
        examples: [
          'Vercel Dashboard',
          'AdminLTE Demo',
          'Tailwind UI Application UI'
        ],
        cssDemo: 'generic-card'
      }
    ]
  },
  {
    id: 'navigation',
    name: 'Navigation',
    icon: '🧭',
    items: [
      {
        id: 'sticky-navbar',
        name: 'Sticky Navbar',
        icon: '📌',
        whatItIs: 'A navigation bar that stays fixed to the top of the viewport when scrolling, making links always accessible.',
        howItWorks: 'Uses `position: sticky; top: 0`. Often starts transparent and transitions to a frosted-glass background when JS detects scroll distance > 0.',
        aiPrompt: 'Create a sticky navbar. Top of page: background is transparent. When user scrolls > 60px, transition to rgba(255,255,255,0.85) with backdrop-filter: blur(12px). Add 0.3s CSS transition for smooth switch.',
        examples: [
          'Apple.com',
          'GitHub.com',
          'Framer.com'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'hamburger-menu',
        name: 'Hamburger Menu',
        icon: '🍔',
        whatItIs: 'Hides all navigation behind a single icon (three lines) on mobile screens. Tapping reveals a fullscreen overlay or sliding drawer.',
        howItWorks: 'JavaScript toggles class to show an overlay (`position: fixed`). The three CSS lines animate into an "X" shape using rotation transforms natively.',
        aiPrompt: 'Build a fullscreen hamburger menu. Icon has 3 lines that animate to an X on click (rotate 45deg and -45deg). Opening reveals a position: fixed full-screen black overlay with large, centered white links that fade in. Lock body scroll when open.',
        examples: [
          'Codrops Menu Animations',
          'Cuberto.com',
          'Creative Agency portfolios'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'mega-menu',
        name: 'Mega Menu',
        icon: '🧾',
        whatItIs: 'A large dropdown panel grouping categories into columns, images, and content. Perfect for e-commerce or large sites with deep hierarchy.',
        howItWorks: 'Absolutely positioned panel drops below navbar on hover. Contains a CSS grid with 3-5 columns of links and a featured image block. Has a subtle slide-down and fade-in animation.',
        aiPrompt: 'Create an e-commerce mega menu. On hover of "Women", open a full-width dropdown panel below navbar. Panel has CSS grid with 4 columns: Clothing, Accessories, By Occasion, and a Featured Image column with a CTA. Add smooth fade-down transition.',
        examples: [
          'ASOS.com',
          'Apples product menus',
          'Shopify Polaris Navigation'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'dot-navigation',
        name: 'Dot Navigation',
        icon: '⏺️',
        whatItIs: 'Small dots positioned on the side representing sections of a full-page scroll site. Indicates current section and allows instant jumping.',
        howItWorks: 'Fixed position column of dots. JS IntersectionObserver detects which section is visible to highlight the corresponding "active" dot. Clicking uses `scrollIntoView()`.',
        aiPrompt: 'Add dot navigation on the right edge. Container: position: fixed, right: 24px, centered vertically. Dots are 8px circles with borders. Active dot becomes 12px filled white. On hover of a dot, show a small tooltip with section name.',
        examples: [
          'Apple Event pages',
          'fullPage.js demos',
          'Dribbble dot nav setups'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'breadcrumbs',
        name: 'Breadcrumbs',
        icon: '🍞',
        whatItIs: 'A horizontal trail of links showing user\'s current place in site hierarchy (Home > Category > Product). Essential for e-commerce and documentation.',
        howItWorks: 'An ordered list (`<ol>`) of links separated by CSS generated content slashes or chevrons. The last item represents the current page and is NOT clickable.',
        aiPrompt: 'Add breadcrumb navigation. HTML is an <ol> with <li> elements. Links are muted gray #888, size 13px. CSS adds a "›" separator between li tags. Last item is bold #111 and not a link. Wrap with schema.org BreadcrumbList for SEO.',
        examples: [
          'Amazon product pages',
          'MDN Web Docs',
          'Zalando e-commerce'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'tab-navigation',
        name: 'Tab Navigation',
        icon: '🗂️',
        whatItIs: 'A horizontal row of labels that swap the content panel below when clicked. Great for organizing related content without leaving the page.',
        howItWorks: 'Row of buttons sets an active state via JS. The selected content panel is shown (`display: block`) while others are hidden. Premium touch: an animated bottom border line that slides between active tabs.',
        aiPrompt: 'Build a tab component (Overview, Specs, Reviews, FAQ). Active tab has bold text and blue sliding underline indicator (moves via transform: translateX). Only the active panel renders, fading in with opacity transition from 0 to 1 over 0.2s.',
        examples: [
          'GitHub repo tabs',
          'Radix UI Tabs',
          'Amazon Product details tabs'
        ],
        cssDemo: 'generic-card' // Can reuse current tab logic!
      }
    ]
  },
  {
    id: 'typography-color',
    name: 'Typography & Color',
    icon: 'Aa',
    items: [
      {
        id: 'type-scale',
        name: 'Type Scale & Hierarchy',
        icon: '📏',
        whatItIs: 'A predefined ratio system of font sizes that work harmoniously. Using a mathematical scale creates visual perfection. Hierarchy guides importance.',
        howItWorks: 'Pick a base size (e.g. 16px) and multiply by a ratio (e.g. 1.25x) for each header level. Use `clamp()` for fluid scaling between mobile and desktop.',
        aiPrompt: 'Define a CSS variable type scale. --font-h1: clamp(40px, 5vw, 64px) weight 800 letter-spacing -0.02em. --font-h2: clamp(28px, 3.5vw, 44px) weight 600. Body text is 17px with line-height 1.7. Ensure tight line-heights (1.1) on large headings.',
        examples: [
          'Typescale.com',
          'Fontjoy.com',
          'Typewolf'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'font-pairing',
        name: 'Font Pairing',
        icon: '🔠',
        whatItIs: 'Using a combination of a striking display font for headings and a readable, simple font for paragraph bodies. Creates professional contrast.',
        howItWorks: 'e.g. Playfair Display (Serif) with DM Sans (Sans-serif) for editorial, or Clash Display with Satoshi for modern tech. Contrast is required—don\'t use two similar sans-serifs.',
        aiPrompt: 'Apply font pairings. Headings use Clash Display from Fontshare at weight 700 with letter-spacing: -0.03em. Body text uses Satoshi at weight 400 with line-height 1.6. Apply to all H1-H6 tags vs paragraph and buttons.',
        examples: [
          'Fontshare.com',
          'Google Fonts pairings',
          'FontsInUse.com'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'color-theory-60-30-10',
        name: 'Color Theory (60-30-10)',
        icon: '🎨',
        whatItIs: 'A golden rule of design: 60% dominant neutral background, 30% secondary structural color, 10% vibrant accent brand color for CTAs and highlights.',
        howItWorks: 'Dominant (near-white or near-black) sets the mood. Secondary creates depth for cards. Accent brings attention uniquely to interactive elements. Don\'t overuse the accent!',
        aiPrompt: 'Design using the 60-30-10 color rule. 60% dominant background: #FAFAF7 (warm off-white). 30% secondary cards/footer: #F0EDE8. 10% accent color ONLY for primary CTA buttons and active states: #2563EB (electric blue). Text uses dark grays.',
        examples: [
          'Coolors.co',
          'Huemint.com',
          'Paletton'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'gradient-text',
        name: 'Gradient Text',
        icon: '✨',
        whatItIs: 'A headline text that displays a colorful gradient rather than a solid color. Extensively used in SaaS and tech.',
        howItWorks: 'CSS combo: `background: linear-gradient()`, `background-clip: text`, and `-webkit-text-fill-color: transparent`. The text acts as a clipping mask for the background.',
        aiPrompt: 'Make the keyword "innovate" in the H1 headline a gradient. CSS: background: linear-gradient(135deg, #667eea, #f64f59); -webkit-background-clip: text; -webkit-text-fill-color: transparent. The rest of the H1 should remain solid white.',
        examples: [
          'Stripe.com headings',
          'Vercel.com',
          'CSS Gradient generators'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'display-typography',
        name: 'Display / Hero Typography',
        icon: '💥',
        whatItIs: 'Making the headline text so massive and stylistically beautiful that it acts as the primary heroic visual. No image required.',
        howItWorks: 'Huge font sizes (80px - 120px+), tight letter spacing (-0.04em), tight line heights (0.95), and often combining italic/gradient keywords inside the monolithic block.',
        aiPrompt: 'Create a typography-only hero. Main headline is clamp(64px, 9vw, 112px), weight 800, letter-spacing -0.04em, line-height 0.95. Text reads: "We craft digital experiences." Make "digital" italic and gradient. No hero image, extreme padding.',
        examples: [
          'Awwwards Typography',
          'Obys Agency',
          'Semplice portfolios'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'theme-toggle',
        name: 'Dark / Light Mode Toggle',
        icon: '🌓',
        whatItIs: 'A system allowing users to switch the entire application\'s visual theme between dark mode and light mode, improving accessibility and aesthetics.',
        howItWorks: 'Uses CSS custom properties (variables) on `:root` and a data attribute `<html data-theme="dark">` to override the variables. JS saves preference to localStorage and checks `prefers-color-scheme`.',
        aiPrompt: 'Implement a theme toggle. Define CSS --bg and --text variables on :root for light mode, and override them on [data-theme="dark"]. Add a toggle button with JS to toggle the html attribute and save to localStorage. Add smooth background transitions.',
        examples: [
          'Linear.app',
          'Josh W Comeau Dark Mode guide'
        ],
        cssDemo: 'generic-card'
      }
    ]
  },
  {
    id: 'ui-patterns',
    name: 'UI Patterns',
    icon: '🧩',
    items: [
      {
        id: 'hero-section',
        name: 'Hero Section',
        icon: '🦸',
        whatItIs: 'The very first section a user sees. Must immediately communicate value proposition with a bold headline, subtext, and clear call-to-action.',
        howItWorks: 'Full-width, tall. Strict hierarchy. Avoids clutter. Often includes a badge above the H1 and a stripe of trusted customer logos below the CTA.',
        aiPrompt: 'Build a SaaS hero section. Centered layout, dark background. Pill badge at top "New AI Features". Massive H1, gray subheadline. Primary filled CTA button, secondary outlined button. Row of 5 trusted brand logos below in muted gray.',
        examples: [
          'Landingfolio Heroes',
          'Tailwind UI Heroes',
          'Saaspo'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'pricing-table',
        name: 'Pricing Table',
        icon: '💰',
        whatItIs: 'Structured comparison of product tiers. Usually 3 vertical cards: Free, Pro, Enterprise. The target tier is highlighted.',
        howItWorks: '3-column grid. The "Pro" middle tier gets a colored border, an elevated shadow, a colored CTA button, and a "Most Popular" pill to drive conversions.',
        aiPrompt: 'Build a 3-tier pricing table with monthly/annual toggle. Free, Pro, Enterprise columns. Pro tier is highlighted: 2px blue border, scale(1.04), "Most Popular" badge, filled blue CTA. Price is massive (48px). List features with checkmark icons.',
        examples: [
          'Tailwind UI Pricing',
          'Linear.app/pricing',
          'Pricingpages.xyz'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'testimonials',
        name: 'Testimonials / Social Proof',
        icon: '💬',
        whatItIs: 'Real user reviews or stats that build trust. Modern designs favor infinite scrolling marquees of cards.',
        howItWorks: 'A CSS animation translating a duplicated row of cards infinitely left or right (`transform: translateX(-50%)`). Cards include star ratings, avatar, name, and quote.',
        aiPrompt: 'Create a social proof dual-marquee. Two rows of testimonial cards auto-scrolling horizontally in opposite directions via CSS infinite keyframes. Each card: white background, 5 gold stars, quote, avatar circle, name, and company.',
        examples: [
          'Senja.io',
          'Testimonial.to',
          'Stripe Customers'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'accordion-faq',
        name: 'Accordion / FAQ',
        icon: '➕',
        whatItIs: 'A list of questions where clicking reveals the answer panel below it, keeping the UI uncluttered.',
        howItWorks: 'Native HTML `<details>` and `<summary>`, or JS tracking active state to animate `max-height` or use CSS Grid transitions from 0 to 1fr.',
        aiPrompt: 'Build an FAQ accordion list. 8 questions separated by 1px gray borders. Question row is bold with a "+" icon. Clicking expands answer panel with smooth max-height/opacity transition, rotating the "+" icon 45 degrees into an "X".',
        examples: [
          'Webflow FAQ tutorials',
          'Headless UI',
          'Linear Pricing FAQ'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'modal-dialog',
        name: 'Modal / Dialog',
        icon: '🪟',
        whatItIs: 'A popup overlay taking focus, used for forms, logins, or confirmations, graying out the background.',
        howItWorks: 'Fixed fullscreen backdrop overlay at high z-index. A centered dialog card inside it. Required: Escape key closing, clicking backdrop closing, and focus trapping.',
        aiPrompt: 'Build an accessible modal component. Fixed backdrop overlay with rgba(0,0,0,0.6) and blur. Centered white card with rounded 16px corners, shadow. Animate in with scale(0.95) to scale(1) and opacity transition. Close on X, Escape, or backdrop click.',
        examples: [
          'Radix UI Dialog',
          'Flowbite Modals',
          'Dribbble Modals'
        ],
        cssDemo: 'generic-card'
      },
      {
        id: 'card-component',
        name: 'Card Component',
        icon: '📇',
        whatItIs: 'The universal building block grouping a single subject\'s info. Contains visual, title, description, and link.',
        howItWorks: 'Has an image wrapper with `aspect-ratio: 16/9`, padding in the content block below, and a hover transform (`translateY(-4px)`) with drop-shadow to scream "clickable".',
        aiPrompt: 'Build a blog post card grid. Cards: 1px border, 12px rounded corners, overflow hidden. Top: image placeholder with aspect-ratio 16/9. Bottom: padding 20px, small category pill, H3 title clamped at 2 lines, muted description. Add hover lift translate -4px.',
        examples: [
          'Dribbble',
          'Tailwind UI Cards',
          'Read.cv'
        ],
        cssDemo: 'generic-card'
      }
    ]
  },

  // ─── NEW CATEGORY 7: MICRO-INTERACTIONS ──────────────────────────────────
  {
    id: 'micro-interactions',
    name: 'Micro-interactions',
    icon: '⚡',
    items: [
      {
        id: 'button-feedback',
        name: 'Button Feedback',
        icon: '🖱️',
        whatItIs: 'Visual and tactile feedback when a user clicks or interacts with a button.',
        howItWorks: 'Combine CSS active states (:active), ripple animations via ::after pseudo-elements, and scale transforms to simulate a physical press.',
        aiPrompt: 'Create a premium dark-mode button with press/ripple feedback animation using CSS transforms and pseudo-elements. Add a loading state transition.',
        examples: ['Stripe CTAs', 'Linear buttons', 'Vercel deploy button'],
        cssDemo: 'generic-card'
      },
      {
        id: 'toggle-switch',
        name: 'Toggle Switch',
        icon: '🔘',
        whatItIs: 'An animated on/off switch that communicates state clearly through motion and color.',
        howItWorks: 'CSS transition on transform + background-color. The knob slides with cubic-bezier spring easing. Color transitions from neutral to accent.',
        aiPrompt: 'Build an animated iOS-style toggle switch in React with smooth spring animation using CSS. Show multiple variant sizes and colors.',
        examples: ['iOS Settings', 'Vercel dashboard', 'Linear preferences'],
        cssDemo: 'generic-card'
      },
      {
        id: 'like-animation',
        name: 'Like Animation',
        icon: '❤️',
        whatItIs: 'A satisfying heart/like button animation with burst particles on activation.',
        howItWorks: 'On click: scale burst keyframe (1 → 1.4 → 1), CSS clip-path or SVG path morphing, particle explosion via keyframe transforms on child spans.',
        aiPrompt: 'Create a Twitter/X-style heart like button with burst particle animation, color fill transition, and count increment in React.',
        examples: ['Twitter/X likes', 'Instagram hearts', 'Dribbble appreciations'],
        cssDemo: 'generic-card'
      },
      {
        id: 'hover-glow',
        name: 'Hover Glow Effects',
        icon: '✨',
        whatItIs: 'Dynamic glow and shimmer effects that follow the cursor position on interactive cards.',
        howItWorks: 'Mouse event listeners capture (x, y) relative to element. CSS radial-gradient spotlight follows cursor. Translate to CSS custom properties updated via JS.',
        aiPrompt: 'Build a grid of dark cards with a dynamic radial gradient spotlight that follows the cursor over each card independently. Add a border glow effect.',
        examples: ['GitHub Copilot homepage', 'Raycast.com', 'Linear.app homepage'],
        cssDemo: 'generic-card'
      },
      {
        id: 'loading-button',
        name: 'Loading Button State',
        icon: '⏳',
        whatItIs: 'A button that transitions smoothly into a loading state, preventing double-submit while maintaining visual context.',
        howItWorks: 'onClick: set isLoading=true, replace label with spinner, disable the element. CSS width transitions keep the button from resizing jarring during state change.',
        aiPrompt: 'Create a button that transitions to a loading state with spinner animation on click, then a success checkmark state, using React state and CSS transitions.',
        examples: ['Stripe payment button', 'Notion sync button', 'GitHub action trigger'],
        cssDemo: 'generic-card'
      }
    ]
  },

  // ─── NEW CATEGORY 8: LOADING & SKELETON STATES ───────────────────────────
  {
    id: 'loading-skeletons',
    name: 'Loading & Skeleton States',
    icon: '⏳',
    items: [
      {
        id: 'skeleton-cards',
        name: 'Skeleton Cards',
        icon: '🩻',
        whatItIs: 'Placeholder UI that mirrors the layout of content before it loads, reducing perceived wait time.',
        howItWorks: 'HTML divs shaped like content with a repeating CSS linear-gradient animation (shimmer) moving left to right across a gray base color.',
        aiPrompt: 'Build a set of skeleton loading cards that shimmer with a left-to-right animation, matching the shape of a blog card with image, title, author, and tags.',
        examples: ['LinkedIn feed', 'YouTube thumbnails', 'Facebook feed'],
        cssDemo: 'generic-card'
      },
      {
        id: 'spinner-loader',
        name: 'Spinner Loaders',
        icon: '🔄',
        whatItIs: 'Animated circular indicators communicating that a process is in progress.',
        howItWorks: 'SVG stroke-dasharray + stroke-dashoffset animated with CSS keyframes. Multiple ring variants use different rotate speeds and stroke-linecap: round.',
        aiPrompt: 'Design 4 different premium loading spinner variants in SVG/CSS: orbit ring, dual counter-rotate, gradient arc, and pulsing dot cluster.',
        examples: ['Linear loading', 'Vercel deployment', 'Figma processing'],
        cssDemo: 'generic-card'
      },
      {
        id: 'progress-loader',
        name: 'Progress Bar Loader',
        icon: '📊',
        whatItIs: 'A linear or segmented progress bar showing completion percentage of a task.',
        howItWorks: 'CSS width transitions with custom easing. The indeterminate state uses a keyframe moving a gradient from -100% to 200%. Segmented variants use flex gap.',
        aiPrompt: 'Build animated progress bar components: linear fill, segmented steps, gradient shimmer indeterminate, and circular SVG variants with smooth transitions.',
        examples: ['nprogress.js', 'GitHub file upload', 'Notion page sync'],
        cssDemo: 'generic-card'
      },
      {
        id: 'page-transition-loader',
        name: 'Page Transition Loader',
        icon: '🌐',
        whatItIs: 'A full-screen or top-bar loader that plays during route changes to smooth page transitions.',
        howItWorks: 'A fixed overlay or topbar element animates in on routeChangeStart and fades out on routeChangeComplete, paired with page content fade-in animation.',
        aiPrompt: 'Simulate a Next.js page transition with a top progress bar (NProgress style) and a page content fade-in animation. Make it feel instant and polished.',
        examples: ['Next.js NProgress', 'Vercel dashboard routing', 'Linear app navigation'],
        cssDemo: 'generic-card'
      },
      {
        id: 'shimmer-text',
        name: 'Shimmer & Pulse Effects',
        icon: '💫',
        whatItIs: 'Subtle pulsing or shimmering placeholder effects for loading text and images.',
        howItWorks: 'CSS animation with opacity 0.5→1→0.5 on a rounded element (pulse), or a moving gradient overlay (shimmer). Tailwind uses animate-pulse for this.',
        aiPrompt: 'Create a beautiful shimmer text effect for a "Generating..." label, and a pulse animation for profile avatar placeholders. Use elegant dark-mode styling.',
        examples: ['ChatGPT streaming', 'Midjourney generation', 'Stripe radar score'],
        cssDemo: 'generic-card'
      }
    ]
  },

  // ─── NEW CATEGORY 9: FORM DESIGN ─────────────────────────────────────────
  {
    id: 'form-design',
    name: 'Form Design',
    icon: '📝',
    items: [
      {
        id: 'floating-labels',
        name: 'Floating Labels',
        icon: '🏷️',
        whatItIs: 'Input labels that animate upward on focus, combining the placeholder and label into one elegant element.',
        howItWorks: 'CSS :focus-within and :not(:placeholder-shown) selectors trigger a translateY + scale transform on the label element. No JS needed.',
        aiPrompt: 'Build a premium dark-mode login form with floating label inputs that animate smoothly on focus. Add a gradient focus ring and error/success states.',
        examples: ['Material UI', 'Stripe Checkout', 'Auth0 login'],
        cssDemo: 'generic-card'
      },
      {
        id: 'input-validation',
        name: 'Input Validation States',
        icon: '✅',
        whatItIs: 'Real-time visual feedback on form inputs showing valid, invalid, and loading states.',
        howItWorks: 'CSS :valid and :invalid pseudo-classes on inputs. Custom icons (checkmark/X) animate in via transform + opacity. Shake animation triggers on invalid submit.',
        aiPrompt: 'Create an email input with real-time validation showing: idle, typing, valid (green checkmark), and invalid (red X + shake) states with smooth CSS transitions.',
        examples: ['Stripe card input', 'GitHub signup', 'Notion database filters'],
        cssDemo: 'generic-card'
      },
      {
        id: 'multi-step-form',
        name: 'Multi-Step Form',
        icon: '📋',
        whatItIs: 'A wizard-style form that breaks complex input into digestible sequential steps.',
        howItWorks: 'React state tracks currentStep. Each step slides in from the right using CSS transform: translateX. A progress indicator shows completion percentage at the top.',
        aiPrompt: 'Build a 3-step onboarding form wizard with animated step transitions (slide in/out), a top progress bar, and step indicators. Make it dark-mode and premium.',
        examples: ['Stripe onboarding', 'Linear workspace setup', 'Notion team invite'],
        cssDemo: 'generic-card'
      },
      {
        id: 'otp-input',
        name: 'OTP / PIN Input',
        icon: '🔢',
        whatItIs: 'Individual digit input boxes that auto-advance focus, creating a native-app-like authentication experience.',
        howItWorks: 'Array of single-char inputs. onChange fires focus to next sibling. Backspace moves to previous. Paste handler splits pasted text across all fields automatically.',
        aiPrompt: 'Create a 6-digit OTP input component with auto-focus advancement, paste support, shake animation on wrong code, and celebration animation on correct entry.',
        examples: ['Apple ID 2FA', 'WhatsApp OTP', 'Stripe Radar challenge'],
        cssDemo: 'generic-card'
      },
      {
        id: 'search-input',
        name: 'Animated Search Input',
        icon: '🔍',
        whatItIs: 'A searchbar that expands, suggests, and filters results with smooth animated transitions.',
        howItWorks: 'CSS width transition from icon-only to full-width on focus. Dropdown appears with translateY + opacity animation. Results stagger in with JS IntersectionObserver.',
        aiPrompt: 'Build an expanding search input that animates from a small icon to full-width on click, shows a dropdown of results with staggered fade-in, all in dark theme.',
        examples: ['Linear command palette', 'Raycast search', 'GitHub global search'],
        cssDemo: 'generic-card'
      }
    ]
  },

  // ─── NEW CATEGORY 10: CURSOR & HOVER EFFECTS ─────────────────────────────
  {
    id: 'cursor-hover',
    name: 'Cursor & Hover Effects',
    icon: '🖱️',
    items: [
      {
        id: 'magnetic-button',
        name: 'Magnetic Button',
        icon: '🧲',
        whatItIs: 'A button that pulls its label toward the cursor when hovered, creating a satisfying magnetic attraction effect.',
        howItWorks: 'mousemove event calculates cursor distance from button center. CSS transform: translate(x, y) applied with reduced intensity (0.3× offset). Reset on mouseleave.',
        aiPrompt: 'Build a magnetic button effect where the button element moves toward the cursor on hover with smooth spring animation. Use React mousemove events and CSS transforms.',
        examples: ['Bruno Simon portfolio', 'awwwards.com buttons', 'Locomotive Scroll demos'],
        cssDemo: 'generic-card'
      },
      {
        id: 'custom-cursor',
        name: 'Custom Cursor',
        icon: '✳️',
        whatItIs: 'A branded cursor replacement that responds to context — expanding over links, changing shape over images.',
        howItWorks: 'A fixed div follows mouse position via JS with a CSS transition lag for the trail effect. cursor: none on body. Different class states change size and blend-mode.',
        aiPrompt: 'Create a custom cursor with a small dot and a larger following circle with CSS transition delay (trailing effect). Make it expand on hoverable elements.',
        examples: ['Awwwards winners', 'Bruno Simon portfolio', 'Aristide Benoist site'],
        cssDemo: 'generic-card'
      },
      {
        id: 'image-reveal',
        name: 'Image Reveal on Hover',
        icon: '🖼️',
        whatItIs: 'An image that follows the cursor and appears only when hovering over a trigger element, typically used in portfolio link lists.',
        howItWorks: 'A fixed-position image element tracks cursor XY. Display toggles on parent hover. Image scales in from 0.8→1 with opacity transition. CSS mix-blend-mode: multiply for texture.',
        aiPrompt: 'Create a list of project names where hovering each reveals a preview image that follows the cursor, using React state and CSS transitions for the reveal animation.',
        examples: ['MSCHF drops page', 'Locomotive agency sites', 'Resn.co.nz'],
        cssDemo: 'generic-card'
      },
      {
        id: 'tilt-effect',
        name: '3D Tilt on Hover',
        icon: '🃏',
        whatItIs: 'Cards that tilt in 3D perspective matching the relative cursor position, creating a depth illusion.',
        howItWorks: 'mousemove gives (x, y) relative to element. Map to rotateX and rotateY values (max ±15deg). Apply transform: perspective(600px) rotateX() rotateY(). Reset on mouseleave.',
        aiPrompt: 'Build interactive tilt cards that rotate in 3D space based on mouse position with a specular highlight/shine effect that also tracks the cursor. Use React hooks.',
        examples: ['Stripe homepage cards', 'Apple product pages', 'Codrops demos'],
        cssDemo: 'generic-card'
      },
      {
        id: 'text-scramble',
        name: 'Text Scramble Effect',
        icon: '🔀',
        whatItIs: 'Text that rapidly cycles through random characters before resolving into its final value, creating a hacker/decoding aesthetic.',
        howItWorks: 'setInterval rapidly replaces each character with a random character from a pool. As time progresses, more characters lock into their final values from left to right.',
        aiPrompt: 'Create a text scramble animation that cycles through random characters and progressively resolves to the target word. Trigger on hover and page load.',
        examples: ['Hacker aesthetic sites', 'Monospace/terminal UIs', 'Vercel error pages'],
        cssDemo: 'generic-card'
      }
    ]
  },

  // ─── NEW CATEGORY 11: 3D CSS EFFECTS ─────────────────────────────────────
  {
    id: '3d-css',
    name: '3D CSS Effects',
    icon: '🎲',
    items: [
      {
        id: 'card-flip',
        name: '3D Card Flip',
        icon: '🔄',
        whatItIs: 'Cards that rotate 180 degrees in 3D to reveal a hidden back face on hover or click.',
        howItWorks: 'CSS transform-style: preserve-3d on parent. Front and back faces both inside, back rotated 180deg. Hover triggers rotateY(180deg) on parent. backface-visibility: hidden hides inactive face.',
        aiPrompt: 'Create a set of 3D flip cards that reveal a back face with different content. Front shows image and title, back shows description and CTA. Premium dark-mode styling.',
        examples: ['CSS Tricks demos', 'Portfolio project cards', 'Product feature reveals'],
        cssDemo: 'generic-card'
      },
      {
        id: 'perspective-tilt',
        name: 'Perspective Scene',
        icon: '🌐',
        whatItIs: 'A CSS-only 3D scene with depth layers that creates a sense of space and dimension.',
        howItWorks: 'Parent has perspective: 800px. Children use translateZ() to position at different depths. CSS animation rotates the scene. Increasing perspective value changes FOV.',
        aiPrompt: 'Create a CSS 3D scene with multiple floating layers at different depths using perspective and translateZ. Add a slow rotation animation to show the 3D depth.',
        examples: ['Awwwards 3D sites', 'CSS perspective demos', 'React Three Fiber intros'],
        cssDemo: 'generic-card'
      },
      {
        id: 'css-cube',
        name: 'Rotating CSS Cube',
        icon: '📦',
        whatItIs: 'A fully three-dimensional cube built purely with CSS transforms and perspective.',
        howItWorks: '6 faces positioned using translateZ and rotateX/Y. Parent with transform-style: preserve-3d. Animation rotates entire group. Each face shows a different design.',
        aiPrompt: 'Build an animated CSS 3D cube with 6 distinct face designs, smooth infinite rotation animation, and hover to pause. Each face represents a different design principle.',
        examples: ['CodePen CSS art', 'CSS tricks 3D', 'Web design portfolios'],
        cssDemo: 'generic-card'
      },
      {
        id: '3d-text',
        name: '3D Text Extrusion',
        icon: '📝',
        whatItIs: 'Text with a layered shadow stack that creates the illusion of physical depth and extrusion.',
        howItWorks: 'Multiple text-shadow values at 1px offsets building up to create the extrusion depth. CSS animation rotates or shifts the perspective. Optionally use three.js TextGeometry.',
        aiPrompt: 'Create CSS 3D extruded text using stacked text-shadow values. The text should appear to have physical depth. Add a hover animation that tips the text in 3D.',
        examples: ['Brutalist 3D typography', 'Retro game logos', 'Bold brand statements'],
        cssDemo: 'generic-card'
      },
      {
        id: 'depth-layers',
        name: 'Layered Depth Scroll',
        icon: '🔮',
        whatItIs: 'Multiple UI layers positioned at different Z depths that separate at different rates on scroll or hover.',
        howItWorks: 'Elements with varying translateZ values inside a perspective container. Mouse position or scroll value drives the parent rotation/translation, separating layers visibly.',
        aiPrompt: 'Build a 3D layered card where multiple content planes float at different depths. Moving the mouse shifts each layer independently to reveal the depth. Glassmorphism styling.',
        examples: ['Apple iOS parallax', 'Spline 3D web demos', 'Framer Motion 3D'],
        cssDemo: 'generic-card'
      }
    ]
  },

  // ─── NEW CATEGORY 12: DATA VISUALIZATION ─────────────────────────────────
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    icon: '📊',
    items: [
      {
        id: 'number-counter',
        name: 'Animated Number Counter',
        icon: '🔢',
        whatItIs: 'Numbers that count up from zero to their target value when entering the viewport.',
        howItWorks: 'IntersectionObserver triggers the animation. requestAnimationFrame updates the displayed value using an easing function applied to elapsed time / duration.',
        aiPrompt: 'Create animated counters that count up from 0 using easing functions when they enter the viewport. Show them as a statistics section with labels.',
        examples: ['Stripe stats section', 'Agency homepage metrics', 'SaaS landing pages'],
        cssDemo: 'generic-card'
      },
      {
        id: 'progress-ring',
        name: 'SVG Progress Rings',
        icon: '⭕',
        whatItIs: 'Circular SVG gauges that animate from 0 to a target percentage with gradient strokes.',
        howItWorks: 'SVG circle with stroke-dasharray = circumference. stroke-dashoffset changes from full circumference (0%) to 0 (100%). CSS transition or GSAP drives the animation.',
        aiPrompt: 'Build a set of animated SVG progress rings with gradient strokes and center labels. Each should animate on mount and show skill percentages in a portfolio style.',
        examples: ['Portfolio skill rings', 'Apple Watch activity rings', 'Dashboard gauges'],
        cssDemo: 'generic-card'
      },
      {
        id: 'bar-chart',
        name: 'Animated Bar Chart',
        icon: '📈',
        whatItIs: 'A bar chart where bars grow from zero to their data values with staggered animations.',
        howItWorks: 'CSS height transition with staggered transitionDelay per bar. IntersectionObserver triggers the grow animation. Hover tooltips use absolute positioning.',
        aiPrompt: 'Design a beautiful dark-mode bar chart where bars animate upward on scroll view. Include hover tooltips, gradient fills, and axis labels. No external chart library.',
        examples: ['Vercel analytics', 'Linear metrics', 'GitHub contribution graph'],
        cssDemo: 'generic-card'
      },
      {
        id: 'sparkline',
        name: 'Sparklines & Mini Charts',
        icon: '📉',
        whatItIs: 'Tiny inline charts embedded in text, cards, or tables to show trends at a glance.',
        howItWorks: 'SVG polyline with calculated point coordinates from data array. CSS stroke-dasharray animation draws the line from left to right. Fill uses linearGradient SVG element.',
        aiPrompt: 'Create inline SVG sparkline charts embedded in dark-mode stat cards. Include an animated draw-on effect and a gradient fill beneath the line.',
        examples: ['GitHub traffic sparklines', 'Stripe revenue charts', 'Linear velocity charts'],
        cssDemo: 'generic-card'
      },
      {
        id: 'stat-cards',
        name: 'Animated Stat Cards',
        icon: '💹',
        whatItIs: 'Dashboard-style metric cards where numbers, trend arrows, and sparklines all animate in simultaneously.',
        howItWorks: 'Combine IntersectionObserver (trigger), requestAnimationFrame counter (numbers), SVG sparkline draw animation, and CSS stagger (card entrance). All coordinated.',
        aiPrompt: 'Build a set of premium animated dashboard stat cards with counting numbers, trend percentage badges, sparkline graphs, and staggered entrance animations.',
        examples: ['Stripe Dashboard', 'Linear analytics', 'Vercel deployment stats'],
        cssDemo: 'generic-card'
      }
    ]
  },

  // ─── NEW CATEGORY 13: MOBILE UI PATTERNS ─────────────────────────────────
  {
    id: 'mobile-ui',
    name: 'Mobile UI Patterns',
    icon: '📱',
    items: [
      {
        id: 'bottom-sheet',
        name: 'Bottom Sheet',
        icon: '⬆️',
        whatItIs: 'A slide-up panel from the bottom of the screen, a core mobile pattern for secondary content and actions.',
        howItWorks: 'Fixed positioned div off-screen (transform: translateY(100%)). Toggle slides it to translateY(0) with cubic-bezier easing. A dark backdrop fades in behind.',
        aiPrompt: 'Build a mobile bottom sheet component that slides up from the bottom with a drag handle, backdrop overlay, and smooth spring animation. Make it feel native.',
        examples: ['iOS Maps share sheet', 'Google Maps directions', 'Uber ride options'],
        cssDemo: 'generic-card'
      },
      {
        id: 'swipe-cards',
        name: 'Swipe / Tinder Cards',
        icon: '🃏',
        whatItIs: 'A stack of cards that can be swiped left or right to accept or reject, made famous by Tinder.',
        howItWorks: 'Mouse/touch delta drives CSS transform: translateX + rotate. On release, if threshold exceeded, animate out. Otherwise snap back. React state removes top card.',
        aiPrompt: 'Create a swipeable card stack (Tinder-style) with mouse drag support. Cards should rotate and fly off to accept/reject. Show accept/reject indicators based on direction.',
        examples: ['Tinder', 'Hinge', 'Product Hunt ship voting'],
        cssDemo: 'generic-card'
      },
      {
        id: 'mobile-tab-bar',
        name: 'Mobile Tab Bar',
        icon: '🗂️',
        whatItIs: 'A fixed bottom navigation bar with icon tabs, the primary navigation pattern on mobile apps.',
        howItWorks: 'Fixed bottom div with flex row. Active indicator uses translateX animation between tab positions. Icons scale up on active. iOS-style SF symbols or Lucide icons.',
        aiPrompt: 'Design a premium iOS-style mobile bottom tab bar with animated active indicator, icon scale transitions, and haptic-friendly visual feedback on tab press.',
        examples: ['Instagram bottom nav', 'Twitter/X bottom nav', 'Apple Maps'],
        cssDemo: 'generic-card'
      },
      {
        id: 'notification-stack',
        name: 'Notification Stack',
        icon: '🔔',
        whatItIs: 'Stacked notification cards that slide in, fan out, and dismiss — the modern toast/notification UI.',
        howItWorks: 'Fixed positioned stack at top/bottom. Each notification enters via translateY animation. Older notifications scale down and shift behind newer ones. Auto-dismiss after timer.',
        aiPrompt: 'Build an animated notification stack (like Sonner/react-hot-toast) where notifications slide in at the top, stack behind each other, and auto-dismiss. Dark-mode premium.',
        examples: ['Sonner toast', 'Vercel notifications', 'Linear inbox notifications'],
        cssDemo: 'generic-card'
      },
      {
        id: 'pull-refresh',
        name: 'Pull to Refresh',
        icon: '🔃',
        whatItIs: 'The mobile gesture of dragging down past the top of a scrollable list to trigger a refresh.',
        howItWorks: 'touchstart/touchmove track delta-Y. When overscroll > threshold, show a spinner indicator. On touchend, if threshold met, trigger refresh callback and animate back.',
        aiPrompt: 'Simulate a pull-to-refresh interaction with a spinner that appears when dragging down, a release-to-refresh threshold, and a refreshing animation state.',
        examples: ['Twitter/X timeline', 'Instagram feed', 'Apple Mail'],
        cssDemo: 'generic-card'
      }
    ]
  },

  // ─── NEW CATEGORY 14: ANIMATION PRINCIPLES ───────────────────────────────
  {
    id: 'animation-principles',
    name: 'Animation Principles',
    icon: '🎬',
    items: [
      {
        id: 'easing-showcase',
        name: 'Easing Curves Showcase',
        icon: '📐',
        whatItIs: 'A visual side-by-side comparison of different CSS easing functions showing their movement over the same duration.',
        howItWorks: 'Same translateX animation applied with different timing-functions: linear, ease, ease-out, ease-in-out, and custom cubic-bezier values. Compare on button click.',
        aiPrompt: 'Build an interactive easing showcase where clicking play animates multiple balls from left to right simultaneously, each using a different easing curve with labels.',
        examples: ['easings.net', 'cubic-bezier.com', 'CSS Tricks easing guide'],
        cssDemo: 'generic-card'
      },
      {
        id: 'stagger-animation',
        name: 'Stagger Timing',
        icon: '🎯',
        whatItIs: 'Offsetting the start time of individual animations in a group to create a flowing, choreographed entrance effect.',
        howItWorks: 'Each child element has animation-delay: i * 0.08s. CSS or GSAP applies the same animation to all, but staggered. Results feel organic and intentional rather than mechanical.',
        aiPrompt: 'Create a stagger animation demo where a grid of elements animate in with different delay intervals (0ms, 50ms, 100ms, 200ms). Show before/after comparison.',
        examples: ['Framer Motion stagger', 'GSAP staggerFrom', 'Linear item lists'],
        cssDemo: 'generic-card'
      },
      {
        id: 'spring-physics',
        name: 'Spring Physics',
        icon: '🌀',
        whatItIs: 'Using spring-like physics (tension, friction, mass) instead of duration + easing for animations that feel physically alive.',
        howItWorks: 'Spring equation: F = -tension*x - friction*velocity. Each frame updates position and velocity. Overshoots and oscillates like a physical spring. Framer Motion uses this natively.',
        aiPrompt: 'Build an interactive spring animation demo where clicking sets a ball with adjustable tension/friction/mass sliders that control the spring physics. Show overshoot.',
        examples: ['Framer Motion spring', 'React Spring', 'iOS UIKit spring animations'],
        cssDemo: 'generic-card'
      },
      {
        id: 'orchestrated-sequence',
        name: 'Orchestrated Sequences',
        icon: '🎼',
        whatItIs: 'Complex multi-element animations where different parts of the UI animate in a coordinated narrative sequence.',
        howItWorks: 'Each animation phase triggers the next using animationend events or a timeline manager. GSAP timeline.to() chains are the gold standard for production orchestration.',
        aiPrompt: 'Build an orchestrated hero animation: background fades in → headline slides up → subtext appears → CTA bounces in → accent elements scatter. Each timed precisely.',
        examples: ['Apple product pages', 'Stripe keynote moments', 'Linear launch animations'],
        cssDemo: 'generic-card'
      },
      {
        id: 'transition-states',
        name: 'UI State Transitions',
        icon: '🔀',
        whatItIs: 'Smooth animated transitions between distinct UI states (empty → loading → populated → error) that maintain context.',
        howItWorks: 'React state machine (idle→loading→success→error). Each state renders different content. CSS opacity/transform transitions handle the morph. Height transitions need auto-height tricks.',
        aiPrompt: 'Create an interactive UI state machine with 4 states (idle, loading, success, error) with smooth animated transitions between each state. Include a trigger button.',
        examples: ['Stripe payment flow', 'Vercel deployment states', 'Linear issue workflows'],
        cssDemo: 'generic-card'
      }
    ]
  }
];

