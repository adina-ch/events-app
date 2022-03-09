import React from "react";
import { FaFilter } from "react-icons/fa";
import { ActionBox } from "../../assets/styles/shared.styled";

const Filter = () => {
  return (
    <ActionBox>
      <FaFilter size={15} />
      <span>Filter</span>
    </ActionBox>
  );
};

export default Filter;
