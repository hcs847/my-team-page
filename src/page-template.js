class generatePage {

    addRole(role) {
        if (role === 'Manager') {
            return `
            local_cafe
            </span>Manager
            `
        } else if (role === 'Intern') {
            return `
            local_library
            </span>Intern
            `
        } else if (role === 'Engineer') {
            return `
            laptop_mac
            </span>Engineer
        `
        }
    }


    addOfficeNumber(officeNumber) {
        if (!officeNumber) {
            return ''
        }
        return `
            <p>office number: ${officeNumber}</p>
             </div>
          </div>
        </div>
        `
    }

    addGitHub(github) {
        if (!github) {
            return ''
        }
        return `
            <p>github: ${github}</p>
            </div>
          </div>
        </div>
        `
    }

    addSchool(school) {
        if (!school) {
            return ''
        }
        return `
            <p>school: ${school}</p>
            </div>
          </div>
        </div>
        `
    }



    addEmployeeCard(teamMembers) {
        return `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Our Team Page</title>
</head>

<body>
    <header class="banner">
        <h1 class="main-header blue darken-4 grey-text text-lighten-5 center">Our Team</h1>
    </header>

    <div class="row">
        ${teamMembers.map(({ name, id, email, officeNumber, github, school }, index, array) => {
            return `
            <div class="col s6 m3 l3 push-l2">
                <div class="card">
                    <div class="card-title orange darken-4 grey-text text-lighten-5">
                        <h6>
                        ${name}
                        </h6>
                        <h6>
                        <div class="valign-wrapper">
                            <span class="material-icons">
                            ${this.addRole(array[index].constructor.name)}
                        </div>
                    </h6>
                </div>
                <div class="card-content card-list grey lighten-4">
                    <p>ID:${id}</p>
                    <p>email:${email}</p>
            
                    ${this.addOfficeNumber(officeNumber)}
                    ${this.addGitHub(github)}
                    ${this.addSchool(school)}
                    `
        }

        ).join('')}
        </div>

    </div>
    </div>
</body>

</html>
        `

    };


};

module.exports = generatePage;



