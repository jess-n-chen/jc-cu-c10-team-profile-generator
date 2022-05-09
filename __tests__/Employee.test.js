const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Lily Pad", "123456", "lilypad@hello.com");

  expect(employee.name).toBe("Lily Pad");
  expect(employee.id).toBe("123456");
  expect(employee.email).toBe("lilypad@hello.com");
});

test("gets employee's name", () => {
  const employee = new Employee("Lily Pad", "123456", "lilypad@hello.com");

  expect(employee.getName()).toBe("Lily Pad");
});

test("gets employee's Id", () => {
  const employee = new Employee("Lily Pad", "123456", "lilypad@hello.com");

  expect(employee.getId()).toBe("123456");
});

test("gets employee's email", () => {
  const employee = new Employee("Lily Pad", "123456", "lilypad@hello.com");

  expect(employee.getEmail()).toBe("lilypad@hello.com");
});

test("gets employee's role", () => {
  const employee = new Employee("Lily Pad", "123456", "lilypad@hello.com");

  expect(employee.getRole()).toBe("Employee");
});
