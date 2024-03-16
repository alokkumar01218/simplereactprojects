import React from "react";
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultipe] = useState([]);
  function handleSingleSelection(getID) {
    setSelected(selected === getID ? null : getID);
    console.log(getID);
  }
  function handleMultiSelection(getID) {
    let cpyMultiple = [...multiple];
    const indexOfGetID = cpyMultiple.indexOf(getID);

    if (indexOfGetID === -1) {
      cpyMultiple.push(getID);
    } else {
      cpyMultiple.splice(indexOfGetID, 1);
    }
    setMultipe(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Miltiple selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
}
