import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const ResponsiveTimePicker = ({ name, label, setFieldValue, values }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}
        value={values[name]}
        onChange={(newValue) => {
          setFieldValue(name, newValue);
        }}
        renderInput={(params) => <TextField {...params} fullWidth={true} />}
      />
    </LocalizationProvider>
  );
};

export default ResponsiveTimePicker;
