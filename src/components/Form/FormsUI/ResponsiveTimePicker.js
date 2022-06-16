import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const ResponsiveTimePicker = ({
  name,
  label,
  setFieldValue,
  value,
  errors,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setFieldValue(name, newValue);
        }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              error={!!errors[name]}
              helperText={errors[name]}
              fullWidth={true}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default ResponsiveTimePicker;
