import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

// Mock SCP item data
const mockItem = {
  title: "SCP-002",
  object_class: "Euclid",
  image: {
    src: "scp002.jpg",
    alt: "SCP-002 Image",
  },
  special_containment_procedures: "SCP-002 must remain locked at all times.",
  description: "SCP-002 resembles a fleshy, organic structure...",
  addenda: {
    "Incident 002-Alpha": "Anomaly observed during transport.",
  },
  history: {
    event1: {
      date: "07/02/1949",
      event: "First containment breach occurred.",
    },
  },
};

describe("Card Component", () => {
  test("renders SCP title and object class", () => {
    render(<Card item={mockItem} />);
    expect(screen.getByText(/Title: SCP-002/i)).toBeInTheDocument();
    expect(screen.getByText(/Object Class: Euclid/i)).toBeInTheDocument();
  });

  test("renders image if available", () => {
    render(<Card item={mockItem} />);
    const imageElement = screen.getByAltText("SCP-002 Image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain("scp002.jpg");
  });

  test("displays Special Containment Procedures and Description", () => {
    render(<Card item={mockItem} />);
    expect(
      screen.getByText(/Special Containment Procedures:/i)
    ).toBeInTheDocument();
    expect(screen.getByText(mockItem.special_containment_procedures)).toBeInTheDocument();
    expect(screen.getByText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByText(mockItem.description)).toBeInTheDocument();
  });

  test("renders Addenda section if available", () => {
    render(<Card item={mockItem} />);
    expect(screen.getByText(/Addenda:/i)).toBeInTheDocument();
    expect(screen.getByText("Incident 002-Alpha:")).toBeInTheDocument();
    expect(screen.getByText(mockItem.addenda["Incident 002-Alpha"])).toBeInTheDocument();
  });

  test("renders History section if available", () => {
    render(<Card item={mockItem} />);
    expect(screen.getByText(/History:/i)).toBeInTheDocument();
    expect(screen.getByText(/07\/02\/1949/i)).toBeInTheDocument();
    expect(screen.getByText(/First containment breach occurred./i)).toBeInTheDocument();
  });
});
