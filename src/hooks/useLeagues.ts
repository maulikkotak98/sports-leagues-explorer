import { useQuery } from '@tanstack/react-query';

import { sportsApi } from '../services/api';
import { QUERY_KEYS, CACHE_CONFIG } from '../constants';

/**
 * Custom hook for fetching sports leagues data
 * @returns Query result with leagues data, loading state, and error state
 */
export const useLeagues = () => {
  return useQuery({
    queryKey: QUERY_KEYS.LEAGUES,
    queryFn: sportsApi.getAllLeagues,
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
