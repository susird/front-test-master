# Image Gallery Application

## Technical Choices

- React: I chose React because it is great for building dynamic user interfaces. Its component-based structure makes it easy to organize code and reuse components, which is very helpful as the project expands.

- TypeScript: Using TypeScript adds type safety to JavaScript, helping to catch errors early in the development stage. This choice helps to have code quality and makes it easier to understand how different parts of the application interact.

- Tailwind CSS: I opted for Tailwind CSS due to its utility-first approach, which allows for quick styling of components. It helps create modern and responsive designs without needing to write extensive custom CSS.

- Axios: I used Axios for handling HTTP requests because it simplifies the process of fetching data from APIs. Its promise-based structure works well with async/await, keeping the code clean and readable.

- Jest: I chose Jest for testing as it provides a straightforward way to ensure the components function correctly. The ability to write snapshot tests is particularly useful for maintaining UI consistency.

These technologies were selected to create an efficient development experience while ensuring the application remains robust and user-friendly.

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
