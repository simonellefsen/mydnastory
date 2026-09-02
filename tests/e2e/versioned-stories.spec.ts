import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const stories = [
  { version: "v2", title: "Three tests. Three scales of time." },
  { version: "v3", title: "Evidence before interpretation." },
  { version: "v4", title: "One genome is not one story." },
] as const;

for (const story of stories) {
  test(`${story.version} renders with navigation, metadata, and no serious accessibility violations`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto(`/en/${story.version}/simon`);
    await expect(page.getByRole("heading", { level: 1, name: story.title })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Versions" })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/en/${story.version}/simon$`));
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    expect(consoleErrors).toEqual([]);

    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    expect(result.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical")).toEqual([]);
  });
}

test("Danish content and locale-preserving version navigation", async ({ page }) => {
  await page.goto("/da/v2/simon");
  await expect(page.locator("html")).toHaveAttribute("lang", "da");
  await expect(page.getByRole("heading", { level: 1, name: "Tre tests. Tre tidsskalaer." })).toBeVisible();
  await page.getByRole("link", { name: "Dossier" }).click();
  await expect(page).toHaveURL(/\/da\/v3\/simon$/);
  await expect(page.getByRole("heading", { level: 1, name: "Evidens før fortolkning." })).toBeVisible();
});

test("v3 connection filters separate source classes", async ({ page }) => {
  await page.goto("/en/v3/simon");
  await page.getByRole("button", { name: "Peer-reviewed" }).click();
  await expect(page.getByText("Fannerup 855", { exact: true })).toBeVisible();
  await expect(page.getByText("FamilyTreeDNA notable connections", { exact: true })).toBeHidden();
  await page.getByRole("button", { name: "Vendor" }).click();
  await expect(page.getByText("FamilyTreeDNA notable connections", { exact: true })).toBeVisible();
  await expect(page.getByText("Fannerup 855", { exact: true })).toBeHidden();
});

test("v4 evidence tray exposes the public source trail", async ({ page }) => {
  await page.goto("/en/v4/simon");
  await page.getByText("Open evidence trail", { exact: true }).click();
  await expect(page.getByRole("link", { name: /myOrigins Version 3 White Paper/ })).toBeVisible();
  await expect(page.getByText("Verified from a private export; only the aggregate is public.", { exact: true })).toBeVisible();
});

test("v4 removes non-essential motion when reduced motion is requested", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en/v4/simon");
  const animatedElements = await page.locator("*").evaluateAll((elements) => elements.filter((element) => {
    const style = getComputedStyle(element);
    const hasAnimation = style.animationName !== "none" && style.animationDuration
      .split(",")
      .some((duration) => Number.parseFloat(duration) > 0.001);
    const hasTransition = style.transitionDuration
      .split(",")
      .some((duration) => Number.parseFloat(duration) > 0.001);
    return hasAnimation || hasTransition;
  }).length);
  expect(animatedElements).toBe(0);
});

test("bare versioned routes retain locale negotiation", async ({ page }) => {
  await page.goto("/v4/simon");
  await expect(page).toHaveURL(/\/(en|da)\/v4\/simon$/);
});

test("version roots open the default Simon story", async ({ page }) => {
  const roots = [
    { path: "/da/v2", destination: "/da/v2/simon", title: "Tre tests. Tre tidsskalaer." },
    { path: "/da/v3", destination: "/da/v3/simon", title: "Evidens før fortolkning." },
    { path: "/da/v4", destination: "/da/v4/simon", title: "Ét genom er ikke én historie." },
  ];

  for (const root of roots) {
    await page.goto(root.path);
    await expect(page).toHaveURL(new RegExp(`${root.destination}$`));
    await expect(page.getByRole("heading", { level: 1, name: root.title })).toBeVisible();
  }

  await page.goto("/v2");
  await expect(page).toHaveURL(/\/(en|da)\/v2\/simon$/);
});

test("all versioned content remains visible without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  for (const story of stories) {
    await page.goto(`/en/${story.version}/simon`);
    await expect(page.getByRole("heading", { level: 1, name: story.title })).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    expect((await page.locator("main").innerText()).length).toBeGreaterThan(500);
  }
  await context.close();
});
