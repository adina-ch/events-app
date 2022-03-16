import { MdSearch } from "react-icons/md";
import { StyledSearch } from "./SearchForm.styled";

const SearchForm = ({ searchTerm, handleSearch }) => {
  return (
    <StyledSearch>
      <input
        placeholder="Find event..."
        onChange={handleSearch}
        value={searchTerm}
      />
      <MdSearch size={30} className="search-icon" />
    </StyledSearch>
  );
};

export default SearchForm;
