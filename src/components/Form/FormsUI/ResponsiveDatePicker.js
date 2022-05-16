import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ResponsiveDatePicker = ({
  label,
  name,
  setFieldValue,
  initialValues,
  values,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disablePast
        label={label}
        openTo="day"
        views={["year", "month", "day"]}
        minDate={initialValues[name]}
        value={values[name]}
        onChange={(newValue) => {
          setFieldValue(name, newValue);
        }}
        renderInput={(params) => <TextField {...params} fullWidth={true} />}
      />
    </LocalizationProvider>
  );
};

export default ResponsiveDatePicker;
