/*TODO: Visit local host
  go through all inputs and inserts / assert data
  check the submission
*/

const user = {
  name: "Facker name",
  email: "fake_email@email.com",
  password: "pword12345"
}

describe("test form input", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("Fill put form", () => {
    //Name
    cy.get('[data-cy="name"]')
      .type(user.name)
      .should('have.value', user.name)
    //email
    cy.get('[data-cy="email"]')
      .type(user.email)
      .should('have.value', user.email)
    //password
    cy.get('[data-cy="password"]')
      .type(user.password)
      .should('have.value', user.password)
    //terms
    cy.get('[data-cy="terms"]')
      .check()
      .should('have.checked')
    //submit
    cy.get('[data-cy="submit"]')
      .should("be.enabled")
      .click()

  })

  it("btn disabled on load, Should fail", () => {
    cy.get('[data-cy="submit"]')
      .click()

  })

  


})