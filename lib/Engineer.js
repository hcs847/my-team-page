const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  static getRole() {
    return "engineer";
  }
}

module.exports = Engineer;