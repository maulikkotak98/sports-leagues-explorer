import React, { useState } from 'react';
import {
  Typography,
  Chip,
  Divider,
} from '@mui/material';
import type { League } from '../types/api';
import { SeasonBadgeDialog } from './SeasonBadgeDialog';
import {
  LeagueListItem,
  LeagueButton,
  LeagueCardContent,
  LeagueHeader,
  LeagueDetails,
} from './styled';

interface LeagueCardProps {
  league: League;
  isLast?: boolean;
  isFirst?: boolean;
}

/**
 * LeagueCard component for displaying individual league information
 * Optimized with React.memo to prevent unnecessary re-renders
 */
export const LeagueCard: React.FC<LeagueCardProps> = React.memo(({ league, isLast = false, isFirst = false }) => {
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = () => {
    setSelectedLeagueId(league.idLeague);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedLeagueId(null);
  };


  return (
    <>
      <LeagueListItem>
        <LeagueButton 
          onClick={handleCardClick}
          isFirst={isFirst}
          isLast={isLast}
          disableRipple
        >
          <LeagueCardContent>
            <LeagueHeader>
              <Typography 
                variant="h6"
               
              >
                {league.strLeague}
              </Typography>
              <Chip 
                label={league.strSport} 
                color="primary" 
                size="small"
                
              />
            </LeagueHeader>
            
            <LeagueDetails>
              {league.strLeagueAlternate && (
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ mb: 0.25 }}
                >
                  <strong>Also known as:</strong> {league.strLeagueAlternate}
                </Typography>
              )}
              <Typography 
                variant="caption" 
                color="text.secondary" 
                sx={{ 
                  fontStyle: 'italic',
                }}
              >
                Click to view season badge →
              </Typography>
            </LeagueDetails>
          </LeagueCardContent>
        </LeagueButton>
      </LeagueListItem>
      
      {!isLast && <Divider sx={{ mx: 2 }} />}

      <SeasonBadgeDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        league={league}
        leagueId={selectedLeagueId}
      />
    </>
  );
});
