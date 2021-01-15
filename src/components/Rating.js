/*
    Copyright (C) 2021 Hanna Tiara Andarlia
*/
import React, { useState } from "react";
import "../assets/styles/rating.css";
import { Emotes } from "../constants";

export default function Rating({ setExperience }) {
  const [rate, setRate] = useState("");

  const select = (value) => {
    setRate(value);
    setExperience(value);
  };

  return (
    <ul className="rate-container">
      {Emotes.map((x, i) => (
        <li
          className={` ${x.id === rate ? "selected" : ""} `}
          key={i}
          onClick={() => select(x.id)}
        >
          {rate === x.id ? (
            <div className="rate-emote">
              <div className="emote">
                <img
                  src={x.img}
                  className={`${i === Emotes.length - 1 ? "last" : ""}`}
                  alt={x.name}
                />
              </div>
              <p className={`name ${i === Emotes.length - 1 ? "last" : ""}`}>
                {x.name}
              </p>
            </div>
          ) : (
            <div className="rate-count">
              <div className="number">
                <span>{x.id}</span>
              </div>
              <p className="name">{x.name}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
