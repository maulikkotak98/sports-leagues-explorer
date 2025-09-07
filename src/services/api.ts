import axios, { AxiosError } from 'axios';

import type { LeaguesResponse, SeasonsResponse } from '../types/api';
import { API_CONFIG } from '../constants';

/**
 * Custom error class for API-related errors
 */
export class ApiError extends Error {
  public status?: number;
  public code?: string;
  
  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

// Response interceptor for consistent error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const message = error.response?.statusText || error.message || 'An unexpected error occurred';
    const status = error.response?.status;
    const code = error.code;
    
    throw new ApiError(message, status, code);
  }
);

/**
 * Sports API service with type-safe methods and error handling
 */
export const sportsApi = {
  /**
   * Fetches all available sports leagues
   * @returns Promise resolving to leagues data
   * @throws {ApiError} When the request fails
   */
  getAllLeagues: async (): Promise<LeaguesResponse> => {
    try {
      const response = await api.get<LeaguesResponse>(API_CONFIG.ENDPOINTS.ALL_LEAGUES);
      
      if (!response.data?.leagues) {
        throw new ApiError('Invalid response format: missing leagues data');
      }
      
      return response.data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Failed to fetch leagues data');
    }
  },

  /**
   * Fetches season badge data for a specific league
   * @param leagueId - The ID of the league
   * @returns Promise resolving to seasons data
   * @throws {ApiError} When the request fails
   */
  getSeasonBadge: async (leagueId: string): Promise<SeasonsResponse> => {
    if (!leagueId?.trim()) {
      throw new ApiError('League ID is required');
    }

    try {
      const response = await api.get<SeasonsResponse>(
        `${API_CONFIG.ENDPOINTS.SEASON_BADGE}?badge=1&id=${encodeURIComponent(leagueId)}`
      );
      
      return response.data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(`Failed to fetch season badge for league ${leagueId}`);
    }
  },
} as const;
