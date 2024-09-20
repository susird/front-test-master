# Image Gallery Application

## Overview

This project is a technical assessment for a frontend developer position. It is built using React, TypeScript, and Tailwind CSS. The application displays a gallery of images with infinite scroll functionality, allowing users to seamlessly load more images as they scroll down. The images are served from a mock server, simulating a real API.

## Features

- Infinite Scroll: Automatically loads more images as the user scrolls.
- Image Gallery: Displays images with details like title, author, price, and a like feature.
- Search Functionality: Allows users to search for images.
- Responsive Design: Optimized for both desktop and mobile screens.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A CSS framework for creating modern and responsive designs.
- **Axios**: A promise-based HTTP client for making requests.
- **Jest**: A testing framework to ensure code quality.

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
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── assets
├── tests
│   ├── components
│   │   ├── Header.test.tsx
│   │   ├── ImageCard.test.tsx
│   │   ├── ImageList.test.tsx
│   │   ├── Logo.test.tsx
│   │   ├── PriceTag.test.tsx
│   │   └── SearchBar.test.tsx
│   └── services
│       └── getImages.test.ts
└── package.json
```

# Installation

## Prerequisites

- Node.js
- npm or yarn (or pnpm)

git clone <repository-url>
cd project-name
pnpm install

# Running App

pnpm run dev

# Testing

pnpm test

# Conclusions

This project demonstrates my skills in building responsive web applications using modern technologies. The implementation of infinite scroll and the use of a mock server for images enhances the user experience.
