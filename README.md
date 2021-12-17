## Installation
### 1. Clone the repo
```bash
   git clone https://github.com/HoracioSoldman/fullstack-assignment.git
```

### 2. Running the app
The project can be run with or without Docker.
#### - With Docker
Please run the following command.

```bash
    docker compose up
```
This command will build and/or download necessary images for the client, server and database.

#### - Without Docker
This project uses mongodb. Therefore, it is necessary to have mongodb installed and accessible through [http://127.0.0.1:27017](http://127.0.0.1:27017) .

The client and server apps have to be run separately.
For the server app:

```bash
    cd ./server
    npm i
    npm run dev
```

For the client
```bash
    cd ./client
    npm i
    npm start
```
### 3. Testing the app
The client and the server has to be unit tested separately.
For the server app:

```bash
    cd ./server
    npm run test
```

For the client app:

```bash
    cd ./client
    npm run test
```
