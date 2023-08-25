import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import {App} from "../../src/components";

describe("testing App component", function () {
  it("should draw the component App", async function () {
    render(<App/>);

    const name = await screen.findByText(/Hola soy ruben/i);

    expect(name).toBeDefined();

  });
});