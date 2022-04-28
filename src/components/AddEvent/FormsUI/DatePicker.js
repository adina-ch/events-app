import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useField, useFormikContext } from "formik";

const ResponsiveDatePicker = ({ name, ...otherProps }) => {
  const { setFieldValue, initialValues } = useFormikContext();
  const [value, setValue] = useState(initialValues.date);
  const [field, meta] = useField(name);

  const datePickerConfig = {
    fullWidth: true,
    variant: "outlined",
    ...field,
    ...otherProps,
  };

  if (meta && meta.touched && meta.error) {
    datePickerConfig.error = true;
    datePickerConfig.helperText = meta.error;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disablePast
        label="Date*"
        openTo="day"
        views={["year", "month", "day"]}
        minDate={initialValues.date}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setFieldValue("date", newValue);
        }}
        renderInput={(params) => (
          <TextField {...datePickerConfig} {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default ResponsiveDatePicker;
