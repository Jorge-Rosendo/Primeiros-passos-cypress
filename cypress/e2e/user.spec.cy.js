import { first } from "lodash"
import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MyInfoPage from "../pages/myInfoPage"
 
const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('Successfull User Info Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSeccess.username, userData.userSeccess.password)
    dashboardPage.checkLocation()
    dashboardPage.pressMyInfoButton()
    myInfoPage.checkLocation()
    myInfoPage.changingNames(chance.first(), chance.animal(), chance.last() )
    myInfoPage.changingId(chance.natural({min: 100000000, max: 999999999}), chance.natural({min: 1000000, max: 9999999}))
    myInfoPage.changingDriverLicense(chance.natural({min: 10000, max: 99999}))
    myInfoPage.changingLicenseExpiry("2034-01-01")
    myInfoPage.selectNationality()
    myInfoPage.selectMaritalStatus()
    myInfoPage.savingUpdates()
    myInfoPage.checkingUpdates()
  })
})