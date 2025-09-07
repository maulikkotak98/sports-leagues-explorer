import React from 'react';
import { Typography, Box } from '@mui/material';

const LeaguesHeader: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 3 } }}>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontWeight: 600,
        }}
      >
        Sports Leagues
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Browse all leagues. Use search and sport filters. Click a league to load
        its season badge.
      </Typography>
    </Box>
  );
};

export default LeaguesHeader;
