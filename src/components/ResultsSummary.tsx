import React from 'react';
import { Typography, Box } from '@mui/material';

interface ResultsSummaryProps {
  filteredCount: number;
  totalCount: number;
  selectedSport: string;
  searchTerm: string;
  debouncedSearchTerm: string;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  filteredCount,
  totalCount,
  selectedSport,
  searchTerm,
  debouncedSearchTerm,
}) => {
  return (
    <Box sx={{ mb: 2, px: { xs: 1, sm: 0 } }}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontWeight: 500,
        }}
      >
        Showing {filteredCount} of {totalCount} leagues
        {selectedSport && ` in ${selectedSport}`}
        {debouncedSearchTerm && ` matching "${debouncedSearchTerm}"`}
        {searchTerm !== debouncedSearchTerm && (
          <Typography
            component="span"
            variant="caption"
            sx={{
              ml: 1,
              fontStyle: 'italic',
            }}
          >
            (searching...)
          </Typography>
        )}
      </Typography>
    </Box>
  );
};

export default ResultsSummary;
