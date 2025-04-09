import React from "react";
import leftArrowIcon from "../../assets/leftArrow.svg";
import rightArrowIcon from "../../assets/rightArrow.svg";
import Button from "../Button/Button";

function PageNavigateBar({ pages, updatePage }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.2rem",
      }}
    >
      <Button
        icon={leftArrowIcon}
        buttonSize="smallButton"
        background={pages.currentPage === 1 ? "" : "shadow"}
        clickFunction={() => updatePage("left")}
      />
      <Button
        text={pages.currentPage}
        buttonSize="mediumButton"
        background="backgroundDarkGreen"
      />
      <Button
        icon={rightArrowIcon}
        buttonSize="smallButton"
        background={pages.currentPage === pages.totalPages ? "" : "shadow"}
        clickFunction={() => updatePage("right")}
      />
    </div>
  );
}

export default PageNavigateBar;
