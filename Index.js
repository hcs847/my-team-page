const inquirer = require("inquirer");
// const Files = require("./utils/generate-site");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");


class Team {
  constructor() {
    this.teamMemebrs = [];
  };

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
    }];
    return questions;
  };

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
        // console.log(this.teamMemebrs[0].id);


        // call the build team function
        this.buildTeam();
      });
  };

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
        // console.log(this.teamMemebrs);

        this.buildTeam();
      });
  };

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
          // console.log("engineer");
          return this.addEngineer();
        } else if (action === 'Add an intern') {
          // console.log("intern");
          return this.addIntern();
        } else {
          console.log(this.teamMemebrs);
          return this.teamMemebrs;
        }
      })
      // .then(pageHTML => {
      //   // this.page = new generatePage().addEmployeeCard(pageHTML);
      //   // this.page = this.manager.renderCard(pageHTML);
      //   // console.log(this.page);
      //   console.log(pageHTML);
      // })
      .catch(err => {
        console.log(err);
      });
  }


};

const team = new Team().addManager();