import { useContext, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { Formik, Form, getIn, Field } from "formik";

import {
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import "../../styles/globalStyles.scss";
import styles from "./addEvent.module.scss";

import { EventsContext } from "../../EventsContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";
import TextFieldWrapper from "./FormsUI/TextField";
import { AttendeesInput } from "./FormsUI/AttendeesInput";
import { initialValues, validationSchema } from "../../utils/utils";

import ResponsiveDatePicker from "./FormsUI/ResponsiveDatePicker";
import ResponsiveTimePicker from "./FormsUI/ResponsiveTimePicker";

const AddEvent = () => {
  const { createEvent, getActiveRoute, eventToBeEdited, updateEvent } =
    useContext(EventsContext);
  const { updateSnack } = useContext(SnackbarContext);

  useEffect(() => {
    getActiveRoute();
  }, []);

  const navigate = useNavigate();

  const handleCreateEvent = (event, description) => {
    createEvent({
      ...event,
      description: description || "No description provided",
    })
      .then((response) => {
        updateSnack("Event created successfully!", true, "success");
      })
      .catch((error) => {
        updateSnack(
          "Something went wrong. Please try again later.",
          true,
          "error"
        );
      });
  };

  const handleEditEvent = (id, event) => {
    updateEvent(id, { ...event })
      .then((response) => {
        updateSnack("Event edited successfully!", true, "success");
      })
      .catch((error) => {
        updateSnack(
          "Something went wrong. Please try again later.",
          true,
          "error"
        );
      });
  };

  const onSubmit = (values, { resetForm }) => {
    const { description } = values;

    if (eventToBeEdited) {
      handleEditEvent(eventToBeEdited.id, values);
    } else {
      handleCreateEvent(values, description);
    }

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
          {({ isSubmitting, values, initialValues, setFieldValue }) => {
            return (
              <Form>
                <Grid container columnSpacing={5} rowSpacing={2}>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="title" label="Title*" />
                  </Grid>
                  <Grid item xs={6}>
                    <ResponsiveDatePicker
                      name="date"
                      label="Date*"
                      values={values}
                      initialValues={initialValues}
                      setFieldValue={setFieldValue}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <AttendeesInput name="attendees" label="Attendees*" />
                  </Grid>

                  <Grid item xs={6}>
                    <ResponsiveTimePicker
                      name="startTime"
                      label="Start Time*"
                      values={values}
                      setFieldValue={setFieldValue}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextFieldWrapper name="location" label="Location*" />
                  </Grid>
                  <Grid item xs={6}>
                    <ResponsiveTimePicker
                      name="endTime"
                      label="End Time*"
                      values={values}
                      setFieldValue={setFieldValue}
                    />
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
                        disabled={isSubmitting}
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
