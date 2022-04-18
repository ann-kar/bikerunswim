import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import Home from "../pages/index";

describe("test the testing library", () => {
  it("renders Header with appropriate text", () => {
    const context = render(<Header label={"hello"} />);
    const element = context.getByTestId("header");
    expect(element?.textContent).toBe("hello");
  });

  it("renders index page", () => {
    const context = render(<Home />);
    const element = context.getByTestId("header");
    expect(element?.textContent).toBe("Welcome back!");
  });
});
describe("test the index page", () => {
 
});
