# Property Evaluation System

The Property Evaluation System is a web application designed to [brief description of what the system does].

## Technologies Used

- Angular 16
- Spring Boot 3.1.0
- Camunda 8.4.3
- MySQL
- Elasticsearch 8.9.1
- Visual Studio Code
- Eclipse IDE
- Camunda Modeler

## Installation

Before installing the Property Evaluation System, ensure you have the following prerequisites installed:

- Java 21
- Camunda 8.4.3
- Elasticsearch 8.9.1
- MySQL
- Visual Studio Code
- Eclipse IDE
- Camunda Modeler

[Instructions on how to install each of these prerequisites can be found on their respective websites.]

Once you have installed the prerequisites, follow these steps to install the Property Evaluation System:

1. **Set Up MySQL Database:**
   - Install MySQL if not already installed.
   - Create a new database schema for the Property Evaluation System.
   - Configure the database connection properties in the microservices' configuration files.

2. **Start Camunda Engine:**
   - Download the Camunda 8.4.3 zip file.
   - Extract it and navigate to the bin folder.
   - Run the broker.bat file.
   - Ensure Java 21 is installed before starting.

3. **Deploy Workflow:**
   - Design the workflow in Camunda Modeler.
   - Deploy the workflow using the Modeler to the Camunda engine.
   - The workflow is located in the resources folder of the gateway application.

4. **Start Microservices:**
   - Load all 5 microservices (Authentication, Gateway, Property Management, Comment Management, File Upload Service) into Eclipse.
   - Download Maven packages for the applications.

5. **Start Angular App:**
   - Clone the Angular project from GitHub.
   - Run `npm install` in the CLI to install dependencies.
   - Run `ng serve` to start the application.

[Additional setup or configuration may be required after installation.]

**Note:** Since this application is using Camunda 8, compensation events are not available, which are responsible for compensating any activity completed before the failed task. For more information, refer to [Camunda Best Practices - Dealing with Problems and Exceptions](https://docs.camunda.io/docs/components/best-practices/development/dealing-with-problems-and-exceptions/).

## Demo Run

To run the demo of the Property Evaluation System, follow these steps:

1. **Set Up the Angular App:**
   - Ensure the Angular app is running on `localhost:4200`.
   - Implement the login page with username and password fields.
   - Implement the property evaluation form.

2. **Set Up the Backend:**
   - Ensure the microservices (Authentication, Property Management, etc.) are running.
   - Implement the API endpoints for user authentication and property evaluation form submission.
   - Implement the database queries to retrieve user information for authentication and store property evaluation data.

3. **Implement the User Authentication Flow:**
   - When the user submits the login form, send a request to the Authentication microservice to authenticate the user.
   - Upon successful authentication, store the user's information in the frontend (e.g., in local storage or a state management library) and redirect the user to the property evaluation form.

4. **Implement the Property Evaluation Form:**
   - Implement the form with fields for property evaluation details.
   - When the user submits the form, send a request to the Property Management microservice to store the evaluation data.

5. **Display the Data in the PVS Evaluation Request Page:**
   - Implement a page to display the evaluation requests in a grid.
   - Retrieve the evaluation requests from the Property Management microservice and display them in the grid.
