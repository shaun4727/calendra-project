# How to setup the project locally

-   clone from github
-   move to the project directory
-   install dependencies with `npm install`
-   make .env.local.example file to .env.local file
-   Add information in .env.local file
-   `npm run dev` to start the project
-   setup prisma for postgresql
-   npm install @prisma/client
-   DATABASE_URL="postgresql://DB_USER:DB_PASS@localhost:5432/DB_NAME?schema=public"

## Technologies

-   TypeScript
-   Next JS
-   Shadcn

# create postgresql database locally

```sh
# switch to postgres user
sudo -i -u postgres
# open postgresql shell
psql

# create database
CREATE DATABASE mydatabase;

# create a new user (optional)
CREATE USER myuser WITH PASSWORD 'mypassword';

# grant privileges (optional)
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;


# list all database
\t

# exit the shell
\q #or
exit
```
