import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Contact Form component", () => {
  it("displays correct labels", () => {
    const mockSubmit = jest.fn();

    render(<ContactForm onSubmit={mockSubmit} isLoading={false} />);

    // Check if the form labels are rendered correctly
    const nameLabel = screen.getByLabelText(/Name/i);
    const emailLabel = screen.getByLabelText(/Email/i);
    const messageLabel = screen.getByLabelText(/Message/i);

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });
});
