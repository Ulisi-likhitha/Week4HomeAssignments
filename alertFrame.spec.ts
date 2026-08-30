import { test, expect } from "@playwright/test";

test("Handle alert inside frame", async ({ page }) => {

    // Open the URL
    await page.goto(
        "https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm"
    );

    // Handle the alert
    page.on("dialog", async (dialog) => {

        console.log("Alert message:", dialog.message());
        console.log("Alert type:", dialog.type());

        await dialog.accept();
    });

    // Access the iframe and click Try it
    const frame = page.frameLocator("#iframeResult");

    await frame.getByRole("button", { name: "Try it" }).click();

    // Verify the text displayed after clicking OK
    const result = frame.locator("body");

    await expect(result).toContainText("You pressed OK!");
});