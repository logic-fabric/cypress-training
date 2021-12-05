it("Visit Google page and type a request", () => {
  // Visit Google.com:
  cy.visit("https://google.com");

  // Accept cookies:
  cy.get("#L2AGLb").click();

  // Type "Cypress.io" in searchbar and launch the search:
  cy.get(".a4bIc").type("Cypress.io").type("{enter}");

  // The searchbar in result pages should still contains the request:
  cy.get("input.gLFyf").invoke("attr", "value").should("contain", "Cypress.io");
});
