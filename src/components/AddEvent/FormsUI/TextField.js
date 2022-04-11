import { useField } from "formik";

import TextField from "@mui/material/TextField";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

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

  return <TextField {...configTextField} />;
};

export default TextFieldWrapper;
