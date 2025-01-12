# Hono-Prisma-PG-TS Boilerplate

This is a boilerplate project for building scalable and maintainable web applications using Hono, Prisma, PostgreSQL, and TypeScript. This setup is designed with best practices for clean architecture, structured folder hierarchy, and developer productivity tools.

---

## Features

- **Hono**: Fast, lightweight web framework.
- **Prisma**: Modern database toolkit with ORM and migrations.
- **PostgreSQL**: Reliable and robust relational database.
- **TypeScript**: Strongly typed JavaScript for enhanced maintainability.
- **Husky + Commitlint**: Ensures code quality and commit message standards.
- **Environment Configuration**: Supports multiple environments with `.env` files.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v22+ recommended)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Manafs-Lab/hono-prisma-pg-ts-boilerplate.git
   cd hono-prisma-pg-ts-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Copy `.env.dev` to `.env`:
     ```bash
     cp .env.dev .env
     ```
   - Update `.env` with your database connection string and other configurations.

4. Apply Prisma migrations:

   ```bash
   npm run migrate:dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Folder Structure

```plaintext
.
├── .husky                 # Husky configuration for Git hooks
├── prisma                 # Prisma schema and migrations
├── src
│   ├── api
│   │   └── feature        # Example feature module
│   │       ├── feature-controller.ts   # Handles requests and responses
│   │       ├── feature-route.ts        # Routes for the feature
│   │       ├── feature-schema.ts       # Validation schemas (e.g., Zod)
│   │       └── feature-service.ts      # Business logic
│   ├── config
│   │   └── constants.ts   # Application-wide constants
│   ├── helpers
│   │   └── error-handler.ts   # Global error handling helper
│   ├── lib
│   │   └── prisma.ts      # Prisma client instance
│   └── utils
│       └── your-utility-file.ts   # Reusable utilities
├── .env                   # Environment variables
├── commitlint-config.js   # Commitlint configuration
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

### Architecture

This project follows a modular architecture where each feature has its own folder. Each folder contains:

- **Controller**: Manages incoming requests and responses.
- **Route**: Defines the API routes.
- **Schema**: Handles request validation.
- **Service**: Contains business logic.

This separation ensures a clean and maintainable codebase.

---

## How to Add a New Feature

1. **Create a New Folder**:
   Inside `src/api`, create a new folder for your feature (e.g., `new-feature`).

2. **Add Required Files**:

   - `new-feature-controller.ts`: Handle request and response logic.
   - `new-feature-route.ts`: Define feature-specific routes.
   - `new-feature-schema.ts`: Define validation schemas.
   - `new-feature-service.ts`: Implement business logic.

3. **Register Routes**:
   In the main application file (`index.ts`), register the feature's routes:

   ```typescript
   app.route("/api/v1/new-feature", newFeatureRoute);
   ```

4. **Update Prisma Schema** (if needed):

   - Modify `prisma/schema.prisma`.
   - Run migrations:
     ```bash
     npm run migrate:dev
     ```

5. **Test Your Feature**:
   Use tools like Postman or cURL to test the new endpoints.

---

## Husky and Commitlint

This project uses **Husky** and **Commitlint** to ensure consistent commit messages and code quality:

- Husky ensures the testing of commit message
- Commitlint enforces the [Conventional Commit](https://www.conventionalcommits.org/) format.

### Example Commit Message

```
feat: add a new feature module
```

### Bypass Husky (if necessary, not recommended):

```bash
git commit --no-verify
```

---

## Scripts

Here are some useful scripts:

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm start`**: Start the production server.
- **`npm run migrate:dev`**: Run dev migration.
- **`npm run migrate:prod`**: Run prod migration.

---

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Use a hosting provider like Vercel, AWS, or DigitalOcean to deploy.
3. Configure your production database and environment variables.

---

## Contributing

Feel free to contribute to this project. Fork the repository, create a branch, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Contact

For questions or support, feel free to reach out or open an issue in the repository.

---

Thank you for using the Hono-Prisma-PG-TS Boilerplate! 🔥
