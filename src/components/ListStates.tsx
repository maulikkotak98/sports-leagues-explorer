import React from 'react';
import { Box, CircularProgress, Alert } from '@mui/material';
import { ERROR_MESSAGES } from '../constants';

interface ListStatesProps {
  isLoading?: boolean;
  error?: boolean;
  isEmpty?: boolean;
  emptyMessage?: string;
}

const boxStyles = { py: 4, px: { xs: 2, sm: 3, md: 4 } }

/**
 * Component for handling different list states (loading, error, empty)
 * Optimized with React.memo to prevent unnecessary re-renders
 */
export const ListStates: React.FC<ListStatesProps> = React.memo(({
  isLoading = false,
  error = false,
  isEmpty = false,
  emptyMessage = ERROR_MESSAGES.NO_LEAGUES_FOUND,
}) => {
  if (isLoading) {
    return (
      <Box sx={boxStyles}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress size={60} />
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={boxStyles}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {ERROR_MESSAGES.FAILED_TO_LOAD_LEAGUES}
        </Alert>
      </Box>
    );
  }

  if (isEmpty) {
    return (
      <Alert severity="info" sx={{ mt: 3 }}>
        {emptyMessage}
      </Alert>
    );
  }

  return null;
});
