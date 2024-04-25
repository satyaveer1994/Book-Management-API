# Book Management API

## Overview

This is a RESTful API for managing book entries. It provides endpoints for user authentication, CRUD operations for managing books, and filtering books by author or publication year.

## Features

- User authentication with JWT token
- CRUD operations for managing books (Create, Read, Update, Delete)
- Filtering books by author or publication year
- Input validation and error handling
- Clear documentation of API endpoints and their usage

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JSON Web Tokens (JWT) for authentication

## Installation

1. **Clone the repository:**

   
   git clone https://github.com/satyaveer1994/Book-Management-API.git

2. **Navigate to the project directory:**
     
     cd book-management-api

3. **Install dependencies:**

    npm install

4. **Set up environment variables:**

     - Create a .env file in the root directory.
      - Define environment variables such as MONGODB_URI for your MongoDB connection string
        and JWT_SECRET for JWT token secret.

5. **Start the server:**
     
     nodemon/src/index.js


## API Documentation

# Authentication

# Signup

-Endpoint: /auth/signup
-Method: POST
-Request Body: { "email": "user@example.com", "password": "password" }
-Description: Creates a new user account.

# Login

-Endpoint: /auth/login
-Method: POST
-Request Body: { "email": "user@example.com", "password": "password" }
-Description: Authenticates the user and generates a JWT token.

## Books

# Get All Books

-Endpoint: /books/getbooks
-Method: GET
-Description: Retrieves all books.

# Add Book

-Endpoint: /books/addBook
-Method: POST
--Request Body: { "title": "Book Title", "author": "Author Name", "publicationYear": 2022 }
-Description: Adds a new book entry.

# Filter Books

-Endpoint: /books/filterbook
-Method: GET
-Query Parameters: author, publicationYear
-Description: Filters books by author or publication year.


## License

This project is licensed under the MIT License - see the LICENSE file for details.


You can easily copy and paste this template into your README.md file and then fill in the specific details of your project. Feel free to customize it further as needed.
