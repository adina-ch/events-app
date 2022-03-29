import { NavLink } from "react-router-dom";

import axios from "axios";
import { Formik, Form } from "formik";

import {
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import TextFieldWrapper from "./FormsUI/TextField";
import DateTimePicker from "./FormsUI/DateTimePicker";

import { initialValues, validationSchema } from "../../utils/utils";

const AddEvent = () => {
  const onSubmit = (values, { resetForm }) => {
    const { description } = values;

    axios
      .post(
        "https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events.json",
        {
          ...values,
          description: description || "No description provided",
        }
      )
      .then((response) => {
        console.log("Your event was successfully created!");
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
    resetForm();
  };
  return (
    <>
      <Toolbar />
      <Container>
        <Typography sx={{ padding: "0.75em 0" }} variant="h1">
          Create new event
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextFieldWrapper name="title" label="Title*" />
              </Grid>
              <Grid item xs={6}>
                <DateTimePicker name="date" type="date" label="Date*" />
              </Grid>

              <Grid item xs={6}>
                <TextFieldWrapper name="attendees" label="Attendees*" />
              </Grid>

              <Grid item xs={6}>
                <DateTimePicker
                  name="startTime"
                  type="time"
                  label="Start time*"
                />
              </Grid>

              <Grid item xs={6}>
                <TextFieldWrapper name="location" label="Location*" />
              </Grid>

              <Grid item xs={6}>
                <DateTimePicker name="endTime" type="time" label="End time*" />
              </Grid>

              <Grid item xs={12}>
                <TextFieldWrapper
                  name="description"
                  label="Description"
                  multiline={true}
                  rows={4}
                />
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={2} direction="row" sx={{ marginTop: "1em" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ fontSize: "16px", padding: "0.5em 2em" }}
                  >
                    Create
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ fontSize: "16px", padding: "0.5em 2em" }}
                    component={NavLink}
                    to="/"
                  >
                    Cancel
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default AddEvent;
