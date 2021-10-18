function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.company}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="../assets/css/reset.css">
            <link rel="stylesheet" href="../assets/css/style.css">
        </head>
        <body>
            <header>${data.company}</header>
            <div class="card" id="container" style="width: 18rem;">
                <div class="card-body" id="top">
                    <h5 class="card-title" id="name">${data.name}</h5>
                    <p class="card-text" id="position">${data.position}</p>
                </div>
                <div class="card-body" id="main">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="id">ID: ${data.id}</li>
                        <li class="list-group-item" id="email">Email: <a href= "mailto: ${data.email}">${data.email}</a></li>
                        <li class="list-group-item" id="github">GitHub: <a href= "https://github.com/${data.github}" target="_blank">${data.github}</a></li>
                    </ul>
                </div>
            </div>
            <div class="card" id="container" style="width: 18rem;">
                <div class="card-body" id="top">
                    <h5 class="card-title" id="name">${data.name}</h5>
                    <p class="card-text" id="position">${data.position}</p>
                </div>
                <div class="card-body" id="main">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="id">ID: ${data.id}</li>
                        <li class="list-group-item" id="email">Email: <a href= "mailto: ${data.email}">${data.email}</a></li>
                        <li class="list-group-item" id="github">GitHub: <a href= "https://github.com/${data.github}" target="_blank">${data.github}</a></li>
                    </ul>
                </div>
            </div>
        </body>
    </html>
    `;
}

module.exports = generateHTML;