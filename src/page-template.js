const processManager = (employee) => {
  return `
        <div class="card" style="width: 18rem;">
            <div class="card-header"><h2>${employee.name} <br/>
                <i class="fas fa-mug-hot"></i> Manager</h2>
            </div>
            <div class="py-3">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${employee.email}">${employee.email}</a></span></li>
                <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
};

const processEngineer = (employee) => {
  return `
        <div class="card" style="width: 18rem;">
            <div class="card-header"><h2>${employee.name} <br/>
                <i class="fas fa-glasses"></i> Engineer</h2>
            </div>
            <div class="py-3">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${employee.email}">${employee.email}</a></span></li>
                <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${employee.github}">${employee.github}</a></li>
                </ul>
            </div>
        </div>
        `;
};

const processIntern = (employee) => {
  return `
        <div class="card" style="width: 18rem;">
            <div class="card-header"><h2>${employee.name} <br/>
                <i class="fas fa-user-graduate"></i> Intern</h2>
            </div>
            <div class="py-3">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${employee.email}">${employee.email}</a></span></li>
                <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
        </div>
        `;
};

const processFn = {
  Manager: processManager,
  Engineer: processEngineer,
  Intern: processIntern,
};

// Create Team Roster Section
const generateRoster = (teamData) => {
  return `
    <div class="row roster-row justify-space-between">
     ${teamData
       .map((employee) => {
         return processFn[employee.getRole()](employee);
       })
       .join("")}
    </div>
  `;
};

// Export Function to Generate Full Page
module.exports = (teamData) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"/>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/ec09384b84.js" crossorigin="anonymous"></script>
    <title>Team Roster | Homepage</title>
  </head>
  
  <body>
    <header class="py-4 px-5">
        <h1 class="text-center py-2 px-3">My Team</h1>
    </header>
    <main class="container my-5">
      ${generateRoster(teamData)}
    </main>
  </body>
  </html>
  `;
};
