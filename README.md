# ORM-Backend-E-Commerce

## Description

As a manager at an internet retail company, it is crucial to have a working backend to compete effectively with other e-commerce platforms. This project is the back end for an e-commerce site, using Express.js, Sequelize, and PostgreSQL.
This backend setup allows a solid foundation for developing a e-commerce website, allowing your company to effectively compete in the online retail market.


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
** Remember to run seed data
## Usage

Use Insomnia Core or a similar tool to test the API routes.

The server will start and sync Sequelize models with your PostgreSQL database. By default, the server will run on http://localhost:3001.

## Walkthrough Video

[Link to Walkthrough Video](https://drive.google.com/file/d/1m4nxhbKOysExGf8u7dyzKbtau0NR4H1J/view?usp=sharing)
- For a visual demonstration, please refer to the [tutorial video](https://drive.google.com/file/d/1m4nxhbKOysExGf8u7dyzKbtau0NR4H1J/view?usp=sharing.)


