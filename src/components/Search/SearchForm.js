import { MdSearch } from "react-icons/md";
import { StyledSearch } from "./SearchForm.styled";

// import { Formik, Form, Field } from "formik";

const SearchForm = () => {
  return (
    <StyledSearch>
      <input placeholder="Find event..." />
      <MdSearch size={30} className="search-icon" />

      {/* <button>
        <MdSearch size={30} />
      </button> */}
    </StyledSearch>
  );
};

export default SearchForm;
