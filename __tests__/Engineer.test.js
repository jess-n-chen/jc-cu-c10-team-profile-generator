const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Lily Pad",
    "123456",
    "lilypad@hello.com",
    "lilynpad"
  );

  expect(engineer.name).toBe("Lily Pad");
  expect(engineer.id).toBe("123456");
  expect(engineer.email).toBe("lilypad@hello.com");
  expect(engineer.github).toBe("lilynpad");
});

test("gets engineer's name", () => {
  const engineer = new Engineer(
    "Lily Pad",
    "123456",
    "lilypad@hello.com",
    "lilynpad"
  );

  expect(engineer.getName()).toBe("Lily Pad");
});

test("gets engineer's Id", () => {
  const engineer = new Engineer(
    "Lily Pad",
    "123456",
    "lilypad@hello.com",
    "lilynpad"
  );

  expect(engineer.getId()).toBe("123456");
});

test("gets engineer's email", () => {
  const engineer = new Engineer(
    "Lily Pad",
    "123456",
    "lilypad@hello.com",
    "lilynpad"
  );

  expect(engineer.getEmail()).toBe("lilypad@hello.com");
});

test("gets engineer's github username", () => {
  const engineer = new Engineer(
    "Lily Pad",
    "123456",
    "lilypad@hello.com",
    "lilynpad"
  );

  expect(engineer.getGithub()).toBe("lilynpad");
});

test("gets engineer's role", () => {
  const engineer = new Engineer(
    "Lily Pad",
    "123456",
    "lilypad@hello.com",
    "lilynpad"
  );

  expect(engineer.getRole()).toBe("Engineer");
});
