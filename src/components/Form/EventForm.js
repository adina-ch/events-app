import { NavLink } from "react-router-dom";

import { Formik, Form } from "formik";

import { Button, Grid, Stack, Typography } from "@mui/material";

import TextFieldWrapper from "./FormsUI/TextField";
import { AttendeesInput } from "./FormsUI/AttendeesInput";
import { validationSchema } from "../../utils/utils";

import ResponsiveDatePicker from "./FormsUI/ResponsiveDatePicker";
import ResponsiveTimePicker from "./FormsUI/ResponsiveTimePicker";

import styles from "./EventForm.module.scss";
import { LoadingButton } from "@mui/lab";

const EventForm = ({
  pageTitle,
  onSubmit,
  submitBtnText,
  cancelBtnText,
  initialValues,
  loading,
}) => {
  return (
    <>
      <Typography variant="h1">{pageTitle}</Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, values, setFieldValue, errors }) => {
          return (
            <Form className={styles.eventsForm}>
              <Grid container columnSpacing={5} rowSpacing={2}>
                <Grid item xs={12} md={6}>
                  <TextFieldWrapper name="title" label="Title*" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ResponsiveDatePicker
                    name="date"
                    label="Date*"
                    value={values.date}
                    minDate={new Date()}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <AttendeesInput
                    name="attendees"
                    label="Attendees*"
                    attendeesDefaultValue={initialValues.attendees}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextFieldWrapper name="location" label="Location*" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <ResponsiveTimePicker
                    name="startTime"
                    label="Start Time*"
                    value={values.startTime}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <ResponsiveTimePicker
                    name="endTime"
                    label="End Time*"
                    value={values.endTime}
                    setFieldValue={setFieldValue}
                    errors={errors}
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
                    <LoadingButton
                      variant="contained"
                      type="submit"
                      loading={loading}
                      disabled={isSubmitting || Object.keys(errors).length > 0}
                    >
                      {submitBtnText}
                    </LoadingButton>
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
    </>
  );
};

export default EventForm;
