import assert from "node:assert/strict";
import { test } from "node:test";
import { adminAccessStatus } from "./admin-policy";

test("only the configured owner has access", () => {
  assert.equal(adminAccessStatus("user_owner", "user_owner"), 200);
  assert.equal(adminAccessStatus("user_other", "user_owner"), 403);
  assert.equal(adminAccessStatus(null, "user_owner"), 401);
});

test("missing or empty configuration never grants access", () => {
  for (const ownerId of [undefined, "", "   "]) {
    assert.equal(adminAccessStatus("user_owner", ownerId), 403);
    assert.equal(adminAccessStatus(null, ownerId), 401);
  }
});
