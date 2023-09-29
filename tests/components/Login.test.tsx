import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";


import {Login} from "../../src/components";
import axios from "axios";

// describe("testing Login component", function () {
//   it("should draw the component Login ", async function () {
//     render(<Login/>);
//
//     const email = screen.getByLabelText("Email");
//     const password = screen.getByLabelText("Password");
//
//     expect(email).toBeInTheDocument();
//     expect(password).toBeInTheDocument();
//
//   });
// });

describe("Login Form",()=>{
  it("Should render the correct input field", () =>{
    render(<Login />);

    const emailInput = screen.findByLabelText("Email");
    const passwordInput = screen.findByLabelText("Password");

    const input = screen.getByLabelText("Email");

    expect(emailInput).toBeDefined();
    expect(input).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it("should submit the form with the provided credentials", async () => {
    axios.post = jest.fn().mockResolvedValue({
      data: {
        success: true,
        message: "Acceso Correcto",
        data: { api_token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"}
      }
    });

    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(emailInput, { target: { value: "fjmn2001@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "mnonline03" } });
    fireEvent.click(submitButton);

    await screen.findByText("Acceso Correcto");

    expect(emailInput).toHaveValue("fjmn2001@gmail.com");
    expect(passwordInput).toHaveValue("mnonline03");
  });

  it("should submit the form with the provided credentials and fail", async () => {
    axios.post = jest.fn().mockResolvedValue({
      data: { success: false, message: "Acceso Incorrecto", data: [] }
    });

    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(emailInput, { target: { value: "fjmn2001@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "mnonline0" } });
    fireEvent.click(submitButton);

    await screen.findByText("Acceso Incorrecto");

    expect(emailInput).toHaveValue("fjmn2001@gmail.com");
    expect(passwordInput).toHaveValue("mnonline0");
  });
});