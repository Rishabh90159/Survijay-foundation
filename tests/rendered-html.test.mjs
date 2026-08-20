import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the NGO homepage with production metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /SurVijay Foundation/);
  assert.match(html, /Helping people build safer, stronger futures/);
  assert.match(html, /Become a volunteer/);
  assert.match(html, /Education, health, and dignity/);
  assert.match(html, /\/images\/community-hero\.png/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("renders important static routes", async () => {
  const expected = [
    ["/about", "Rooted in community"],
    ["/programs", "Programs that turn support into visible outcomes"],
    ["/impact", "Impact should be specific"],
    ["/stories", "Human stories make the mission memorable"],
    ["/gallery", "Photos and field moments"],
    ["/get-involved", "Choose the way you want to support"],
    ["/volunteer", "Give your time where it can be felt directly"],
    ["/donate", "without online payment integration"],
    ["/transparency", "Trust grows when documents"],
    ["/contact", "Start a conversation with the team"],
    ["/programs/education", "Education and learning support"],
    ["/programs/health", "Community health awareness"],
    ["/programs/women-empowerment", "Women empowerment through skills"],
    ["/programs/relief", "Relief and essentials"],
    ["/programs/youth-leadership", "Youth leadership for confident"],
    ["/programs/environment", "Environment drives"],
  ];

  for (const [path, text] of expected) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), new RegExp(text, "i"));
  }
});

test("removes disposable starter preview files and dependency", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
});
