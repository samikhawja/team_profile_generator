function generateMarkdown(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./assets/css/reset.css">
            <link rel="stylesheet" href="./assets/css/style.css">
        </head>

        <body>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.position}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.id}</li>
                    <li class="list-group-item">${data.email}</li>
                    <li class="list-group-item">${data.github}</li>
                </ul>
            </div>
        </body>
    </html>
    `;
}

module.exports = generateMarkdown;