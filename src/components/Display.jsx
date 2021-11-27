import React, { useState } from "react";
import "./Display.scss";
import DatePicker from "react-datepicker";
import { GoCalendar } from "react-icons/go";
import Graph from "./Graph";
import {
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";


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
      <Container id="con">
        <h6 id="top">Hy Tahoor</h6>
        <Row>
          <Col xl="3" xs="12">
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdownMenuLink">
            Select Hotels
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Col>
          <Col xl="3" xs="12" className="d-flex">
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
          </Col>
          <Col xs="2"></Col>
          <Col xl="3" xs="12" className="d-flex">
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
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row>
          <Col xs="12" className="gx-0">
            <h1 id="average">Average Score</h1>
          </Col>
        </Row>
        <Row>
          <Graph from={from} to={to} />
        </Row>
      </Container>
    </>
  );
};

export default Display;
