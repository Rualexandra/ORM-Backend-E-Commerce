# ORM-Backend-E-Commerce

## Description

This project is the back end for an e-commerce site, using Express.js, Sequelize, and PostgreSQL.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Rualexandra/ORM-Backend-E-Commerce.git
    cd ORM-Backend-E-Commerce
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```plaintext
    DB_NAME=your_database_name
    DB_USER=your_postgresql_username
    DB_PASSWORD=your_postgresql_password
    ```

4. Create the database using the schema provided:
    ```bash
    psql -U your_postgresql_username -d postgres -f db/schema.sql
    ```

5. Seed the database:
    ```bash
    npm run seed
    ```

6. Start the server:
    ```bash
    npm start
    ```

## Usage

Use Insomnia Core or a similar tool to test the API routes.

## Walkthrough Video

[Link to Walkthrough Video](your-video-link)

## License

This project is licensed under the MIT License.
