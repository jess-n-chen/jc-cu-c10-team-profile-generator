const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Lily Pad", "123456", "lilypad@hello.com", "UofT");

  expect(intern.name).toBe("Lily Pad");
  expect(intern.id).toBe("123456");
  expect(intern.email).toBe("lilypad@hello.com");
  expect(intern.school).toBe("UofT");
});

test("gets intern's name", () => {
  const intern = new Intern("Lily Pad", "123456", "lilypad@hello.com", "UofT");

  expect(intern.getName()).toBe("Lily Pad");
});

test("gets intern's Id", () => {
  const intern = new Intern("Lily Pad", "123456", "lilypad@hello.com", "UofT");

  expect(intern.getId()).toBe("123456");
});

test("gets intern's email", () => {
  const intern = new Intern("Lily Pad", "123456", "lilypad@hello.com", "UofT");

  expect(intern.getEmail()).toBe("lilypad@hello.com");
});

test("gets intern's school name", () => {
  const intern = new Intern("Lily Pad", "123456", "lilypad@hello.com", "UofT");

  expect(intern.getSchool()).toBe("UofT");
});

test("gets intern's role", () => {
  const intern = new Intern("Lily Pad", "123456", "lilypad@hello.com", "321");

  expect(intern.getRole()).toBe("Intern");
});
