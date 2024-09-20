# Image Gallery Application

## Technical Choices

- I decided to use React for its component-based architecture, which makes it easy to build and maintain user interfaces.
- TypeScript was a natural choice to add type safety, helping to catch errors early and improve code readability.
- I opted for Tailwind CSS for styling because its utility-first approach allows for rapid development and keeps styles organized.
- Axios is used for making HTTP requests due to its simplicity and promise-based structure, making it easy to handle responses and errors.
- Jest is chosen for testing, providing a robust framework to ensure code quality and functionality.

## Features

- Infinite Scroll: Automatically loads more images as the user scrolls.
- Image Gallery: Displays images with details like title, author, price, and a like feature.
- Search Functionality: Allows users to search for images.
- Responsive Design: Optimized for both desktop and mobile screens.

## Project Structure

```plaintext
├── src
│   ├── components
│   │   ├── Header
│   │   ├── ImageCard
│   │   ├── ImageList
│   │   ├── Logo
│   │   ├── PriceTag
│   │   └── SearchBar
│   ├── services
│   │   └── apiClient.ts
│   ├── tests
│   │   ├── components
│   │   │   ├── Header.test.tsx
│   │   │   ├── ImageCard.test.tsx
│   │   │   ├── ImageList.test.tsx
│   │   │   ├── Logo.test.tsx
│   │   │   ├── PriceTag.test.tsx
│   │   │   └── SearchBar.test.tsx
│   │   └── services
│   │       └── getImages.test.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── assets
└── package.json
```

## Setup

To run the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies using npm install.
3. Start the development server with npm start.

## Pages

### Image Gallery

The main page displays a gallery of images fetched from the mock server. Users can scroll through the images, and as they reach the end of the list, more images are loaded automatically.

### Search Functionality

A search bar is included to allow users to filter images based on their queries, enhancing the overall experience.

### Responsive Design

The application is fully responsive, ensuring usability across various devices.

## Going Further

- In a real application, I would implement proper authentication and security measures.
- Additional features like user accounts and image uploads could be added for a more comprehensive solution.
- For larger projects, a state management library could be considered for handling complex state logic.
