const inquirer = require("inquirer");
const Files = require("./utils/generate-site");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");

// gathering information regarding the team
class Team {
  constructor() {
    this.teamMemebrs = [];
  };

  // common questions for all employee types 
  mainQuestions(employeeType) {
    const questions = [{
      type: "text",
      name: "name",
      message: `Please enter name of the ${employeeType.getRole()}`,
    }, {
      type: "text",
      name: "id",
      message: `Please enter the ID of the ${employeeType.getRole()}`,
    }, {
      type: "text",
      name: "email",
      message: `Please email address of the ${employeeType.getRole()}`,

      // ensuring email address is in the right format
      validate: emailInput => {
        const validEmail = /[^\W][\w\d-.]*@[\w\d]*.[\w]*/;
        if (emailInput.match(validEmail)) {
          return true;
        } else {
          console.log('\n', '>>> Please enter a valid email address.');
          return false;
        }
      }
    }];
    return questions;
  };

  // starting with gathering data regarding the manager
  addManager() {
    inquirer
      .prompt([...this.mainQuestions(Manager), {
        type: "text",
        name: "officeNumber",
        message: `Please enter the ${Manager.getRole()}'s office number?`,
      }])
      .then(answers => {
        const {
          name,
          id,
          email,
          officeNumber
        } = answers;
        this.manager = new Manager(name, id, email, officeNumber);
        this.teamMemebrs.push(this.manager);

        // call the build team function to check regarding next actions
        this.buildTeam();
      });
  };

  // gathering information regarding interns
  addIntern() {
    inquirer
      .prompt([...this.mainQuestions(Intern), {
        type: "text",
        name: "school",
        message: `Please enter the ${Intern.getRole()}'s school name.`
      }])
      .then(answers => {
        const {
          name,
          id,
          email,
          school
        } = answers;
        this.intern = new Intern(name, id, email, school);
        this.teamMemebrs.push(this.intern);

        this.buildTeam();
      });
  };

  // gathering information regarding engineer
  addEngineer() {
    inquirer
      .prompt([...this.mainQuestions(Engineer), {
        type: "text",
        name: "github",
        message: `Please enter the ${Engineer.getRole()}'s github user.`
      }])
      .then(answers => {
        const {
          name,
          id,
          email,
          github
        } = answers;
        this.engineer = new Engineer(name, id, email, github);
        this.teamMemebrs.push(this.engineer);

        this.buildTeam();
      });
  };

  // checking what should be the next step
  buildTeam() {
    inquirer
      .prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Add an engineer', 'Add an intern', 'Finish building team']

      })
      .then(({
        action
      }) => {
        if (action === 'Add an engineer') {

          return this.addEngineer();
        } else if (action === 'Add an intern') {

          return this.addIntern();
        } else {
          return new generatePage().addEmployeeCard(this.teamMemebrs);
        }
      })
      .then(pageHTML => {
        return new Files().writeFile(pageHTML);
      })
      .then(copyFileResponse => {
        return new Files().copyFile(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

const team = new Team().addManager();

