import React from "react";
import Button from "../Button/Button";

function FormButtons({ text, toggleModal }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Button
        text={text}
        background="backgroundOrange"
        buttonSize="largeButton"
        buttonType="submit"
      />
      <Button
        text="Cancel"
        background="backgroundWhite"
        buttonSize="largeButton"
        clickFunction={toggleModal}
      />
    </div>
  );
}

export default FormButtons;
