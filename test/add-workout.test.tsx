import React from "react";
import {
  act,
  fireEvent,
  getAllByRole,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import { WorkoutForm } from "../components/WorkoutForm";

describe(`${WorkoutForm.name} renders the required form fields`, () => {
  it("should render date input", () => {
    render(<WorkoutForm />);
    expect(screen.getByTestId("date")).toBeInTheDocument();
  });

  it("should render notes input", () => {
    render(<WorkoutForm />);
    expect(screen.getByTestId("notes")).toBeInTheDocument();
  });

  it("should render three checkboxes", () => {
    render(<WorkoutForm />);
    expect(screen.getAllByRole("checkbox").length).toBe(3);
  });

  describe("WorkoutForm renders conditional form fields upon checkbox click", () => {
    it("should render distance input upon click", () => {
      const context = render(<WorkoutForm />);
      const checkbox = getAllByRole(context.container, "checkbox")[0];
      fireEvent.click(checkbox);
      expect(screen.getByTestId("distanceInMeters")).toBeInTheDocument();
    });

    it("should render duration input upon click", () => {
      const context = render(<WorkoutForm />);
      const checkbox = getAllByRole(context.container, "checkbox")[0];
      fireEvent.click(checkbox);
      expect(screen.getByTestId("durationInSeconds")).toBeInTheDocument();
    });

    it("should render the correct number of partial forms upon multiple clicks", () => {
      const context = render(<WorkoutForm />);
      const bikingCheckbox = getAllByRole(context.container, "checkbox")[0];
      const swimmingCheckbox = getAllByRole(context.container, "checkbox")[2];

      act(() => {
        bikingCheckbox.dispatchEvent(
          new MouseEvent("click", { bubbles: true })
        );
        bikingCheckbox.dispatchEvent(
          new MouseEvent("click", { bubbles: true })
        );
        swimmingCheckbox.dispatchEvent(
          new MouseEvent("click", { bubbles: true })
        );
      });

      expect(screen.getAllByTestId("date").length).toBe(1);
    });
  });
});
