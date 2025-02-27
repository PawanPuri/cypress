class LoginPage {
    visit() {
      cy.visit("http://localhost:3000");
    }
  
    enterUsername(username) {
      cy.get("input[placeholder='Username']").type(username);
    }
  
    enterPassword(password) {
      cy.get("input[placeholder='Password']").type(password);
    }
  
    submit() {
      cy.get("button[type='submit']").click();
    }
  
    verifyLoginSuccess(username) {
      cy.contains(`Welcome, ${username}!`).should("be.visible");
    }
  
    verifyLoginFailure() {
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal("Invalid Credentials");
      });
    }
  }
  
  export default new LoginPage();
  