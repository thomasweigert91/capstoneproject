import {render, screen} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders an octopus", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /🐙/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
