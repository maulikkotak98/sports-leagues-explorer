export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string | null;
}

export interface LeaguesResponse {
  leagues: League[];
}

export interface Season {
  strSeason: string;
  strBadge: string | null;
}

export interface SeasonsResponse {
  seasons: Season[];
}
