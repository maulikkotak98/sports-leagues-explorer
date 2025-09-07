# Sports Leagues Explorer

A React SPA for browsing sports leagues with search and filtering capabilities.

## Features

- Browse sports leagues from TheSportsDB API
- Search leagues by name or alternate name
- Filter by sport type
- View season badges for each league
- Responsive design

## Project Structure & Architecture

```
src/
├── components/
│   ├── LeaguesList.tsx      # Main component with filtering logic
│   ├── LeagueCard.tsx       # Individual league item with badge modal
│   ├── SearchBar.tsx        # Search input component
│   ├── SportFilter.tsx      # Sport filter dropdown
│   ├── SeasonBadgeDialog.tsx # Modal for displaying season badges
│   ├── FilterControls.tsx   # Combined search and filter controls
│   ├── LeaguesHeader.tsx    # App header component
│   ├── ListStates.tsx       # Loading, error, and empty states
│   ├── ResultsSummary.tsx   # Results count display
│   └── styled/
│       └── index.tsx        # Styled components for layout
├── hooks/
│   ├── useLeagues.ts        # Fetch all leagues
│   ├── useSeasonBadge.ts    # Fetch season badges
│   └── useDebounce.ts       # Debounce utility hook
├── services/
│   └── api.ts               # Centralized API calls with axios
├── types/
│   └── api.ts               # TypeScript interfaces for API responses
├── constants/
│   └── index.ts             # App configuration and constants
├── theme/
│   └── index.ts             # Material-UI theme configuration
├── pages/
│   └── HomePage.tsx         # Main page wrapper component
├── App.tsx                  # Root app component
├── main.tsx                 # App entry with providers
└── vite-env.d.ts           # Vite TypeScript definitions
```

### Architecture Decisions

- **Component-based structure** with clear separation of concerns
- **Custom hooks** isolate data fetching and utility logic for reusability
- **Service layer** centralizes API calls with proper error handling
- **TypeScript interfaces** ensure type safety across API responses
- **TanStack Query** handles caching, loading states, and background refetching

## Tech Stack & Rationale

- **React + TypeScript** - Type safety and modern component patterns
- **Material-UI v7** - Consistent design system with accessibility built-in
- **TanStack Query v5** - Powerful data fetching with caching and background updates
- **Vite** - Fast development server and optimized production builds
- **Axios** - HTTP client with request/response interceptors

## Demo

![Demo Video](./demo/demo.mov)

*Click to download and view the demo video*

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## AI Tools Used

Built with **Cursor** using **Claude 4 Sonnet** for development assistance including:
- Initial project boilerplate and configuration
- TypeScript interface definitions and type safety
- Component architecture and React patterns
- API integration and error handling setup

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint