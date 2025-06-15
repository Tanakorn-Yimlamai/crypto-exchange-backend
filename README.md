# Crypto Exchange - Backend Assignment

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MySQL
* **ORM:** Prisma
* **Language:** JavaScript

---

## Setup and Installation

**Prerequisites:**
* Node.js (v18 or later)
* NPM
* A running MySQL server

**Steps:**

1.  **Clone the repository:**
    ```
    git clone [Your-Repo-URL]
    cd [Your-Repo-Folder]
    ```

2.  **Install dependencies:**
    ```
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your database connection string. You can use the example below as a template.
    ```
    DATABASE_URL="mysql://root:YOUR_MYSQL_PASSWORD@localhost:3306/crypto_exchange"
    ```

4.  **Run database migrations:**
    This command will create the database `crypto_exchange` if it doesn't exist and set up all the necessary tables.
    ```
    npx prisma migrate dev
    ```

5.  **Seed the database with initial data:**
    This will create initial currencies and a sample user.
    ```
    npx prisma db seed
    ```

    *** If you do not see a "Seeding finished." message and the command appears to be stuck, you can run the seed script directly using the following command:

    ```
    node prisma/seed.js
    ```


6.  **(Optional) Reset the database to a clean state:**
    A custom script is included to easily reset the database for a clean demo.
    ```
    npm run reset
    ```

7.  **Start the server:**
    ```
    node index.js
    ```
    The server will be running at `http://localhost:3000`.

---

## API Endpoints Documentation

### User Management

#### `POST /api/users`
Creates a new user account.

* **Request Body:**
    ```json
    {
        "username": "userA",
        "email": "userA@example.com",
        "password": "password123"
    }
    ```
* **Success Response (201 Created):**
    ```json
    {
        "message": "User created successfully!",
        "user": {
            "user_id": 2,
            "username": "userA",
            "email": "userA@example.com"
        }
    }
    ```

### Usage Example
In this demonstration, we will simulate a complete peer-to-peer trade. We'll follow two users, UserA and userB. 
    - UserA wants to sell some of his cryptocurrency, so he places a "sell" order on the exchange. 
    - userB sees this offer, and accepts the trade by "matching" UserA's order, which finalizes the transaction.

1. Create a User ("userA")
    Action: Create the first user who will place an order.
    Method: POST
    URL: http://localhost:3000/api/users
    Body:
    JSON

    {
        "username": "userA",
        "email": "userA@example.com",
        "password": "passwordA"
    }
    Note: user_id returned in the response (e.g., 2).

2. Create a Second User ("userB")
    Action: Create the second user who will match the order.
    Method: POST
    URL: http://localhost:3000/api/users
    Body:
    JSON

    {
        "username": "userB",
        "email": "userB@example.com",
        "password": "passwordB"
    }

3. Create a Sell Order (by userA)
    Action: userA places an order to sell 0.5 BTC.
    Method: POST
    URL: http://localhost:3000/api/orders
    Body: //(Use userA's user_id from Step 1)
    JSON

    {
        "maker_user_id": 2, 
        "order_type": "sell",
        "crypto_currency_id": 1, 
        "fiat_currency_id": 1,
        "crypto_amount": 0.5,
        "price_per_crypto": 2500000
    }
    Result: The API returns the newly created order with a "status": "pending". 
    Note: order_id from the response (e.g., 1).

4. Match the Order (by userB)
    Action: userB accepts userA's sell order.
    Method: POST
    URL: http://localhost:3000/api/orders/1/match (Replace 1 with the order_id from Step 3).
    Body: (Use userB's user_id from Step 2)
    JSON

    {
        "taker_user_id": 3
    }
    Result: returns updatedOrder (with "status": "completed") and the newTransaction record.

5. Verify the Final State
    Action: Check the status of all orders in the system.
    Method: GET
    URL: http://localhost:3000/api/orders/all
    Result: The API returns a list of all orders. You can see that the order from Step 3 now has a status of "completed" and the taker_user_id is set to userB's ID.