import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import styles from "../EventsList.module.scss";

import { SORT_FIELD_OPTIONS } from "../../../utils/utils";

const Sort = ({ value, defaultVal, handleChange }) => {
  return (
    <FormControl>
      <InputLabel id="sort-by-label">Sort by</InputLabel>
      <Select
        id="sort-by-label"
        value={value}
        onChange={handleChange}
        label="Sort by"
        displayEmpty
        className={styles.select}
        defaultValue={defaultVal}
      >
        {SORT_FIELD_OPTIONS.map((option) => {
          const { value, id, label } = option;
          return (
            <MenuItem value={value} key={id}>
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Sort;
