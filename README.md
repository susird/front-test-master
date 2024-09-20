# Image Gallery Application

## Overview

This project is a technical assessment. It is built using React, TypeScript, and Tailwind CSS. The application displays a gallery of images with infinite scroll functionality, allowing users to seamlessly load more images as they scroll down. The images are served from a mock server, simulating a real API.

## Features

- Infinite Scroll: Automatically loads more images as the user scrolls.
- Image Gallery: Displays images with details like title, author, price, and a like feature.
- Search Functionality: Allows users to search for images.
- Responsive Design: Optimized for both desktop and mobile screens.

## Technologies Used

- **React**: JavaScript library for building user interfaces. It’s super popular and makes building interactive UIs easier. The component-based architecture allows me to create reusable components, which I find very efficient.
- **TypeScript**: A superset of JavaScript that adds static types. Using TypeScript adds type safety to JavaScript. This helps catch errors early in the development process and makes the code easier to read and maintain.
- **Tailwind CSS**: A CSS framework for creating modern and responsive designs. It allows me to style components quickly without having to leave my HTML. Allows the project to keep styles organized and consistent.
- **Axios**: A promise-based HTTP client for making requests. It’s a reliable HTTP client for making API requests. It has a simple API and makes handling responses and errors straightforward.
- **Jest**: A testing framework to ensure code quality. It’s a powerful framework that integrates well with React. It helps ensure that my code works as expected and gives me confidence in my changes.

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

# Installation

## Prerequisites

- Node.js
- npm or yarn (or pnpm)

git clone https://github.com/susird/front-test-master.git

pnpm install or npm install or yarn install

# Running App

pnpm run dev or npm run dev or yarn run dev

# Testing

pnpm test

# Conclusions

This project demonstrates my skills in building responsive web applications using modern technologies. The implementation of infinite scroll and the use of a mock server for images enhances the user experience.
