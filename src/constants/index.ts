/**
 * Application constants
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://www.thesportsdb.com/api/v1/json/3',
  TIMEOUT: 10000,
  ENDPOINTS: {
    ALL_LEAGUES: '/all_leagues.php',
    SEASON_BADGE: '/search_all_seasons.php',
  },
} as const;

// Cache Configuration
export const CACHE_CONFIG = {
  STALE_TIME: 1000 * 60 * 30, // 30 minutes
  GC_TIME: 1000 * 60 * 60, // 60 minutes
} as const;

// UI Configuration
export const UI_CONFIG = {
  DEBOUNCE_DELAY: 300,
  MAX_WIDTH: '1500px',
  SEARCH_PLACEHOLDER: 'Search leagues by name or alternate name...',
  FILTER_LABEL: 'Filter by Sport',
  ALL_SPORTS_LABEL: 'All Sports',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  FAILED_TO_LOAD_LEAGUES: 'Failed to load sports leagues. Please check your internet connection and try again.',
  FAILED_TO_LOAD_BADGE: 'Failed to load season badge. Please try again.',
  NO_LEAGUES_FOUND: 'No leagues found matching your search criteria. Try adjusting your filters.',
  NO_BADGE_AVAILABLE: 'No season badge available for this league.',
} as const;

// Loading Messages
export const LOADING_MESSAGES = {
  LOADING_BADGE: 'Loading season badge...',
} as const;

// Query Keys
export const QUERY_KEYS = {
  LEAGUES: ['leagues'] as const,
  SEASON_BADGE: (leagueId: string) => ['season-badge', leagueId] as const,
} as const;
