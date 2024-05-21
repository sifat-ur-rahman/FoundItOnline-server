# Lost and Found System Server

This server involves creating a Lost and Found system using TypeScript and Express.js, with Prisma ORM for database interaction, specifically with a PostgreSQL database. Authentication is handled through JSON Web Tokens (JWT). The system is designed around five main models: User, FoundItemCategory, FoundItem, Claim, and UserProfile, each with specific fields such as ids, names, timestamps, and relationships to other models.

## Server Live Link

### https://lostfoundserver.vercel.app/

## Run the server application locally

- Clone this repository: `git clone <repository_url>`
- Install dependencies: `npm install`
- Set up the environment variables by creating a `.env` file.
- Run the database migrations: `npx prisma migrate dev`
- Start the server: `npm start`

## Server API Documentation

1. User Registration

- Endpoint: POST `/api/register`

2. User Login

- Endpoint: POST `/api/login`

3. Create Found Item Category

- Endpoint: POST `/api/found-item-categories`

4. Report a Found Item

- Endpoint: POST `/api/found-items`

5. Get Paginated and Filtered Found Items

- Endpoint: GET `/api/found-items`

6. Create a Claim

- Endpoint: POST `/api/claims`

7. Get Claims

- Endpoint: GET `/api/claims`

8. Update Claim Status

- Endpoint: PUT `/api/claims/:claimId`

9. Get My Profile

- Endpoint: GET `/api/my-profile`

10. Update My Profile

- Endpoint: PUT `/api/my-profile`
