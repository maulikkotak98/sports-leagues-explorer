import React, { useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Alert,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import type { League } from '../types/api';
import { useSeasonBadge } from '../hooks/useSeasonBadge';
import { ERROR_MESSAGES, LOADING_MESSAGES } from '../constants';

interface SeasonBadgeDialogProps {
  open: boolean;
  onClose: () => void;
  league: League;
  leagueId: string | null;
}

const SeasonBadgeDialog: React.FC<SeasonBadgeDialogProps> = ({
  open,
  onClose,
  league,
  leagueId,
}) => {
  const { data: seasonData, isLoading, error } = useSeasonBadge(leagueId);

  const firstSeasonWithBadge = seasonData?.seasons?.find(
    (season) => season.strBadge,
  );

  const handleImageError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const target = event.target as HTMLImageElement;
      target.style.display = 'none';
    },
    [],
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {league.strLeague} - Season Badge
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {isLoading && (
          <Box display="flex" justifyContent="center" p={3}>
            <CircularProgress />
            <Typography variant="body2" sx={{ ml: 2, alignSelf: 'center' }}>
              {LOADING_MESSAGES.LOADING_BADGE}
            </Typography>
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {ERROR_MESSAGES.FAILED_TO_LOAD_BADGE}
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              League ID: {leagueId}
            </Typography>
          </Alert>
        )}

        {!isLoading && !error && seasonData && (
          <>
            {firstSeasonWithBadge?.strBadge ? (
              <Box textAlign="center" p={2}>
                <img
                  src={firstSeasonWithBadge.strBadge}
                  alt={`${league.strLeague} season badge`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                  onError={handleImageError}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  <strong>Season:</strong> {firstSeasonWithBadge.strSeason}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  sx={{ mt: 1 }}
                >
                  Found{' '}
                  {seasonData.seasons?.filter((s) => s.strBadge).length || 0}{' '}
                  seasons with badges
                </Typography>
              </Box>
            ) : (
              <Alert severity="info" sx={{ textAlign: 'center' }}>
                <Typography variant="body2">
                  {ERROR_MESSAGES.NO_BADGE_AVAILABLE}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Found {seasonData.seasons?.length || 0} seasons total
                </Typography>
              </Alert>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(SeasonBadgeDialog);
