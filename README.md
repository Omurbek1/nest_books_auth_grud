# Book CRUD App

This is a simple Book CRUD (Create, Read, Update, Delete) application built with NestJS. The application allows users to manage a collection of books.

## Features

- Create a new book
- Retrieve a list of books
- Retrieve details of a specific book
- Update a book's information
- Delete a book

## Technologies Used

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [PostgreSQL](https://www.postgresql.org/) - A powerful, open-source object-relational database system.
- [TypeORM](https://typeorm.io/) - An ORM for TypeScript and JavaScript (ES7, ES6, ES5).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optional, for running PostgreSQL in a container)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Omurbek1/nest_books_auth_grud
   cd book-crud-app

2. Install the dependencies:
npm install
# or
yarn install

3. Set up environment variables:
Create a .env file in the root of the project and add the following variables:

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=your_db_name
JWT_SECRET=your_jwt_secret

4. Run the PostgreSQL database (if using Docker):

docker-compose up -d

5. Run the migrations to set up the database schema:
npm run typeorm migration:run
# or
yarn typeorm migration:run


Running the Application

1. Start the application:
npm run start
# or
yarn start

2. The application will be running at http://localhost:3000

API Documentation
The API documentation is available at http://localhost:3000/api using Swagger.