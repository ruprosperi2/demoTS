
describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.get("input[name=email]").should("be.visible");
    cy.get("input[name=email]").type("rarias@medine.tech");
    cy.get("input[name=email]").should("have.value", "rarias@medine.tech");

    cy.get("input[name=password]").should("be.visible");
    cy.get("input[name=password]").type("rarias.01");
    cy.get("input[name=password]").should("have.value", "rarias.01");

  });
});
