# Backend Server

## Description
This is an Express server built with TypeScript that serves as a backend for a form submission application. It uses a JSON file as a database to store submissions.

## Endpoints
- **GET /ping**: Returns `true`.
- **POST /submit**: Accepts form submissions with parameters `name`, `email`, `phone`, `github_link`, and `stopwatch_time`.
- **GET /read**: Retrieves a submission by its index.

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Anupam137/Backend-Server.git
   cd BackendServer


 2. Install dependencies
	npm install


 3. Run the server
	npm start
	
 4.The server will be running on http://localhost:3000.

 
### Summary

By following these steps, you should be able to set up the backend using Visual Studio 2022. This includes installing Node.js, creating a new Node.js project, and setting up the Express server with TypeScript. This backend server will handle form submissions and retrieve data from a JSON file, ready to be integrated with your Windows Desktop App.


