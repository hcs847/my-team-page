class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "employee";
  }

  // renderCard(teamMembers) {
  //   return `
  //   <div class="col s6 m3 l3 push-l2">
  //       <div class="card">
  //           <div class="card-title orange darken-4 grey-text text-lighten-5">
  //               <h6>
  //               ${teamMembers.map(({ name, id, email, officeNumber }) => {
  //     return `
  //                   ${name}
  //                   </h6>
  //                   <h6>
  //                   <div class="valign-wrapper">
  //                       <span class="material-icons">
  //                           local_cafe
  //                       </span>Manager
  //                   </div>
  //               </h6>
  //           </div>
  //           <div class="card-content card-list grey lighten-4">
  //               <p>ID:${id}</p>
  //               <p>email:${email}</p>
  //               `
  //   }
  //   )}
  //       `
  // };
};


module.exports = Employee;

// const employee = new Employee("Mat", 1234, "email@test.com");
// console.log(employee.name);
// console.log(employee.getName());
// console.log(employee.getRole());