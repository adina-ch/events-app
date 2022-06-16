import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ResponsiveDatePicker = ({
  label,
  name,
  setFieldValue,
  minDate,
  value,
  errors,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        name={name}
        disablePast
        label={label}
        openTo="day"
        views={["year", "month", "day"]}
        minDate={new Date(minDate)}
        value={new Date(value)}
        onChange={(newValue) => {
          setFieldValue(name, newValue);
        }}
        inputFormat="dd-MM-yyyy"
        mask={"__-__-____"}
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!errors[name]}
            helperText={errors[name]}
            fullWidth={true}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default ResponsiveDatePicker;
