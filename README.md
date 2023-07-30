
# Rest API for Veterinary Franchise

First challenge offered by the internship (Node.js) - AWS Cloud Context - Compass UOL.
The challenge simulates a scenario in which this microservice will be used by all of the franchise's clinics to manage internal clients and appointments.
The POC bases of this new microservice must be built,
so that the commercial and management team has the primary technical vision of the customer's needs.
<details>
<summary>

## Technologies
</summary>


• TypeScript        
• Node.js        
• Express        
• MongoDB
</details>

<details>
<summary>

## Functionalities and Basic Requirements
</summary>

✅ Returns all registered customers
✅ Register customers
✅ Update customers
✅ Delete customers
✅ Register a pet and add it to a client
✅ Upgrade a pet
✅ Delete a pet

        
## Assessment requirements

• Readability         
• Private repository          
• Small commits           
• Default commits         
• TypeScript          
• Express           
• Readme.md         
• Explanation of how to run locally           
• Share repository access with instructors for evaluation.          

</details>

<details>
<summary>

## How to run Locally
</summary>

### To run the project locally, follow the steps below:

1 - Make sure you have Node.js and git installed on your machine. If not, download the node version compatible with your machine by clicking [here](https://nodejs.org/en/download). And the one from git [here](https://git-scm.com/downloads). (If you have to download git you will have to configure it to activate in the VS Code terminal)

2 - Copy the link provided in the <>Code button of this repository. Go to the Vs Code terminal and use the command **git init** to start a repository and then use the command **git clone <link got>**.

3 - Change the current directory with the command **cd <repository folder>**

4 - Use the command **npm install** to install all required dependencies.

5 - Now rename the .env.example file to .env and add your connection string provided by mongoDB next to the front of MONGO_URL=

6 - change <password> by the access password to your database and enter "/?" enter the name of the bank.

7 - Use the command **npm start** in the VS Code terminal to start the program

8 - Open an application supporting the documentation of requests made by APIs such as Postman or Insomnia.

9 - Create the following routes:

• Route responsible for showing tutors and their pets:
GET - http://localhost:3000/api/clients/tutors

• Route responsible for inserting tutors:
POST - http://localhost:3000/api/clients/tutor

• Route responsible for updating tutors:
PUT - http://localhost:3000/api/clients/tutor/:id

• Route responsible for deleting tutors:
DELETE - http://localhost:3000/api/clients/tutor/:id

• Route responsible for inserting a pet in a tutor:
POST - http://localhost:3000/api/clients/pet/:tutorid

• Route responsible for updating a pet and consequently its owner's pet list:
PUT - http://localhost:3000/api/clients/pet/:petid/tutor/:tutorid

• Route responsible for deleting a pet linked to a tutor:
DELETE - http://localhost:3000/api/clients/pet/:petid/tutor/:tutorid

10 - For effective use, insert the parameters of the Post route responsible for inserting the tutor first according to the example:

<img width="" height="" src="https://github.com/MotahPedro/Compass-Desafio-1/assets/111978930/59515a85-f816-492d-a121-837e8ad11cb8">
</p>

11 - The GET route does not need any parameters. For it to be successful it is necessary to have passed at least one tutor through the route.

12 - The PUT routes require the insertion of parameters that must be changed, in addition of course the tutor ids to update tutor and tutoe and pet ids to update a pet. Similar to POST, but here they will overwrite previous information. Example:

<img width="" height="" src="https://github.com/MotahPedro/Compass-Desafio-1/assets/111978930/fdec4b5b-9d88-4334-bf56-8627a3bd35f0">
</p>

13 - The DELETE routes will only require the ids according to what you want to delete. tutor id to delete a tutor, and tutor and pet id to delete a pet. Example:

<img width="" height="" src="https://github.com/MotahPedro/Compass-Desafio-1/assets/111978930/b5e5f871-468f-471e-b0e3-82cec27f7b24">
</p>

</details>

<details>
    <summary> 

## SMs and Instructors

</summary> 

### Scrum Masters:

- [Alisson Morais](https://www.linkedin.com/in/alisson-morais-642870238/)

- [Yago Felipe Lopes](https://www.linkedin.com/in/yago-lopes-7b78a580/)

### Instructors:

- [Rafael Menegon](https://www.linkedin.com/in/rafael-menegon/)

- [Jonatan Machado](https://www.linkedin.com/in/jonatan-machado/)

- 2 Instructors not found.

</details>

<details>
<summary>

## References
</summary>

 - [Mongoose Guide](https://mongoosejs.com/docs/guides.html)
 - [JavaScript Guide](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
 - [TypeScript Guide](https://www.typescriptlang.org/docs/handbook/intro.html)
</details>

<details>
  <summary> 

  ## Final post-run notes :bookmark_tabs:
  
  </summary>

| | Notes |
| ----- | ----- |
| SoftSkills | - |
| HardSkills | - |

Points of improvement presented:
- [ ]
- [ ]
</details>