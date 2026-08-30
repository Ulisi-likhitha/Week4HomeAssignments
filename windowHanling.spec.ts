import { test, expect } from "@playwright/test";

test("Merge Leads - Window Handling", async ({ page }) => {

    // 1. Navigate to Leaftaps
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // 2. Enter username
    await page.locator("#username").fill("DemoSalesManager");

    // 3. Enter password
    await page.locator("#password").fill("crmsfa");

    // 4. Click Login
    await page.getByRole("button", { name: "Login" }).click();

    // 5. Click CRM/SFA
    await page.getByText("CRM/SFA").click();

    // 6. Click Leads
    await page.getByText("Leads").click();

    // 7. Click Merge Leads
    await page.getByText("Merge Leads").click();


    // 8. Click From Lead widget
    const fromLeadPagePromise = page.waitForEvent("popup");

    await page.locator('img[alt="Lookup"]').first().click();

    const fromLeadPage = await fromLeadPagePromise;

    // 9. Select first resulting Lead ID
    await fromLeadPage.waitForLoadState();

    await fromLeadPage.locator("a").filter({
        hasText: /^\d+$/
    }).first().click();

    // 10. Click To Lead widget
    const toLeadPagePromise = page.waitForEvent("popup");

    await page.locator('img[alt="Lookup"]').nth(1).click();

    const toLeadPage = await toLeadPagePromise;

    // 11. Select second resulting Lead ID
    await toLeadPage.waitForLoadState();

    await toLeadPage.locator("a").filter({
        hasText: /^\d+$/
    }).first().click();

    // 12. Handle confirmation alert
    page.on("dialog", async (dialog) => {

        console.log("Alert message:", dialog.message());
        console.log("Alert type:", dialog.type());

        await dialog.accept();
    });

    // 13. Click Merge button
    await page.getByRole("link", { name: "Merge" }).click();

    // 14. Wait for navigation
    await page.waitForLoadState();

    // 15. Assert page title
    await expect(page).toHaveTitle(/View Lead/);

});