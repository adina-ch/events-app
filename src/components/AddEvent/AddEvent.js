import { StyledButton, Title } from "../../assets/styles/shared.styled";
import { CreateEvent, InputWrapper } from "./AddEvent.styled";
import { useFormik } from "formik";

const AddEvent = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      attendees: "",
      location: "",
      description: "",
      date: "",
      time: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
      formik.resetForm();
    },
    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.title = "Title is required";
      }

      if (!values.date) {
        errors.date = "Date is required";
      }

      if (!values.time) {
        errors.time = "Time is required";
      }

      return errors;
    },
  });
  return (
    <CreateEvent>
      <Title>Create new event</Title>
      <form onSubmit={formik.handleSubmit} className="create-event-form">
        <InputWrapper>
          <label htmlFor="title">Title*</label>
          <input
            id="title"
            name="title"
            type="text"
            {...formik.getFieldProps("title")}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error"> {formik.errors.title}</div>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="attendees">Attendees</label>
          <input
            id="attendees"
            name="attendees"
            type="text"
            {...formik.getFieldProps("attendees")}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            {...formik.getFieldProps("location")}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            {...formik.getFieldProps("description")}
          />
        </InputWrapper>

        <div className="date-time">
          <InputWrapper>
            <label>Event date*</label>
            <input
              id="date"
              name="date"
              type="date"
              {...formik.getFieldProps("date")}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="error"> {formik.errors.date}</div>
            ) : null}
          </InputWrapper>
          <InputWrapper>
            <label>Event time*</label>
            <input
              id="time"
              name="time"
              type="time"
              {...formik.getFieldProps("time")}
            />
            {formik.touched.time && formik.errors.time ? (
              <div className="error"> {formik.errors.time}</div>
            ) : null}
          </InputWrapper>
        </div>

        <div className="btn-wrapper">
          <StyledButton primary type="submit">
            Create
          </StyledButton>
          <StyledButton type="button">Cancel</StyledButton>
        </div>
      </form>
    </CreateEvent>
  );
};

export default AddEvent;
