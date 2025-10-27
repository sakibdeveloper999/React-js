// File: RHFExample.test.jsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RHFExample from "./RHFExample";

// ✅ 1️⃣ Helper: get input fields easily
const setup = () => {
  render(<RHFExample />);
  const emailInput = screen.getByPlaceholderText("example@gmail.com");
  const passwordInput = screen.getByPlaceholderText("********");
  const submitBtn = screen.getByRole("button", { name: /submit/i });
  return { emailInput, passwordInput, submitBtn };
};

describe("🔍 RHFExample Form Tests", () => {
  test("renders the form correctly", () => {
    setup();
    expect(screen.getByText(/react hook form example/i)).toBeInTheDocument();
  });

  test("shows error if email is empty", async () => {
    const { submitBtn } = setup();
    await userEvent.click(submitBtn);

    // Yup error message should appear
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
  });

  test("shows error for invalid email", async () => {
    const { emailInput, passwordInput, submitBtn } = setup();
    await userEvent.type(emailInput, "sakib");
    await userEvent.type(passwordInput, "123456");
    await userEvent.click(submitBtn);

    expect(await screen.findByText("Enter a valid email")).toBeInTheDocument();
  });

  test("shows error for short password", async () => {
    const { emailInput, passwordInput, submitBtn } = setup();
    await userEvent.type(emailInput, "test@gmail.com");
    await userEvent.type(passwordInput, "123");
    await userEvent.click(submitBtn);

    expect(
      await screen.findByText("Password must be at least 6 characters")
    ).toBeInTheDocument();
  });

  test("submits successfully with valid input", async () => {
    const { emailInput, passwordInput, submitBtn } = setup();
    await userEvent.type(emailInput, "valid@example.com");
    await userEvent.type(passwordInput, "123456");

    // Mock alert()
    window.alert = vi.fn() || jest.fn();

    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Form submitted successfully!");
    });
  });
});
