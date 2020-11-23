const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("John", 1234, "intern@email.com", 'Stanford');
    expect(intern.getName()).toBe("John");
    expect(intern.getId()).toBe(1234);
    expect(intern.getEmail()).toBe("intern@email.com");
    expect(intern.getSchool()).toBe('Stanford');
    expect(Intern.getRole()).toBe('intern');
});