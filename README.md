# MongoDB Backend Practice

This is a simple Node.js backend practice project using Express.js and MongoDB with Mongoose.

## Features
- Express server setup
- MongoDB database connection
- Mongoose integration
- Basic backend structure

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

## Project Structure
- `server.js` – main server file
- `db.js` – database connection file
- `package.json` – project dependencies and scripts

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install

## Schema Validation

I implemented schema validation using Mongoose.

- Title is required and must be at least 3 characters
- Description is required and must be at least 10 characters

Validation was tested using Postman, and screenshots are available in the `screenshots` folder.
