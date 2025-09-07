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
    queryKey: QUERY_KEYS.SEASON_BADGE(leagueId as string),
    queryFn: () => sportsApi.getSeasonBadge(leagueId as string),
    enabled: !!leagueId,
    staleTime: CACHE_CONFIG.STALE_TIME,
    gcTime: CACHE_CONFIG.GC_TIME,
  });
};
