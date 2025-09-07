import axios from 'axios';

import type { LeaguesResponse, SeasonsResponse } from '../types/api';
import { API_CONFIG } from '../constants';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

export const sportsApi = {
  getAllLeagues: async (): Promise<LeaguesResponse> => {
    const response = await api.get<LeaguesResponse>(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ALL_LEAGUES}`,
    );
    return response.data;
  },

  getSeasonBadge: async (leagueId: string): Promise<SeasonsResponse> => {
    const response = await api.get<SeasonsResponse>(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEASON_BADGE}?badge=1&id=${leagueId}`,
    );
    return response.data;
  },
};
