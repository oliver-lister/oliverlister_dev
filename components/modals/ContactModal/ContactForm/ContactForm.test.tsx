import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Contact Form component", () => {
  let mockSubmit: jest.Mock;
  let loadingState: boolean;
  let submitButton: HTMLElement;

  beforeEach(() => {
    mockSubmit = jest.fn();
    loadingState = false;
    render(<ContactForm onSubmit={mockSubmit} isLoading={loadingState} />);
    submitButton = screen.getByRole("button", { name: /submit/i });
  });

  afterEach(cleanup);

  it("displays correct form labels", () => {
    const nameLabel = screen.getByLabelText(/Name/i);
    const emailLabel = screen.getByLabelText(/Email/i);
    const messageLabel = screen.getByLabelText(/Message/i);

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });

  it("shows error validation text when form is submitted without any entries", async () => {
    // Pre-maturely click the submission button
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Find all error messages and check that they're all in the document
    const errorMessages: HTMLElement[] = screen.getAllByTestId("error-message");
    errorMessages.forEach((error) => {
      expect(error).toBeInTheDocument();
    });

    // Check that mockSubmit has not been called
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("calls mockSubmit when valid entries are provided", async () => {
    await act(async () => {
      // Fill out the form fields with valid data
      fireEvent.change(screen.getByLabelText(/Name/i), {
        target: { value: "John Doe" },
      });
      fireEvent.change(screen.getByLabelText(/Email/i), {
        target: { value: "johndoe@example.com" },
      });
      fireEvent.change(screen.getByLabelText(/Message/i), {
        target: {
          value: "This is a test message, that is atleast 25 characters.",
        },
      });
      fireEvent.click(submitButton);
    });

    // Ensure there are no error messages
    const errorMessages: HTMLElement[] =
      screen.queryAllByTestId("error-message");
    expect(errorMessages.length).toBe(0);

    // Check if mockSubmit was called
    expect(mockSubmit).toHaveBeenCalled();
  });
  it("does not call mockSubmit when invalid entries are provided", async () => {
    await act(async () => {
      // Fill out the form fields with invalid data
      fireEvent.change(screen.getByLabelText(/Name/i), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByLabelText(/Email/i), {
        target: { value: "john.example.net" },
      });
      fireEvent.change(screen.getByLabelText(/Message/i), {
        target: {
          value: "Spam.",
        },
      });
      fireEvent.click(submitButton);
    });

    // Find all error messages and check that they're all in the document
    const errorMessages: HTMLElement[] = screen.getAllByTestId("error-message");
    errorMessages.forEach((error) => {
      expect(error).toBeInTheDocument();
    });

    // Check if mockSubmit was called
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
