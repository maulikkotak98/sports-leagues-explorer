import React, { useCallback } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { UI_CONFIG } from '../constants';

interface SportFilterProps {
  value: string;
  onChange: (value: string) => void;
  sports: string[];
}

/**
 * SportFilter component for filtering leagues by sport type
 * Optimized with React.memo to prevent unnecessary re-renders
 */
export const SportFilter: React.FC<SportFilterProps> = React.memo(({
  value,
  onChange,
  sports,
}) => {
  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="sport-filter-label">{UI_CONFIG.FILTER_LABEL}</InputLabel>
      <Select
        labelId="sport-filter-label"
        value={value}
        onChange={handleChange}
        label={UI_CONFIG.FILTER_LABEL}
        sx={{
          borderRadius: 2,
        }}
      >
        <MenuItem value="">
          <em>{UI_CONFIG.ALL_SPORTS_LABEL}</em>
        </MenuItem>
        {sports.map((sport) => (
          <MenuItem key={sport} value={sport}>
            {sport}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});
