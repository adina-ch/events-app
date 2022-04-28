import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useField, useFormikContext } from "formik";

const StartTimePicker = ({ name }) => {
  const { setFieldValue, initialValues } = useFormikContext();

  const [value, setValue] = useState(initialValues.startTime);
  const [field, meta] = useField(name);

  const timePickerConfig = {
    fullWidth: true,
    variant: "outlined",
    ...field,
  };

  if (meta && meta.touched && meta.error) {
    timePickerConfig.error = true;
    timePickerConfig.helperText = meta.error;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          label="Start time*"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setFieldValue("startTime", newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} {...timePickerConfig} />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default StartTimePicker;
