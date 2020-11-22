class generatePage {

    addOfficeNumber(teamMembers) {
        return `
        ${teamMembers.map(({ officeNumber }) => {
            return `
            <p>office number: ${officeNumber}</p>
             </div>
             </div>
            </div>
        `
        })
            }
        ` ;

    };

    addEmployeeCard(teamMembers) {
        return `
        <div class="col s6 m3 l3 push-l2">
            <div class="card">
                <div class="card-title orange darken-4 grey-text text-lighten-5">
                    <h6>
                    ${teamMembers.map(({ name, id, email }) => {
            return `
                        ${name}
                        </h6>
                        <h6>
                        <div class="valign-wrapper">
                            <span class="material-icons">
                                local_cafe
                            </span>Manager
                        </div>
                    </h6>
                </div>
                <div class="card-content card-list grey lighten-4">
                    <p>ID:${id}</p>
                    <p>email:${email}</p>
                    ${this.addOfficeNumber(teamMembers)}
          `
        }

        )}
        `
    };


};

module.exports = generatePage;



