import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";

import { capitalizeWordFirstLetter } from "../../../utils/utils";

const Sort = ({ label, labelId, id, options, value, handleChange }) => {
  return (
    <Box
      sx={{
        minWidth: 120,
        display: "inline-block",
        marginRight: "1em",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((option, index) => {
            return (
              <MenuItem value={option} key={option[index]}>
                {capitalizeWordFirstLetter(option)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
