class MyInfoPage {
     selectorsList(){
        const selectors = {
            myInfoGrid: ".orangehrm-edit-employee",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            selectArrow: ".oxd-select-text--arrow",
            nationalitySelect: ":nth-child(27) > span",
            matiralSelect: ".oxd-select-dropdown > :nth-child(3)",
            saveButton: "[type='submit']",
            successConfirmCloseButton: ".oxd-toast-close",
            successConfirmButton: ".oxd-toast-icon-wrap > .oxd-icon",       
        }
        return selectors
     } 

     checkLocation(){
        cy.get(this.selectorsList().myInfoGrid)
     }
     changingNames(firstName, middleName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
     }
     changingId(){
        cy.get(this.selectorsList().genericField).eq(3).clear().type("123456789")
        cy.get(this.selectorsList().genericField).eq(4).clear().type("1234567")
     }
     changingDriverLicense(){
        cy.get(this.selectorsList().genericField).eq(5).clear().type("12345")
     }
     changingLicenseExpiry(){
        cy.get(this.selectorsList().dateField).eq(0).clear().type("2034-01-01")
        cy.get(this.selectorsList().dateCloseButton).click()
     }
     selectNationality(){
        cy.get(this.selectorsList().selectArrow).eq(0).click()
        cy.get(this.selectorsList().nationalitySelect).click()
     }
     selectMaritalStatus(){
        cy.get(this.selectorsList().selectArrow).eq(1).click()
        cy.get(this.selectorsList().matiralSelect).click()
     }
     savingUpdates(){
        cy.get(this.selectorsList().saveButton).eq(0).click()
     }
     checkingUpdates(){
        cy.get(this.selectorsList().successConfirmCloseButton)
        cy.get(this.selectorsList().successConfirmButton)
     }
} 
export default MyInfoPage;