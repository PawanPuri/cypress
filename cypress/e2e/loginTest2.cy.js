import LoginPage from "../pages/LoginPage2";
describe("Login Page Test", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Valid login scenario", () => {
    LoginPage.enterUsername("admin");
    LoginPage.enterPassword("password123");
    LoginPage.submit();
    LoginPage.verifyLoginSuccess("admin");
  });

  it("Invalid login scenario", () => {
    LoginPage.enterUsername("wrongUser");
    LoginPage.enterPassword("wrongPass");
    LoginPage.submit();
    LoginPage.verifyLoginFailure();
  });
});
