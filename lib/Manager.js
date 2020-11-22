const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }

  // renderCard(teamMembers) {
  //   super.renderCard(teamMembers);
  //   teamMembers.map(({
  //     officeNumber
  //   }) => {
  //     return `
  //     <p>office number: ${officeNumber}</p>
  //                     </div>
  //                 </div>
  //             </div>
  //     `
  //   })
  // }


  static getRole() {
    return "manager";
  }
}

module.exports = Manager;