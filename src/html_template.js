const renderEmployees = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <title>My Team Profile</title>
    </head>
    <body class = "vh-100">
        <div class="jumbotron jumbotron-fluid bg-danger">
            <div class="container d-flex justify-content-center">
              <h1 class="display-3 text-white p-4">My Team</h1>
            </div>
          </div>
          <div class="card-deck m-5 d-flex justify-content-center">
            <div class="card mw-40 m-3 shadow">
                <div class="card-header bg-primary text-white">
                  <h2 class="card-title"><name</h2>
                  <h3>title</h3>
                </div>
                <div class="card-body bg-light">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID</li>
                          <li class="list-group-item">Email</li>
                          <li class="list-group-item">Misc</li>
                        </ul>
                      </div>
                </div>
              </div>
          </div>
    </body>
    </html>
    `
}

module.exports = renderEmployees;