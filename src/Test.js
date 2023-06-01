import React from "react";

const Test = (prop) => {
  return (
    <ul>
      {prop.arr.map((e) => (
        <div key={e.id}>
          <li>{e.id}</li>
          <li>{e.name}</li>
        </div>
      ))}
    </ul>
  );
};

export default Test;
