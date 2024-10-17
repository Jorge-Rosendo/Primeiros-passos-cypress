import { first } from "lodash"
import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
 
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

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
})