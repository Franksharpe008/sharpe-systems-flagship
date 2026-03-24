import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(
  "/Users/franksharpe/Documents/New project/hybrid-orchestrator/package.json"
);
const { chromium } = require("playwright-core");

const SITE_URL = process.env.SHARPE_SYSTEMS_URL || "http://127.0.0.1:3000";
const CDP_URL = process.env.COMET_CDP_URL || "http://127.0.0.1:9222";
const OUTPUT_DIR =
  process.env.SHARPE_SYSTEMS_VALIDATION_DIR ||
  "/Users/franksharpe/Documents/New project/output/business-execution-runs/20260324_084821_sharpe-systems-flagship-v5/receipts/screenshots";
const RESULT_PATH =
  process.env.SHARPE_SYSTEMS_VALIDATION_RESULT ||
  "/Users/franksharpe/Documents/New project/output/business-execution-runs/20260324_084821_sharpe-systems-flagship-v5/receipts/comet-validation.json";

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function attachPage(context, viewport) {
  const page = await context.newPage();
  await page.setViewportSize(viewport);
  return page;
}

async function captureConsole(page, sink, prefix) {
  page.on("console", (message) => {
    sink.push({
      channel: `${prefix}:console`,
      type: message.type(),
      text: message.text()
    });
  });
  page.on("pageerror", (error) => {
    sink.push({
      channel: `${prefix}:pageerror`,
      type: "error",
      text: String(error)
    });
  });
}

async function verifyDesktop(page, outDir) {
  await page.goto(SITE_URL, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForSelector(".hero-video", { timeout: 20000 });
  await page.waitForTimeout(1400);

  const heroVideo = await page.locator(".hero-video").first().evaluate((video) => ({
    currentSrc: video.currentSrc,
    muted: video.muted,
    loop: video.loop,
    paused: video.paused,
    readyState: video.readyState,
    poster: video.poster
  }));

  await page.screenshot({
    path: path.join(outDir, "desktop-home-v5.png"),
    fullPage: true
  });

  await page.goto(`${SITE_URL}/work`, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForSelector(".case-command", { timeout: 20000 });
  await page.locator(".case-switch").nth(1).click();
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outDir, "desktop-work-v5.png"),
    fullPage: true
  });
  const workState = {
    activeCase: await page.locator(".case-command-copy h3").innerText(),
    ctaHref: await page.locator(".case-command-copy .primary-button").getAttribute("href")
  };

  await page.goto(`${SITE_URL}/surfaces`, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForSelector(".surface-gallery", { timeout: 20000 });
  await page.locator(".surface-chip").nth(2).click();
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outDir, "desktop-surfaces-v5.png"),
    fullPage: true
  });
  const surfaceState = {
    activeScene: await page.locator(".surface-stage-copy h3").innerText(),
    previewTag: await page.locator(".surface-stage-media").locator("video, img").evaluate((node) => node.tagName)
  };

  await page.locator("#media-dock .audio-expand").click();
  await page.waitForTimeout(400);
  const audioState = await page.locator("#media-dock audio").evaluate((audio) => ({
    preload: audio.preload,
    src: audio.currentSrc
  }));
  await page.screenshot({
    path: path.join(outDir, "desktop-audio-dock-v5.png"),
    fullPage: false
  });

  await page.goto(`${SITE_URL}/contact`, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForSelector(".diagnostic-form", { timeout: 20000 });
  await page.locator(".diagnostic-form [name='name']").fill("Frank Sharpe");
  await page.locator(".diagnostic-form [name='email']").fill("franksharpe008@gmail.com");
  await page.locator(".diagnostic-form [name='company']").fill("Sharpe Systems");
  await page.locator(".diagnostic-form [name='siteUrl']").fill("https://sharpe-systems-flagship.vercel.app/");
  await page.locator(".diagnostic-form [name='serviceNeed']").selectOption("full-system");
  await page.locator(".diagnostic-form [name='primaryOpportunity']").selectOption("scale");
  await page.locator(".diagnostic-form [name='urgency']").selectOption("immediate");
  await page.locator(".diagnostic-form [name='budgetBand']").selectOption("30k+");
  await page.locator(".diagnostic-form [name='bottleneck']").selectOption("trust");
  await page.locator(".diagnostic-form button[type='submit']").click();
  await page.waitForTimeout(700);
  await page.screenshot({
    path: path.join(outDir, "desktop-contact-result-v5.png"),
    fullPage: true
  });

  const recommendation = {
    lane: await page.locator(".diagnostic-result h3").innerText(),
    focus: await page.locator(".result-grid strong").nth(0).innerText(),
    nextStep: await page.locator(".result-grid strong").nth(1).innerText(),
    deliveryShape: await page.locator(".result-grid strong").nth(2).innerText()
  };

  return {
    title: await page.title(),
    url: page.url(),
    heroVideo,
    workState,
    surfaceState,
    audioState,
    recommendation
  };
}

async function verifyMobile(page, outDir) {
  await page.goto(SITE_URL, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForSelector("#menu-button", { timeout: 20000 });
  await page.click("#menu-button");
  await page.waitForSelector("#site-menu.is-open", { timeout: 10000 });
  await page.screenshot({
    path: path.join(outDir, "mobile-menu-v5.png"),
    fullPage: true
  });

  const menuState = await page.locator("#site-menu").evaluate((node) => ({
    open: node.classList.contains("is-open"),
    ariaHidden: node.getAttribute("aria-hidden")
  }));

  await page.locator("#site-menu a[href='/operator']").click();
  await page.waitForURL("**/operator", { timeout: 20000 });
  await page.waitForSelector(".offer-architect", { timeout: 20000 });
  await page.locator(".chip-row").nth(0).locator("button").nth(2).click();
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(outDir, "mobile-operator-v5.png"),
    fullPage: true
  });

  return {
    url: page.url(),
    menuState,
    operatorHeadline: await page.locator(".architect-result h3").innerText()
  };
}

async function verifyReducedMotion(page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(SITE_URL, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForSelector(".kinetic-char", { timeout: 20000 });
  await page.waitForTimeout(500);

  return page.locator(".kinetic-char").first().evaluate((node) => {
    const style = getComputedStyle(node);
    return {
      animationName: style.animationName,
      animationDuration: style.animationDuration
    };
  });
}

async function main() {
  await ensureDir(OUTPUT_DIR);

  const browser = await chromium.connectOverCDP(CDP_URL);
  const context = browser.contexts()[0];
  const messages = [];

  const desktop = await attachPage(context, { width: 1512, height: 960 });
  await captureConsole(desktop, messages, "desktop");
  const desktopResult = await verifyDesktop(desktop, OUTPUT_DIR);

  const mobile = await attachPage(context, { width: 430, height: 932 });
  await captureConsole(mobile, messages, "mobile");
  const mobileResult = await verifyMobile(mobile, OUTPUT_DIR);

  const reduced = await attachPage(context, { width: 1280, height: 900 });
  await captureConsole(reduced, messages, "reduced");
  const reducedMotion = await verifyReducedMotion(reduced);

  const result = {
    checkedAt: new Date().toISOString(),
    siteUrl: SITE_URL,
    cdpUrl: CDP_URL,
    desktop: desktopResult,
    mobile: mobileResult,
    reducedMotion,
    messages
  };

  await fs.writeFile(RESULT_PATH, JSON.stringify(result, null, 2));

  await reduced.close();
  await mobile.close();
  await desktop.close();

  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
