# A simple JSON mock server for mocking data, data will be save inside db.json file

## How to run? 

- Open terminal in folder
- run 'npm i'
- run 'npm run server'

## Request examples

GET http://localhost:3000/todos

GET http://localhost:3000/todos/2  // returns the todo with matching Id

POST http://localhost:3000/todos
body
{
    "description" : "todo 22222"
}

PUT http://localhost:3000/todos/2 // update the todo with matching Id
{
    "description" : "Updated todo"
}

