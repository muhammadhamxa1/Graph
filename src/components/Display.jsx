import React, { useState } from "react";
import "./Display.scss";
import DatePicker from "react-datepicker";
import { GoCalendar } from "react-icons/go";
import Graph from "./Graph";

const Display = () => {
  const [to, setToDate] = useState(new Date());
  const [from, setFromDate] = useState(new Date());

  const toDate = (e) => {
    console.log(e);
    setToDate(e);
  };
  const fromDate = (e) => {
    console.log(e);
    setFromDate(e);
  };

  return (
    <>
      <div className="flex-container">
        <h6 id="top">Filter</h6>
        <div className="dropdown flex-item">
          <a
            className="btn btn-outline-secondary dropdown-toggle"
            href="!#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Hotels
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="!#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="!#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="!#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <h4 id="inputText">From</h4>
          <DatePicker
            className="flex-item"
            selected={from}
            onChange={(Date) => fromDate(Date)}
            selectsStart
            startDate={from}
            endDate={to}
          />
          <h1 id="cal">
            <GoCalendar />
          </h1>
        </div>
        <div className="d-flex">
          <h4 id="inputText">To</h4>
          <DatePicker
            className="flex-item"
            selected={to}
            onChange={(Date) => toDate(Date)}
            selectsEnd
            startDate={from}
            endDate={to}
            minDate={from}
          />
          <h1 id="cal">
            <GoCalendar />
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1>Average Score</h1>
        </div>
        <Graph from={from} to={to} />
      </div>
    </>
  );
};

export default Display;
