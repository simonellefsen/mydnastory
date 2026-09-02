import { describe, expect, it } from "vitest";
import { isStoryVersion, storyVersions, versionHref } from "./versions";

describe("versioned story routes", () => {
  it("exposes only implemented versions", () => {
    expect(storyVersions).toEqual(["v2", "v3"]);
    expect(isStoryVersion("v2")).toBe(true);
    expect(isStoryVersion("v3")).toBe(true);
    expect(isStoryVersion("v4")).toBe(false);
  });

  it("preserves locale and slug", () => {
    expect(versionHref("en", "v1", "simon")).toBe("/en/simon");
    expect(versionHref("da", "v2", "simon")).toBe("/da/v2/simon");
    expect(versionHref("en", "v3", "simon")).toBe("/en/v3/simon");
  });
});
