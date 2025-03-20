import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  const mockOnSelect = jest.fn();
  const data = [
    { title: "SCP-002" },
    { title: "SCP-003" },
    { title: "SCP-004" },
    { title: "SCP-005" },
    { title: "SCP-006" },
  ];

  test("should render Home and SCP items", () => {
    const { getByText } = render(<Navbar data={data} onSelect={mockOnSelect} />);
    
    // Check for Home button
    const homeButton = getByText(/Home/i);
    expect(homeButton).toBeInTheDocument();

    // Check for SCP buttons
    data.forEach(item => {
      const button = getByText(new RegExp(item.title, "i"));
      expect(button).toBeInTheDocument();
    });
  });

  test("should navigate to Home when Home button is clicked", () => {
    const { getByText } = render(<Navbar data={data} onSelect={mockOnSelect} />);
    const homeButton = getByText(/Home/i);

    fireEvent.click(homeButton);

    // Simulate navigation
    expect(window.location.href).toBe("http://localhost/");
  });

  test("should call onSelect when an SCP item button is clicked", () => {
    const { getByText } = render(<Navbar data={data} onSelect={mockOnSelect} />);

    data.forEach(item => {
      const button = getByText(new RegExp(item.title, "i"));
      fireEvent.click(button);
      expect(mockOnSelect).toHaveBeenCalledWith(item);
    });
  });
});
