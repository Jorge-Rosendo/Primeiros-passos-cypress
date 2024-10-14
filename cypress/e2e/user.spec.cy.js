import { first } from "lodash"
import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage"
import DashboadPage from "../pages/dashboardPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboadPage()

describe('Orange HRM Tests', () => {
  
  const selectorsList = {

     sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
     

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
     successConfirmButton: ".oxd-toast-icon-wrap > .oxd-icon",
     selectArrow: ".oxd-select-text--arrow",
     nationalitySelect: ":nth-child(27) > span",
     matiralSelect: ".oxd-select-dropdown > :nth-child(3)"
  }

  it('Successfull Login', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSeccess.username, userData.userSeccess.password)
    dashboardPage.checkLocation()
  })

  it('Failed Login', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.wrongCredentialsFailLogin()
  })

  it('Successfull User Info Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSeccess.username, userData.userSeccess.password)
    dashboardPage.checkLocation()
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
    
    cy.get(selectorsList.selectArrow).eq(0).click()
    cy.get(selectorsList.nationalitySelect).click()
    cy.get(selectorsList.selectArrow).eq(1).click()
    cy.get(selectorsList.matiralSelect).click()

    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get(selectorsList.successConfirmCloseButton)
    cy.get(selectorsList.successConfirmButton)
  })
})