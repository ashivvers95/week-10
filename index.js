const inquirer = require("inquirer");
const fs = require('fs');

const initialQuestions = function () {
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
 .then(({role}) => {
      if(role === 'Engineer') {
            inquirer
            .prompt({
                  type: 'input',
                  name: 'github',
                  message: 'Please input your team members github.'
            })
      };
      if (role === 'Intern'){
            inquirer
            .prompt({
                  type: 'input',
                  name: 'school',
                  message: 'Please input your team members school.'
            })
      };
      if(role === 'Manager') {
            inquirer
            .prompt([
            {
                  type: 'input',
                  name: 'number',
                  message: 'Please input your team members office number.'
            }
      ])
      }

 })
 .then(function(data) {
       console.log(data)
 })
 };

// const engineerQuestions = function () {
//       return inquirer
//       .prompt([
//             {
//                   type: 'input',
//                   name: 'github',
//                   message: 'Please input your team members github.'
//             }
//       ])
// }

// const internQuestions = function () {
//       return inquirer
//       .prompt([
//             {
//                   type: 'input',
//                   name: 'school',
//                   message: 'Please input your team members school.'
//             }
//       ])
// }

// const managerQuestions = function () {
//       return inquirer
//       .prompt([
//             {
//                   type: 'input',
//                   name: 'number',
//                   message: 'Please input your team members office number.'
//             }
//       ])
// }

 initialQuestions();


//  (function(data) {
//       fs.writeFile('./dist/index.html', data => {
//        return `<!DOCTYPE html>
//        <html lang="en">
//        <head>
//            <meta charset="UTF-8">
//            <meta http-equiv="X-UA-Compatible" content="IE=edge">
//            <meta name="viewport" content="width=device-width, initial-scale=1.0">
//            <title>Document</title>
//        </head>
//        <body>
//            <div>${data}<div>
//        </body>
//        </html>`
//       })
//      })