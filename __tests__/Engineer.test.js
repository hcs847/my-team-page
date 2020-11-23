const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("John", 1234, "engineer@email.com", 'johnjohn');
    expect(engineer.getName()).toBe("John");
    expect(engineer.getId()).toBe(1234);
    expect(engineer.getEmail()).toBe("engineer@email.com");
    expect(engineer.getGithub()).toBe('johnjohn');
    expect(Engineer.getRole()).toBe('engineer');
});