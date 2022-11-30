// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// README templae format with names
const generateReadMe = ({github, email, title, description, license, install, tests, usage, contribute}) => 
`# Project ${title}
* [Description](#description) 
* [Installation](#install) 
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Contact](#contact)
 
## Description
    For this project the following is a description of the use. 
    ${description}
## Installation
    Please follow the following installation guidelines. 
    ${install}
## Usage 
    When using this code, there are usage criteria/requirements such as:
    ${usage}
## Contribution 
    ${contribute}
## Tests
    ${tests}
## License 
    The ${license} License to be used for this project. 
# Contact
* Email: ${email}
* GitHub: ${github} `; 
// TODO: Create an array of questions for user input
// Questions to be asked/prompted 
inquirer
    .prompt([
        {
            type: 'input' ,
            name: 'github',
            message: "What is your GitHub username?",
            validate: (value)=> { if(value){return true}else{return '1 need a value to continnue'}},
        },
        {
            type: 'input' ,
            name: 'email',
            message: "What is your email address?"
        },
        {
            type: 'input' ,
            name: 'title',
            message: "What is your project title name?"
        },
        {
            type: 'input' ,
            name: 'description',
            message: "Please write a small description of your project:"
        },
        {
            type: 'list' ,
            name: 'license',
            choices: ['MIT', 'GPL','Apache','GNU','None'],
            message: "What kind of license should your project use?"
        },
        {
            type: 'input' ,
            name: 'install',
            message: "What are some installation guidelines?"
        },
        {
            type: 'input' ,
            name: 'tests',
            message: "List any tests required for this project?"
        },
        {
            type: 'input' ,
            name: 'usage',
            message: "What does the user need to know about using the repo?"
        },
        {
            type: 'input' ,
            name: 'contribute',
            message: "What does the user need to know about contributing to the repo?"
        },
        
    ])  
    // use answers to create file 
    .then ((answers) =>{
        const readmeContent = generateReadMe(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README file!')
        );
    });

