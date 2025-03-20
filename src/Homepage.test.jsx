import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Homepage from './Homepage';

describe('Homepage component', () => {
  const mockData = [
    {
      title: 'SCP-002',
      image: { src: 'scp002.jpg', alt: 'SCP-002 Image' },
    },
    {
      title: 'SCP-003',
      image: { src: 'scp003.jpg', alt: 'SCP-003 Image' },
    },
  ];

  const mockOnSelect = jest.fn();

  it('should render the homepage items with title and images', () => {
    render(<Homepage data={mockData} onSelect={mockOnSelect} />);

    // Check for each item title and image
    mockData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByAltText(item.image.alt)).toBeInTheDocument();
    });
  });

  it('should call onSelect when an item is clicked', () => {
    render(<Homepage data={mockData} onSelect={mockOnSelect} />);

    // Click on the first item
    fireEvent.click(screen.getByText(mockData[0].title));

    // Check if onSelect was called with the correct data
    expect(mockOnSelect).toHaveBeenCalledWith(mockData[0]);
  });
});
