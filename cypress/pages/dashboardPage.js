class DashboardPage {
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        } 
        return selectors
    }
    
    checkLocation(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid)
        
    }
    
    pressMyInfoButton(){
        cy.get(this.selectorsList().myInfoButton).click()
    }

}
export default DashboardPage;