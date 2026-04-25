# Shashwat Holidays - Refactored Architecture

This project has been refactored into a professional, scalable, and maintainable structure following modern React best practices and Clean Code principles.

## 🏗 Project Structure

- **`src/assets/`**: Static images and branding assets.
- **`src/components/`**: Reusable UI components.
  - **`ui/`**: Atomic components (Buttons, Badge, etc.).
  - **`shared/`**: Common complex components (Modals, DatePickers, SafeImage).
  - **`layout/`**: Page structure components (Navbar, Footer).
- **`src/config/`**: Central configuration (Contact details, social links, global constants).
- **`src/data/`**: Application-wide static data (Tours, Cars, Destinations).
- **`src/features/`**: Feature-specific logic and UI.
  - **`tours/`**: Everything related to tour management and display.
  - **`cars/`**: Car rental logic and components.
  - **`enquiry/`**: Lead generation and contact form logic.
- **`src/hooks/`**: Custom React hooks for shared logic.
- **`src/layouts/`**: Layout wrappers for different page types.
- **`src/pages/`**: Single-page application routes.
- **`src/services/`**: External service integrations.
- **`src/types/`**: Shared TypeScript definitions.
- **`src/utils/`**: Helper functions (Formatting, search logic, math).

## 🚀 How to Run Locally

This app uses a **Full-Stack (Express + Vite)** architecture to provide enhanced security and dynamic routing.

1.  **Clone/Download** the repository to your local machine.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run in Development**:
    ```bash
    npm run dev
    ```
    The server will start on [http://localhost:3000](http://localhost:3000).

4.  **Production Mode**:
    To run the app in production, you must build the frontend first:
    ```bash
    npm run build
    npm start
    ```

### 💡 Troubleshooting Local Startup
- **Port Conflict**: If port `3000` is already in use, you can change the `PORT` constant in `server.ts`.
- **Node Version**: Ensure you are using Node.js 18 or higher.
- **Environment Variables**: If your features require API keys (like the Gemini API), create a `.env` file based on `.env.example` and add your keys there.

## 🛠 Where to Edit Content

- **Tours/Destinations**: Edit files in `src/data/tours.ts` and `src/data/indiaToursData.ts`.
- **Car Fleet**: Edit `src/data/cars.ts`.
- **Contact Info**: Update `src/config/contact.ts`.

## ✨ Major Improvements

1. **Separation of Concerns**: Moved domain logic out of generic components into dedicated `features/`.
2. **Clean Configuration**: Centralized magic strings and contact info into a `config/` directory.
3. **Refined UI Library**: Created a dedicated `ui/` directory for pure, atomic components.
4. **DRY Principle**: Shared formatting and search logic now reside in `utils/`.
5. **Enhanced Readability**: Standardized naming conventions (PascalCase for components, camelCase for functions).
6. **Scalability**: New feature-based structure allows adding modules (like "Hotels" or "User Profiles") without cluttering existing code.
