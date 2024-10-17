# Test Automation with Cypress.js

This project uses Cypress.js to automate user login testing, both successful and failed attempts, and updating user information in a web application. 

Cypress is a JavaScript-based end-to-end testing framework that allows developers to write tests and run them in a real browser.

## Prerequisites

- Node.js (v12 or higher)
- npm (or yarn)
- Cypress.js

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```
2. Install the dependencies:
    ```bash
    npm install
    ```

## Project Structure

The project contains the following files and folders:
    ```bash
    /cypress
      /e2e
        /login.spec.cy.js
        /user.spec.cy.js
      /fixtures
        /user
          /userData.json
      /pages
        /dashboardPage.js
        /loginPage.js
        /myinfoPage.js
      /support
    ```
    
## Running Tests
To run all tests, you can use the following command:
     ```bash
    # You open the Cypress UI
    npx cypress open

    # Run the automation by command line
    npx cypress run
    ```
