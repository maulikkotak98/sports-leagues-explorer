import { useQuery } from '@tanstack/react-query';

import { sportsApi } from '../services/api';
import { QUERY_KEYS, CACHE_CONFIG } from '../constants';

/**
 * Custom hook for fetching all leagues
 * @returns Query result with leagues data, loading state, and error state
 */
export const useLeagues = () => {
  return useQuery({
    queryKey: QUERY_KEYS.LEAGUES,
    queryFn: sportsApi.getAllLeagues,
    staleTime: CACHE_CONFIG.STALE_TIME,
    gcTime: CACHE_CONFIG.GC_TIME,
  });
};
