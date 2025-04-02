import { test, expect } from "@playwright/test";

test.describe("Basic HTML form", async () => {
  test.beforeEach("Navigate to the page", async ({ page }) => {
    const htmlFormUrl = process.env.BASIC_HTML_FORM_URL as string;
    await page.goto(htmlFormUrl);
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Test username field", async ({ page }) => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill("testUser");
    await expect(usernameInput).toHaveValue("testUser");
  });

  test("Test password field", async ({ page }) => {
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("testPass");
    await expect(passwordInput).toHaveValue("testPass");
  });

  test("Test textArea field", async ({ page }) => {
    const textField = page.locator("xpath=//textarea");
    await expect(textField).toBeVisible();
    await textField.fill("testTest");
    await expect(textField).toHaveValue("testTest");
  });

  test("Test checkbox selection", async ({ page }) => {
    const checkboxE1 = page.locator("xpath=//input[@value='cb2']");
    await expect(checkboxE1).toBeVisible();
    await checkboxE1.check();
    await expect(checkboxE1).toBeChecked();
  });

  test("Test radio items", async ({ page }) => {
    const radioItem = page.locator("xpath=//input[@value='rd3']");
    await expect(radioItem).toBeVisible();
    await radioItem.check();
    await expect(radioItem).toBeChecked();
  });

  test("Select dropdown option", async ({ page }) => {
    const dropdown = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption("dd2");
    await expect(dropdown).toHaveValue("dd2");
  });

  test("Submit the form", async ({ page }) => {
    const submitButton = page.locator("xpath=//input[@type='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.hover();
    await submitButton.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );
  });
});
