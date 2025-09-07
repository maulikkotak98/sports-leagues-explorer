import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

import { UI_CONFIG, DEFAULT_SPORT } from '../constants';

interface SportFilterProps {
  value: string;
  onChange: (value: string) => void;
  sports: string[];
}

const SportFilter: React.FC<SportFilterProps> = ({
  value,
  onChange,
  sports,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

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
        <MenuItem value={DEFAULT_SPORT}>
          <em>{DEFAULT_SPORT}</em>
        </MenuItem>
        {sports.map((sport) => (
          <MenuItem key={sport} value={sport}>
            {sport}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(SportFilter);
