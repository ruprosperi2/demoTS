import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";


import {Login} from "../../src/components";

describe("testing Login component", function () {
  it("should draw the component Login ", async function () {
    render(<Login/>);

    const email = screen.getByLabelText("Correo electrónico");
    const password = screen.getByLabelText("Contraseña");

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

  });
});