const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Lily Pad", "123456", "lilypad@hello.com", "321");

  expect(manager.name).toBe("Lily Pad");
  expect(manager.id).toBe("123456");
  expect(manager.email).toBe("lilypad@hello.com");
  expect(manager.officeNumber).toBe("321");
});

test("gets manager's name", () => {
  const manager = new Manager("Lily Pad", "123456", "lilypad@hello.com", "321");

  expect(manager.getName().toBe("Lily Pad"));
});

test("gets manager's Id", () => {
  const manager = new Manager("Lily Pad", "123456", "lilypad@hello.com", "321");

  expect(manager.getId().toBe("123456"));
});

test("gets manager's email", () => {
  const manager = new Manager("Lily Pad", "123456", "lilypad@hello.com", "321");

  expect(manager.getEmail().toBe("lilypad@hello.com"));
});

test("gets manager's role", () => {
  const manager = new Manager("Lily Pad", "123456", "lilypad@hello.com", "321");

  expect(manager.getRole().toBe("Manager"));
});
