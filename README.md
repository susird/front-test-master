# Image Gallery Application

## Technical Choices

- React: I chose React for its efficient and declarative approach to building user interfaces. Its component-based architecture allows for reusable code, making it easy to manage and scale the application. With React, I can create interactive UIs that respond seamlessly to user inputs, enhancing the overall user experience.

- TypeScript: I decided to use TypeScript to introduce static typing to the project. This helps catch errors during development rather than at runtime, improving code quality. TypeScript also enhances code readability and maintainability, making it easier for other developers (or future me!) to understand the structure and flow of the application.

- Tailwind CSS: For styling, I opted for Tailwind CSS due to its utility-first approach, which allows for rapid design without leaving the HTML. This framework promotes a clean separation of concerns, enabling me to apply styles directly within my components while keeping my styles organized and easy to adjust. The responsive design utilities in Tailwind made it straightforward to create a mobile-friendly layout.

- Axios: I selected Axios for handling HTTP requests because of its user-friendly API and built-in support for promises. Axios simplifies the process of making requests and handling responses, allowing for clearer and more concise code. Its features, like interceptors and automatic JSON data transformation, make it a versatile choice for API interactions.

- Jest: I chose Jest as the testing framework because it integrates seamlessly with React and provides a rich set of features, including snapshot testing, mocking capabilities, and a simple API for writing tests. Jest helps ensure the reliability of the codebase and allows for easy identification of bugs, which is crucial during the development process.

- React Testing Library: To complement Jest, I utilized React Testing Library for testing React components. This library encourages testing from the user’s perspective, promoting best practices in testing by focusing on how components behave in the application rather than their implementation details. It helps ensure that the components work as intended in real-world scenarios.

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
