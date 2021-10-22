import React, { useState } from "react";
import "./Display.scss";
import DatePicker from "react-datepicker";
import { GoCalendar } from "react-icons/go";
import Graph from "./Graph";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="container" id="con">
        <h6 id="top">Filter</h6>
        <div className="row">
          <div className="col-xl-3 col-12">
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
          <div className="col-xl-3 col-12">
            <div className="d-flex">
              <h4 id="inputText">From</h4>
              <DatePicker
                title="fromDate"
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
          </div>
          <div className="col-2 "></div>
          <div className="col-xl-3  col-12 ">
            <div className="d-flex">
              <h4 id="inputText">To</h4>
              <DatePicker
                title="toDate"
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
        </div>
      </div>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12 gx-0">
            <h1 id="average">Average Score</h1>
          </div>
        </div>
        <div className="row">
          <Graph from={from} to={to} />
        </div>
      </div>
    </>
  );
};

export default Display;
