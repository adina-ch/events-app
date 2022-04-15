import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { Stack, Typography } from "@mui/material";

const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",

      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#e1dbff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#624DCF",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#e1dbff",
    borderRadius: 20 / 2,
  },
}));

const CustomSwitch = ({ isDescending, handleChange }) => {
  const onChange = (event) => {
    handleChange(event.target.checked);
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Ascending</Typography>
      <MaterialUISwitch
        checked={isDescending}
        onChange={onChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Typography>Descending</Typography>
    </Stack>
  );
};

export default CustomSwitch;
