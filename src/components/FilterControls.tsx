import React from 'react';
import { Paper, Box } from '@mui/material';

import { SearchBar } from './SearchBar';
import { SportFilter } from './SportFilter';

interface FilterControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedSport: string;
  onSportChange: (value: string) => void;
  sports: string[];
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  searchTerm,
  onSearchChange,
  selectedSport,
  onSportChange,
  sports,
}) => {
  return (
    <Paper elevation={2} sx={{ p: 2.5, mb: 2, borderRadius: 2 }}>
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { 
          xs: '1fr',
          sm: '1fr',
          md: '3fr 1fr',
          lg: '4fr 1fr',
          xl: '5fr 1fr'
        },
        gap: 2.5,
      }}>
        <SearchBar
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search leagues by name or alternate name..."
        />
        <SportFilter
          value={selectedSport}
          onChange={onSportChange}
          sports={sports}
        />
      </Box>
    </Paper>
  );
};
