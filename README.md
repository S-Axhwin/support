# Support through Web

## Tech Stack


- NextJS
- Turborepo
- Prisma ORM
- Postgresql
- Vercel for Deployment CI/CD


## Contributors and Roles
| Name | Role |
| ----- | ----- |
| Adarsh | UX/UI and Backend Developer |
| Ashwin | UX/UI and Backend Developer |
| Alfeen | Frontend Developer |
| Shailija | Frontend Developer |
| Varsha | Design Colours and Formats |


## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x) and npm/yarn installed.
- Git installed.
- A code editor, preferably VSCode.
## Getting Started
To set up this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/S-Axhwin/support.git
cd support
```
### 2. Install Dependencies
Navigate to the root of the project and install dependencies:

```bash
# Install root dependencies
pnpm install
```
### 3. Set Up Environment Variables
Copy `.env.local.example` to `.env.local` in the root directory and fill in the required environment variables.

```bash
cp .env.local.example .env.local
```
Update the `.env.local` file with your specific configuration settings.

```
KINDE_CLIENT_ID=<your_kinde_client_id>
KINDE_CLIENT_SECRET=<your_kinde_client_secret>
KINDE_ISSUER_URL=https://<your_kinde_subdomain>.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
```
### 4. Run the Project
To run the project locally:

1. Navigate back to the root directory:cd ../.. # Go back to the root if inside packages
2. Start the development
```shell
pnpm run dev
```
### 5. Folder Structure
Here's an overview of the key folders in the project:

- `apps`  - Contains the main applications (`docs` , `user` ).
- `packages`  - Contains shared packages such as `ui`  components, `database`  configuration, and TypeScript/ESLint configs.
- `apps/user/app/api`  - API routes, organized by feature (`auth` , `profile` ).
- `apps/user/app/profile`  - Frontend components for the profile page.
- `.env.local`  - Environment configuration.
### 6. Scripts
Here are some useful scripts defined in `package.json`:

- **Start development server**: `npm run dev`  or `yarn dev`
- **Build the project**: `npm run build`  or `yarn build`
- **Lint the code**: `npm run lint`  or `yarn lint`
- **Test the project**: `npm run test`  or `yarn test`
### 7. Additional Notes
- Ensure your environment variables are correctly set up.
- Refer to individual package README files for additional setup and usage instructions if available.


## About the Website
[![Figure 1](https://app.eraser.io/workspace/qUtpRrDegZ9KiYVfhbk5/preview?elements=G8GgCKr-Mhx_Knt5R4qG5g&type=embed)](https://app.eraser.io/workspace/qUtpRrDegZ9KiYVfhbk5?elements=G8GgCKr-Mhx_Knt5R4qG5g)
# Project Overview
This project involves two main roles: Consultant and End-User. Each role has specific access to different pages and functionalities.

### Consultant
- **Role:**
    1. View the users.
    2. Understand the problems reported by users.
- **Accessible Pages:**
    - `/`  (Home)
    - `/users`  (List of Users)
    - `/users/:id`  (User Details by ID)
    - `/login`  (Login Page)
    - `/reg`  (Registration Page)
### End-User
- **Role:**
    1. Access the home page.
    2. Search for consultants.
- **Accessible Pages:**
    - `/`  (Home)
    - `/help`  (Help Page)
    - `/login`  (Login Page)
    - `/reg`  (Registration Page)
## Pages Overview
- `/` : Main landing page accessible by all users.
- `/users` : A page listing all users, accessible only by consultants.
- `/users/:id` : A detailed view of individual users, accessible only by consultants.
- `/help` : A help page for end-users to seek assistance.
- `/login` : Login page for both consultants and end-users.
- `/reg` : Registration page for new consultants and end-users.
## How to Use
- Consultants can log in to view and manage user issues.
- End-users can log in to access the home page and search for consultants based on their needs.

## Contributing
To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch` ).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'` ).
5. Push to the branch (`git push origin feature-branch` ).
6. Open a pull request.
