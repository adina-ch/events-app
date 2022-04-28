import { useContext, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";

import {
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import "../../styles/globalStyles.scss";

import { EventsContext } from "../../EventsContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";
import TextFieldWrapper from "./FormsUI/TextField";
import { AttendeesInput } from "./FormsUI/AttendeesInput";
import { initialValues, validationSchema } from "../../utils/utils";

import ResponsiveDatePicker from "./FormsUI/DatePicker";
import StartTimePicker from "./FormsUI/StartTimePicker";
import EndTimePicker from "./FormsUI/EndTimePicker";

const AddEvent = () => {
  const { createEvent, getActiveRoute } = useContext(EventsContext);
  const { updateSnack } = useContext(SnackbarContext);

  useEffect(() => {
    getActiveRoute();
  }, []);

  let navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    const { description } = values;

    createEvent({
      ...values,
      description: description || "No description provided",
    })
      .then((response) => {
        updateSnack("Event created successfully!", true, "success");
      })
      .catch((error) => {
        updateSnack(
          "Something went wrong. Please try again later.",
          true,
          "success"
        );
      });
    setTimeout(() => {
      updateSnack("", false, "success");
    }, 2500);

    resetForm();

    navigate("/");
  };

  return (
    <>
      <Toolbar />
      <Container className="container">
        <Typography variant="h1">Create new event</Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, isValid }) => {
            return (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="title" label="Title*" />
                  </Grid>
                  <Grid item xs={6}>
                    <ResponsiveDatePicker name="date" />
                  </Grid>

                  <Grid item xs={6}>
                    <AttendeesInput name="attendees" label="Attendees*" />
                  </Grid>

                  <Grid item xs={6}>
                    <StartTimePicker name="startTime" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextFieldWrapper name="location" label="Location*" />
                  </Grid>

                  <Grid item xs={6}>
                    <EndTimePicker name="endTime" />
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
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting || !isValid}
                      >
                        Create
                      </Button>
                      <Button variant="outlined" component={NavLink} to="/">
                        Cancel
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </>
  );
};

export default AddEvent;
