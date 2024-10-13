import userData from "../fixtures/users/userData.json"

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
     usernameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "[type='submit']",
     sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
     dashboardGrid: ".orangehrm-dashboard-grid",
     wrongCredentialAlert: "[role='alert']"
  }

  it('Sucessfull Login', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSeccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSeccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Failed Login', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})