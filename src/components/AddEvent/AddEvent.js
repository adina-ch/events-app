import { useState } from "react";

import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, Grid, Stack } from "@mui/material";

import { CreateEvent } from "./AddEvent.styled";
import { Title } from "../../assets/styles/shared.styled";

import TextFieldWrapper from "./FormsUI/TextField";
import DateTimePicker from "./FormsUI/DateTimePicker";
import ButtonWrapper from "./FormsUI/Button";

const initialValues = {
  title: "",
  attendees: "",
  location: "",
  description: "",
  date: "",
  time: "",
};

const validationSchema = Yup.object({
  // complex validation to be added
  title: Yup.string().required("Title is required"),
  attendees: Yup.string().required("Attendees are required"),
  location: Yup.string().required("Location is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

const onSubmit = (values, { resetForm }) => {
  axios
    .post(
      "https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events.json",
      {
        title: `${values.title}`,
        attendees: `${values.attendees}`,
        location: `${values.location}`,
        description: `${values.description}` || "No description provided",
        date: `${values.date}`,
        time: `${values.time}`,
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  resetForm();
};

const AddEvent = () => {
  return (
    <CreateEvent>
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
              // border: "1px solid red",
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
                <ButtonWrapper variant="contained">Create</ButtonWrapper>
                <Button variant="outlined">Cancel</Button>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </CreateEvent>
  );
};

export default AddEvent;
