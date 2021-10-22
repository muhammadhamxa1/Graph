import React from "react";
import ReactDOM from "react-dom";
import Display from "./Display";
import { render, fireEvent,cleanup} from "@testing-library/react";

afterEach(() => {
    jest.restoreAllMocks();
  });
afterEach(cleanup);

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display></Display>, div);
  });

it("render toCalender", () => {
  const { queryByTitle } = render(<Display />);
  const DatePicker = queryByTitle("toDate");
  expect(DatePicker).toBeTruthy();
});

it("render fromCalender", () => {
  const { queryByTitle } = render(<Display />);
  const DatePicker = queryByTitle("fromDate");
  expect(DatePicker).toBeTruthy();
});
describe("inputDate", () => {
  it("toClick", () => {
    const { queryByTitle } = render(<Display />);
    const toDate = queryByTitle("toDate");
    let today = new Date();
    const date =
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getDate() +
      "/" +
      today.getFullYear();
    expect(toDate.value).toBe(date);
    fireEvent.change(toDate, { target: { value: "13/06/1998" } });
    expect(toDate.value).toBe("13/06/1998");
  });
  it("fromClick", () => {
    const { queryByTitle } = render(<Display />);
    const fromDate = queryByTitle("fromDate");
    let today = new Date();
    const date =
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getDate() +
      "/" +
      today.getFullYear();
    expect(fromDate.value).toBe(date);
    fireEvent.change(fromDate, { target: { value: "13/06/1998" } });
    expect(fromDate.value).toBe("13/06/1998");
  });
});

