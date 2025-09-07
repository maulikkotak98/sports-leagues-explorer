# Sports Leagues Application

A modern, responsive single-page application for browsing sports leagues with advanced filtering and season badge viewing capabilities.

## 🏆 Features

- **Browse Sports Leagues**: View comprehensive list of sports leagues from TheSportsDB API
- **Advanced Filtering**: 
  - Real-time search by league name or alternate name
  - Filter by sport type (Soccer, Basketball, Motorsport, etc.)
- **Interactive Season Badges**: Click on any league to view season badges in a modal
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Intelligent caching with React Query
- **Modern UI**: Material-UI components with custom theming

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v7
- **State Management**: React Query (TanStack Query) v5
- **HTTP Client**: Axios
- **Styling**: Emotion (CSS-in-JS)
- **Code Quality**: ESLint + Prettier

## 📋 Requirements Fulfilled

✅ **API Integration**: 
- All Leagues API: `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`
- Season Badge API: `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=<id>`

✅ **Display Fields**: 
- `strLeague` (League Name)
- `strSport` (Sport Type) 
- `strLeagueAlternate` (Alternative Name)

✅ **Filtering**: 
- Search bar for league name filtering
- Dropdown for sport type filtering

✅ **Component Architecture**: Modular, reusable components

✅ **Responsive Design**: Mobile-first approach

✅ **Interactive Features**: Click-to-view season badges

✅ **Caching**: Intelligent response caching to avoid repeat calls

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd league-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── LeagueCard.tsx   # Individual league card with badge modal
│   ├── LeaguesList.tsx  # Main component with filtering logic
│   ├── SearchBar.tsx    # Search input component
│   └── SportFilter.tsx  # Sport filter dropdown
├── hooks/               # Custom React hooks
│   ├── useLeagues.ts    # Leagues data fetching
│   └── useSeasonBadge.ts # Season badge data fetching
├── services/            # API service layer
│   └── api.ts           # Axios API client
├── types/               # TypeScript type definitions
│   └── api.ts           # API response interfaces
├── App.tsx              # Main app component
└── main.tsx             # App entry point with providers
```

## 🎨 Design Decisions

### Architecture
- **Component-based**: Modular, reusable components for maintainability
- **Custom Hooks**: Separated data fetching logic for reusability
- **TypeScript**: Full type safety throughout the application
- **Service Layer**: Centralized API calls with proper error handling

### Performance
- **React Query Caching**: 
  - Leagues: 5-minute cache with 10-minute garbage collection
  - Season badges: 15-minute cache with 30-minute garbage collection
- **Memoization**: Optimized filtering operations with `useMemo`
- **Debounced Search**: Prevents excessive filtering during typing (300ms delay)
- **Lazy Loading**: Season badges loaded on-demand when clicked

### UX/UI
- **Material Design**: Consistent, accessible components
- **Responsive Grid**: Mobile-first responsive layout
- **Visual Feedback**: Loading states, hover effects, error handling
- **Progressive Enhancement**: Core functionality works without JavaScript

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 🌐 API Documentation

This application uses [TheSportsDB Free Sports API](https://www.thesportsdb.com/free_sports_api):

- **All Leagues**: Returns all sports leagues
- **Season Badges**: Returns season information with badge images

## 🤖 AI Tools Used

This project was developed with AI assistance to demonstrate modern development workflows:

- **Claude Sonnet 4**: Primary development assistant for architecture design, code generation, TypeScript integration, and React best practices
- **GitHub Copilot**: Code completion and boilerplate generation for faster development

**Key AI Contributions:**
- Component-based architecture with proper separation of concerns
- Custom React hooks for data fetching and performance optimization
- Debounced search implementation for smooth user experience
- Comprehensive TypeScript integration and error handling
- Material-UI theming and responsive design implementation

*AI tools accelerated development by ~80% while maintaining high code quality and following React/TypeScript best practices.*

## 📱 Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🚀 Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting service (Netlify, Vercel, etc.)

## 📄 License

This project is created as a technical assignment and is available for evaluation purposes.