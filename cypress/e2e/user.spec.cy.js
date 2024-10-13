import { first } from "lodash"
import userData from "../fixtures/users/userData.json"

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
     usernameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "[type='submit']",
     sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
     dashboardGrid: ".orangehrm-dashboard-grid",
     wrongCredentialAlert: "[role='alert']",
     myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
     firstNameField: "[name='firstName']",
     middleNameField: "[name='middleName']",
     lastNameField: "[name='lastName']",
     genericField: ".oxd-input--active",
     editLocalSection: ".orangehrm-edit-employee",
     dateField: "[placeholder='yyyy-dd-mm']",
     dateCloseButton: ".--close",
     saveButton: "[type='submit']",
     successConfirmCloseButton: ".oxd-toast-close",
     successConfirmButton: ".oxd-toast-icon-wrap > .oxd-icon"
  }

  it('Successfull Login', () => {
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
  it('Successfull User Info Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSeccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSeccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.editLocalSection)
    cy.get(selectorsList.firstNameField).clear().type("FirstName Test")
    cy.get(selectorsList.middleNameField).clear()
    cy.get(selectorsList.lastNameField).clear().type("LastName Test")
    cy.get(selectorsList.genericField).eq(3).clear().type("123456789")
    cy.get(selectorsList.genericField).eq(4).clear().type("1234567")
    cy.get(selectorsList.genericField).eq(5).clear().type("12345")
    cy.get(selectorsList.dateField).eq(0).clear().type("2034-01-01")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get(selectorsList.successConfirmCloseButton)
    cy.get(selectorsList.successConfirmButton)
  })
})