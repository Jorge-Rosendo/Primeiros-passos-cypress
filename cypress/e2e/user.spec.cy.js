import { first } from "lodash"
import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MyInfoPage from "../pages/myInfoPage"
 
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

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

  it.only('Successfull User Info Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSeccess.username, userData.userSeccess.password)
    dashboardPage.checkLocation()
    dashboardPage.pressMyInfoButton()
    myInfoPage.checkLocation()
    myInfoPage.changingNames("FirstName Test", "MiddleName Test", "LastName Test" )
    myInfoPage.changingId()
    myInfoPage.changingDriverLicense()
    myInfoPage.changingLicenseExpiry()
    myInfoPage.selectNationality()
    myInfoPage.selectMaritalStatus()
    myInfoPage.savingUpdates()
    myInfoPage.checkingUpdates()
  })
})