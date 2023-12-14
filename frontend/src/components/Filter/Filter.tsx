import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { ACTIVE, ALL, COMPLETED } from "../../utils/constants";
import { useFilterOptionStore } from "../../utils/stores";

export const Filter: React.FC = () => {
  const { option, updateFilterOption } = useFilterOptionStore();

  return (
    <Box px={2}>
      <FormControl>
        <RadioGroup
          value={option}
          onChange={(e) => updateFilterOption(e.target.value)}
        >
          <FormControlLabel value={ALL} control={<Radio />} label="All" />
          <FormControlLabel value={ACTIVE} control={<Radio />} label="Active" />
          <FormControlLabel
            value={COMPLETED}
            control={<Radio />}
            label="Completed"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
