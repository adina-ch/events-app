import { useEffect, useState } from "react";

import { useField, useFormikContext } from "formik";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import { fetchAttendees } from "../../../API/attendees";

export const AttendeesInput = ({
  name,
  label,
  value,
  attendeesDefaultValue,
  ...otherProps
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const { setFieldValue, initialValues } = useFormikContext();

  const [field, meta] = useField(name);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const attendees = await fetchAttendees();

      if (active) {
        setOptions([...attendees]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const configTextField = {
    fullWidth: true,
    variant: "outlined",
    ...otherProps,
    ...field,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  const handleChange = (event, value) => {
    setFieldValue(
      "attendees",
      value !== null ? value : initialValues.attendees
    );
  };

  return (
    <Autocomplete
      id="attendees"
      multiple
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      defaultValue={attendeesDefaultValue}
      options={options}
      loading={loading}
      name={name}
      renderInput={(params) => (
        <TextField
          {...configTextField}
          {...params}
          label={label}
          value={value}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
