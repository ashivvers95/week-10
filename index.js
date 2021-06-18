const inquirer = require("inquirer");
const fs = require('fs');

const questions = function () {
return inquirer
.prompt([
      { 
            type: 'input',
            name: 'id',
            message: 'Please input your team members ID.'
      }, 
      {
            type: 'input',
            name: 'name',
            message: 'Please input your team members name.'  
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please input your team members email.'
      },
      {
            type: 'checkbox',
            name: 'role',
            message: 'Please select your team members role.',
            choices: ['Engineer', 'Intern', 'Manager']
      }
])
 .then(function(data) {
   fs.writeFile('./dist/index.html', data => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div>${data}<div>
    </body>
    </html>`
   })
  })
 }
   questions();


