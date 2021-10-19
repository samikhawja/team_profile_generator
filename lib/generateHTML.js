function generateHTML(data) {
    function Manager(data) {
        return `<div class="card" id="container" style="width: 18rem;">
        <div class="card-body" id="top">
            <h5 class="card-title" id="name">${data.getName()}</h5>
            <p class="card-text" id="position">${data.getRole()}</p>
        </div>
        <div class="card-body" id="main">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="id">ID: ${data.getId()}</li>
                <li class="list-group-item" id="email">Email: <a href= "mailto: ${data.getEmail()}">${data.getEmail()}</a></li>
                <li class="list-group-item" id="id">Office Number: ${data.getOffice()}</li>
            </ul>
        </div>
    </div>`
    };
    function Engineer(data) {
        return `<div class="card" id="container" style="width: 18rem;">
        <div class="card-body" id="top">
            <h5 class="card-title" id="name">${data.getName()}</h5>
            <p class="card-text" id="position">${data.getRole()}</p>
        </div>
        <div class="card-body" id="main">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="id">ID: ${data.getId()}</li>
                <li class="list-group-item" id="email">Email: <a href= "mailto: ${data.getEmail()}">${data.getEmail()}</a></li>
                <li class="list-group-item" id="github">GitHub: <a href= "https://github.com/${data.getGithub()}" target="_blank">${data.getGithub()}</a></li>
            </ul>
        </div>
    </div>`
    };
    function Intern(data) {
        return `<div class="card" id="container" style="width: 18rem;">
        <div class="card-body" id="top">
            <h5 class="card-title" id="name">${data.getName()}</h5>
            <p class="card-text" id="position">${data.getRole()}</p>
        </div>
        <div class="card-body" id="main">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="id">ID: ${data.getId()}</li>
                <li class="list-group-item" id="email">Email: <a href= "mailto: ${data.getEmail()}">${data.getEmail()}</a></li>
                <li class="list-group-item" id="id">School: ${data.getSchool()}</li>
            </ul>
        </div>
    </div>`
    };
    var arr = []
    arr.push(data.filter(employee => employee.getRole() === 'Engineer').map(engineer => Engineer(engineer)));
    arr.push(data.filter(employee => employee.getRole() === 'Manager').map(manager => Manager(manager)));
    arr.push(data.filter(employee => employee.getRole() === 'Intern').map(intern => Intern(intern)));
    return arr.join("")
}

module.exports = data => {return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="../assets/css/reset.css">
        <link rel="stylesheet" href="../assets/css/style.css">
    </head>
    <body>
        <header>Team Profile</header>
        ${generateHTML(data)}
    </body>
</html>
`;}