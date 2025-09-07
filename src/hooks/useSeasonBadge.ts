import { useQuery } from '@tanstack/react-query';

import { sportsApi } from '../services/api';
import { QUERY_KEYS, CACHE_CONFIG } from '../constants';

/**
 * Custom hook for fetching season badge data for a specific league
 * @param leagueId - The ID of the league to fetch badge data for
 * @returns Query result with season badge data, loading state, and error state
 */
export const useSeasonBadge = (leagueId: string | null) => {
  return useQuery({
    queryKey: leagueId ? QUERY_KEYS.SEASON_BADGE(leagueId) : ['season-badge', null],
    queryFn: () => {
      if (!leagueId) {
        throw new Error('League ID is required');
      }
      return sportsApi.getSeasonBadge(leagueId);
    },
    enabled: !!leagueId,
    staleTime: CACHE_CONFIG.STALE_TIME,
    gcTime: CACHE_CONFIG.GC_TIME,
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors (client errors)
      if (error && 'status' in error && typeof error.status === 'number') {
        return error.status >= 500 && failureCount < 3;
      }
      return failureCount < 3;
    },
  });
};
