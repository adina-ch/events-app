import React from "react";

const Padding = ({ children, all, top, right, bottom, left, style = {} }) => {
  const paddingStyles = {};
  paddingStyles.paddingTop = top || all;
  paddingStyles.paddingRight = right || all;
  paddingStyles.paddingBottom = bottom || all;
  paddingStyles.paddingLeft = left || all;

  return (
    <div
      style={{
        ...style,
        ...paddingStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Padding;
