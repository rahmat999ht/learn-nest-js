# CRUD Application with TypeORM

This repository demonstrates a basic CRUD (Create, Read, Update, Delete) application implemented using **TypeORM** with NestJS framework.

## Features

- **Entity Management**: Contains entities to map the database tables to TypeScript classes.
- **Data Transfer Objects (DTOs)**: Provides DTOs for creating and updating records with validation.
- **Controller & Service Layer**: Implements routes for CRUD operations and the corresponding business logic.
- **Database Integration**: Uses TypeORM to interact with the database seamlessly.
- **Validation**: Includes input validation using `class-validator` and `class-transformer`.

## Prerequisites

- Node.js (v16 or later)
- npm or yarn
- A running database (e.g., MySQL, PostgreSQL, etc.)
- TypeScript setup

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database connection in the `ormconfig.json` or `.env` file:
   ```json
   {
     "type": "mysql", // or your preferred database type
     "host": "localhost",
     "port": 3306,
     "username": "root",
     "password": "password",
     "database": "your_database",
     "entities": ["dist/**/*.entity.js"],
     "synchronize": true
   }
   ```

4. Run the application:
   ```bash
   npm run start:dev
   ```

## Endpoints

### Users CRUD

- **GET** `/users`: Retrieve all users.
- **GET** `/users/:id`: Retrieve a user by ID.
- **POST** `/users`: Create a new user.
- **PUT** `/users/:id`: Update an existing user.
- **DELETE** `/users/:id`: Delete a user.

## Directory Structure

```
src/
|-- users/
|   |-- users.controller.ts   // Handles HTTP requests
|   |-- users.service.ts      // Business logic
|   |-- users.module.ts       // Users module configuration
|   |-- entities/
|   |   |-- user.entity.ts    // Database entity for User table
|   |-- dto/
|       |-- create-user.dto.ts // DTO for creating users
|       |-- update-user.dto.ts // DTO for updating users
|-- app.module.ts              // Main module
```

## Packages Used

- **NestJS**: Framework for building efficient, reliable, and scalable server-side applications.
- **TypeORM**: ORM for database management and migrations.
- **class-validator**: For validating DTOs.
- **class-transformer**: For transforming plain objects to class instances.

## Contribution

Feel free to fork the repository, create a new branch, and submit a pull request with your enhancements.

## License

This project is licensed under the MIT License.

