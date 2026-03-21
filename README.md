# History Unfiltered

A modern web application that visualizes major events in world history — presented in a factual, neutral, and educational way.

> No spin, no bias — just the facts.

## Features

- **Interactive Timeline** — A horizontal, scrollable timeline with color-coded dots for each event, hover effects, and alternating year labels
- **Event Detail Pages** — Rich pages for each historical event with long-form descriptions, media galleries, video embeds, and cited sources
- **Multimedia Support** — Wikimedia Commons images, YouTube video embeds, and audio clips for each event
- **Source Citations** — Every event includes verifiable references and external links
- **Responsive Design** — Mobile-first layouts with adaptive 1-, 2-, and 3-column grids
- **Category Color-Coding** — Events are categorized (War, Terrorism, Political, Science & Technology, Disaster) with distinct color themes

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| UI Library | [React 18](https://react.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Linting | [ESLint](https://eslint.org/) with Next.js config |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/yetric/major-incidents.git
cd major-incidents
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header
│   ├── page.tsx            # Homepage (hero, timeline, event grid)
│   ├── globals.css         # Global styles
│   └── event/[id]/         # Dynamic event detail pages
├── components/             # Reusable React components
│   ├── Header.tsx          # Navigation header
│   ├── Timeline.tsx        # Interactive horizontal timeline
│   ├── EventCard.tsx       # Event card for grid display
│   ├── EventDetail.tsx     # Full event detail view
│   ├── MediaGallery.tsx    # Image gallery carousel
│   ├── VideoPlayer.tsx     # YouTube video embed
│   ├── SourcesList.tsx     # Source citations list
│   └── FallbackImage.tsx   # Image fallback handler
├── data/
│   └── events.ts           # Historical events database
└── lib/
    └── utils.ts            # Utility functions
```

## Data Model

Each historical event is a structured TypeScript object containing:

- **Metadata** — Title, date, year, category, tags, and a unique color
- **Descriptions** — A short summary and a detailed long-form account
- **Media** — Images (from Wikimedia Commons), YouTube videos, and audio clips
- **Sources** — Named, linked references for fact verification
- **Location** — City, country, and geographic coordinates

## Contributing

Contributions are welcome! To add a new historical event:

1. Fork the repository
2. Add your event to `src/data/events.ts` following the existing `HistoricalEvent` interface
3. Ensure all sources are reputable and verifiable
4. Submit a pull request

For bug fixes or feature improvements, please open an issue first to discuss the change.
