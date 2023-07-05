import React, { useState } from "react";

const Counter = ({ increment, decrement, count }) => {
  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
