# Travel Expenses Tracker

Travel Expenses Tracker is a web application designed to manage and streamline the process of tracking travel expenses for users.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- MySQL installed on your machine

## Setup Instructions

### Step 1: Create the Database

1. Open your MySQL terminal and run the following command to create the database:
   ```sql
   CREATE DATABASE travel;
   ```

### Step 2: Import SQL Files

1. Import all SQL files stored in the `database` folder into the `travel` database. You can use the following command in your MySQL terminal for each SQL file:
   ```sql
   USE travel;
   SOURCE path/to/your/sqlfile.sql;
   ```

### Step 3: Set Up the Project

1. Create a folder named `Travel-Expenses-Tracker` and extract the provided zip file into this folder.
2. Open your terminal and navigate to the `Travel-Expenses-Tracker` folder:
   ```sh
   cd path/to/Travel-Expenses-Tracker
   ```

### Step 4: Install Dependencies

1. Run the following command to install the necessary dependencies:
   ```sh
   npm install
   ```

### Step 5: Start the Application

1. After the dependencies are installed, start the application using the command:
   ```sh
   npm start
   ```

### Step 6: Access the Application

1. Open your browser and navigate to `http://localhost:3000` to access the Travel Expenses Tracker application.

## Contributing

To contribute to Travel Expenses Tracker, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push to the original branch: `git push origin <project_name>/<location>`.
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) for more information.



## License

This project uses the following license: [MIT License](LICENSE.md).

This README provides clear instructions on setting up and running the Travel Expenses Tracker project, including creating the database, importing SQL files, installing dependencies, and starting the application. It also includes sections for contributing and contact information.
