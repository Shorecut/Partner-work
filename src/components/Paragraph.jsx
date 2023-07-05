import React, { useState } from "react";

const Paragraph = ({ addText }) => {
  const [inpText, setInpText] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inpText.trim()) {
            return;
          }
          const newText = {
            id: Date.now(),
            text: inpText,
          };
          addText(newText);
          setInpText("");
        }}
      >
        <input
          value={inpText}
          onChange={(e) => {
            setInpText(e.target.value);
          }}
          type="text"
        />

        <button>Add</button>
      </form>
    </>
  );
};

export default Paragraph;
