import React from "react";
import { FaSort } from "react-icons/fa";
import { ActionBox } from "../../assets/styles/shared.styled";

const Sort = () => {
  return (
    <ActionBox>
      <FaSort size={15} />
      <span>Sort</span>
    </ActionBox>
  );
};

export default Sort;
