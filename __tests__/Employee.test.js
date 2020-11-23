const Employee = require('../lib/Employee');

test("creates a employee object", () => {
    const employee = new Employee("John", 1234, "employee@email.com", 1000);
    expect(employee.getName()).toBe("John");
    expect(employee.getId()).toBe(1234);
    expect(employee.getEmail()).toBe("employee@email.com");
    expect(employee.getRole()).toBe('employee');
});
