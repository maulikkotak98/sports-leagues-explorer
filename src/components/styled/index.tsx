import { styled } from '@mui/material/styles';
import { Box, Paper, List, ListItemButton } from '@mui/material';
import { UI_CONFIG } from '../../constants';

// Layout components
export const FullHeightContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  maxWidth: UI_CONFIG.MAX_WIDTH,
  margin: '0 auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}));

// List components
export const ScrollableListContainer = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  height: '100%',
  overflow: 'hidden',
}));

export const ScrollableList = styled(List)({
  width: '100%',
  padding: 0,
  height: '100%',
  overflow: 'auto',
});


export const LeagueButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => !['isFirst', 'isLast'].includes(prop as string),
})<{ isFirst?: boolean; isLast?: boolean }>(({ theme, isFirst, isLast }) => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(2.5)}`,
  minHeight: 48,
  transition: 'all 0.2s ease-in-out',
  borderRadius:
    isFirst && isLast
      ? theme.spacing(1)
      : isFirst
        ? `${theme.spacing(1)} ${theme.spacing(1)} 0 0`
        : isLast
          ? `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`
          : 0,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'translateX(2px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  [theme.breakpoints.up('sm')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    minHeight: 56,
  },
  [theme.breakpoints.up('md')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(3.5)}`,
  },
}));

export const LeagueCardContent = styled(Box)({
  width: '100%',
});

export const LeagueHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },
}));

// Kept for future use
export const LeagueDetails = styled(Box)({});
export const LeagueListItem = styled(Box)({});

// Page layout
export const PageContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.background.default,
  overflow: 'hidden',
}));
