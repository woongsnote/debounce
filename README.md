# Make a Debounced Input Component

> A project that demonstrates the usage of the Debounced Search Input component.

## Introduction

This project showcases the **implementation** and **usage** of the Debounced Search Input component, which is a React component that provides a debounced search functionality with **a customizable delay**. The component allows users to input search queries and performs a search request only after a specified delay period, reducing unnecessary requests and improving user experience.

## Features

- Debounced search input with a customizable delay.
- Display of a spinner to indicate search in progress.
- Presentation of search results as text.

## Installation

1. Clone the repository.
2. Install the project dependencies using your preferred package manager:

   ```shell
   npm install
   # or
   yarn install
   ```

## Usage

1. Start the development server:

   ```shell
   npm start
   # or
   yarn start
   ```

2. Open your browser and visit <http://localhost:3000> to see the application in action.

## Configuration

The Debounced Search Input component utilizes the following configurations:

- `useDebouncedInput hook`: Manages the input value, debounced value, and change handler for the search functionality.
- `DELAY_IN_MS constant`: Sets the delay time in milliseconds for the search requests.

## Notes

The debounced search functionality is simulated using setTimeout. In a real-world scenario, the search requests would typically be performed against a server or API.
The spinner display and search result presentation are provided as example code and can be customized to fit the project's design and requirements.

## Structure

📦src
┣ 📂components
┃ ┣ 📜Container.tsx
┃ ┣ 📜DebouncedResult.tsx
┃ ┗ 📜DebouncedSearchInput.tsx
┣ 📂constants
┃ ┗ 📜index.ts
┣ 📂hooks
┃ ┣ 📜useDebounce.ts
┃ ┗ 📜useDebouncedInput.ts
┣ 📜App.css
┣ 📜App.test.tsx
┣ 📜App.tsx
┣ 📜index.tsx
┣ 📜react-app-env.d.ts
┗ 📜setupTests.ts

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License.
