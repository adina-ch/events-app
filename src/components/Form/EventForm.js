import { NavLink } from "react-router-dom";

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

import TextFieldWrapper from "./FormsUI/TextField";
import { AttendeesInput } from "./FormsUI/AttendeesInput";
import { validationSchema } from "../../utils/utils";

import ResponsiveDatePicker from "./FormsUI/ResponsiveDatePicker";
import ResponsiveTimePicker from "./FormsUI/ResponsiveTimePicker";

const EventForm = ({
  pageTitle,
  onSubmit,
  submitBtnText,
  cancelBtnText,
  initialValues,
  attendeesDefaultValue,
}) => {
  return (
    <>
      <Toolbar />
      <Container className="container">
        <Typography variant="h1">{pageTitle}</Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => {
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
                    <AttendeesInput
                      name="attendees"
                      label="Attendees*"
                      attendeesDefaultValue={attendeesDefaultValue}
                    />
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
                        {submitBtnText}
                      </Button>
                      <Button variant="outlined" component={NavLink} to="/">
                        {cancelBtnText}
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

export default EventForm;
