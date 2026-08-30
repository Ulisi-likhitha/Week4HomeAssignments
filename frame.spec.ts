import { test, expect } from "@playwright/test";

test("Handle Frames", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    // Count frames
    console.log("Total frames:", page.frames().length);

    // First frame
    const frame = page.frames()[1];

    // Click button
    await frame.getByRole("button", { name: "Click Me" }).click();

    // Verify text
    await expect(
        frame.getByRole("button")
    ).toHaveText("Hurray! You Clicked Me.");

    // Nested frame
    const nestedFrame = page.frames()[2];

    // Child frame
    const childFrame = nestedFrame.childFrames()[0];

    // Click nested frame button
    await childFrame.getByRole("button", { name: "Click Me" }).click();

    // Verify text
    await expect(
        childFrame.getByRole("button")
    ).toHaveText("Hurray! You Clicked Me.");
});