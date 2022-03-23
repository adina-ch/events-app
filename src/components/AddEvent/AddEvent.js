import axios from "axios";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";

import { Button, Grid, Stack } from "@mui/material";

import { Title } from "../../assets/styles/shared.styled";

import { initialValues, validationSchema } from "../../utils/utils";

import TextFieldWrapper from "./FormsUI/TextField";
import DateTimePicker from "./FormsUI/DateTimePicker";

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
    })
    .catch((error) => {
      console.log("Something went wrong. Please try again later.");
    });
  resetForm();
};

const AddEvent = () => {
  return (
    <div>
      <Title>Create new event</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Grid
            container
            spacing={2}
            sx={{
              padding: "1em 2em",
            }}
          >
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
              <DateTimePicker name="time" type="time" label="Time*" />
            </Grid>

            <Grid item xs={6}>
              <TextFieldWrapper name="location" label="Location*" />
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
                <Button variant="contained" type="submit">
                  Create
                </Button>
                <Button variant="outlined">Cancel</Button>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default AddEvent;
