import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import "../styles.scss";

import { capitalizeWordFirstLetter } from "../../../utils/utils";

const Sort = ({ value, defaultVal, handleChange }) => {
  const options = ["none", "title", "date", "description"];

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label="Sort by"
        displayEmpty
        className="select"
        defaultValue={defaultVal}
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
  );
};

export default Sort;
