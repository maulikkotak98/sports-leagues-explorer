import React, { useState, useMemo, useCallback } from 'react';

import { useLeagues } from '../hooks/useLeagues';
import { useDebounce } from '../hooks/useDebounce';
import LeagueCard from './LeagueCard';
import LeaguesHeader from './LeaguesHeader';
import FilterControls from './FilterControls';
import ResultsSummary from './ResultsSummary';
import ListStates from './ListStates';
import {
  FullHeightContainer,
  ScrollableListContainer,
  ScrollableList,
} from './styled';
import { UI_CONFIG, ERROR_MESSAGES, DEFAULT_SPORT } from '../constants';

const LeaguesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState(DEFAULT_SPORT);

  const debouncedSearchTerm = useDebounce(searchTerm, UI_CONFIG.DEBOUNCE_DELAY);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSportChange = useCallback((value: string) => {
    setSelectedSport(value);
  }, []);

  const { data, isLoading, error } = useLeagues();

  // Extract unique sports for the filter dropdown
  const uniqueSports = useMemo(() => {
    if (!data?.leagues) return [];
    const sports = data.leagues.map((league) => league.strSport);
    return [...new Set(sports)].sort();
  }, [data?.leagues]);

  // Filter leagues based on debounced search term and selected sport
  const filteredLeagues = useMemo(() => {
    if (!data?.leagues) return [];

    return data.leagues.filter((league) => {
      const matchesSearch =
        debouncedSearchTerm === '' ||
        league.strLeague
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
        (league.strLeagueAlternate
          ?.toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ??
          false);

      const matchesSport =
        selectedSport === DEFAULT_SPORT || league.strSport === selectedSport;

      return matchesSearch && matchesSport;
    });
  }, [data?.leagues, debouncedSearchTerm, selectedSport]);

  if (isLoading || error) {
    return <ListStates isLoading={isLoading} error={!!error} />;
  }

  return (
    <FullHeightContainer>
      <LeaguesHeader />

      <FilterControls
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedSport={selectedSport}
        onSportChange={handleSportChange}
        sports={uniqueSports}
      />

      <ResultsSummary
        filteredCount={filteredLeagues.length}
        totalCount={data?.leagues?.length || 0}
        selectedSport={selectedSport}
        searchTerm={searchTerm}
        debouncedSearchTerm={debouncedSearchTerm}
      />

      {filteredLeagues.length === 0 ? (
        <ListStates
          isEmpty={true}
          emptyMessage={ERROR_MESSAGES.NO_LEAGUES_FOUND}
        />
      ) : (
        <ScrollableListContainer elevation={1}>
          <ScrollableList>
            {filteredLeagues.map((league, index) => (
              <LeagueCard
                key={league.idLeague}
                league={league}
                isFirst={index === 0}
                isLast={index === filteredLeagues.length - 1}
              />
            ))}
          </ScrollableList>
        </ScrollableListContainer>
      )}
    </FullHeightContainer>
  );
};

export default LeaguesList;
