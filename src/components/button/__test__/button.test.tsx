import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { MainButton } from "../index";

describe("Main Button", () => {
  const mainButtonText = "StartDrawing";

  it("renders start drawing", () => {
    render(<MainButton />);
    const buttonText = screen.getByLabelText(mainButtonText);
    expect(buttonText).toBeInTheDocument();
  });

  it("calls a function when clicked", () => {
    const onClick = jest.fn();
    render(<MainButton onClick={onClick} />);
    userEvent.click(screen.getByText(mainButtonText));
    expect(onClick).toBeCalled();
  });
});
