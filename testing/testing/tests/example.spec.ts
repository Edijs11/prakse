import { test, expect } from "@playwright/test";
const { chromium } = require("playwright"); // Or 'firefox' or 'webkit'.
const testData = {
  user1: {
    id: "1164",
    email: "edijsskudra11@gmail.com",
    password: "edijs123",
  },
};

test("should sign in", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByRole("button", { name: "Autorizēties Mednis kontā" }).click();
  await page.fill('[name="E-pasta adrese"]', testData.user1.email);
  await page.fill('[name="Parole"]', testData.user1.password);
  //   page.on('request', request => {
  //       requestUrls.push(request.url())
  // });
  //   await page.locator('button:has-text("Autorizēties")').click();
  //   const callBackUrl = requestUrls.filter(element => {
  //     if (element.includes(`${process.env.REDIRECT_URI}`)) {
  //         return true;
  //     }
  // })

  await page.getByRole("button", { name: "Autorizēties" }).click();
  // const response = page.waitForResponse(
  //   (response) => response.url() === "http://localhost:3000/account"
  // );
  // await page.getByRole("button", { name: "Autorizēties" }).click();
  // expect((await response).status()).toBe(200);

  // await page.waitForURL("https://webtest.mednis.app/account");
  // await page.locator(`//*[@id=${testData.user1.id}]`);
  // await page.getByRole("paragraph", { name: "Lietotāja ID" });
  // expect(testData.user1.id).toBe(id);

  // await expect(page.getByText(`${testData.user1.id}`)).toBeVisible();

  // const testDataId = testData.user1.id;

  // const selector = `[id="${testDataId}"]`;

  // await page.waitForSelector(selector);

  // const element = await page.$(selector);

  // {
  //   element
  //     ? console.log("Element found:", element)
  //     : console.log("Element not found:");
  // }
});
// test("should register", async ({ page }) => {
//   await page.goto("https:/webtest.mednis.app");
//   await page.getByRole("button", { name: "Izveidot Mednis kontu" }).click();
//   // await page.getByRole("checkbox", { name: "terms" }).check();
//   // await page
//   //   .getByLabel(
//   //     "Esmu izlasījis Lietošanas nosacījumus un piekrītu tiem. Esmu izlasījis Privātuma politiku."
//   //   )
//   //   .check();
//   await page.getByRole("button", { name: "Turpināt" }).click();
// });
