const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("John", 1234, "manager@email.com", 1000);
  expect(manager.getName()).toBe("John");
  expect(manager.getId()).toBe(1234);
  expect(manager.getEmail()).toBe("manager@email.com");
  expect(manager.getOfficeNumber()).toBe(1000);
  expect(Manager.getRole()).toBe('manager');
});
