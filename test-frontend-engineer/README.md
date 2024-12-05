# Frontend Task ( Shopping Cart )
 [🎥Livesite](https://frontend-engineer-two.vercel.app/)
 [🖥️Repository](https://github.com/dev-hafiz/test-frontend-engineer/tree/main/test-frontend-engineer)

This Next.js application, built with TypeScript and styled with Tailwind CSS, fully adheres to the project's specifications. It provides a responsive shopping cart experience, enabling users to:

- Browse a comprehensive product list with pagination
- View detailed product information
- Add items to their cart
- Review and manage their cart contents
- Calculate order totals, including subtotals, estimated shipping, taxes, and grand totals



## Features

### Functional
- **Product Listing Page**:
  - Displays a list of products with images, names, price, daynamic rating of the product.
  - Implements efficient pagination using lightweight UI components.
- **Product Detail Page**:
  - Provides detailed product information.
  - Includes an "Add to Cart" button for seamless shopping.
- **Shopping Cart**:
  - Displays products added to the cart, with quantities and prices.
  - Allows users to update quantities or remove items.
  - Shows the total price dynamically.
- **Responsive Design**:
  - Calculates and displays dynamic order totals, including subtotals, estimated shipping, taxes, and grand totals, using efficient algorithms.


### Technical
- **Frameworks & Libraries**:
  - Built with Next.js, styled using Tailwind CSS and Sonner for Cart notification.
- **State Management**:
  - Efficiently manages the application state with pure Context API to ensure performance and reliability.
- **TypeScript**:
  - Implements type-checking for better code quality and maintainability.
- **API Integration**:
  - Fetches product data with row building method using typedcript.
  - Handles loading states and errors gracefully.
- **Code Quality**:
  - Follows SOLID principles.
  - Includes reusable and universal UI components.


## Thought Process & Architectural Decisions

The application uses a client-side rendering approach with Next.js for its speed and SEO benefits. TypeScript ensures strong typing and prevents runtime errors. Tailwind CSS provides utility classes for rapid UI development.

### Project Structure:

- Modularized components for reusability and scalability.
- Organized folders for better readability: app, components, context, types and utils.

### State Management:

- Used React useState, useEffect hook and context API for maintaing the application state in an efficient way with handling both success and error states effectively.
- Typed the API responses using TypeScript for safety and maintainability.


### Styling:

Tailwind CSS for rapid and responsive UI development.
Leveraged utility classes to avoid custom CSS overhead.

### Responsive Design:

Followed a mobile-first approach.

## Project Setup

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm 


### Getting Started

Follow these steps to set up and run the client-side of the project locally:

1. **Clone the Repository**
   First, clone the repository from GitHub to your local machine:

   ```bash
   git clone https://github.com/dev-hafiz/test-frontend-engineer/tree/main/test-frontend-engineer
   cd test-frontend-engineer
   ```
2. **Install Client Dependencies**
Navigate to the client directory and install the required dependencies:

```bash 
npm install

```

This command installs all the necessary packages for the frontend, including Next.js, Tailwind CSS, Sonner and other libraries.

3. **Run the Development Server**
After the dependencies have been installed, you can start the development server:

```bash
npm run dev
```
This will start the Vite development server, and you should see output indicating that the server is running.

4. **Access the Application**
Open your browser and go to (http://localhost:3000/)   https://frontend-engineer-two.vercel.app/ You should see the Shopping Cart application running.


## Technologies 🚩

| Frontend | Documentation Guide |
| ------ | ------ |
| Next.js | https://nextjs.org/|
| Typescript | https://www.typescriptlang.org/|
| Tailwind | https://tailwindcss.com/ |
| Sonner | https://sonner.emilkowal.ski/ |
